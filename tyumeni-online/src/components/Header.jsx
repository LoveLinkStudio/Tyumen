import { useState } from 'react'
import { Search, MapPin, Bell, User, LogOut, Settings } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Header() {
  const [search, setSearch] = useState('')
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  return (
    <header className="glass backdrop-blur-xl sticky top-0 z-50 shadow-2xl border-b border-white/20">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text">
            TYUMENI
          </Link>
          
          <div className="flex-1 max-w-md mx-12">
            <div className="glass p-1 rounded-3xl">
              <div className="flex">
                <div className="px-4 py-3 bg-white/50 flex items-center border-r border-white/30 rounded-l-3xl">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Тюмень</span>
                </div>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="🔍 Парикмахерская, маникюр..."
                  className="flex-1 px-6 py-3 bg-transparent outline-none placeholder-slate-500"
                />
                <button className="px-6 py-3">
                  <Search className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/catalog" className="p-3 rounded-2xl hover:bg-primary/10">
              Каталог
            </Link>
            <Bell className="w-7 h-7 p-2 rounded-2xl hover:bg-slate-100" />
            
            {user ? (
              <>
                <Link to="/profile" className="flex items-center p-2 rounded-2xl hover:bg-primary/10">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {user.name?.[0] || 'A'}
                  </div>
                </Link>
                {user.role === 'admin' && (
                  <Link to="/admin" className="p-3 rounded-2xl hover:bg-purple-500/20">
                    <Settings className="w-6 h-6" />
                  </Link>
                )}
                <button onClick={logout} className="p-3 rounded-2xl hover:bg-red-100">
                  <LogOut className="w-6 h-6 text-red-500" />
                </button>
              </>
            ) : (
              <button className="btn-primary px-8 py-3 font-bold" onClick={() => navigate('/login')}>
                Войти
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
