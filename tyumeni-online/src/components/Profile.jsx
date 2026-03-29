import { User, Calendar, Star, Phone, LogOut, CreditCard } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function Profile() {
  const { user } = useAuth()

  const mockData = user || {
    name: 'Анна Козлова',
    phone: '+7 (912) 345-67-89',
    bookings: 12,
    rating: 4.9
  }

  const appointments = [
    { id: 1, salon: 'Lash Studio', time: '14:00 30 марта', status: 'confirmed' },
    { id: 2, salon: 'Beauty Nest', time: '11:00 1 апреля', status: 'pending' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="glass rounded-3xl p-10 mb-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            <div className="w-32 h-32 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-4xl font-black text-white shadow-2xl">
              {mockData.name?.[0] || 'A'}
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl font-black mb-2">{mockData.name}</h1>
              <div className="flex items-center justify-center lg:justify-start mb-6 text-2xl">
                <div className="flex items-center mr-8">
                  <Star className="w-8 h-8 text-yellow-400 mr-3 fill-current" />
                  <span className="font-bold text-slate-800">{mockData.rating}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-8 h-8 mr-3" />
                  <span>{mockData.bookings} записей</span>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-6 text-lg text-slate-700">
                <div className="flex items-center"><Phone className="w-6 h-6 mr-3" />{mockData.phone}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card p-8">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <Calendar className="w-10 h-10 mr-4 text-primary" />
              Мои записи
            </h2>
            <div className="space-y-4">
              {appointments.map(appt => (
                <div key={appt.id} className="glass p-6 rounded-2xl border-l-4 border-primary">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-xl">{appt.salon}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      appt.status === 'confirmed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {appt.status === 'confirmed' ? '✅' : '⏳'}
                    </span>
                  </div>
                  <p className="text-2xl font-bold">{appt.time}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-8">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <CreditCard className="w-10 h-10 mr-4 text-primary" />
              Баланс
            </h2>
            <div className="text-center space-y-6">
              <div className="text-6xl font-black text-slate-200">0 ₽</div>
              <p className="text-2xl text-slate-600">Доступно для оплаты</p>
              <button className="btn-primary px-12 py-6 text-xl w-full">Пополнить</button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="text-red-500 hover:text-red-700 font-bold text-2xl flex items-center justify-center mx-auto gap-3 py-4">
            <LogOut className="w-8 h-8" />
            Выйти
          </button>
        </div>
      </div>
    </div>
  )
}
