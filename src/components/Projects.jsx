import React from 'react'
import Project from './Project'

const Projects = ({work}) => {
  return (
    <div className='p-2'>
        <div className='flex justify-center m-6'>
            <h1 className='text-cOne text-4xl md:text-5xl text-bold'>Projects</h1>
        </div>
        <div className='md:flex flex-wrap justify-center'>
            {work?.map((work, index) => 
            <Project index={index} key={work.id} title={work.title} desc={work.desc} images={work.pictures} featured={work.featured_image} />
            )}
        </div>
        
    </div>
  )
}

export default Projects