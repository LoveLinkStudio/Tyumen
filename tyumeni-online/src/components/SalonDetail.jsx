import { useParams, Link } from 'react-router-dom'
import { Star, MapPin, Phone, Clock, ArrowLeft } from 'lucide-react'

export default function SalonDetail() {
  const { id } = useParams()

  const salon = {
    id: parseInt(id),
    name: `Lash & Brow Studio #${id}`,
    rating: 4.9, reviews: 194,
    address: 'ул. Ленина, 45, Тюмень',
    phone: '+7 (3452) 12-34-56',
    priceFrom: 1500,
    services: ['Наращивание ресниц', 'Коррекция бровей', 'Дизайн бровей'],
    photos: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800'
    ],
    master: 'Анна Иванова', workTime: '10:00-21:00'
  }

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center mb-12">
          <Link to="/catalog" className="btn-primary px-6 py-4 mr-6 flex items-center">
            <ArrowLeft className="w-6 h-6 mr-2" />
            Назад
          </Link>
          <div>
            <h1 className="text-5xl font-black">{salon.name}</h1>
            <div className="flex items-center text-3xl mt-2">
              <div className="flex text-yellow-400 mr-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-10 h-10 fill-current" />)}
              </div>
              <span className="font-bold text-slate-800">4.9 ({salon.reviews} отзывов)</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="grid grid-cols-2 gap-4 mb-12">
              {salon.photos.map((photo, i) => (
                <div key={i} className="aspect-square rounded-3xl overflow-hidden shadow-2xl hover:scale-105">
                  <img src={photo} alt="" className="w-full h-full object-cover hover:brightness-110" />
                </div>
              ))}
            </div>
            
            <div className="glass p-8 rounded-3xl shadow-2xl mb-8">
              <h3 className="text-3xl font-bold mb-8">Контакты</h3>
              <div className="space-y-6">
                <div className="flex items-center p-6 bg-white/50 rounded-2xl">
                  <MapPin className="w-7 h-7 mr-4 text-primary" />
                  <span className="text-xl">{salon.address}</span>
                </div>
                <a href={`tel:${salon.phone}`} className="flex items-center p-6 bg-white/50 rounded-2xl hover:bg-white">
                  <Phone className="w-7 h-7 mr-4 text-emerald-500" />
                  <span className="text-xl">{salon.phone}</span>
                </a>
                <div className="flex items-center p-6 bg-white/50 rounded-2xl">
                  <Clock className="w-7 h-7 mr-4 text-slate-600" />
                  <span className="text-xl">{salon.workTime}</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="card p-8 mb-8">
              <h3 className="text-3xl font-bold mb-8">Услуги</h3>
              <div className="space-y-4">
                {salon.services.map((service, i) => (
                  <div key={i} className="flex justify-between items-center p-6 bg-slate-50 rounded-2xl hover:bg-slate-100">
                    <span className="font-bold text-xl">{service}</span>
                    <div className="flex items-center space-x-4">
                      <span className="text-3xl font-black text-primary">от 1 500₽</span>
                      <button className="btn-primary px-8 py-3 text-lg font-bold">Записаться</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass p-10 rounded-3xl shadow-2xl">
              <div className="flex items-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mr-6">
                  <span className="text-2xl font-bold text-white">АИ</span>
                </div>
                <div>
                  <h4 className="text-3xl font-bold mb-2">Анна Иванова</h4>
                  <div className="flex items-center text-emerald-600">
                    <Star className="w-6 h-6 fill-current mr-2" />
                    <span className="text-2xl">4.9 (89 отзывов)</span>
                  </div>
                </div>
              </div>
              <button className="btn-primary w-full py-8 text-2xl font-black shadow-2xl h-20">
                Записаться к мастеру
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
