const Solutions = () => {
  const solutions = [
    {
      title: "Energía Solar",
      description: "Sistemas fotovoltaicos de alta eficiencia para hogares, empresas e industrias",
      icon: "☀️",
      features: ["Paneles de última generación", "Sistemas de almacenamiento", "Monitoreo inteligente"],
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Movilidad Eléctrica",
      description: "Infraestructura completa de carga para vehículos eléctricos",
      icon: "🔌",
      features: ["Estaciones de carga rápida", "Gestión inteligente", "Integración con renovables"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Industria Sostenible",
      description: "Soluciones energéticas para la transformación industrial verde",
      icon: "🏭",
      features: ["Eficiencia energética", "Cogeneración", "Sistemas híbridos"],
      gradient: "from-purple-500 to-pink-500"
    },
  ]

  return (
    <section id="soluciones" className="py-24 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            Nuestras Soluciones
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ofrecemos un portafolio completo de tecnologías renovables adaptadas a las necesidades específicas de cada
            cliente y sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {solutions.map((solution, index) => (
            <div key={index} className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${solution.gradient}`}></div>
              
              <div className="text-7xl mb-8 text-center group-hover:animate-bounce">{solution.icon}</div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center group-hover:text-green-600 transition-colors">
                {solution.title}
              </h3>
              
              <p className="text-gray-600 mb-8 text-center leading-relaxed">{solution.description}</p>
              
              <ul className="space-y-4 mb-8">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: `${idx * 100}ms`}}>
                    <span className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mr-4 flex-shrink-0"></span>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full bg-gradient-to-r ${solution.gradient} text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                Más Información
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Solutions