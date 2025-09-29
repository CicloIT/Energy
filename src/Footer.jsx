// Footer Component
const Footer = () => {
  const footerSections = [
    {
      title: "Soluciones",
      links: ["Energía Solar", "Movilidad Eléctrica", "Industria Sostenible", "Almacenamiento"]
    },
    {
      title: "Empresa",
      links: ["Sobre Nosotros", "Proyectos", "Noticias", "Carreras"]
    },
    {
      title: "Soporte",
      links: ["Centro de Ayuda", "Documentación", "Contacto", "Términos y Condiciones"]
    }
  ]

  const socialIcons = ["📘", "🐦", "💼", "📸"]

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="ml-3 text-2xl font-bold">EcoEnergy</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Liderando la transición hacia un futuro energético sostenible y renovable.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((icon, index) => (
                <a key={index} href="#" className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-br hover:from-green-500 hover:to-emerald-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <span className="text-xl">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-6 text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 AlturaEnergy. Todos los derechos reservados. 
            <span className="text-green-400 font-semibold"> Construyendo un futuro sostenible.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer