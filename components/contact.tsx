'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit_btn';
import toast from 'react-hot-toast';

const Contact = () => {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 font-satoshi font-medium">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:chikezieegbu@outlook.com">
          chikezieegbu@outlook.com
        </a>
      </p>

      <form
        className="mt-10 flex flex-col  !text-black dark:text-gray-200"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Email sent successfully!');
        }}
      >
        <input
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          className="h-14 rounded-lg borderBlack font-satoshi dark:text-gray-200 font-medium text-white border-opacity-40 bg-gray-400 bg-opacity-80 shadow-lg shadow-black/[0.03] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 px-4 placeholder:text-white dark:placeholder:text-gray-300 placeholder:font-medium outline-none "
          placeholder="your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 font-satoshi dark:text-gray-200 font-medium text-white  border-opacity-40 bg-gray-400 bg-opacity-80 shadow-lg shadow-black/[0.03] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 placeholder:text-white dark:placeholder:text-gray-300 placeholder:font-medium outline-none "
          name="message"
          placeholder="your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
