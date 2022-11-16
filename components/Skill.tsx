/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';

type Skills = {
  id: number;
  imgUrl: string;
  profieciency: string;
};

type Props = {
  skill: Skills;
  directionLeft?: boolean;
};

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="rounded-full border border-gray-500 overflow-hidden relative"
      >
        <img
          src={skill.imgUrl}
          alt=""
          className="object-contain p-4 w-14 h-14 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
      </motion.div>
    </div>
  );
};

export default Skill;
