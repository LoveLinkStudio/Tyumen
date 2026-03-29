import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const photos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&fit=crop', salon: 'Lash Paradise' },
  { id: 2, src: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&fit=crop', salon: 'Elite Beauty' },
  { id: 3, src: 'https://images.unsplash.com/photo-1616443500864-a1d7fd381090?w=500&fit=crop', salon: 'Lux Nails' },
  { id: 4, src: 'https://images.unsplash.com/photo-1596791279545-35fcec6aa9a2?w=500&fit=crop', salon: 'Barber Club' }
]

export default function PhotoGallery() {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              📸 Фото салонов
            </h2>
            <p className="text-2xl text-slate-600">Реальные интерьеры и работы мастеров</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {photos.map(photo => (
              <motion.div
                key={photo.id}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl"
                onClick={() => setSelected(photo)}
              >
                <img 
                  src={photo.src} 
                  alt={photo.salon}
                  className="w-full h-64 object-cover group-hover:brightness-110 transition-all"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur text-white px-4 py-2 rounded-xl text-sm font-bold">
                  {photo.salon}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
                <ZoomIn className="absolute top-4 right-4 w-8 h-8 text-white/80 opacity-0 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur flex items-center justify-center p-8"
            onClick={() => setSelected(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] mx-auto">
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-16 right-0 p-3 bg-white/20 hover:bg-white/30 rounded-full"
              >
                <X className="w-8 h-8" />
              </button>
              <img 
                src={selected.src} 
                alt={selected.salon}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              />
              <p className="text-white text-xl mt-6 text-center font-semibold">
                {selected.salon}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
