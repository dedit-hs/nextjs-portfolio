import Image from 'next/image'
import React from 'react'
import pamerImg from '../public/assets/projects/pamer.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

function crypto() {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={pamerImg} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Pamer (Microservices)</h2>
                <h3>NestJS / Angular / MongoDB / RabbitMQ</h3>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
          <div className='col-span-4'>
            <p className='text-xl tracking-widest uppercase text-[#226CE0]'>Projects</p>
            <h2 className='py-4'>Overview</h2>
            <p>This app was built using NestJS as back-end and Angular as front-end. Users
            are able to like photo that posted in this app. This app also has admin page, so we can add, edit, and delete the data. 
            The data stored in MongoDB. This app using microservice technology using RabbitMQ to comunicate between each server.</p>
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
            <button className='px-8 py-2 mt-4'>Demo</button>
          </div>
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>Technologies</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> NestJS
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Angular
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Typescript
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> MongoDB
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> RabbitMQ
                </p>
              </div>
            </div>
          </div>
          <Link href='/#projects'>
            <p className='underline cursor-pointer'>Back</p>
          </Link>
        </div>
    </div>
  )
}

export default crypto