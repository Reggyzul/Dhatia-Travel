import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, CheckCircle2, Award, HeartHandshake, Eye, Zap, Shield, Target, MapPin } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface AboutProps {
  lang: 'ID' | 'EN';
}

export default function About({ lang }: AboutProps) {
  const t = TRANSLATIONS[lang];

  return (
    <section id="about" className="py-20 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white text-[#0f172a] overflow-hidden relative border-b border-slate-200">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* Section Heading Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2" id="about-heading">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-['Great_Vibes'] text-4xl sm:text-5xl text-amber-500 font-normal block leading-tight">
              About Dhatia Travel
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-4xl text-[#0f172a] tracking-tight uppercase leading-tight"
          >
            Profil, Visi & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-teal-600">Misi Perusahaan</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium max-w-2xl mx-auto pt-1"
          >
            Mengenal komitmen, rekam jejak, serta visi misi utama Dhatia Travel sebagai penyedia jasa transportasi travel & sewa mobil terpercaya di Kalimantan Timur.
          </motion.p>
        </div>

        {/* 1. PROFIL PERUSAHAAN */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden space-y-8 text-left"
        >
          <div className="border-b border-slate-100 pb-5">
            <span className="font-['Great_Vibes'] text-3xl sm:text-4xl text-amber-500 font-normal block leading-tight">
              Profil Perusahaan
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0f172a] uppercase tracking-tight">
              Mitra Transportasi Terpercaya <span className="text-amber-600">Dhatia Travel</span>
            </h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
              Melayani Wilayah Kutai Kartanegara, Balikpapan, Samarinda, hingga Sangatta
            </p>
          </div>

          <div className="space-y-4 text-slate-700 font-sans text-sm sm:text-base leading-relaxed font-medium">
            <p>
              <strong className="text-[#0f172a] font-bold">Dhatia Travel</strong> adalah perusahaan penyedia jasa transportasi darat profesional yang melayani rute travel reguler penumpang, penglaju, pebisnis, wisatawan, serta layanan carter privat di Kalimantan Timur. Berlokasi strategis di <strong className="text-slate-900 font-bold">Jl. Poros Loa Janan - Tenggarong, Desa Bakungan, Kec. Loa Janan, Kab. Kutai Kartanegara</strong>.
            </p>
            <p>
              Kami mengoperasikan unit armada modern berkualitas seperti <strong className="text-amber-600 font-bold">Toyota Innova Reborn</strong>, <strong className="text-amber-600 font-bold">Toyota Veloz FWD</strong>, dan <strong className="text-amber-600 font-bold">Toyota Avanza FWD</strong> yang selalu dalam kondisi prima, bersih, steril, dan sejuk. Seluruh pengemudi kami terlatih secara profesional, ramah, jujur, serta menguasai medan jalanan antar-kota di Kalimantan Timur.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100 flex items-start gap-3">
              <Award className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-display font-bold text-xs uppercase text-[#0f172a] block">Layanan Profesional</span>
                <span className="text-[11px] text-slate-600 font-medium block mt-0.5">Prioritas keselamatan & kenyamanan</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <Zap className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-display font-bold text-xs uppercase text-[#0f172a] block">Ketepatan Waktu</span>
                <span className="text-[11px] text-slate-600 font-medium block mt-0.5">Jadwal keberangkatan terjamin</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <HeartHandshake className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-display font-bold text-xs uppercase text-[#0f172a] block">Layanan Door-to-Door</span>
                <span className="text-[11px] text-slate-600 font-medium block mt-0.5">Jemput di rumah, bandara & pelabuhan</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. VISI & MISI PERUSAHAAN */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden space-y-8 text-left"
        >
          <div className="border-b border-slate-100 pb-5">
            <span className="font-['Great_Vibes'] text-3xl sm:text-4xl text-amber-500 font-normal block leading-tight">
              Vision & Mission
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0f172a] uppercase tracking-tight">
              Visi & Misi <span className="text-amber-600">Dhatia Travel</span>
            </h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
              Komitmen Membangun Hubungan Jangka Panjang dengan Pelanggan
            </p>
          </div>

          {/* VISI BOX */}
          <div className="space-y-3">
            <h4 className="font-display font-extrabold text-base sm:text-lg text-[#0f172a] uppercase tracking-tight flex items-center gap-2">
              <Target className="w-5 h-5 text-amber-600" />
              <span>VISI PERUSAHAAN</span>
            </h4>
            <div className="bg-gradient-to-br from-amber-50/70 via-slate-50 to-white border-l-4 border-amber-500 p-5 sm:p-6 rounded-r-2xl border-y border-r border-slate-200/80 shadow-xs">
              <p className="font-sans text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                "Menjadi penyedia jasa travel & sewa mobil terdepan di Kalimantan Timur yang paling terpercaya, mengutamakan keselamatan dan kenyamanan penumpang, serta membangun hubungan jangka panjang berdasarkan rasa saling percaya dan pelayanan prima."
              </p>
            </div>
          </div>

          {/* MISI LIST */}
          <div className="space-y-4 pt-2">
            <h4 className="font-display font-extrabold text-base sm:text-lg text-[#0f172a] uppercase tracking-tight flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-600" />
              <span>MISI UTAMA KAMI</span>
            </h4>

            <div className="space-y-3">
              
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-200 transition-colors">
                <span className="text-amber-500 font-extrabold text-lg mt-0.5 shrink-0">✓</span>
                <div>
                  <strong className="font-display font-bold text-sm text-[#0f172a] uppercase tracking-wide block">
                    1. Mengutamakan Keamanan & Keselamatan Penumpang
                  </strong>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mt-1">
                    Menyediakan armada kendaraan (Innova Reborn, Veloz FWD, Avanza FWD) yang terawat, bersih, steril, dan selalu rutin diservis berkala demi keselamatan seluruh penumpang.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-200 transition-colors">
                <span className="text-amber-500 font-extrabold text-lg mt-0.5 shrink-0">✓</span>
                <div>
                  <strong className="font-display font-bold text-sm text-[#0f172a] uppercase tracking-wide block">
                    2. Ketepatan Waktu & Keberangkatan Terjamin
                  </strong>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mt-1">
                    Memastikan penjemputan dan jadwal keberangkatan berjalan secara tepat waktu dengan pengemudi berpengalaman yang santun dan menguasai rute Kalimantan Timur.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-200 transition-colors">
                <span className="text-amber-500 font-extrabold text-lg mt-0.5 shrink-0">✓</span>
                <div>
                  <strong className="font-display font-bold text-sm text-[#0f172a] uppercase tracking-wide block">
                    3. Kemudahan Akses Door-to-Door & Integrasi Bandara/Pelabuhan
                  </strong>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mt-1">
                    Memberikan kenyamanan antar jemput door to door dari alamat rumah, Bandara SAMS Sepinggan Balikpapan, maupun Pelabuhan Semayang secara efisien.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-200 transition-colors">
                <span className="text-amber-500 font-extrabold text-lg mt-0.5 shrink-0">✓</span>
                <div>
                  <strong className="font-display font-bold text-sm text-[#0f172a] uppercase tracking-wide block">
                    4. Transparansi Tarif & Hubungan Jangka Panjang
                  </strong>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mt-1">
                    Memberikan penawaran harga yang fleksibel dan transparan (mulai dari Rp 150.000-an) tanpa biaya tersembunyi demi menjaga kepercayaan seluruh pelanggan.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </motion.div>

        {/* 3. FILOSOFI BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-gradient-to-br from-[#0b192c] via-[#0f172a] to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden text-left space-y-6"
        >
          <div>
            <span className="font-['Great_Vibes'] text-3xl sm:text-4xl text-amber-400 font-normal block leading-tight">
              Values & Identity
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
              Nilai Utama <span className="text-amber-400">Dhatia Travel</span>
            </h3>
            <p className="text-xs text-slate-300 font-medium mt-1">
              Keamanan, Kenyamanan, Profesionalisme, dan Kepercayaan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-md">
                <Shield className="w-5 h-5 fill-current" />
              </div>
              <h4 className="font-display font-bold text-sm text-white uppercase">1. Keamanan Utama</h4>
              <p className="font-sans text-xs text-slate-300 leading-relaxed">
                Kondisi fisik dan mesin kendaraan yang selalu diperiksa berkala sebelum menempuh rute Kalimantan Timur.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-md">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-sm text-white uppercase">2. Kenyamanan Prima</h4>
              <p className="font-sans text-xs text-slate-300 leading-relaxed">
                Kabin sejuk ber-AC, interior harum steril, dan audio/USB charger di setiap baris tempat duduk.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-md">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-sm text-white uppercase">3. Pengemudi Berpengalaman</h4>
              <p className="font-sans text-xs text-slate-300 leading-relaxed">
                Driver ramah, santun, dan sangat menguasai rute jalanan Balikpapan, Samarinda, Tenggarong hingga Sangatta.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
