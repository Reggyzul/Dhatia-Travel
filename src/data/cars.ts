import { Car, Testimonial } from '../types';

export const CARS: Car[] = [
  {
    id: 'innova-reborn',
    name: 'Toyota Innova Reborn',
    nameAr: 'تويوتا إينوفا ريبورن',
    category: 'Kenyamanan Eksekutif',
    pricePerDay: 750000,
    priceDisplay: 'Mulai dari Rp 150.000-an / org | Carter Eksekutif Available',
    image: '/innova3.avif',
    seats: 7,
    transmission: 'Manual/Matic',
    fuel: 'Bensin / Diesel (Senyap & bertenaga)',
    fuelAr: 'بنزين',
    includeList: [
      'AC Digital Double Blower (Super Sejuk)',
      'Kabin Luas, Senyap, Clean & Steril',
      'Audio Touchscreen, Bluetooth & USB Charger',
      'Kursi Ergonomis Reclining Eksekutif',
      'Driver Profesional & Berpengalaman'
    ],
    includeListAr: ['مكيف', 'بلوتوث', 'سائق'],
    description: 'Armada MPV Eksekutif paling favorit di Kalimantan Timur. Kabin lega, suspensi empuk, dan kesenyapan maksimal untuk perjalanan jauh Balikpapan - Samarinda - Sangatta.',
    descriptionAr: 'سيارة تنفيذية فاخرة ومريحة للغاية للرحلات الطويلة.',
    rating: 5.0,
    reviewsCount: 142,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '7 Kursi Penumpang', labelAr: 'السعة', valueAr: '٧ ركاب' },
      { label: 'Fasilitas Utama', value: 'Full AC Digital, Audio Touchscreen, USB Charger Tiap Baris', labelAr: 'الميزات', valueAr: 'مكيف، شاحن' },
      { label: 'Kondisi Kabin', value: 'Selalu Bersih, Steril, Harum & Rutin Servis', labelAr: 'الحالة', valueAr: 'ممتازة' },
      { label: 'Tarif Perjalanan', value: 'Mulai dari Rp 150.000-an / org', labelAr: 'الأجرة', valueAr: '١٥٠ ألف+' }
    ]
  },
  {
    id: 'veloz-fwd',
    name: 'Toyota Veloz FWD',
    nameAr: 'تويوتا فيلوز',
    category: 'Elegan & Fitur Modern',
    pricePerDay: 650000,
    priceDisplay: 'Mulai dari Rp 150.000-an / org | Carter Privat Available',
    image: '/xenia.avif',
    seats: 7,
    transmission: 'Manual/Matic',
    fuel: 'Bensin (Irit & Halus)',
    fuelAr: 'بنزين',
    includeList: [
      'AC Auto Climate Control Sejuk & Merata',
      'Interior Modern & Kabin Senyap Steril',
      'Head Unit Digital, Bluetooth & USB Charging',
      'Fitur Keselamatan Modern Advanced',
      'Driver Ramah & Berpengalaman'
    ],
    includeListAr: ['مكيف', 'بلوتوث', 'سائق'],
    description: 'MPV modern stylish berteknologi FWD dengan fitur kenyamanan digital lengkap, kabin bersih steril, dan kenyamanan suspensi halus cocok untuk eksekutif & keluarga.',
    descriptionAr: 'سيارة حديثة وأنيقة ومريحة جداً.',
    rating: 4.9,
    reviewsCount: 118,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '7 Kursi Penumpang', labelAr: 'السعة', valueAr: '٧ ركاب' },
      { label: 'Fasilitas Utama', value: 'AC Auto Climate, Audio Digital Bluetooth, USB Charger Port', labelAr: 'الميزات', valueAr: 'مكيف، شاشة' },
      { label: 'Kondisi Kabin', value: 'Kabin Steril, Harum & Terawat Prima', labelAr: 'الحالة', valueAr: 'ممتازة' },
      { label: 'Tarif Perjalanan', value: 'Mulai dari Rp 150.000-an / org', labelAr: 'الأجرة', valueAr: '١٥٠ ألف+' }
    ]
  },
  {
    id: 'avanza-fwd',
    name: 'Toyota Avanza FWD',
    nameAr: 'تويوتا أفانزا',
    category: 'Praktis & Nyaman',
    pricePerDay: 600000,
    priceDisplay: 'Mulai dari Rp 150.000-an / org | Travel Reguler & Carter',
    image: '/avanza.avif',
    seats: 7,
    transmission: 'Manual/Matic',
    fuel: 'Bensin (Irit & Handal)',
    fuelAr: 'بنزين',
    includeList: [
      'AC Double Blower Dingin Merata',
      'Kabin Bersih, Harum & Steril',
      'System Audio Bluetooth & USB Charger',
      'Bagasi Luas & Tempat Duduk Reclining',
      'Driver Pengalaman & Tepat Waktu'
    ],
    includeListAr: ['مكيف', 'بلوتوث', 'سائق'],
    description: 'MPV andalan yang praktis, lincah, dan sangat nyaman. Pilihan paling efisien untuk travel reguler antar-kota maupun sewa carter drop alamat.',
    descriptionAr: 'سيارة عملية ومريحة جداً للرحلات.',
    rating: 4.9,
    reviewsCount: 135,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '7 Kursi Penumpang', labelAr: 'السعة', valueAr: '٧ ركاب' },
      { label: 'Fasilitas Utama', value: 'AC Double Blower, Audio Bluetooth, USB Charger Port', labelAr: 'الميزات', valueAr: 'مكيف، شاحن' },
      { label: 'Kondisi Kabin', value: 'Unit Bersih, Steril & Rutin Servis', labelAr: 'الحالة', valueAr: 'ممتازة' },
      { label: 'Tarif Perjalanan', value: 'Mulai dari Rp 150.000-an / org', labelAr: 'الأجرة', valueAr: '١٥٠ ألف+' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'H. Riswan Pratama',
    role: 'Pebisnis / Penglaju Samarinda - Balikpapan',
    text: 'Sangat terkesan dengan pelayanan Dhatia Travel. Naik Innova Reborn dari Bandara Balikpapan ke Samarinda, pengemudinya sangat berpengalaman, tepat waktu, dan kabinnya sangat bersih serta dingin.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    carModel: 'Toyota Innova Reborn',
    date: '2026-07-28'
  },
  {
    id: '2',
    name: 'Rina Sastrawan',
    role: 'Penumpang Reguler Tenggarong - Sangatta',
    text: 'Pelayanan Door to Door Dhatia Travel luar biasa membantu! Saya dijemput langsung di rumah daerah Loa Janan Tenggarong dan diantar ke Sangatta tanpa repot. Driver sopan dan ramah.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    carModel: 'Toyota Veloz FWD',
    date: '2026-07-22'
  },
  {
    id: '3',
    name: 'Budi Santoso',
    role: 'Pengguna Jasa Pelabuhan & Bandara',
    text: 'Selalu langganan Dhatia Travel untuk urusan dinas dari Pelabuhan Semayang ke Kota Bangun. Harganya sangat transparan, mobil Avanza-nya harum dan bersih, USB charger siap di perjalanan.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    carModel: 'Toyota Avanza FWD',
    date: '2026-07-18'
  }
];
