'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';

import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

const Intro = () => {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClicked } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className=" items-center justify-center mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src="/Profile.jpg"
              alt="Chike profile"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className=" absolute text-4xl bottom-0 right-0 "
          >
            👋🏾
          </motion.span>
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-2xl font-medium font-satoshi !leading-[1.5] sm:text-2xl max-sm:text-[20px] group"
      >
        <span className="font-bold hover:text-3xl transition">{`Hello, I'm Chikezie`}</span>
        ,{` I'm a `}{' '}
        <span className="font-bold group-hover:scale-110 transition">
          Blockchain developer
        </span>{' '}
        with <span className="font-bold">over 3 years</span> of experience. I am
        driven by a deep passion for blockchain technology and its
        transformative potential. With expertise in{' '}
        <span className=" italic">
          Solidity, JavaScript, Ethers.js, Rust, and Truffle
        </span>
        , I bring a solid foundation to the table. My strong{' '}
        <span className="font-bold hover:scale-110 transition">
          problem-solving abilities, attention to detail, and commitment to
          continuous learning
        </span>{' '}
        enable me to develop secure, scalable, and user-centric blockchain
        solutions.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
      >
        <Link
          href="#contact"
          className=" group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition font-satoshi "
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClicked(Date.now());
          }}
        >
          Contact me here{' '}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/CV.pdf"
          download={true}
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer dark:text-white font-satoshi dark:bg-gray-600 borderBlack"
        >
          Download CV{' '}
          <HiDownload className=" opacity-60 group-hover:translate-y-1 transition" />{' '}
        </a>

        <a
          href="https://linkedin.com/in/3illbaby"
          target="_blank"
          className="bg-white dark:bg-gray-200 text-gray-700 p-4 flex items-center gap-2 rounded-full px-7 py-3  outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 transition cursor-pointer border border-black/10"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/3ill"
          target="_blank"
          className="bg-white dark:bg-gray-200 text-gray-700 p-4 flex items-center gap-2 rounded-full px-7 py-3  outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
