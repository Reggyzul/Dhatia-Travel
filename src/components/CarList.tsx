import React from 'react';
import { CARS } from '../data/cars';
import { Car } from '../types';
import { motion } from 'motion/react';
import { Users, CheckCircle2, MessageCircle, Sparkles, ShieldCheck, Banknote } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface CarListProps {
  onSelectCar: (car: Car) => void;
  lang: 'ID' | 'EN';
}

export default function CarList({ onSelectCar, lang }: CarListProps) {
  const t = TRANSLATIONS[lang];

  const handleWhatsAppBooking = (carName: string) => {
    const waNumber = '6281264008000';
    const message = `Halo Dhatia Travel, saya berminat memesan/sewa armada unit ${carName} untuk rute Kalimantan Timur. Mohon info ketersediaan jam & tanggal. Terima kasih!`;
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <section id="cars" className="py-20 bg-slate-50 text-[#0f172a] overflow-hidden relative border-b border-slate-200">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3" id="cars-heading">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-display font-extrabold text-xs tracking-wider uppercase shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>KATALOG ARMADA TERAWAT</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0f172a] tracking-tight uppercase leading-tight">
            Armada Mobil <span className="text-amber-600">Dhatia Travel</span>
          </h2>

          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Seluruh armada kendaraan dilengkapi AC sejuk, kabin bersih & steril, Audio/USB charger di setiap baris, serta driver profesional & berpengalaman.
          </p>

          {/* Pricing Highlight Pill Under Section Subtitle */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-600 text-white font-sans font-extrabold text-xs sm:text-sm shadow-md border border-red-500/30 tracking-wide uppercase">
              <Banknote className="w-4 h-4 text-white shrink-0" />
              <span>Tarif Mulai dari Rp 150.000-an</span>
            </div>
          </div>
        </div>

        {/* GRID LAYOUT: 3 MOBIL UNGGULAN */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARS.map((car, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={car.id}
              className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-md hover:shadow-2xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              id={`car-card-${car.id}`}
            >
              <div className="space-y-5 text-left">
                
                {/* Image Showcase */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/80 aspect-[16/10] flex items-center justify-center p-4">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-auto object-contain max-h-[170px] drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-amber-500 text-white font-display font-extrabold text-[10px] uppercase px-3 py-1 rounded-full shadow-sm">
                    {car.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 text-slate-700 font-sans text-[10px] font-bold px-2.5 py-1 rounded-full border border-slate-200 flex items-center gap-1.5 shadow-sm">
                    <Users className="w-3.5 h-3.5 text-amber-600" />
                    <span>{car.seats} Kursi</span>
                  </div>
                </div>

                {/* Car Name & Sub-description */}
                <div>
                  <h3 className="font-display font-black text-2xl text-[#0f172a] group-hover:text-amber-600 transition-colors uppercase tracking-tight">
                    {car.name}
                  </h3>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed mt-1.5 font-medium">
                    {car.description}
                  </p>
                </div>

                {/* COMPLETE FACILITIES CHECKLIST */}
                <div className="space-y-2 pt-3 border-t border-slate-100">
                  <span className="text-[10px] font-extrabold tracking-wider uppercase text-amber-600 block">Spesifikasi Singkat & Fasilitas:</span>
                  <div className="space-y-1.5">
                    {car.includeList.map((facility, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span className="line-clamp-1">{facility}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => handleWhatsAppBooking(car.name)}
                  className="flex-1 bg-gradient-to-r from-amber-500 via-amber-600 to-teal-600 hover:from-amber-600 hover:to-teal-700 text-white font-sans font-bold text-xs uppercase py-3.5 px-3 rounded-xl shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                  <span>Pesan via WA</span>
                </button>

                <button
                  onClick={() => onSelectCar(car)}
                  className="bg-slate-100 hover:bg-slate-200 text-[#0f172a] border border-slate-200 font-sans font-bold text-xs uppercase py-3.5 px-3.5 rounded-xl transition-all cursor-pointer"
                  title="Form Reservasi Lengkap"
                >
                  Reservasi
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
