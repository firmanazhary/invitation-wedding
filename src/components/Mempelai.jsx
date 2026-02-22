import { motion } from 'framer-motion';
import { DATA_PENGANTIN } from '../constans/content';
import manImage from '../assets/man-image.png';
import womanImage from '../assets/woman-image.png';
import bunga from '../assets/bunga.png';
import { Instagram } from 'lucide-react';

const Mempelai = () => {
  return (
    <section id='mempelai' className="py-24 px-8 bg-[#E0F2FE] relative overflow-hidden">
      <div className="max-w-md mx-auto text-center relative z-10">
        <h3 className="text-2xl md:text-3xl font-serif text-[#334155] mb-16 drop-shadow-sm" dir="rtl">بِسْمِ اللّهِ الرَّحْمَنِ الرَّحِيْمِ</h3>

        {/* Pria */}
        <div className="relative mb-32 group">
          <motion.img src={bunga} className="absolute -top-12 -right-16 w-48 opacity-70 z-10 pointer-events-none" />
          <motion.div className="relative z-30">
            <h3 className="text-4xl font-serif font-bold text-[#334155] mb-2 italic">{DATA_PENGANTIN.pria.nama}</h3>
            <div className="relative w-64 h-80 mx-auto rounded-t-full border-8 border-white shadow-2xl overflow-hidden mb-6">
               <img src={manImage} alt="Pria" className="w-full h-full object-cover" />
            </div>
            <button className="relative z-40 bg-white/80 backdrop-blur-sm border border-[#38BDF8]/30 px-6 py-2 rounded-full text-[#38BDF8] flex items-center justify-center gap-2 mx-auto text-[10px] font-black uppercase tracking-widest shadow-md">
              <Instagram size={14} /> @{DATA_PENGANTIN.pria.nama.toLowerCase()}
            </button>
          </motion.div>
        </div>

        {/* Wanita */}
        <div className="relative pb-20 group">
          <motion.img src={bunga} className="absolute -bottom-12 -left-20 w-56 opacity-70 z-10 pointer-events-none rotate-180" />
          <motion.div className="relative z-30">
            <h3 className="text-4xl font-serif font-bold text-[#334155] mb-2 italic">{DATA_PENGANTIN.wanita.nama}</h3>
            <div className="relative w-64 h-80 mx-auto rounded-t-full border-8 border-white shadow-2xl overflow-hidden mb-6">
               <img src={womanImage} alt="Wanita" className="w-full h-full object-cover" />
            </div>
            <button className="relative z-40 bg-white/80 backdrop-blur-sm border border-[#38BDF8]/30 px-6 py-2 rounded-full text-[#38BDF8] flex items-center justify-center gap-2 mx-auto text-[10px] font-black uppercase tracking-widest shadow-md">
              <Instagram size={14} /> @{DATA_PENGANTIN.wanita.nama.toLowerCase()}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Mempelai;