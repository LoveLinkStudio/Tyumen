import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=2000')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
      
      <div className="text-center text-white max-w-4xl mx-auto px-6 z-10 animate-fade-in">
        <h1 className="text-7xl md:text-8xl font-black mb-8 bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent drop-shadow-2xl">
          TYUMENI
        </h1>
        <p className="text-3xl md:text-4xl mb-12 font-light leading-tight opacity-95">
          15 000+ салонов • Запись за 30 секунд
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
          <Link 
            to="/catalog" 
            className="btn-primary text-2xl px-12 py-8 shadow-2xl text-lg w-full sm:w-auto"
          >
            Найти салон
          </Link>
          <Link 
            to="/app" 
            className="glass px-12 py-8 border-2 border-white/30 backdrop-blur-xl rounded-3xl text-xl font-semibold hover:border-white/50 transition-all"
          >
            📱 Скачать app
          </Link>
        </div>
      </div>
    </section>
  )
}
