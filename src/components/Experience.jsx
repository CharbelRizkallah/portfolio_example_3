import React from 'react'

const Experience = ({ experience }) => {
  return (
    <div id='experience' className='border-t-[3px] border-cThree'>
      <div className='flex justify-center m-6'>
        <h1 className='text-cFour text-4xl md:text-5xl text-bold'>Work Experience</h1>
      </div>
      <div className=''>
        {experience?.map((exp, index) => 
        <div key={index} className='md:flex p-2 mx-6 md:mx-12 my-2 min-h-[200px]'>
          <div className='flex flex-col items-center justify-center md:w-1/5 bg-cOne rounded-t-lg md:rounded-none md:rounded-l-lg drop-shadow-2xl min-h-[150px] md:min-h-[200px]'>
            <h1 className='text-lg md:text-xl text-white text-semibold'>{exp.start_date} - {exp.end_date}</h1>
            <h1 className='text-2xl md:text-3xl text-bold text-white'>{exp.company}</h1>
          </div>
          <div className='flex flex-col items-start md:w-4/5 bg-white rounded-b-lg md:rounded-none md:rounded-r-lg drop-shadow-2xl min-h-[300px] md:min-h-[200px]'>
            <h1 className='text-3xl md:text-3xl text-bold text-cFour m-2'>{exp.position}</h1>
            <h1 className='text-lg md:text-xl text-cFour m-2'>{exp.shortdesc}</h1>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Experience