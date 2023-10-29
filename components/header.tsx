'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const {
    activeSection,
    setActiveSection,
    setTimeOfLastClicked,
    active,
    setIsActive,
  } = useActiveSectionContext();

  const handleMobileToggle = () => {
    setIsActive((prevActive) => !prevActive);
  };
  return (
    <header className="z-[999] relative">
      <motion.div
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 max-sm:hidden"
      ></motion.div>
      <nav className=" flex fixed top-[0.15rem] left-1/2 h- 12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 max-sm:hidden">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              key={link.hash}
              className="flex items-center justify-center h-3/4 relative"
            >
              <Link
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClicked(Date.now());
                }}
                className={clsx(
                  'flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300',
                  {
                    'text-gray-950 dark:text-gray-200':
                      activeSection === link.name,
                  }
                )}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
      {/**Mobile Nav */}
      <motion.div
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
        className="fixed top-0 left-[200px] h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-gray-200 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] max-sm:top-6 max-sm:h-[3.25rem] max-sm:w-[23rem] max-sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 md:hidden items-center"
      >
        <div className="flex flex-row md:hidden justify-between px-2  items-center py-1">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={40}
            height={40}
            quality={95}
            priority={true}
            className="hover:scale-110 hover:animate-spin ml-3 transition-all"
          />
          {active ? (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className=" transition-all "
            >
              <HiOutlineMenuAlt1
                className="mr-3 w-[30px] h-[30px] hover:scale-110 active:scale-105 transition-all"
                onClick={handleMobileToggle}
              />
            </motion.div>
          ) : (
            <AiOutlineClose
              className="mr-3 w-[30px] h-[30px] hover:scale-110 active:scale-105 transition-all"
              onClick={handleMobileToggle}
            />
          )}
        </div>
      </motion.div>
      {/**Mobile Nav Drop down */}
      {!active && (
        <>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-9 left-[24px] p-5  w-[22rem] h-[15rem] border-white border-opacity-40 bg-gray-200  bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 md:hidden items-end  z-[-999] rounded-[9px]"
          ></motion.div>
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex flex-col top-[90px] left-[270px] fixed md:hidden "
          >
            {links.map((link, index) => (
              <ul key={index} className="gap-4">
                <Link
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                  }}
                  className={clsx(
                    activeSection === link.name
                      ? 'text-gray-700 dark:text-gray-200 -translate-x-1 transition-all font-bold'
                      : '',
                    ' font-satoshi text-gray-950 dark:text-gray-400 font-medium hover:scale-110 active:scale-105 transition-all'
                  )}
                >
                  {link.name}
                </Link>
              </ul>
            ))}
          </motion.nav>
        </>
      )}
    </header>
  );
};

export default Header;
