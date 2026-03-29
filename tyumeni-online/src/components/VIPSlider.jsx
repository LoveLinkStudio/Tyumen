import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Star, Crown } from 'lucide-react'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/pagination'

const vipSalons = [
  {
    id: 1, name: 'VIP Lash Paradise', rating: 4.95, reviews: 1247,
    photo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=420&fit=crop&round',
    price: 'от 3 500₽'
  },
  {
    id: 2, name: 'Elite Beauty Club', rating: 4.98, reviews: 892,
    photo: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=420&fit=crop&round',
    price: 'от 4 200₽'
  },
  {
    id: 3, name: 'Lux Nails Studio', rating: 4.97, reviews: 2156,
    photo: 'https://images.unsplash.com/photo-1616443500864-a1d7fd381090?w=420&fit=crop&round',
    price: 'от 2 800₽'
  }
]

export default function VIPSlider() {
  return (
    <section className="py-24 bg-gradient-to-r from-amber-50 to-orange-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-black flex items-center justify-center gap-4 mx-auto mb-6">
            <Crown className="w-20 h-20 text-yellow-500 drop-shadow-2xl" />
            VIP салоны
          </h2>
          <p className="text-2xl text-slate-600 max-w-2xl mx-auto">
            Премиум салоны Тюмени • Гарантия качества • Персональный сервис
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={32}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 }
          }}
        >
          {vipSalons.map(salon => (
            <SwiperSlide key={salon.id}>
              <Link to={`/salon/${salon.id}`}>
                <div className="card h-[500px] group cursor-pointer overflow-hidden hover:scale-[1.03]">
                  <div className="absolute z-10 top-6 right-6 bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-2xl">
                    VIP
                  </div>
                  
                  <div 
                    className="h-3/4 bg-cover bg-center group-hover:scale-110 transition-transform"
                    style={{ backgroundImage: `url(${salon.photo})` }}
                  />
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{salon.name}</h3>
                    <div className="flex items-center mb-6">
                      <div className="flex text-yellow-400 mr-3">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
                      </div>
                      <span className="font-bold text-2xl">{salon.rating}</span>
                      <span className="text-slate-600">({salon.reviews.toLocaleString()})</span>
                    </div>
                    <div className="text-3xl font-black text-primary">{salon.price}</div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
