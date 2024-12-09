import React, { useState } from 'react'
import { urlFor } from "../client.js";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Project = ({ index, title, desc, images, featured }) => {
    const mainClass = 'p-2 bg-white  border-cOne rounded-lg drop-shadow-2xl m-2'
    const [toggle, setToggle] = useState(false)

    
    const handleToggle = () => {
        setToggle(!toggle);
    } 

  return (
    <div id={title + index} className={toggle ? mainClass : mainClass + ' md:w-1/3'}>
        <div className={toggle ? 'md:flex' : ''}>
            <div className={toggle ? 'md:w-1/2 m-2 drop-shadow-xl' : 'm-2 drop-shadow-xl'}>
                <img src={urlFor(featured)} alt={title} className='' />
            </div>
            <div className={toggle ? 'md:w-1/2 m-2' : 'm-2'}>
                <div className='flex justify-center text-4xl md:text-6xl mb-5 text-cOne title'>
                    <h1> { title } </h1>
                </div>
                <div className={toggle ? 'flex justify-left text-lg md:text-xl text-cFive' : 'hidden'}>
                    <h1> { desc } </h1>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center mb-1' onClick={handleToggle}>
            {toggle ? <IoIosArrowUp color='24569c' size={30} /> : <IoIosArrowDown color='24569c' size={30} /> }
        </div>
        
        <div className={toggle ? 'md:columns-3 md:gap-3 md:w-full md:mx-auto space-y-3' : 'hidden'}>
            {images.map((image) => 
                <div className='break-inside-avoid'>
                    <img src={urlFor(image)} alt={image} className='drop-shadow-lg' />
                </div>
            )}
        </div>
    </div>
  )
}

export default Project