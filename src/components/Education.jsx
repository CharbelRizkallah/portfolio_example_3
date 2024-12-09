import React from 'react'
import EducationElement from './EducationElement'
import { FaGraduationCap } from "react-icons/fa";


const Education = ({education}) => {
  const logoClass = 'm-0 w-12 h-12 rounded-full bg-cOne flex justify-center items-center '
  return (
    <div id='education' className='flex flex-col md:items-center mt-16 mx-6'>
        <div className='w-fit p-2 border-4 border-cThree bg-white rounded-lg'>
            <h1 className='text-cOne text-5xl md:text-6xl text-bold'>Education</h1>
        </div>
        <div className='w-full mx-6 mt-12 flex flex-col '>
            {education?.map((edu,index) =><div className={index === 0 ?  'relative w-full md:w-1/2 flex left-0 md:text-right timeline-left timeline-edu' : index % 2 === 0 ? 'relative w-full md:w-1/2 flex left-0 md:text-right timeline-left' : 'relative flex w-full md:w-1/2 left-0 md:left-1/2 timeline-right'}>
               <div className={index % 2 === 0 ? logoClass + 'absolute -left-6 md:left-auto md:-right-6' : logoClass + 'absolute -left-6'}> <FaGraduationCap color='ffffff' size={25} /> </div>
               <EducationElement key={index} index={index} education={edu} />
               </div>
               )}
               
               
        </div>
    </div>
  )
}

export default Education