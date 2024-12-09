import React from 'react'

const About = ({ profile }) => {
  return (
    <div id='about' className='mx-8 md:mx-16 my-5 p-5 bg-white drop-shadow-lg rounded-lg'>
        <div className='flex flex-col items-start m-2'>
            <h1 className='text-cOne text-4xl md:text-6xl text-bold'>About {profile.name}</h1>
            <h1 className='text-cThree text-2xl md:text-3xl text-semibold'>{profile.profession}</h1>
        </div>
        <div className='text-center m-2'>
            <p className='text-cFive'>{profile.about}</p>
        </div>
    </div>
  )
}

export default About