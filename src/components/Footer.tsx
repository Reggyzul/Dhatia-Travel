import React from 'react';
import { Phone, MapPin, MessageCircle, Facebook, Clock, ShieldCheck, Globe } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
  lang: 'ID' | 'EN';
}

export default function Footer({ onNavClick, lang }: FooterProps) {
  const t = TRANSLATIONS[lang];

  return (
    <footer id="contact" className="bg-[#0b192c] text-white pt-20 pb-8 border-t border-slate-800 relative overflow-hidden text-left">
      
      {/* Absolute top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-teal-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper pre-footer callout section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12 border-b border-slate-800 items-center">
          <div className="space-y-2">
            <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-amber-400">
              DHATIA TRAVEL KALIMANTAN TIMUR
            </h3>
            <p className="font-sans text-sm text-slate-300 font-medium">
              "Mitra Perjalanan Terpercaya, Utamakan Keamanan & Kenyamanan di Kalimantan"
            </p>
          </div>
          <div className="flex justify-start md:justify-end">
            <a
              href="https://wa.me/6281264008000?text=Halo%20Dhatia%20Travel,%20saya%20ingin%20tanya%20jadwal%20dan%20pemesanan%20rute%20Kalimantan%20Timur"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-amber-500 via-amber-600 to-teal-600 hover:from-amber-600 hover:to-teal-700 text-white font-sans font-extrabold text-xs uppercase px-6 py-3.5 rounded-2xl shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2.5 cursor-pointer border border-amber-400/30 hover:scale-105"
            >
              <MessageCircle className="w-4.5 h-4.5 fill-current" />
              <span>WhatsApp: 081264008000</span>
            </a>
          </div>
        </div>

        {/* Core Footer grid columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-16 pb-12">
          
          {/* Column 1: Brand & Office Address */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white px-3 py-1.5 rounded-2xl shadow-md border border-slate-700/80 inline-block">
                <img 
                  src="/logo-dhatia.png" 
                  alt="DHATIA Tour Travel Logo" 
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>

            <p className="font-sans text-xs text-slate-400 leading-relaxed max-w-sm font-medium">
              Penyedia jasa travel reguler & sewa mobil terpercaya melayani Balikpapan, Samarinda, Tenggarong, Kota Bangun, hingga Sangatta dengan unit Innova Reborn, Veloz FWD, dan Avanza FWD.
            </p>

            <div className="text-xs text-slate-300 font-sans space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong>Alamat Kantor:</strong><br />
                  Jl. Poros Loa Janan - Tenggarong, Desa Bakungan, Kec. Loa Janan, Kab. Kutai Kartanegara, Kalimantan Timur.
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4.5 h-4.5 text-amber-400 shrink-0" />
                <span>WhatsApp / Telp: <strong className="text-amber-400">081264008000</strong></span>
              </div>

              <div className="flex items-center gap-2.5">
                <Facebook className="w-4.5 h-4.5 text-teal-400 shrink-0" />
                <span>Facebook Resmi: <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-teal-400 font-bold hover:underline">Bindo Pratama</a></span>
              </div>

              <p className="pt-2 text-slate-500 text-[11px]">©2026 Dhatia Travel Kalimantan Timur. Semua Hak Dilindungi.</p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-extrabold text-sm tracking-widest text-amber-400 uppercase border-l-2 border-amber-500 pl-2.5">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-slate-400 font-medium">
              <li>
                <button onClick={() => onNavClick('home')} className="hover:text-amber-400 transition-colors cursor-pointer text-left w-full">
                  • Beranda utama
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('advantages')} className="hover:text-amber-400 transition-colors cursor-pointer text-left w-full">
                  • Keunggulan Layanan
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('cars')} className="hover:text-amber-400 transition-colors cursor-pointer text-left w-full">
                  • Armada Mobil (Innova, Veloz, Avanza)
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('services')} className="hover:text-amber-400 transition-colors cursor-pointer text-left w-full">
                  • Rute & Tarif (Bandara, Pelabuhan, Sangatta)
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('about')} className="hover:text-amber-400 transition-colors cursor-pointer text-left w-full">
                  • Profil, Visi & Misi Dhatia Travel
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Location */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-extrabold text-sm tracking-widest text-amber-400 uppercase border-l-2 border-amber-500 pl-2.5">
              Layanan CS 24 Jam
            </h4>

            <div className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700 space-y-2.5">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Pemesanan WA Fast Response</span>
                  <a href="https://wa.me/6281264008000" target="_blank" rel="noreferrer" className="font-display font-black text-lg text-amber-400 hover:underline">
                    081264008000
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700 space-y-1">
              <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase">
                <Facebook className="w-4 h-4 shrink-0" />
                <span>Facebook Official</span>
              </div>
              <p className="text-xs text-slate-300 font-medium">
                Akun Facebook: <strong className="text-white">Bindo Pratama</strong>
              </p>
            </div>

            {/* Embedded Google Map Kutai Kartanegara / Loa Janan */}
            <div className="pt-2">
              <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-xl w-full h-36 bg-slate-900 relative">
                <iframe 
                  src="https://maps.google.com/maps?q=-0.584605,117.067425&hl=id&z=14&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Dhatia Travel Loa Janan Kutai Kartanegara Kaltim"
                ></iframe>
              </div>
            </div>

          </div>

        </div>

        {/* Lower Disclaimer */}
        <div className="border-t border-slate-800 pt-8 text-center text-[11px] text-slate-500 font-sans leading-relaxed">
          {t.footer_disclaimer}
        </div>

      </div>
    </footer>
  );
}
