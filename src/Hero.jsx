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

export default Hero