import { cn } from '@/lib/utils'
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react'
import React from 'react'

export default function Contact() {
  return (
    <section id='contact'>
            <div className="relative flex flex-col h-[20rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-3xl md:text-5xl font-bold text-transparent text-center">
        Lets Elevate Your Work Together
      </p>
      <p className='text-center text-neutral-500 dark:text-neutral-300 z-20'>
        Lets Connect :), we can talk and do the next move!!!
      </p>
      <div className='my-6 z-20 mt-20'>
        <a href="https://t.me/um_4ru31" className='px-8 py-2 rounded-lg bg-gradient-to-r from-pink-800 to-pink-700 text-white' target='_blank'>
            Lets Get In Touch
        </a>
      </div>
    </div>
    <div className='flex flex-col md:flex-row justify-between items-center py-6'>
      <p className='text-neutral-600 dark:text-neutral-300 mb-8 md:mb-0'>
        &copy; Um4ru 
      </p>
    <div className='flex space-x-5'>
      <a href="https://github.com/um4ru1/tutorialrenpy" className='rounded-full bg-gray-100 dark:bg-neutral-800 w-10 h-10 flex items-center justify-center' target='_blank'>
        <IconBrandGithub className='h-6 w-6 text-black dark:text-neutral-300'/>
      </a>
      <a href="https://www.instagram.com/umar_asysyarif?igsh=cXVkMGF5aHdjNzE2" className='rounded-full bg-gray-100 dark:bg-neutral-800 w-10 h-10 flex items-center justify-center' target='_blank'>
        <IconBrandInstagram className='h-6 w-6 text-black dark:text-neutral-300'/>
      </a>
      <a href="https://www.linkedin.com/in/um4r-abdullah-88757b244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='rounded-full bg-gray-100 dark:bg-neutral-800 w-10 h-10 flex items-center justify-center' target='_blank'>
        <IconBrandLinkedin className='h-6 w-6 text-black dark:text-neutral-300'/>
      </a>
    </div>
    </div>  
    </section>  
  )
}
