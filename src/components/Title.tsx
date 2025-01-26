'use client';
import { motion, useInView } from 'framer-motion';
import * as React from 'react';

export function Title({ text }: { text: string }) {
  const splittedText = text.split('');

  const pullupVariant = {
    initial: { y: 10, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
  };
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex justify-center ">
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? 'animate' : ''}
          custom={i}
          className='text-7xl text-center sm:text-4xl tracking-tighter md:text-7xl md:leading-[4rem] font-mystery-quest text-[#C7F9CC]'
        >
          {current == ' ' ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}