import React from 'react'
import bookmarkImg from '../public/assets/projects/bookmark.png'
import pamerImg from '../public/assets/projects/pamer.png'
import todoImg from '../public/assets/projects/todo.png'
import eduImg from '../public/assets/projects/edugreat.png'
import ProjectItem from './ProjectItem'

function Projects() {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#226CE0]'>Projects</p>
            <h2 className='py-4'>What I&apos;ve Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem 
                    title = 'Bookmark Saver'
                    backgroundImg = {bookmarkImg}
                    tech = 'NestJS + Angular + GraphQL'
                    projectUrl = '/bookmark'
                />
                <ProjectItem 
                    title = 'Pamer App'
                    backgroundImg = {pamerImg}
                    tech = 'NestJS / Angular / MongoDB / RabbitMQ'
                    projectUrl = '/pamer'
                />
                <ProjectItem 
                    title = 'Todo App'
                    backgroundImg = {todoImg}
                    tech = 'NestJS + Angular + PostgreSQL'
                    projectUrl = '/todo'
                />
                <ProjectItem 
                    title = 'EduGreat'
                    backgroundImg = {eduImg}
                    tech = 'HTML + CSS'
                    projectUrl = '/edugreat'
                />
            </div>
        </div>
    </div>
  )
}

export default Projects