import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#226CE0]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>I have spent the last 11 years at PT. Labtech Penta International works as an IT Maintenance and Support. 
                I&apos;ve always had a flair for technology and working with computers. 
                In 2021 I started learning about HTML and CSS to make some minor edits to a website by taking online courses. 
                What I did was just baby steps that turned into a love of programming.</p>
            <p className='py-2 text-gray-600'>Fascinated by how complex programming can be, I&apos;m interested in learning more. 
            I started learning javascript and got more and more passionate about making websites interactive. 
            I then bought some online classes and watched various learning resources on youtube to improve my programming skills. 
            Eventually I got interested in getting into back-end technologies and now I spend a lot of time learning to build projects using NestJS, 
            Typescript, Graphql, SQL/No SQL Database as well as learning other new technologies.</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src='/assets/about.jpg' alt='about me' width={1024} height={1024} />
            </div>
        </div>
    </div>
  )
}

export default About