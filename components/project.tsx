'use client';

import { useRef } from 'react';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BsFolder2Open } from 'react-icons/bs';

//? Specific typing
type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl }: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mb-3 sm:mb-8 last:mb-0 group  max-sm:p-3 "
    >
      <section className=" group-even:pl-8 bg-gray-100  dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 max-w-[42rem] border borderBlack overflow-hidden sm:pr-8 max-sm:pr-[100px] max-sm:w-[330px] relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0  hover:bg-gray-200 transition rounded-lg max-sm:hidden ">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
          <h3 className="text-2xl font-satoshi font-semibold dark:text-gray-200 ">
            {title}
          </h3>
          <p className="mt-2 font-satoshi leading-relaxed text-gray-700 ">
            {description}
          </p>
          <ul className="flex flex-wrap p-2 mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full font-satoshi"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <BsFolder2Open
          width={80}
          height={80}
          className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 transition group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 "
        />
        {/* <Image
          src={imageUrl}
          alt="projects i worked on"
          quality={95}
          className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 transition group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2"
        /> */}
      </section>
      {/**Mobile Projects view */}
      <section className="flex flex-col gap-[10px] md:hidden">
        <div className=" border-white border-opacity-40 bg-gray-400 bg-opacity-80 shadow-lg shadow-black/[0.03]  w-[300px] h-[350px] rounded-[9px] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 flex flex-col items-center hover:scale-110 active:scale-105 transition-all">
          <div className="flex justify-center gap-5 pt-5">
            <BsFolder2Open className="w-[50px] h-[50px]" />
            <h3 className=" font-satoshi font-bold text-gray-950 dark:text-gray-200 text-[30px]">
              {title}
            </h3>
          </div>
          <div className="flex justify-center p-5 ">
            <p className="font-satoshi text-[14px] text-medium pt-5 text-gray-950 dark:text-gray-400">
              {description}
            </p>
          </div>
          <ul className="flex flex-wrap gap-2 p-5">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </motion.div>
  );
};

export default Project;
