import { useState } from 'react'
import { Filter, Star } from 'lucide-react'

const salons = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  name: `Салон красоты #${i + 1}`,
  rating: (4 + Math.random()).toFixed(1),
  price: Math.floor(500 + Math.random() * 2000),
  distance: (1 + Math.random() * 5).toFixed(1),
  category: ['Парикмахерские', 'Маникюр', 'SPA'][Math.floor(Math.random() * 3)]
}))

export default function Catalog() {
  const [filters, setFilters] = useState({
    category: '', rating: 4, price: 3000, sort: 'rating'
  })

  const filtered = salons
    .filter(s => !filters.category || s.category === filters.category)
    .filter(s => parseFloat(s.rating) >= filters.rating)
    .filter(s => s.price <= filters.price)
    .sort((a, b) => filters.sort === 'rating' ? b.rating - a.rating : a.price - b.price)

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text">
            Каталог ({filtered.length})
          </h1>
          <button className="glass p-4 rounded-2xl hover:shadow-xl">
            <Filter className="w-6 h-6" />
          </button>
        </div>

        <div className="glass p-8 rounded-3xl mb-12 shadow-2xl border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <select 
              value={filters.category} 
              onChange={e => setFilters({...filters, category: e.target.value})}
              className="p-4 border-2 rounded-2xl focus:border-primary"
            >
              <option>Все категории</option>
              <option>Парикмахерские</option>
              <option>Маникюр</option>
              <option>SPA</option>
            </select>
            
            <select value={filters.rating} onChange={e => setFilters({...filters, rating: +e.target.value})}>
              <option>⭐ 4+</option>
              <option>⭐ 4.5+</option>
              <option>⭐ 4.8+</option>
            </select>
            
            <input
              type="range" min="0" max="3000" step="500"
              value={filters.price}
              onChange={e => setFilters({...filters, price: +e.target.value})}
              className="w-full h-3 accent-primary"
            />
            <span className="text-2xl font-bold self-center">{filters.price}₽</span>
            
            <select value={filters.sort} onChange={e => setFilters({...filters, sort: e.target.value})} className="col-span-2 md:col-span-1">
              <option>По рейтингу</option>
              <option>По цене</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
          {filtered.map(salon => (
            <div key={salon.id} className="card group h-[420px] cursor-pointer">
              <div className="h-52 bg-gradient-to-br from-slate-200 to-slate-300 rounded-t-3xl group-hover:from-primary/20" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3">{salon.name}</h3>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className={`w-5 h-5 ${i < Math.floor(salon.rating) ? 'fill-current' : ''}`} />)}
                  </div>
                  <span className="ml-2 font-bold text-lg">{salon.rating}</span>
                </div>
                <div className="flex justify-between items-center mb-6 text-slate-600">
                  <span>{salon.distance} км</span>
                  <span className="text-2xl font-bold text-primary">{salon.price}₽</span>
                </div>
                <button className="btn-primary w-full py-4 font-bold">Записаться</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
