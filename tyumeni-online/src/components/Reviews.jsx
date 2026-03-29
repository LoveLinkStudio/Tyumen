import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Star } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'

const reviews = [
  {
    text: 'Лучший сервис! Записалась в Lash Studio за 2 минуты. Мастер супер!',
    author: 'Анна К.',
    rating: 5,
    avatar: 'A'
  },
  {
    text: 'Нашел барбершоп рядом, отзывы реальные. 5⭐ Рекомендую!',
    author: 'Дмитрий С.',
    rating: 5,
    avatar: 'Д'
  },
  {
    text: 'SPA салон — космос! 4.9⭐ Всё четко и красиво.',
    author: 'Мария П.',
    rating: 4.9,
    avatar: 'М'
  }
]

export default function Reviews() {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Отзывы клиентов
          </h2>
          <p className="text-2xl text-slate-600">247 000+ отзывов • 4.9⭐ средний рейтинг</p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <div className="glass p-10 h-[320px] flex flex-col justify-between rounded-3xl shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400 text-2xl mr-4">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-8 h-8 fill-current" />)}
                  </div>
                  <span className="text-3xl font-black">{review.rating}</span>
                </div>
                
                <p className="text-xl text-slate-700 italic mb-8 flex-1 leading-relaxed">
                  "{review.text}"
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                  <div className="font-bold text-xl">{review.author}</div>
                  <div className="w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.avatar}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
