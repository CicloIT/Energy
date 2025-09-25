import { useState } from 'react'

// Contact Component
const Contact = () => {
  const contactInfo = [
    { 
      icon: "📍", 
      title: "Visítanos", 
      info: "Arturo Mbas, Rio Cuarto, Argentina", 
      detail: "Oficinas principales",
      gradient: "from-red-500 via-pink-500 to-rose-500",
      bgGradient: "from-red-50 to-pink-50"
    },
    { 
      icon: "📞", 
      title: "Llámanos", 
      info: "+1 (555) 123-4567", 
      detail: "Lun - Vie: 8:00 AM - 5:00 PM",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    { 
      icon: "✉️", 
      title: "Escríbenos", 
      info: "info@alturaenergy.com", 
      detail: "Respuesta en 24 horas",
      gradient: "from-blue-500 via-cyan-500 to-sky-500",
      bgGradient: "from-blue-50 to-cyan-50"
    }
  ]

  const socialLinks = [
    { 
      icon: "📘", 
      name: "Facebook", 
      handle: "@AlturaEnergyOficial",
      gradient: "from-blue-600 to-blue-700",
      hoverGradient: "from-blue-500 to-blue-600"
    },
    { 
      icon: "🐦", 
      name: "Twitter", 
      handle: "@AlturaEnergyNews",
      gradient: "from-sky-500 to-sky-600",
      hoverGradient: "from-sky-400 to-sky-500"
    },
    { 
      icon: "💼", 
      name: "LinkedIn", 
      handle: "AlturaEnergy",
      gradient: "from-blue-700 to-blue-800",
      hoverGradient: "from-blue-600 to-blue-700"
    },
    { 
      icon: "📸", 
      name: "Instagram", 
      handle: "@alturaenergy_oficial",
      gradient: "from-purple-500 via-pink-500 to-red-500",
      hoverGradient: "from-purple-400 via-pink-400 to-red-400"
    }
  ]

  const quickActions = [
    {
      icon: "💡",
      title: "Cotización Rápida",
      description: "Obtén una estimación personalizada",
      action: "Solicitar Cotización",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: "📋",
      title: "Consulta Técnica",
      description: "Habla con nuestros especialistas",
      action: "Agendar Llamada",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: "🌱",
      title: "Programa Sostenible",
      description: "Únete a nuestra iniciativa verde",
      action: "Conocer Más",
      gradient: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-gray-50 via-green-50 to-emerald-50 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="inline-block p-4 bg-green-100 rounded-2xl mb-6">
            <span className="text-4xl">🚀</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-green-700 to-emerald-700 bg-clip-text text-transparent">
              Conectemos y Creemos
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              el Futuro Sostenible
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Estamos aquí para transformar tus ideas en realidad energética. Cada conversación es el inicio de una revolución verde.
          </p>
        </div>

        {/* Main Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactInfo.map((contact, index) => (
            <div key={index} className={`group relative bg-gradient-to-br ${contact.bgGradient} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/50 backdrop-blur-sm overflow-hidden`}>
              {/* Elemento decorativo */}
              <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${contact.gradient} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              
              <div className={`w-20 h-20 bg-gradient-to-br ${contact.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-6 group-hover:scale-110`}>
                <span className="text-3xl text-white">{contact.icon}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                {contact.title}
              </h3>
              
              <p className="text-lg font-semibold text-gray-700 mb-2">
                {contact.info}
              </p>
              
              <p className="text-sm text-gray-600">
                {contact.detail}
              </p>
              
              {/* Hover effect line */}
              <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${contact.gradient} group-hover:w-full transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            ¿Qué necesitas hoy?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickActions.map((action, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100/50">
                <div className={`w-16 h-16 bg-gradient-to-br ${action.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-12`}>
                  <span className="text-2xl text-white">{action.icon}</span>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {action.title}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {action.description}
                </p>
                
                <button className={`w-full bg-gradient-to-r ${action.gradient} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 group-hover:shadow-xl`}>
                  {action.action}
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Section */}
        <div className="bg-white/70 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-white/50 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Síguenos en Redes Sociales
            </h3>
            <p className="text-lg text-gray-600">
              Mantente al día con las últimas innovaciones en energía renovable
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {socialLinks.map((social, index) => (
              <div key={index} className="group text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${social.gradient} hover:bg-gradient-to-br hover:${social.hoverGradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:rotate-3 cursor-pointer`}>
                  <span className="text-3xl text-white">{social.icon}</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{social.name}</h4>
                <p className="text-sm text-gray-600">{social.handle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 rounded-2xl shadow-xl border border-green-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                <span className="text-xl text-white">🕒</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900">Horarios de Atención</h4>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-white/60 rounded-lg">
                <span className="font-semibold text-gray-700">Lunes - Viernes</span>
                <span className="text-green-600 font-bold">8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/60 rounded-lg">
                <span className="font-semibold text-gray-700">Sábados</span>
                <span className="text-green-600 font-bold">9:00 AM - 1:00 PM</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/60 rounded-lg">
                <span className="font-semibold text-gray-700">Domingos</span>
                <span className="text-red-500 font-bold">Cerrado</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-10 rounded-2xl shadow-xl border border-blue-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                <span className="text-xl text-white">🌍</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900">Ubicación</h4>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>Oficina Principal:</strong><br />
                Arturo Mbas, Rio Cuarto, Argentina
              </p>              
              <div className="mt-6">
                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Ver en Google Maps
                  <span className="inline-block ml-2">🗺️</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        Office Hours & Location */}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .backdrop-blur-md {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        
        .backdrop-blur-sm {
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }
        
        .bg-clip-text {
          -webkit-background-clip: text;
          background-clip: text;
        }
      `}</style>
    </section>
  )
}

export default Contact