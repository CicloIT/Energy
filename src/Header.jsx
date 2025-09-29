import { useState } from 'react'
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
export default Header