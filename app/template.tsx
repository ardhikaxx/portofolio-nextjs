'use client';

import { motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className="min-h-screen w-full bg-black text-white"
    >
      {children}
    </motion.div>
  );
}
