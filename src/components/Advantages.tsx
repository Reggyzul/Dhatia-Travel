import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Banknote, 
  Car, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles,
  HeartHandshake
} from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface AdvantagesProps {
  onBookClick?: () => void;
  lang?: 'ID' | 'EN';
}

export default function Advantages({ onBookClick, lang = 'ID' }: AdvantagesProps) {
  const t = TRANSLATIONS[lang];

  const advantagesList = [
    {
      id: 'keamanan-utama',
      icon: <ShieldCheck className="w-7 h-7 text-amber-500" />,
      badge: 'Prioritas Utama',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
      title: 'Keamanan & Keselamatan Utama',
      description: 'Seluruh armada kendaraan (Toyota Innova Reborn, Veloz FWD, Avanza FWD) rutin diservis berkala, dicek kelayakannya sebelum jalan, serta dibersihkan hingga steril demi keamanan penuh penumpang.',
      highlights: ['Armada Selalu Terawat & Steril', 'Pengecekan Rutin Berkala', 'Perjalanan Nyaman & Tenang']
    },
    {
      id: 'tepat-waktu',
      icon: <Clock className="w-7 h-7 text-teal-600" />,
      badge: 'Disiplin & Terjamin',
      badgeBg: 'bg-teal-50 text-teal-700 border-teal-200',
      title: 'Tepat Waktu & Terpercaya',
      description: 'Jadwal keberangkatan yang pasti dan terjamin. Pengemudi berpengalaman yang menguasai rute Kalimantan Timur dengan aman, memastikan Anda tiba tepat waktu sesuai jadwal.',
      highlights: ['Jadwal Keberangkatan Terjamin', 'Pengemudi Berpengalaman', 'Efisien & Tepat Waktu']
    },
    {
      id: 'door-to-door',
      icon: <MapPin className="w-7 h-7 text-amber-600" />,
      badge: 'Praktis & Bebas Repot',
      badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
      title: 'Layanan Door-to-Door / Airport & Port',
      description: 'Layanan jemput antar langsung ke alamat rumah Anda, Bandara SAMS Sepinggan Balikpapan, maupun Pelabuhan Semayang Balikpapan tanpa perlu repot berganti kendaraan.',
      highlights: ['Jemput Langsung di Alamat', 'Antar Jemput Bandara Sepinggan', 'Penjemputan Pelabuhan Semayang']
    },
    {
      id: 'harga-transparan',
      icon: <Banknote className="w-7 h-7 text-emerald-600" />,
      badge: 'Hemat & Jujur',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      title: 'Harga Transparan (Mulai Rp 150.000-an)',
      description: 'Tarif perjalanan yang sangat transparan dan hemat mulai dari Rp 150.000-an per orang sesuai rute. Tanpa biaya tersembunyi atau siluman.',
      highlights: ['Tarif Mulai dari Rp 150.000-an', 'Tanpa Biaya Tersembunyi', 'Opsi Travel Reguler & Carter']
    }
  ];

  const handleWhatsAppConsultation = (title: string) => {
    const waNumber = '6281264008000';
    const message = `Halo Dhatia Travel, saya ingin bertanya info selengkapnya mengenai keunggulan layanan: ${title}. Terima kasih!`;
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <section id="advantages" className="py-20 bg-white text-[#0f172a] relative overflow-hidden border-b border-slate-200">
      
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#0b192c_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3" id="advantages-heading">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-display font-extrabold text-xs uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>MENGAPA MEMILIH DHATIA TRAVEL</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0f172a] tracking-tight uppercase leading-tight">
            Keunggulan Layanan <span className="text-amber-600">Dhatia Travel</span>
          </h2>

          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Komitmen terbaik kami untuk memberikan pengalaman perjalanan travel & sewa mobil paling aman, nyaman, dan terpercaya di Kalimantan Timur.
          </p>
        </div>

        {/* 4 Grid Advantages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantagesList.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              key={item.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Card Top Glow Accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="space-y-4 text-left">
                {/* Badge & Icon Row */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider border ${item.badgeBg}`}>
                    {item.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="font-display font-black text-lg text-[#0f172a] group-hover:text-amber-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed mt-2 font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Checklist Bullet Points */}
                <div className="pt-2 space-y-1.5 border-t border-slate-100">
                  {item.highlights.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Standard Kaltim</span>
                <button
                  onClick={() => handleWhatsAppConsultation(item.title)}
                  className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Tanya CS</span>
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Highlighted Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 bg-gradient-to-r from-[#0b192c] via-[#0f172a] to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden text-left"
          id="advantages-guarantee-banner"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <HeartHandshake className="w-4 h-4 text-amber-400" />
                <span>KOMITMEN KUALITAS DHATIA TRAVEL</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight uppercase">
                Siap Melayani Perjalanan Anda di Kalimantan Timur
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                Pesan tiket perjalanan atau sewa carter mobil untuk keperluan bisnis, keluarga, penglaju, maupun akses Bandara & Pelabuhan secara praktis via WhatsApp.
              </p>
            </div>

            <a
              href="https://wa.me/6281264008000?text=Halo%20Dhatia%20Travel,%20saya%20ingin%20pesan%20tiket%20travel%20/%20sewa%20mobil"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-amber-500 to-teal-600 hover:from-amber-600 hover:to-teal-700 text-white font-sans font-extrabold text-xs uppercase px-7 py-3.5 rounded-2xl shadow-xl transition-all flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <MessageCircle className="w-4.5 h-4.5 fill-current" />
              <span>Hubungi WA (081264008000)</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
