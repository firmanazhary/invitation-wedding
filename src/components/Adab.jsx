import { motion } from 'framer-motion';
import { Clock, 
  CameraOff, 
  Hand, 
  Shirt, 
  Utensils, 
  HeartHandshake } from 'lucide-react';
import bunga from '../assets/bunga.png'; // Aset mawar besar

const Adab = () => {
  const adabList = [
    { icon: <Clock size={32} />, text: "Memperhatikan Waktu Sholat" },
    { icon: <CameraOff size={32} />, text: "Dilarang Mengambil Gambar Tanpa Izin" },
    { icon: <Hand size={32} />, text: "Dilarang Berjabat Tangan yang Bukan Mahrom" },
    { icon: <Shirt size={32} />, text: "Memakai Pakaian Yang Sopan dan Menutup Aurat" },
    { icon: <Utensils size={32} />, text: "Memperhatikan Adab Makan dan Minum" },
    { icon: <HeartHandshake size={32} />, text: "Mendo'akan Kedua Mempelai" },
  ];

  return (
    <section className="py-24 px-8 bg-[#E0F2FE] relative overflow-hidden">
      
      {/* 1. Background Decor: Tekstur Watercolor Biru */}
      <div className="absolute inset-0 bg-[#D7E9F7] opacity-50" />
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/watercolor-paper.png')] mix-blend-multiply" />

      {/* 2. Ornamen Bunga Mawar Pojok (Non-Wayang Edition) */}
      <motion.img 
        src={bunga} 
        animate={{ rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute -top-16 -left-16 w-56 opacity-60 pointer-events-none z-0" 
      />
      <motion.img 
        src={bunga} 
        animate={{ rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute -bottom-16 -right-16 w-64 opacity-60 pointer-events-none z-0 rotate-180" 
      />

      <div className="max-w-md mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h3 className="text-4xl font-serif italic text-[#334155] mb-2 drop-shadow-sm">Adab-Adab</h3>
          <h4 className="text-2xl font-serif text-[#334155] mb-6">Menghadiri Walimah</h4>
          <div className="flex justify-center mb-8 opacity-40 text-[#38BDF8]">
             <span className="text-2xl">❦</span>
          </div>
          <p className="text-xs text-[#64748b] leading-relaxed italic px-4 font-medium">
            Tanpa mengurangi rasa hormat, ada hal-hal dalam adab seorang muslim ketika menghadiri walimah yang harus diperhatikan:
          </p>
        </motion.div>

        {/* 3. Grid Adab (Nuansa Biru Putih Modern) */}
        <div className="grid grid-cols-2 gap-4">
          {adabList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/70 backdrop-blur-md p-6 rounded-3xl shadow-xl shadow-blue-200/20 border-b-4 border-[#38BDF8]/30 flex flex-col items-center justify-center gap-4 min-h-[160px] group hover:bg-white transition-all"
            >
              <div className="text-[#38BDF8] group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <p className="text-[10px] font-black text-[#475569] uppercase tracking-widest leading-tight">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Adab;