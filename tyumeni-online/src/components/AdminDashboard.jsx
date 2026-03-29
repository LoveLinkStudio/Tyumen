import { BarChart3, Users, DollarSign, Crown, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'

const stats = [
  { name: 'Записи сегодня', value: '247', icon: Users, color: 'from-emerald-400 to-teal-500' },
  { name: 'Выручка мес', value: '148 500₽', icon: DollarSign, color: 'from-primary to-secondary' },
  { name: 'Рейтинг', value: '4.9⭐', icon: BarChart3, color: 'from-yellow-400 to-amber-500' },
  { name: 'VIP статус', value: 'Premium', icon: Crown, color: 'from-purple-400 to-violet-500' }
]

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-5xl font-black bg-gradient-to-r from-gray-800 to-slate-600 bg-clip-text text-transparent">
              Админ-панель
            </h1>
            <p className="text-2xl text-slate-600 mt-2">Lash & Brow Studio • ID: #1234</p>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/profile" className="btn-primary px-8 py-4 text-xl">
              Профиль
            </Link>
            <button className="p-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-2xl shadow-2xl hover:shadow-3xl">
              <Crown className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div key={i} className="glass p-8 rounded-3xl card hover:scale-105 group">
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 bg-gradient-to-r ${stat.color} rounded-2xl shadow-2xl`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <Settings className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-4xl font-black text-slate-800 mb-2 group-hover:text-primary transition-all">
                  {stat.value}
                </h3>
                <p className="text-xl text-slate-600">{stat.name}</p>
              </div>
            )
          })}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="card p-10">
            <h3 className="text-3xl font-bold mb-8 text-slate-800">Быстрые действия</h3>
            <div className="space-y-4">
              <Link to="/booking" className="block p-6 glass rounded-2xl hover:bg-primary/10 transition-all">
                📅 Посмотреть записи
              </Link>
              <Link to="/reviews" className="block p-6 glass rounded-2xl hover:bg-primary/10 transition-all">
                ⭐ Управление отзывами
              </Link>
              <Link to="/promo" className="block p-6 glass rounded-2xl hover:bg-primary/10 transition-all">
                🔥 Акции и скидки
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2 card p-10">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold text-slate-800">Статистика конверсий</h3>
              <select className="px-6 py-3 border border-slate-200 rounded-2xl focus:border-primary/50">
                <option>Последние 30 дней</option>
                <option>Неделя</option>
                <option>Месяц</option>
              </select>
            </div>
            <div className="h-80 bg-gradient-to-r from-slate-100 to-blue-100 rounded-3xl p-8 flex items-center justify-center text-slate-500">
              📊 График записей (Chart.js / Recharts)
            </div>
          </div>
        </div>

        {/* Upgrade Card */}
        <div className="card p-12 text-center group hover:scale-105 transition-all">
          <Crown className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-yellow-400 to-amber-500 text-black rounded-3xl p-6 shadow-2xl group-hover:rotate-12 transition-transform" />
          <h3 className="text-4xl font-black mb-6 text-slate-800">Обновить до Premium?</h3>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Топ-3 в каталоге + золотой VIP badge + 5x больше заявок + приоритет в поиске
          </p>
          <div className="grid grid-cols-3 gap-8 mb-12 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">+500%</div>
              <div className="text-slate-600">Заявок</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">990₽/мес</div>
              <div className="text-slate-600">Всего 33₽/день</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">🚀</div>
              <div className="text-slate-600">Топ позиция</div>
            </div>
          </div>
          <button className="btn-primary text-2xl px-16 py-8 shadow-3xl hover:shadow-4xl w-full lg:w-auto">
            Оформить Premium (5 мин)
          </button>
        </div>
      </div>
    </div>
  )
}
