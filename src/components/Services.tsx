import React from 'react';
import { motion } from 'motion/react';
import { Plane, Anchor, MapPin, Building2, Route, Compass, Landmark, Car, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface ServicesProps {
  lang: 'ID' | 'EN';
}

export default function Services({ lang }: ServicesProps) {
  const t = TRANSLATIONS[lang];

  const handleWhatsAppBooking = (routeTitle: string) => {
    const waNumber = '6281264008000';
    const message = `Halo Dhatia Travel, saya berminat memesan tiket travel / sewa mobil rute: ${routeTitle}. Mohon info jam keberangkatan & tarif. Terima kasih!`;
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  const routesList = [
    {
      id: 'shuttle-bandara',
      icon: <Plane className="w-5 h-5 text-red-600" />,
      badge: 'SHUTTLE BANDARA',
      title: 'Balikpapan – Bandara SAMS Sepinggan',
      subtitle: 'Drop Off & Shuttle Bandara 24 Jam',
      description: 'Layanan antar-jemput tepat waktu ke Bandara SAMS Sepinggan Balikpapan untuk penerbangan domestik & internasional.',
      tag: 'Door to Door'
    },
    {
      id: 'shuttle-pelabuhan',
      icon: <Anchor className="w-5 h-5 text-red-600" />,
      badge: 'SHUTTLE PELABUHAN',
      title: 'Balikpapan – Pelabuhan Semayang',
      subtitle: 'Shuttle Penyeberangan & Kapal Laut',
      description: 'Pengantaran nyaman langsung ke dermaga Pelabuhan Semayang Balikpapan tanpa repot.',
      tag: 'Door to Door'
    },
    {
      id: 'door-to-door-kaltim',
      icon: <MapPin className="w-5 h-5 text-red-600" />,
      badge: 'DOOR TO DOOR',
      title: 'Balikpapan – Samarinda & Tenggarong',
      subtitle: 'Travel Harian & Perjalanan Keluarga',
      description: 'Rute harian pintu ke pintu (door to door) menuju area Samarinda, Tenggarong, Loa Janan, dan sekitarnya.',
      tag: 'Door to Door'
    },
    {
      id: 'rute-bisnis',
      icon: <Building2 className="w-5 h-5 text-red-600" />,
      badge: 'RUTE BISNIS',
      title: 'Samarinda – Tenggarong & Loa Janan',
      subtitle: 'Rute Bisnis & Industri Kukar',
      description: 'Antar jemput instan dari Loa Janan, Samarinda menuju kawasan Tenggarong dan industri sekitarnya.',
      tag: 'Door to Door'
    },
    {
      id: 'perjalanan-harian',
      icon: <Route className="w-5 h-5 text-red-600" />,
      badge: 'PERJALANAN HARIAN',
      title: 'Samarinda – Kota Bangun',
      subtitle: 'Layanan Shuttle & Travel Harian',
      description: 'Perjalanan aman & nyaman menghubungkan Kota Samarinda dengan Kecamatan Kota Bangun Kutai Kartanegara.',
      tag: 'Door to Door'
    },
    {
      id: 'rute-utama',
      icon: <Compass className="w-5 h-5 text-red-600" />,
      badge: 'RUTE UTAMA',
      title: 'Tenggarong – Sangatta (Kutai Timur)',
      subtitle: 'Rute Utama Poros Kaltim',
      description: 'Layanan antar-kota harian paling populer di daerah Tenggarong, Bontang, hingga Sangatta Kutai Timur.',
      tag: 'Door to Door'
    },
    {
      id: 'ikn-nusantara',
      icon: <Landmark className="w-5 h-5 text-red-600" />,
      badge: 'KUNJUNGAN KERJA',
      title: 'Balikpapan / Samarinda – IKN Nusantara',
      subtitle: 'Perjalanan Dinas & Proyek IKN',
      description: 'Layanan sewa carter & travel khusus kunjungan kerja, dinas, dan peninjauan kawasan Ibu Kota Nusantara.',
      tag: 'Door to Door'
    },
    {
      id: 'armada-unggulan',
      icon: <Car className="w-5 h-5 text-red-600" />,
      badge: 'ARMADA UNGGULAN',
      title: 'Sewa Mobil Dhatia Travel (All-In / Carter)',
      subtitle: 'Innova Reborn, Veloz & Avanza FWD',
      description: 'Armada bersih, harum, AC dingin double blower, USB charger, siap ditemani pengemudi ramah & berpengalaman.',
      tag: 'Door to Door'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 text-slate-900 overflow-hidden relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2" id="services-heading">
          <span className="font-display font-bold text-xs uppercase tracking-widest text-red-600 block">
            RUTE & LAYANAN TERLENGKAP
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            Pilihan Rute Travel <span className="text-red-600">Dhatia Travel</span>
          </h2>
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Melayani perjalanan harian antar-kota, antar jemput Bandara Sepinggan, Pelabuhan Semayang, hingga kawasan IKN & Kutai Timur.
          </p>
        </div>

        {/* 4 COLUMNS x 2 ROWS CARDS GRID (EXACT MATCH TO SCREENSHOT) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {routesList.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              key={item.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 flex flex-col justify-between group text-left relative overflow-hidden"
            >
              <div className="space-y-4">
                
                {/* Header Icon + Badge Row */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-extrabold text-slate-500 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider border border-slate-200/60">
                    {item.badge}
                  </span>
                </div>

                {/* Title & Red Subtitle */}
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-red-600 font-bold mt-1">
                    {item.subtitle}
                  </p>
                </div>

                {/* Description Text */}
                <p className="font-sans text-xs text-slate-500 leading-relaxed font-medium">
                  {item.description}
                </p>

              </div>

              {/* Card Footer: Door to Door tag + Red Pesan Rute Button */}
              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs font-medium text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{item.tag}</span>
                </div>

                <button
                  onClick={() => handleWhatsAppBooking(item.title)}
                  className="bg-red-600 hover:bg-red-700 text-white font-sans font-bold text-xs py-2 px-4 rounded-full shadow-md transition-all duration-200 cursor-pointer active:scale-95 border border-red-500/20"
                >
                  Pesan Rute
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
