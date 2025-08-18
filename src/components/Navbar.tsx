import { Transition } from '@headlessui/react';
import React, { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import { Link } from 'react-scroll';
import { GITHUB_SOCIAL } from '~/constants/socials';

import SocialBar from './SocialBar';

interface NavItemProps {
  to: string;
  callback?: () => any;
  children: React.ReactNode;
}

const SCROLL_OFFSET = -80;

const NavItem: React.FC<NavItemProps> = ({ to, children, callback }) => {
  const DURATION = 300;
  return (
    <Link
      className="text-black hover:text-white"
      activeClass="text-indigo-800 font-medium"
      to={to}
      spy={true}
      smooth={true}
      offset={SCROLL_OFFSET}
      duration={DURATION}
      onClick={() => callback && setTimeout(callback, DURATION)}
    >
      <div
        role="button"
        className="px-3 py-2 rounded-md font-small text-md hover:bg-gray-700"
      >
        {children}
      </div>
    </Link>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = GITHUB_SOCIAL.Icon;

  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-100 shadow-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div
              className="py-2 text-lg text-gray-800 font-small md:hidden"
              role="button"
            >
              <Link
                activeClass="active"
                to={'intro-section'}
                spy={true}
                smooth={true}
                offset={SCROLL_OFFSET}
                duration={500}
              >
                Jin Hao
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline ml-10 space-x-4">
                <NavItem to={'intro-section'}>Home</NavItem>
                <NavItem to={'about-section'}>About</NavItem>
                <NavItem to={'experiences-section'}>Experiences</NavItem>
                <NavItem to={'projects-section'}>Projects</NavItem>
                <NavItem to={'contact-section'}>Contact Me</NavItem>
              </div>
            </div>
          </div>

          <div className="hidden -mr-2 md:flex">
            <a
              href={GITHUB_SOCIAL.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center p-2 text-gray-800 transition-colors bg-gray-100 rounded-md hover:bg-gray-800 hover:text-titan-white-200 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-titan-white-200"
            >
              <span className="sr-only">Open github</span>
              <Icon className="m-auto" size={30} />
            </a>
          </div>
          <div className="flex -mr-2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-800 transition-colors bg-gray-100 rounded-md hover:bg-gray-800 hover:text-titan-white-200 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-titan-white-200"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition-[transform,opacity] ease duration-200"
        enterFrom="opacity-0 scale-y-0"
        enterTo="opacity-100 scale-y-100"
        leave="transition-[transform,opacity] ease duration-200"
        leaveFrom="opacity-100 scale-y-100"
        leaveTo="opacity-0 scale-y-0"
      >
        <div
          className="absolute w-full origin-top bg-gray-100 md:hidden"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavItem to={'intro-section'} callback={() => setIsOpen(false)}>
              Home
            </NavItem>
            <NavItem to={'about-section'} callback={() => setIsOpen(false)}>
              About
            </NavItem>
            <NavItem
              to={'experiences-section'}
              callback={() => setIsOpen(false)}
            >
              Experiences
            </NavItem>
            <NavItem to={'projects-section'} callback={() => setIsOpen(false)}>
              Projects
            </NavItem>
            <NavItem to={'contact-section'} callback={() => setIsOpen(false)}>
              Contact Me
            </NavItem>
            <SocialBar className={'justify-evenly'} size={25} />
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
