import { useState, useEffect } from 'react'
import { Search as SearchIcon, MapPin, Filter } from 'lucide-react'

const suggestions = [
  'Парикмахерская Тюмень',
  'Маникюр недорого',
  'Барбершоп Мира',
  'SPA салон центр',
  'Брови ресницы'
]

export default function Search() {
  const [query, setQuery] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)

  useEffect(() => {
    setShowSuggestions(query.length > 2)
  }, [query])

  return (
    <div className="relative max-w-2xl mx-auto mb-24 -mt-24 z-40">
      <div className="glass p-1 rounded-3xl shadow-2xl border-white/20">
        <div className="flex rounded-3xl overflow-hidden">
          <div className="px-6 py-5 bg-white/50 flex items-center border-r border-white/30">
            <MapPin className="w-6 h-6 mr-3 text-slate-600" />
            <span className="font-semibold text-slate-700">Тюмень</span>
          </div>
          
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="🔍 Парикмахерская, маникюр, барбершоп..."
            className="flex-1 px-8 py-5 bg-transparent outline-none text-xl placeholder-slate-500"
          />
          
          <div className="px-6 py-5 bg-gradient-to-r from-primary to-secondary flex items-center">
            <Filter className="w-5 h-5 mr-2" />
            <span className="font-semibold text-white text-sm">Фильтры</span>
          </div>
        </div>
      </div>

      {showSuggestions && (
        <div className="absolute top-full left-0 right-0 mt-2 glass shadow-2xl rounded-3xl p-4 max-h-80 overflow-y-auto z-50 border-white/20">
          {suggestions
            .filter(s => s.toLowerCase().includes(query.toLowerCase()))
            .slice(0, 5)
            .map((suggestion, i) => (
              <div 
                key={i}
                className="p-4 hover:bg-primary/10 rounded-2xl cursor-pointer transition-all flex items-center"
                onClick={() => setQuery(suggestion)}
              >
                <SearchIcon className="w-5 h-5 text-slate-400 mr-4 hover:text-primary" />
                <span className="font-medium text-slate-800 hover:text-primary">{suggestion}</span>
              </div>
            ))}
        </div>
      )}
    </div>
  )
}
