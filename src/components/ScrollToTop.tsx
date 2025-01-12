import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { animateScroll as scroll } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => scroll.scrollToTop()}
          className="fixed bottom-4 right-4 p-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-200 z-50 dark:bg-orange-600 dark:hover:bg-orange-700"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;