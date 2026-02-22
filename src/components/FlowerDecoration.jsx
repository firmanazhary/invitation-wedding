import { motion } from 'framer-motion';

const FlowerDecoration = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
      {/* Pojok Kiri Atas */}
      <motion.div 
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute -top-10 -left-10 text-8xl"
      >
        🌸
      </motion.div>
      {/* Pojok Kanan Bawah */}
      <motion.div 
        animate={{ rotate: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-10 -right-10 text-9xl"
      >
        🌺
      </motion.div>
    </div>
  );
};

export default FlowerDecoration;