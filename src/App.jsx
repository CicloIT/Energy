import { useState } from 'react'
import Contact from './Contact'
import RenewableLaw from './RenewableLaw'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full top-0 z-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center group">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Altura Energy
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {['Inicio', 'Nosotros', 'Soluciones', 'Sustentabilidad', 'Contacto'].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-green-600 transition-all duration-300 font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          <button 
            className="md:hidden p-2 rounded-lg hover:bg-green-50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden animate-fadeIn">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-green-100">
              {['Inicio', 'Nosotros', 'Soluciones', 'Sustentabilidad', 'Contacto'].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

// Hero Component
const Hero = () => {
  return (
    <section id="inicio" className="pt-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 min-h-screen flex items-center relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-green-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              El Futuro es
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent block animate-pulse">
                Renovable
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
              Transformamos la energía del mañana con soluciones sostenibles e innovadoras. Únete a la revolución verde
              y construye un futuro más limpio para las próximas generaciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-5 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Conoce Nuestras Soluciones
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button className="group border-2 border-green-600 text-green-600 px-10 py-5 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 backdrop-blur-sm hover:shadow-lg">
                Solicita Cotización
                <span className="inline-block ml-2 group-hover:rotate-12 transition-transform">📞</span>
              </button>
            </div>
          </div>
          
          <div className="relative animate-fadeInRight">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Paneles solares" 
                className="relative rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105"
              />
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-green-100 animate-float">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-3xl">🌱</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Proyectos</p>
                  <p className="text-gray-600 font-medium">Completados</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-green-100 animate-bounce-slow">
              <div className="text-center">
                <div className="text-2xl mb-1">⚡</div>
                <div className="text-sm text-gray-600 font-medium">100% Limpia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

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

// Solutions Component
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
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <img 
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Sustentabilidad" 
                className="relative rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
              />
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

function App() {
  return (
    <div className="App">
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .bg-grid-gray-100 {
          background-image: 
            linear-gradient(to right, #f3f4f6 1px, transparent 1px),
            linear-gradient(to bottom, #f3f4f6 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        .bg-grid-green-100 {
          background-image: 
            linear-gradient(to right, #dcfce7 1px, transparent 1px),
            linear-gradient(to bottom, #dcfce7 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        /* Efectos de glassmorphism */
        .backdrop-blur-md {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        
        .backdrop-blur-sm {
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }
        
        /* Sombras personalizadas */
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
        
        /* Gradientes personalizados para texto */
        .bg-clip-text {
          -webkit-background-clip: text;
          background-clip: text;
        }
        
        /* Transiciones suaves para hover */
        * {
          transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
      
      <Header />
      <Hero />
      <About />
      <Solutions />
      <Sustainability />
      <Contact />
      <RenewableLaw/>
      <Footer />
    </div>
  )
}
export default App
