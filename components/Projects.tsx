/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { projects } from "../data";
import { AiFillGithub } from "react-icons/ai";
import { RiShareBoxLine } from "react-icons/ri";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import SwiperCore, { Navigation, Lazy } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/lazy";

type Props = {};

const Projects = (props: Props) => {
  const swiperRef = useRef<SwiperCore>();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div
        id={"slider"}
        className="relative w-full flex scrollbar overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scroll-smooth mt-24 md:mt-64 lg:mt-40"
      >
        <FaChevronLeft
          className="text-3xl absolute top-1/3 left-1/4 cursor-pointer z-10"
          onClick={() => swiperRef.current?.slidePrev()}
        />
        <FaChevronRight
          className="text-3xl absolute top-1/3 right-1/4 cursor-pointer z-10"
          onClick={() => swiperRef.current?.slideNext()}
        />
        <Swiper
          lazy={true}
          modules={[Lazy]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {projects.map((project, i) => (
            <SwiperSlide key={project.id}>
              <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                <img
                  data-src={project.src}
                  alt=""
                  className="lg:w-[540px] rounded-tl-lg rounded-tr-lg swiper-lazy"
                />
                <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                  <div className="flex justify-center items-center space-x-4">
                    <h4 className="text-xl text-center">{project.title}</h4>
                    {project.url !== "" && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block hover:animate-pulse text-xl"
                      >
                        <RiShareBoxLine />
                      </a>
                    )}
                    {project.github !== undefined && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block hover:animate-pulse text-xl"
                      >
                        <AiFillGithub />
                      </a>
                    )}
                  </div>

                  <div className="flex flex-col items-center space-y-4">
                    <h4 className="text-lg font-semibold">Tech Stacks</h4>
                    <div className="flex items-center gap-3">
                      {project.techStacks.map((tech, idx) => (
                        <div key={idx}>
                          <img
                            data-src={tech}
                            alt=""
                            className="w-8 h-8 swiper-lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-base md:text-lg lg:text-base text-center md:text-left">
                    {project.desc}
                  </p>
                </div>
              </div>
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full absolute top-[30%] bg-[#2EB086]/30 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
