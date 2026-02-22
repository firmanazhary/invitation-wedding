import { motion } from 'framer-motion';
import { Clock, 
  CameraOff, 
  Hand, 
  Shirt, 
  Utensils, 
  HeartHandshake } from 'lucide-react';

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
    <section className="py-24 px-8 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-md mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-serif italic text-[#4A3F35] mb-4">Adab-Adab</h3>
          <h4 className="text-2xl font-serif text-[#4A3F35] mb-6">Menghadiri Walimah</h4>
          <div className="flex justify-center mb-8 opacity-40 text-[#B58D67]">❦</div>
          <p className="text-xs text-[#8B7E74] leading-relaxed italic px-4">
            Tanpa mengurangi rasa hormat, ada hal-hal dalam adab seorang muslim ketika menghadiri walimah yang harus diperhatikan:
          </p>
        </motion.div>

        {/* Grid Adab (Sesuai Gambar) */}
        <div className="grid grid-cols-2 gap-4">
          {adabList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-md border-b-4 border-[#4A3F35]/10 flex flex-col items-center justify-center gap-4 min-h-[160px]"
            >
              <div className="text-stone-400">
                {item.icon}
              </div>
              <p className="text-[10px] font-bold text-stone-600 uppercase tracking-tight leading-tight">
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