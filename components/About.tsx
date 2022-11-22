import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col px-10 md:px-0 space-x-0 md:space-x-10 relative h-screen text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="./img/dev-ed-wave.png"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-contain md:rounded-lg md:w-60 md:h-60 xl:w-[500px] xl:h-[700px]"
      />

      <div className="space-y-10 px-0 md:px-0">
        <h4 className="text-4xl font-semibold">Personal details</h4>
        <p className="text-base">
          Hi, i&apos;m Rosanno Macabuhay, a highly motivated person and creative
          full developer developer dedicated to developing and optimizing
          interactive, user friendly, and feature-rich websites. My objective is
          to help business owners and non-profit organizations to develop and
          implement their desired web application
        </p>
      </div>
    </motion.div>
  );
};

export default About;
