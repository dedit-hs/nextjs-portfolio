import Link from 'next/link'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

function Main() {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Let&apos;s build something together</p>
                <h1 className='py-4 text-gray-700'> Hi, I&apos;m <span className='text-[#226CE0]'>Dedit</span></h1>
                <h1 className='py-4 text-gray-700'>A Back-End Web Developer</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                I&apos;m a back-end web developer specializing in building Restfull API using  NestJs, Typescript, and Graphql technology for exceptional digital experiences. Currently,
                    I&apos;m focused on building back-end web applications while learning front-end technologies.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <Link href={'https://www.linkedin.com/in/dedit-hs/'}  target='_blank'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                    </Link>
                    <Link href={'https://github.com/dedit-hs'}  target='_blank'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                        </div>
                    </Link>
                    <Link href={'https://www.instagram.com/dedhit/'}  target='_blank'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaInstagram />
                        </div>
                    </Link>
                    <Link href={'https://twitter.com/ArekNggantenk'}  target='_blank'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaTwitter />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main