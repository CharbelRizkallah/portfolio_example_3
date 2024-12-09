import React from 'react';
import { GrInstagram } from "react-icons/gr";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FiSmartphone } from "react-icons/fi";
import { BsGlobe } from "react-icons/bs";
import Logo from "../imgs/logo.png";


const Contact = ({profile}) => {

  return (
    <div id='contact' className='bg-cOne p-5 text-white mt-4'>
      <div className='px-5 text-center'>
        <h1 className='text-white text-4xl md:text-5xl title'>Get in touch!</h1>
      </div>
      <div className='md:flex'>
        <div className='bg-cOne p-5 w-full md:w-1/2'>

          <div className='w-full flex flex-col items-center'>
            <div className='w-fit flex flex-wrap md:flex-col'>
              <div className='m-2 w-fit flex items-center'>
                <HiOutlineMail color='ffffff' size={30}  className='m-2' />
                <div>
                  <h1 className='text-md md:text-lg text-bold text-white'>EMAIL</h1>
                  <h1 className='text-lg md:text-xl'>{profile.email}</h1>
                </div>
              </div>
              <div className='m-2 w-fit flex items-center'>
                <FiSmartphone color='ffffff' size={30}  className='m-2' />
                <div>
                  <h1 className='text-md md:text-lg text-bold text-white'>PHONE</h1>
                  <h1 className='text-lg md:text-xl'>{profile.phone}</h1>
                </div>
              </div>
              <div className='m-2 w-fit flex items-center'>
                <BsGlobe color='ffffff' size={30}  className='m-2' />
                <div>
                  <h1 className='text-md md:text-lg text-bold text-white'>WEBSITE</h1>
                  <h1 className='text-lg md:text-xl'>{profile.website}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='my-2 md:m-2 flex flex-col items-center justify-center w-full md:w-1/2'>
          <div className='flex flex-col items-center md:items-start'>
            <h1 className='text-lg m-2 text-bold text-white'>SOCIALS</h1>
            <div className='flex md:flex-col w-fit'>
              <a href='/'><div className='flex items-center text-bold text-white text-md md:text-xl w-fit'><GrInstagram color='ffffff' size={30}  className='m-2' /><h1>Instagram</h1></div></a>
              <a href='/'><div className='flex items-center text-bold text-white text-md md:text-xl w-fit'><BsTwitter color='ffffff' size={30}  className='m-2' /><h1>Twitter</h1></div></a>
              <a href='/'><div className='flex items-center text-bold text-white text-md md:text-xl w-fit'><BsFacebook color='ffffff' size={30}  className='m-2' /><h1>Facebook</h1></div></a>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <h1 className='text-white text-md text-semibold mx-1'>© Top Hat Dev, 2022</h1>
        <img src={Logo} alt='logo' className='w-5 h-5' />
      </div>
    </div>
  )
}

export default Contact