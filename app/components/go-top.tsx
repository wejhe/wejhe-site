"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function GoTop() {
  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowGoTop(currentScrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <AnimatePresence>
        {showGoTop && (
          <motion.button
            onClick={handleGoTop}
            className="flex items-center justify-center gap-[8px] text-[16px] fixed bottom-body-padding-mobile left-1/2 -translate-x-1/2 z-48 bg-gradient-to-r from-gradient-purple-start to-gradient-purple-end text-white py-[8px] px-[18px] rounded-[100px] shadow-2xl transition-all cursor-pointer hover:from-gradient-purple-hover-start hover:to-gradient-purple-hover-end active:from-gradient-purple-hover-start active:to-gradient-purple-hover-end"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 200 }}
            transition={{ duration: 0.5, ease: "linear" }}
          >
            <FaArrowUp size={16} />
            <p>Back to Top</p>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
