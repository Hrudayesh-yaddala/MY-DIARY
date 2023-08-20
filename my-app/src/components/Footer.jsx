import React from 'react';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/Bs';
import { SiGmail } from 'react-icons/Si';
const Footer = () => {
  return (
    <footer className='bg-[#a86add] '>
      <div className="flex justify-center mb-0 bg-[#a86add] py-3">
        <a href="https://github.com/Hrudayesh-yaddala" className="mr-6 text-neutral-800 dark:text-neutral-200">
          <BsGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/yaddala-hrudayesh-212846226/" className="mr-6 text-neutral-800 dark:text-neutral-200">
          <BsLinkedin size={24} />
        </a>
        <a href="#!" className="mr-6 text-neutral-800 dark:text-neutral-200">
          <SiGmail size={24} />
        </a>
        <a href="#!" className="mr-6 text-neutral-800 dark:text-neutral-200">
          <BsTwitter size={24} />
        </a>
        {/* Add other profile links here */}
      </div>
      <div className="text-center text-neutral-500 dark:text-neutral-100 bg-[#9338e4] py-2">
        Made with 💜 by a Patriotic
      </div>
    </footer>
  );
};

export default Footer;
