import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type PageTransitionProps = {
  children: ReactNode;
  transitionType?: 'fade' | 'slide-up' | 'slide-down';
};

const PageTransition = ({ 
  children, 
  transitionType = 'fade' 
}: PageTransitionProps) => {
  
  const variants = {
    'fade': {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    'slide-up': {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
    },
    'slide-down': {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
    },
  };
  
  return (
    <motion.div
      initial={variants[transitionType].initial}
      animate={variants[transitionType].animate}
      exit={variants[transitionType].exit}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
