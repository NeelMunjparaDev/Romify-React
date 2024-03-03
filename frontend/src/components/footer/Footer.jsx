import React from 'react'
import { TbPlaneTilt } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { LuCopyright } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="footer items-center p-4 text-neutral-content bg-neutral">
                <aside className="items-center grid-flow-col">
                    <TbPlaneTilt className=' text-6xl' />
                    
                    <p>Copyright © 2024 - All right reserved</p>
                </aside> 
                    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                        <div className='flex flex-row'>
                        <FaLinkedin  className='text-2xl text-blue-400'/>
                        <a href='https://www.linkedin.com/in/neel-munjpara-5104721b6/' target='blank' className=' mt-[4px] ml-1'>Linkedin</a>
                        </div>
                        <div className='flex flex-row'>
                        <FcAbout  className='text-2xl'/>
                        <sapn className=' mt-[4px] ml-1'>About us</sapn>
                        </div>
                        <div className='flex flex-row'>
                        <LuCopyright  className='text-2xl'/>
                        <a href='https://www.linkedin.com/in/neel-munjpara-5104721b6/' target='blank' className=' mt-[4px] ml-1'>Neel Munjpara</a>
                        </div>
                    </nav>
            </footer>
  )
}

export default Footer