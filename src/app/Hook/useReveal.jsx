'use client'


import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Reveal = ({
  children,
  threshold = 0.1,
  variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  transition = { duration: 0.5, ease: 'linear' },
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold });
  const animationRef = useRef(controls);

  useEffect(() => {
    if (inView) {
      animationRef.current.start('visible');
    } else {
      animationRef.current.start('hidden');
    }
  }, [inView]);

  const childVariants = {
    ...variants,
    hidden: {
      ...variants.hidden,
      transition,
    },
    visible: {
      ...variants.visible,
      transition,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={animationRef.current}
      variants={childVariants}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
