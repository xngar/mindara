export default function Services() {
  return (
    <section id="servicios" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-6xl md:text-6xl font-headline font-extrabold text-on-surface">Nuestros Servicios</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">Soluciones integrales diseñadas para elevar tu marca en el ecosistema digital.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-primary/10">
            <div className="w-16 h-16 mb-8 rounded-2xl bg-secondary-container flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-4xl">campaign</span>
            </div>
            <h3 className="text-2xl font-headline font-extrabold mb-4 group-hover:text-primary transition-colors">Gestión de Redes Sociales</h3>
            <p className="text-on-surface-variant leading-relaxed">Transformamos tu presencia digital. Creamos, gestionamos y potenciamos tu contenido para conectar con tu audiencia, aumentar tu comunidad y convertir seguidores en clientes fieles.</p>
          </div>
          {/* Service Card 2 */}
          <div className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-primary/10">
            <div className="w-16 h-16 mb-8 rounded-2xl bg-orange-100 flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined text-4xl">movie</span>
            </div>
            <h3 className="text-2xl font-headline font-extrabold mb-4 group-hover:text-tertiary transition-colors">Diseño y Producción Multimedia</h3>
            <p className="text-on-surface-variant leading-relaxed">Damos vida a tus ideas con diseño gráfico, desarrollo web, producción audiovisual e impresión de alta calidad.</p>
          </div>
          {/* Service Card 3 */}
          <div className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-primary/10">
            <div className="w-16 h-16 mb-8 rounded-2xl bg-purple-100 flex items-center justify-center text-primary-dim">
              <span className="material-symbols-outlined text-4xl">draw</span>
            </div>
            <h3 className="text-2xl font-headline font-extrabold mb-4 group-hover:text-primary-dim transition-colors">Señalética Estratégica</h3>
            <p className="text-on-surface-variant leading-relaxed">Diseñamos sistemas de comunicación visual que guían, informan y organizan espacios físicos, mejorando la experiencia del usuario.</p>
          </div>
          {/* Service Card 4 */}
          <div className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-primary/10">
            <div className="w-16 h-16 mb-8 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">
              <span className="material-symbols-outlined text-4xl">lightbulb</span>
            </div>
            <h3 className="text-2xl font-headline font-extrabold mb-4 group-hover:text-blue-600 transition-colors">Diseño y Desarrollo Digital</h3>
            <p className="text-on-surface-variant leading-relaxed">Transformamos ideas en productos digitales de alto impacto. Fusionamos diseño UX/UI estratégico con desarrollo robusto para crear plataformas intuitivas, ultra rápidas y listas para convertir.</p>
          </div>
          {/* Service Card 5 */}
          <div className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-primary/10">
            <div className="w-16 h-16 mb-8 rounded-2xl bg-green-100 flex items-center justify-center text-green-600">
              <span className="material-symbols-outlined text-4xl">code</span>
            </div>
            <h3 className="text-2xl font-headline font-extrabold mb-4 group-hover:text-green-600 transition-colors">E-Learning y Entornos Virtuales</h3>
            <p className="text-on-surface-variant leading-relaxed">Desarrollamos plataformas educativas a medida con interfaces intuitivas, diseñadas para una experiencia de aprendizaje inmersiva y efectiva.</p>
          </div>
          {/* Service Card 6 */}
          <div className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-primary/10">
            <div className="w-16 h-16 mb-8 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600">
              <span className="material-symbols-outlined text-4xl">shopping_cart</span>
            </div>
            <h3 className="text-2xl font-headline font-extrabold mb-4 group-hover:text-pink-600 transition-colors">eCommerce</h3>
            <p className="text-on-surface-variant leading-relaxed">Tiendas online optimizadas para vender más y ofrecer un proceso de compra impecable.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
