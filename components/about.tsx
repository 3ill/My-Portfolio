'use client';

import React, { useEffect } from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import StarCanvas from './stars';

const About = () => {
  const { ref } = useSectionInView('About');
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 scroll-mt-28"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3 font-satoshi max-sm:text-[17px] font-medium max-sm:p-3 ">
        After earning my degree in{' '}
        <span className="font-semibold">Computer Science</span>, I embarked on a
        journey to follow my passion for software engineering. Along the way, I
        sought to continually expand my knowledge and skills by enrolling in
        various bootcamps and undertaking extensive coursework in{' '}
        <span className="font-medium">full-stack web development</span>.
        Eventually, I discovered my true calling in{' '}
        <span className="font-medium">blockchain development.</span>
      </p>

      <p className="font-satoshi max-sm:text-[17px] font-medium max-sm:p-3 ">
        My specialization in blockchain technology has allowed me to delve into
        the exciting world of decentralized applications (dApps), where I have a
        knack for{' '}
        <span className="italic">creating unique and innovative solutions</span>
        . <br />
        My core technology stack includes{' '}
        <span className="font-semibold">
          React, Next.js, Solidity, JavaScript, Node.js, Ethereum Virtual
          Machines (EVMs), and MongoDB
        </span>{' '}
        . I also have proficiency in{' '}
        <span className="font-semibold">TypeScript and Rust</span> . My
        insatiable curiosity drives me to explore and adopt emerging
        technologies to stay at the forefront of this ever-evolving field.
      </p>

      <p className="font-satoshi font-medium max-sm:text-[17px] max-sm:p-3 ">
        Currently, I am actively seeking a{' '}
        <span className="font-medium">
          fulltime role as a smart contract developer
        </span>
        , where I can leverage my skills and expertise to contribute to
        groundbreaking blockchain projects.
      </p>

      <p className="font-satoshi font-medium max-sm:text-[17px] max-sm:p-3 ">{`Beyond coding, I find joy in other pursuits. I'm an avid gamer, an enthusiast of anime, and a lover of music. Recently, I've been delving into the fascinating realms of psychology and literature, continually expanding my horizons and feeding my intellectual curiosity.`}</p>
    </motion.section>
  );
};

export default About;
