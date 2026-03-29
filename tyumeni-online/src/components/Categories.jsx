import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Link } from 'react-router-dom'

const categories = [
  { name: '👠 Парикмахерские', icon: 'https://via.placeholder.com/120/ff9a9e/fff?text=👠', count: 5000 },
  { name: '💅 Маникюр/педикюр', icon: 'https://via.placeholder.com/120/a8e6cf/fff?text=💅', count: 1200 },
  { name: '👁️ Брови/ресницы', icon: 'https://via.placeholder.com/120/dff9fb/333?text=👁️', count: 800 },
  { name: '🪒 Барбершопы', icon: 'https://via.placeholder.com/120/f6d365/fff?text=🪒', count: 600 },
  { name: '🧖 SPA салоны', icon: 'https://via.placeholder.com/120/ffd93d/333?text=🧖', count: 450 },
  { name: '💍 Ногти', icon: 'https://via.placeholder.com/120/c084fc/fff?text=💍', count: 350 },
  { name: '😃 Массаж', icon: 'https://via.placeholder.com/120/4ecdc4/fff?text=😃', count: 280 },
  { name: '🎨 Тату', icon: 'https://via.placeholder.com/120/ff6b6b/fff?text=🎨', count: 120 }
]

export default function Categories() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Категории
          </h2>
          <p className="text-2xl text-slate-600 max-w-2xl mx-auto">
            Выберите направление или найдите ближайший салон
          </p>
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1.2}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
            1280: { slidesPerView: 4.5 }
          }}
          className="max-w-6xl mx-auto"
        >
          {categories.map((category, i) => (
            <SwiperSlide key={i}>
              <Link to="/catalog" className="block">
                <div className="group h-80 p-10 glass rounded-3xl cursor-pointer hover:scale-105 transition-all shadow-xl hover:shadow-2xl border hover:border-primary/50">
                  <img 
                    src={category.icon} 
                    alt={category.name}
                    className="w-32 h-32 mx-auto mb-8 rounded-3xl shadow-2xl group-hover:scale-110 transition-transform"
                  />
                  <h3 className="text-2xl font-bold text-center mb-4 text-slate-800 group-hover:text-primary">
                    {category.name}
                  </h3>
                  <p className="text-xl text-center text-slate-600 font-semibold">
                    {category.count.toLocaleString()} салонов
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
