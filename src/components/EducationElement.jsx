import React from 'react'

const EducationElement = ({education, index}) => {
  return (
    <div className='relative w-full px-12 my-2'>
        <h1 className='text-cOne text-3xl md:text-4xl'>{education.degree}</h1>
        <h1 className='text-cFour text-xl md:text-2xl'>{education.establishment}</h1>
        <h1 className='text-cThree text-lg md:text-xl'>{education.start_date} - {education.end_date}</h1>
    </div>
  )
}

export default EducationElement