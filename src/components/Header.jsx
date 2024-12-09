import React, { useState } from 'react';
import { urlFor } from "../client.js";
import { GrInstagram } from "react-icons/gr";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import HeaderContent from './HeaderContent.jsx';
import WorkHeaderContent from './WorkHeaderContent.jsx';

const Header = ( { profile, work } ) => {
    
    
    const [toggle, setToggle] = useState(false);
    const [workToggle, setWorkToggle] = useState(false);

    const menuBtnClass = 'w-12 h-12 drop-shadow-lg rounded-full fixed hover:cursor-pointer top-2 z-40 transform duration-500';
    const menuClass = 'w-full md:w-1/2 md:h-screen fixed z-30 transform duration-500 ease-in-out';
    const menuWorkMenu = workToggle ? 'flex flex-col items-center z-30 justify-start ' : 'flex flex-col items-center z-30 justify-start md:justify-center ';
    const workMenu = 'w-full h-1/3 md:h-1/4 fixed z-40 transform duration-500 overflow-scroll scrollbar-hide'

    const handleToggle = () => {
        if(workToggle)
        setWorkToggle(!workToggle);
        setToggle(!toggle);
    }

    const handleWorkToggle = () => {
        setWorkToggle(!workToggle);
    }

  return (
    <div className='relative h-screen bg-cOne flex flex-col justify-center items-center'>
        <div className='w-1/2 flex justify-center m-2'>
            <img src={urlFor(profile.picture)} alt={profile.name} className='w-1/2 md:w-1/4 rounded-full' />
        </div>
        <div className='w-1/2 flex flex-col items-center justify-center m-2'>
            <h1 className='text-4xl md:text-6xl text-white text-bold'>{profile.name}</h1>
            <h1 className='text-2xl md:text-3xl text-white text-semibold'>{profile.profession}</h1>
        </div>
        <div className='w-1/2 flex justify-center m-2'>
            <a href='/'><GrInstagram color='ffffff' size={30}  className='m-2' /></a>
            <a href='/'><BsTwitter color='ffffff' size={30}  className='m-2' /></a>
            <a href='/'><BsFacebook color='ffffff' size={30}  className='m-2' /></a>
        </div>


        <div className={ toggle ? menuBtnClass + ' right-4 ' : menuBtnClass + ' right-4' } onClick={handleToggle}>
            <div className='flex justify-center items-center h-full bg-white rounded-full drop-shadow-2xl'>
                { toggle ? <IoClose color='24569c' size={40} /> : <BiMenu color='24569c' size={35}/> }
            </div>
        </div>

        <div className={toggle ? menuClass + ' h-1/5 bg-cTwo top-0 left-0 flex justify-center items-center' : menuClass + ' h-1/5 bg-cTwo top-0 -left-full md:top-full md:left-0 flex justify-center items-center'}>
            <img src={urlFor(profile.picture)} alt={profile.name} className='w-1/4 md:w-1/2 rounded-full border-4 border-cOne m-2' />
        </div>

        <div className={toggle ? menuClass + ' h-4/5 bg-cOne bottom-0 right-0' : menuClass + ' h-4/5 bg-cOne bottom-0 -right-full md:bottom-full md:right-0'}>
            <div className={toggle ? menuWorkMenu + 'fixed w-full right-0 transform delay-200 duration-500 h-full' : menuWorkMenu + 'fixed w-full -right-full transform delay-200 duration-500 h-full'}>
                <a href='#about'><HeaderContent title={'About'} desc={''} handleToggle={handleToggle} /></a>
                <a href='#education'><HeaderContent title={'Education'} desc={''} handleToggle={handleToggle} /></a>
                <a href='#experience'><HeaderContent title={'Experience'} desc={''} handleToggle={handleToggle} /></a>
                <a href='#contact'><HeaderContent title={'Contact'} desc={''} handleToggle={handleToggle} /></a>
                <HeaderContent title={'Projects'} desc={''} handleToggle={handleToggle} handleWorkToggle={handleWorkToggle} />
                <div className='relative w-full'>
                    <div className={workToggle ? workMenu + ' text-white right-0' : workMenu + ' text-cOne -right-full'}>
                        {work?.map((work, index) => <WorkHeaderContent key={index} index={index} work={work} handleToggle={handleToggle} /> )}
                    </div>
                </div>
            </div>
        </div>
        

    </div>
  )
}



export default Header