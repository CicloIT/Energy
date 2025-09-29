import Contact from './Contact'
import RenewableLaw from './RenewableLaw'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Solutions from './Solutions'
import Sustainability from './Sustainability'
import Footer from './Footer'
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
