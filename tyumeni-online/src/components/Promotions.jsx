import { useState, useEffect } from 'react'
import { Clock, Percent, Fire } from 'lucide-react'

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({})

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = targetDate - Date.now()
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex items-center space-x-2 text-2xl font-black text-red-500">
      <Clock className="w-8 h-8" />
      <span>{timeLeft.days || 0}d</span>:<span>{timeLeft.hours?.toString().padStart(2,'0') || '00'}h</span>:
      <span>{timeLeft.minutes?.toString().padStart(2,'0') || '00'}m</span>:
      <span>{timeLeft.seconds?.toString().padStart(2,'0') || '00'}s</span>
    </div>
  )
}

const promotions = [
  {
    title: '🔥 СКИДКА 50% НА ПЕРВУЮ ЗАПИСЬ',
    salon: 'Lash Paradise', discount: '50%',
    expires: Date.now() + 3 * 24 * 60 * 60 * 1000
  },
  {
    title: '💅 МАНИКЮР -30%', salon: 'Lux Nails',
    discount: '30%', expires: Date.now() + 5 * 24 * 60 * 60 * 1000
  }
]

export default function Promotions() {
  return (
    <section className="py-20 bg-gradient-to-r from-red-50 via-orange-50 to-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-black bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
            🔥 ГОРЯЧИЕ АКЦИИ
          </h2>
          <p className="text-2xl text-slate-700 max-w-2xl mx-auto">
            Лимитированные предложения от топ салонов
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {promotions.map((promo, i) => (
            <div key={i} className="group glass h-[280px] p-10 rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-4 transition-all border-white/50 flex flex-col justify-between overflow-hidden">
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-gradient-to-br from-red-400 to-orange-500 rounded-full opacity-20 group-hover:opacity-30 transition flex items-center justify-center text-4xl font-black text-white">
                -{promo.discount}
              </div>
              
              <div className="flex items-center justify-center w-28 h-28 bg-gradient-to-r from-red-100 to-orange-100 rounded-2xl mb-6 group-hover:scale-110">
                {i === 0 ? <Fire className="w-12 h-12 text-red-500 animate-pulse" /> : <Percent className="w-12 h-12 text-emerald-500 animate-bounce" />}
              </div>
              
              <div>
                <h3 className="text-2xl font-black mb-4 text-slate-800 leading-tight">
                  {promo.title}
                </h3>
                <p className="text-xl font-semibold text-slate-700 mb-6">
                  {promo.salon}
                </p>
                <div className="flex items-center justify-between">
                  <Countdown targetDate={promo.expires} />
                  <button className="btn-primary px-8 py-3 font-bold shadow-xl hover:shadow-3xl">
                    Воспользоваться
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
