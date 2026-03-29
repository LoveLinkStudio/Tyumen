import { Link } from 'react-router-dom'
import { Star, Award, MapPin } from 'lucide-react'

const salons = [
  {
    id: 1,
    name: 'Lash Paradise',
    rating: 4.9,
    reviews: 194,
    address: 'ул. Ленина, 45',
    photo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=320',
    vip: true
  },
  {
    id: 2,
    name: 'Beauty Nest',
    rating: 4.9,
    reviews: 387,
    address: 'ул. Мира, 12',
    photo: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=320',
    vip: false
  },
  {
    id: 3,
    name: 'Melanin Beauty',
    rating: 4.8,
    reviews: 256,
    address: 'пр. Победы, 8',
    photo: 'https://images.unsplash.com/photo-1616443500864-a1d7fd381090?w=320',
    vip: false
  }
]

export default function Salons() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Популярные салоны
          </h2>
          <p className="text-2xl text-slate-600 max-w-2xl mx-auto">
            Рейтинг 4.8+ • 247k отзывов • Ближайшие к вам
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {salons.map((salon) => (
            <Link key={salon.id} to={`/salon/${salon.id}`} className="block">
              <div className="card h-[520px] group hover:-translate-y-4 transition-all overflow-hidden">
                {salon.vip && (
                  <div className="absolute z-10 top-6 right-6 bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-2xl">
                    VIP
                  </div>
                )}
                
                <div 
                  className="h-64 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${salon.photo})` }}
                />
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{salon.name}</h3>
                  
                  <div className="flex items-center mb-6">
                    <div className="flex text-yellow-400 mr-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-current" />
                      ))}
                    </div>
                    <span className="font-bold text-2xl">{salon.rating}</span>
                    <span className="text-slate-600 ml-2">({salon.reviews})</span>
                  </div>
                  
                  <div className="flex items-center mb-6 text-slate-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{salon.address}</span>
                  </div>
                  
                  <button className="btn-primary w-full py-5 text-xl font-black shadow-xl hover:shadow-3xl">
                    Записаться
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
