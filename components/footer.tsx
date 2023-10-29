import React from 'react';

const Footer = () => {
  return (
    <footer className="mb-[50px] px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 3illBaby. All rights reserved
      </small>
      <p className="text-xs">
        <span className=" font-semibold">About this website: </span> built with
        React & Next.js, Typescript, Tailwind CSS, Framer Motion, Resend & React
        Email
      </p>
    </footer>
  );
};

export default Footer;
