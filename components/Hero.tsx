/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi I'm Rosanno",
      'Guy-who-love-coding',
      'And i can do whatever i want today.',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="relavite h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://scontent.flgp1-1.fna.fbcdn.net/v/t39.30808-1/263445935_2973168586345839_2191501231389724197_n.jpg?stp=c0.0.240.240a_dst-jpg_p240x240&_nc_cat=109&ccb=1-7&_nc_sid=f67be1&_nc_eui2=AeHv_NBjaJ4mCa-SFox3HqbhoCpJyj7PYBGgKknKPs9gEf_zqIPRvEaP2ERXKB6CXc-rdAgXe50N5BzcTKTzdtmi&_nc_ohc=sDl8T-rCrdoAX_l_6Ip&_nc_ht=scontent.flgp1-1.fna&oh=00_AfAXvRduBLTIqqomzlqmayArdiYlvGropanWo0iy3py5Bg&oe=63790B93"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Fullstack Developer
        </h2>
        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
