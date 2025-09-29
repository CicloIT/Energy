// About Component
const About = () => {
  const features = [
    { icon: "⚡", title: "Innovación", desc: "Desarrollamos tecnologías de vanguardia para maximizar la eficiencia energética", color: "from-yellow-500 to-orange-500" },
    { icon: "🌍", title: "Sustentabilidad", desc: "Cada proyecto contribuye a la reducción de la huella de carbono global", color: "from-blue-500 to-cyan-500" },
    { icon: "🤝", title: "Compromiso", desc: "Acompañamos a nuestros clientes en cada etapa de su transición energética", color: "from-purple-500 to-pink-500" }
  ]

 const stats = [
    { value: "30%", label: "Más Eficiente" },
    { value: "∞", label: "Energía Sustentable" },
    { value: "50%", label: "Ahorro en Costos" },
    { value: "100%", label: "Energía Limpia" }
]

  return (
    <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-100 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            Liderando la Transición Energética
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Somos pioneros en el desarrollo de tecnologías de energía renovable, comprometidos con crear un mundo más
            sostenible y eficiente energéticamente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="group text-center p-8 rounded-2xl hover:bg-gray-50 transition-all duration-500 transform hover:scale-105">
              <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-3`}>
                <span className="text-4xl text-white">{feature.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12 md:p-16 shadow-xl border border-green-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About