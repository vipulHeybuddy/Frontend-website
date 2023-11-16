"use client"
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { BsList, BsX } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';
import Navbarnew from './Navbarnew';
import Link from 'next/link'
import Image from "next/image";

// import Logo from '../../../public/Images/logo.png';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [backgroundwhite, setBackgroundWhite] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: '768px' });

  const handleWindowScroll = (e) => {
    const height = window.scrollY;
    const tresholdHeight = 50;

    if (height > tresholdHeight) {
      setBackgroundWhite(true);
    } else {
      setBackgroundWhite(false);
    }
  };

  const handleBlackScreenClick = (e) => {
    e.stopPropagation();
    setDropdownOpen(false);
  };

  useEffect(() => {
    if (isMobile) {
      setDropdownOpen(false);
    }
  }, [isMobile]);

  useEffect(() => {
    setBackgroundWhite(dropdownOpen);
  }, [dropdownOpen]);

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);

    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  return (

     //#e0e1dd - grey
    //#cce3de - green
    //#eaf4f4   bg-[#cce3de]
    // #9f86c0

    <nav className={classNames('fixed w-full transition-all duration-800 py-4 z-50 ', {
      '   bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-70 z-50': backgroundwhite
    })}>
      <div className="px-4 container mx-auto top-0 flex justify-between items-center ">
        <div className="flex items-center lg:px-16 text-center justify-center mx-auto">
          <div className='lg:pr-32'>

          <Link href="/">
          <Image width={300} height={300} 
          src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/logo.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCmFwLXNvdXRoLTEiRjBEAiAa%2FdAUqAEzdF%2BXbeENKQLuX2vnD64RcDlFXLNrjr3XAgIgdWIa6KJBFCle122SL%2BfN%2FuybSK551exz5bSiNVkp4PoqhAMIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMzk1ODY0OTU2MDgiDFy7YKnWS4QLgTBp3SrYAo5mEUXyF6sRHeP6Ilkch2eJ%2FpZPhqs%2BOo83Zmj0xAU1q0atmfva4JcKPiPg9AllwHVV6FQ8qBCfx9n4UVlE8QzjIlsYTUSbpJD4npAy%2BvbYVZR9vYt0cYZkpffVqEhGbnxJk7qJUjBN4qs3WKTkShTbcAg5cCkTnEI0TG8Vg8%2BMPufZ43H0%2BwP6eOpsdnP%2BBtJ0SYtMUCY3CYF%2Fsmob75IVCNpwk%2BP17%2BbrNgngEbEQDX2pXgSwjLb9gjR4YRM3Duo%2BERX%2F6De3YabJYc%2FZppDYEyuCrsAOPoF5tNxqR3ir3iNpp66g4jLVvV1D8tRRxpahTze%2Frs9bh7XMz3hxpdxMBchhyaxmgohMuo%2FHuiL4eNvXPN90ZNb5UUdiLJtVUFojxFjbcjMuuQMMUU1VF5g3%2BlStq5dlIOxnhemWOYS8%2B4Nxfk%2Bi1uICnlIKal13ZsJvw9cnAcjAMKir16oGOrQCjlR6WBSITHlL8GQSO%2B7jaxFsQHfCAaqcbqKwWvlc7PevH5y4Pk6hnjNgHMi2PSGnGYS9W2nCbnZkEqtOJqy6za1GMNH58JzmNMnf5znPk13GnoMd%2FGankqIqTJZ6jMcx5fYyyaDd%2BaFTg1NrUl9Vw4NDHmgvyWH%2BKDrXbPTT5%2BItyBSqdUr97xDLS4GximjTlbqZEOsu4kgxuKfHdIz73AKQQxZ8IXHXsbeG2XQR2eUwznDTZ2DpNFCaxDJ8g4rSx0FydyBZhBzkg4vsF%2F778n%2B4JvQVr9WajFgGL2JhwM5Wg3NbqZTo1iphFlItPDHhF9T1ZeKa1v8HPN3GrGxRes8IlL%2BIjPOsSNOW7dsOjB4Azbes%2FfjszgH%2Fu7l4o6My8I8KJm3eyyWXosH0fLSxUgpzt20%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231116T092854Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASBAAA4R4COL4Z34Q%2F20231116%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=e82b14f0f8a4b1ad85972f5700f9ae35fe56f77b8d006dd4b4d888c01f0e0806"
           className="lg:mr-6 h-10 w-40 lg:h-10 lg:w-[12rem] cursor-pointer float-left" alt="Hey Buddy" />
          </Link>

          </div>
         
          <div className=' hidden px-4 gap-4 lg:flex'>
            <Navbarnew />
          </div>
        </div>
        
        <div className="lg:hidden text-2xl">
          <button className="z-50 p-4 block transition-all" onClick={() => setDropdownOpen(!dropdownOpen)}>
            {dropdownOpen ?
              <BsX className='text-white'/>
              :
              <BsList className='text-white'/>
            }
          </button>

          {/* Menu dropdown */}
          <div className={classNames({
            'text-base left-0 top-full right-0 absolute transition-all duration-400': true,
            'invisible opacity-0': !dropdownOpen,
            'visible opacity-100': dropdownOpen,
          })}>
            <div className="h-screen left-0 bg-black bg-opacity-30" onClick={handleBlackScreenClick}>
              <div className="z-20 shadow-xl bg-blue-100 p-6">
               
                <div className="mb-4 ">
                  <Navbarnew/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}