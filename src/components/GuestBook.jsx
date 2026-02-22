import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useSearchParams } from 'react-router-dom';
import { Send, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const GuestBook = () => {
  const [searchParams] = useSearchParams();
  const [comments, setComments] = useState([]);
  const [nama, setNama] = useState(searchParams.get('to') || '');
  const [ucapan, setUcapan] = useState('');

  useEffect(() => {
    const ambilData = async () => {
      const { data } = await supabase.from('comments').select('*').order('created_at', { ascending: false });
      setComments(data || []);
    };
    ambilData();
  }, []);

  const kirimUcapan = async (e) => {
    e.preventDefault();
    if (!nama || !ucapan) return alert("Mohon isi nama dan doa");
    const { error } = await supabase.from('comments').insert([{ name: nama, message: ucapan, status: 'Hadir' }]);
    if (!error) setUcapan('');
  };

  return (
    <section id='guestbook' className="py-24 px-6 bg-[#E0F2FE] relative overflow-hidden">
      <div className="max-w-md mx-auto text-center relative z-10">
        <h3 className="text-4xl font-serif italic text-[#334155] mb-2">Doa & Ucapan</h3>
        <p className="text-sm text-[#64748b] mb-10 italic">Berikan doa terbaik Anda untuk kami.</p>

        <div className="bg-white/70 backdrop-blur-md rounded-[2.5rem] shadow-2xl p-8 mb-12 border border-white/50">
          <form onSubmit={kirimUcapan} className="space-y-4">
            <input type="text" placeholder="Nama Anda" value={nama} onChange={(e) => setNama(e.target.value)} className="w-full p-4 rounded-2xl border border-blue-100 bg-white/80 outline-none text-sm" />
            <textarea placeholder="Tulis doa..." value={ucapan} onChange={(e) => setUcapan(e.target.value)} className="w-full p-4 rounded-2xl border border-blue-100 bg-white/80 outline-none text-sm min-h-[120px]" />
            <button type="submit" className="w-full bg-[#38BDF8] text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-xs flex justify-center items-center gap-2 shadow-lg shadow-blue-200">
              <Send size={16} /> Kirim Doa
            </button>
          </form>
        </div>

        <div className="relative">
          <div className="space-y-4 text-left h-[450px] overflow-y-auto pr-3 custom-scrollbar scroll-smooth">
            <AnimatePresence initial={false}>
              {comments.map((item, index) => (
                <motion.div key={item.id || index} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white/90 p-6 rounded-[2rem] shadow-sm border-l-4 border-[#38BDF8] relative group">
                  <p className="font-bold text-[#334155] text-sm mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#38BDF8]" /> {item.name}
                  </p>
                  <p className="text-[#475569] text-xs italic leading-relaxed line-clamp-4">"{item.message}"</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#E0F2FE] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
export default GuestBook;