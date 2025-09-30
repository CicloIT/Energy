// Sustainability Component
const Sustainability = () => {
  const impacts = [
    { icon: "🌱", title: "Reducción de CO2", desc: "Hemos evitado la emisión de más de 75,000 toneladas de CO2 equivalente", color: "from-green-500 to-emerald-600" },
    { icon: "💧", title: "Conservación del Agua", desc: "Nuestras tecnologías requieren mínimo consumo de agua para su operación", color: "from-blue-500 to-cyan-600" },
    { icon: "👥", title: "Desarrollo Local", desc: "Generamos empleo local y capacitamos comunidades en tecnologías verdes", color: "from-purple-500 to-pink-600" }
  ]

  return (
    <section id="sustentabilidad" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-green-50/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fadeInLeft">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-8">
              Compromiso con el Planeta
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Nuestro compromiso va más allá de generar energía limpia. Trabajamos activamente para crear un impacto
              positivo en el medio ambiente y las comunidades donde operamos.
            </p>

            <div className="space-y-8">
              {impacts.map((impact, index) => (
                <div key={index} className="flex items-start group hover:translate-x-2 transition-transform duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${impact.color} rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-3`}>
                    <span className="text-2xl text-white">{impact.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      {impact.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{impact.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fadeInRight">
            {/* Imagen principal grande */}
            <div className="relative group mb-6">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <img 
                src="primera.webp" 
                alt="Sustentabilidad" 
                className="relative rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 w-full h-80 object-cover"
              />
            </div>
            
            {/* Grid de dos imágenes pequeñas debajo */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <img 
                  src="parquesolar1.webp" 
                  alt="Parque solar 1" 
                  className="relative rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-500 w-full h-48 object-cover"
                />
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-orange-600 rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <img 
                  src="parquesolar2.webp" 
                  alt="Parque solar 2" 
                  className="relative rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-500 w-full h-48 object-cover"
                />
              </div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-green-100 animate-float">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">75K</div>
                <div className="text-gray-600 font-medium">Toneladas CO2</div>
                <div className="text-sm text-gray-500 font-medium">Evitadas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sustainability