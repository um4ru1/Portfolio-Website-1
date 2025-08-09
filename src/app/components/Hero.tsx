import React from 'react'
import { BackgroundBeams } from './ui/background-beams'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { Spotlight } from './ui/Spotlight'

export default function Hero() {
  return (
    <section id='home'>
      <BackgroundBeams />
      <Spotlight fill="white" className='-top-30 -left-0'/>
      <Spotlight fill="pink" className='-top20 -right-150'/>
      {/* Penjelasan: Kelas ditambahkan di sini untuk membuat semua isinya berada di tengah */}
      <div className='overflow-hidden relative h-[90vh] lg:screen flex justify-center items-center'>
        <div className='z-50'>
          <h2 className='text-neutral-600 dark:text-neutral-300 uppercase text-xl text-center'> 
            Website Portfolio
          <TextGenerateEffect words='Learn - create - deploy, with effortless experience' className='capitalize'/>
          </h2>
          <p className='text-center text-neutral-600 dark:text-neutral-300 lg:text-xl md:tracking-wider'>
            Hello I&apos;m UMR a Front End Developer
          </p>
          <div className='flex justify-center my-6'>
            <a href="#about" className='px-8 py-2 rounded-lg bg-gradient-to-r from-pink-800 to-pink-700 text-white'>
              Explore My Work
            </a>
          </div>
        </div>
      </div>  
    </section>
  ) 
}

