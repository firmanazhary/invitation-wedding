import { motion } from 'framer-motion';
import { DATA_PENGANTIN } from '../constans/content';
import bunga from '../assets/bunga.png';
import burung from '../assets/burung.webp';

const LoveStory = () => {
  return (
    <section className="relative py-24 px-8 bg-[#E0F2FE] overflow-hidden">
      {/* 1. Background Layering & Texture */}
      <div className="absolute inset-0 bg-[#D7E9F7] opacity-50" />
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/watercolor-paper.png')] mix-blend-multiply" />

      {/* 2. Ornamen Burung yang Terbang di Antara Cerita */}
      <motion.img 
        src={burung}
        animate={{ x: [-100, 500], y: [0, -50], opacity: [0, 0.4, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] left-0 w-32 opacity-30 grayscale brightness-150 pointer-events-none"
      />

      <div className="max-w-md mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h3 className="text-5xl font-serif italic text-[#334155] drop-shadow-sm">Our Love Story</h3>
          <div className="flex justify-center mt-6 opacity-60 text-[#38BDF8]">
             <span className="text-3xl">❦</span>
          </div>
        </motion.div>

        {/* 3. Timeline Story dengan Jalur Garis */}
        <div className="relative space-y-16">
          {/* Garis Tengah Putus-putus */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-dashed-line opacity-20 border-l-2 border-dashed border-[#38BDF8]" />

          {DATA_PENGANTIN.loveStory.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative group"
            >
              {/* Ornamen Bunga Kecil di Samping Kartu */}
              <motion.img 
                src={bunga} 
                className={`absolute -top-10 ${index % 2 === 0 ? '-right-10' : '-left-10'} w-32 opacity-40 z-0 pointer-events-none ${index % 2 !== 0 && 'scale-x-[-1]'}`}
              />

              {/* Kartu Cerita Mewah */}
              <div className="relative bg-white/60 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-xl border-t-4 border-white border-b-4 border-b-[#38BDF8]/20 z-10 overflow-hidden">
                {/* Dot Indikator Timeline */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-4 border-[#38BDF8] rounded-full shadow-md z-20" />
                
                <h4 className="text-2xl font-serif italic text-[#1E293B] mb-2 drop-shadow-sm">{item.judul}</h4>
                <div className="bg-[#38BDF8]/10 inline-block px-4 py-1 rounded-full mb-4">
                  <p className="text-[#0EA5E9] font-black text-[10px] uppercase tracking-[0.3em]">
                    {item.waktu}
                  </p>
                </div>
                <p className="text-xs md:text-sm text-[#475569] leading-relaxed italic font-medium">
                  "{item.deskripsi}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. Ornamen Bunga Besar di Pojok Bawah */}
      <motion.img 
        src={bunga}
        animate={{ rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute -bottom-20 -right-20 w-80 opacity-50 pointer-events-none"
      />
    </section>
  );
};

export default LoveStory;