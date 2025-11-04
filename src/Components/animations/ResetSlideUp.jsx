"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ResetSlideUp = ({ children, delay = 0, className = "", resetKey }) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Force re-render when resetKey changes
    setKey(prev => prev + 1);
  }, [resetKey]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -32 }}
        transition={{ 
          duration: 0.6, 
          ease: [0.22, 1, 0.36, 1], 
          delay 
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default ResetSlideUp;
