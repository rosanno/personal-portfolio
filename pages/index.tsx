/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { BsSun, BsMoon } from "react-icons/bs";
import useDarkMode from "../hooks/useDarkMode";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

interface Icons {
  icon: string;
}

const Icon = ({ icon }: Icons) => (
  <img src={icon} className="grayscale" alt="" />
);

const Home: NextPage = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearInterval(loadingInterval);
  }, []);


  if (isLoading) return <Loader />;

  return (
    <div className="bg-[#FFFFFF] dark:bg-[rgb(36,36,36)] text-black dark:text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 transition-all duration-500 scrollbar-thin scrollbar-thumb-[#2EB086]/20 scrollbar-track-[rgb(94,94,94)] dark:scrollbar-track-[rgb(36,36,36)] scroll-smooth">
      <Head>
        <title>Portfolio - Rosanno Macabuhay</title>
        <link rel="shortcut icon" href="/icon.png" />
      </Head>

      <Header />

      <section id="hero" className="snap-center relative">
        <div
          onClick={() => setTheme(colorTheme)}
          className="flex justify-center fixed right-6 bottom-10 text-yellow-400/40 hover:text-yellow-400 text-xl bg-gray-500/10 hover:bg-gray-500 transition duration-500 p-2 rounded-full cursor-pointer z-10"
        >
          {colorTheme === "light" ? <BsSun /> : <BsMoon />}
        </div>

        <div className="absolute top-[85px] right-[35px] md:top-[70px] md:right-[55px]">
          <span className="animate-ping absolute right-[1px] w-12 h-full inline-flex rounded-full bg-gray-500 opacity-50"></span>
          <div className="p-3 rounded-full w-12 bg-gray-700/5 dark:bg-gray-500/30 bg-opacity-40 z-10">
            <Icon icon="./img/nodejs-icon.svg" />
          </div>
        </div>
        <div className="absolute bottom-10 right-1/3">
          <span className="animate-ping absolute right-[1px] w-12 h-full inline-flex rounded-full bg-gray-500 opacity-50"></span>
          <div className="p-3 rounded-full w-12 bg-gray-700/5 dark:bg-gray-500/30 bg-opacity-40 z-10">
            <Icon icon="./img/react-icon.svg" />
          </div>
        </div>
        <div className="absolute top-[20%] left-[40px]">
          <span className="animate-ping absolute right-[1px] w-12 h-full inline-flex rounded-full bg-gray-500 opacity-50"></span>
          <div className="p-3 rounded-full w-12 bg-gray-700/5 dark:bg-gray-500/30 bg-opacity-40 z-10">
            <Icon icon="./img/typescript-icon.svg" />
          </div>
        </div>
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
};;;;;;;;

export default Home;
