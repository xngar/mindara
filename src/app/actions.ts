'use server';

import { Resend } from 'resend';

export type ActionState = {
  success: boolean;
  message?: string;
  error?: string;
};

export async function sendContactEmail(prevState: ActionState | null, formData: FormData): Promise<ActionState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;
  const turnstileToken = formData.get('turnstileToken') as string;

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
  if (!turnstileToken || !turnstileToken.trim()) {
    return { success: false, error: 'Completa la verificación de seguridad.' };
  }

  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    console.error('TURNSTILE_SECRET_KEY no está definida en las variables de entorno.');
    return {
      success: false,
      error: 'La verificación de seguridad no está configurada correctamente.',
    };
  }

  try {
    const verificationResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: turnstileToken,
      }).toString(),
    });

    const verification = await verificationResponse.json() as { success?: boolean };
    if (!verificationResponse.ok || !verification.success) {
      console.error('Falló la verificación de Turnstile:', verification);
      return {
        success: false,
        error: 'La verificación de seguridad falló. Inténtalo de nuevo.',
      };
    }
  } catch (error) {
    console.error('Error al verificar Turnstile:', error);
    return {
      success: false,
      error: 'No se pudo completar la verificación de seguridad. Inténtalo de nuevo.',
    };
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
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e9ed; border-radius: 12px; background-color: #f7fafc; color: #2c3437;">
          <h2 style="color: #6b46c1; border-bottom: 2px solid #6b46c1; padding-bottom: 10px; margin-top: 0;">Nuevo mensaje de contacto</h2>
          <p style="margin: 15px 0;"><strong>De:</strong> ${name} (<a href="mailto:${email}" style="color: #6b46c1; text-decoration: none;">${email}</a>)</p>
          <p style="margin: 15px 0;"><strong>Asunto:</strong> ${subject}</p>
          <div style="background-color: #ffffff; padding: 15px; border-radius: 8px; border: 1px solid #dce4e8; margin-top: 20px;">
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          <footer style="margin-top: 30px; font-size: 12px; color: #586064; text-align: center; border-top: 1px solid #dce4e8; padding-top: 15px;">
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
  } catch (err: any) {
    console.error('Excepción al enviar con Resend:', err);
    return {
      success: false,
      error: 'Ocurrió un error inesperado al procesar tu solicitud. Por favor, inténtalo de nuevo.',
    };
  }
}
