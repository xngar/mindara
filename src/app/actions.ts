'use server';

import { Resend } from 'resend';

/**
 * Paleta de marca usada en el correo (HTML plano, sin CSS del sitio).
 * Mantener sincronizada con los tokens :root de src/app/globals.css:
 *   --brand-primary, --brand-surface, --brand-surface-container-highest,
 *   --brand-on-surface, --brand-outline-variant, --brand-surface-container-lowest
 */
const MAIL_BRAND = {
  primary: '#065a82',
  surface: '#f5f8fa',
  surfaceContainerHighest: '#d7e5eb',
  surfaceContainerLowest: '#ffffff',
  onSurface: '#043851',
  outlineVariant: '#76a4ba',
  onSurfaceVariant: '#054868',
} as const;

export type ActionState = {
  success: boolean;
  message?: string;
  error?: string;
};

export async function sendContactEmail(prevState: ActionState | null, formData: FormData): Promise<ActionState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const service = formData.get('service') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  if (!name || !name.trim()) {
    return { success: false, error: 'Por favor, introduce tu nombre.' };
  }
  if (!email || !email.trim()) {
    return { success: false, error: 'Por favor, introduce tu correo electrónico.' };
  }
  if (!subject || !subject.trim()) {
    return { success: false, error: 'Por favor, introduce el asunto de tu consulta.' };
  }
  if (!message || !message.trim()) {
    return { success: false, error: 'Por favor, introduce el mensaje.' };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: 'Por favor, introduce un correo electrónico válido.' };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY no está definida en las variables de entorno.');
    return {
      success: false,
      error: 'El servicio de correo no está configurado correctamente. Por favor, contacta al administrador.',
    };
  }

  const contactFrom = process.env.CONTACT_FROM || 'consultas@mindara.cl';
  const contactTo = Array.from(
    new Set(
      `${process.env.CONTACT_TO || 'mantonio.zr@gmail.com'},gonzaloandr@gmail.com`
        .split(',')
        .map((email) => email.trim())
        .filter(Boolean)
    )
  );

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: contactFrom,
      to: contactTo,
      subject: `MINDARA Contacto: ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid ${MAIL_BRAND.surfaceContainerHighest}; border-radius: 12px; background-color: ${MAIL_BRAND.surface}; color: ${MAIL_BRAND.onSurface};">
          <h2 style="color: ${MAIL_BRAND.primary}; border-bottom: 2px solid ${MAIL_BRAND.primary}; padding-bottom: 10px; margin-top: 0;">Nuevo mensaje de contacto</h2>
          <p style="margin: 15px 0;"><strong>De:</strong> ${name} (<a href="mailto:${email}" style="color: ${MAIL_BRAND.primary}; text-decoration: none;">${email}</a>)</p>
          <p style="margin: 15px 0;"><strong>Servicio de interés:</strong> ${service || 'No especificado'}</p>
          <p style="margin: 15px 0;"><strong>Asunto:</strong> ${subject}</p>
          <div style="background-color: ${MAIL_BRAND.surfaceContainerLowest}; padding: 15px; border-radius: 8px; border: 1px solid ${MAIL_BRAND.outlineVariant}; margin-top: 20px;">
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          <footer style="margin-top: 30px; font-size: 12px; color: ${MAIL_BRAND.onSurfaceVariant}; text-align: center; border-top: 1px solid ${MAIL_BRAND.outlineVariant}; padding-top: 15px;">
            Este correo fue enviado automáticamente desde el formulario de contacto de MINDARA.
          </footer>
        </div>
      `,
    });

    if (error) {
      console.error('Error de Resend:', error);
      return {
        success: false,
        error: `No se pudo enviar el correo: ${error.message}`,
      };
    }

    return {
      success: true,
      message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo lo antes posible.',
    };
  } catch (err: unknown) {
    console.error('Excepción al enviar con Resend:', err);
    return {
      success: false,
      error: 'Ocurrió un error inesperado al procesar tu solicitud. Por favor, inténtalo de nuevo.',
    };
  }
}
