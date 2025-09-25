const RenewableLaw = () => {
  const requirements = [
    { 
      icon: "📊", 
      title: "Grandes Usuarios", 
      desc: "Empresas con demanda mayor a 300 kW deben cumplir con el 20% de energía renovable",
      detail: "Ley 27.191 - Régimen de Fomento Nacional para el uso de Fuentes Renovables de Energía" 
    },
    { 
      icon: "⚖️", 
      title: "Cumplimiento Legal", 
      desc: "El incumplimiento puede resultar en multas y sanciones por parte de la autoridad de aplicación",
      detail: "Resolución SEE 281/2017 establece los procedimientos de verificación" 
    },
    { 
      icon: "💡", 
      title: "Alternativas de Cumplimiento", 
      desc: "Autogeneración, contratos de abastecimiento o compra de certificados verdes",
      detail: "Múltiples opciones para adaptarse a las necesidades de cada empresa" 
    }
  ]

  const benefits = [
    "Cumplimiento normativo garantizado",
    "Reducción significativa de costos energéticos",
    "Mejora de la imagen corporativa y sustentabilidad",
    "Independencia energética a largo plazo",
    "Certificaciones verdes para reporting ESG"
  ]

  return (
    <section id="ley-renovable" className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-medium mb-6">
            ⚖️ Ley 27.191 - Energías Renovables
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            ¿Tu Empresa Debe Cumplir con el 20%?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            La legislación argentina exige que los grandes usuarios de energía incorporen un 20% de fuentes renovables. 
            Te ayudamos a cumplir con la normativa de manera eficiente y rentable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {requirements.map((req, index) => (
            <div key={index} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              
              <div className="text-6xl mb-6 text-center group-hover:animate-bounce">{req.icon}</div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors">
                {req.title}
              </h3>
              
              <p className="text-gray-600 mb-6 text-center leading-relaxed">{req.desc}</p>
              
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-500 italic text-center">{req.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Soluciones Integrales para el Cumplimiento
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Ofrecemos un servicio completo que incluye análisis de viabilidad, diseño de sistemas, 
                implementación y gestión de certificados verdes para garantizar el cumplimiento legal.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-4 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group">
                  Consulta Gratuita sobre Cumplimiento
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">📋</span>
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 text-center">
                <div className="text-8xl mb-6">⚡</div>
                <div className="text-4xl font-bold text-gray-900 mb-4">20%</div>
                <div className="text-xl text-gray-600 mb-6">Energía Renovable Obligatoria</div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4">¿Tu empresa califica?</h4>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-sm text-gray-600">Demanda mayor a 300 kW</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-sm text-gray-600">Gran Usuario MEM</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-sm text-gray-600">Usuario del Sistema</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RenewableLaw