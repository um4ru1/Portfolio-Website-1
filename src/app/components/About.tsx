import React from 'react'
import Header from './reusable-components.tsx/Header'
import Image from 'next/image'


export default function About() {
  return (
    <section id='about' className='my-20 mt-40'>
        <Header title= 'About Me'/> (//about me bisa diganti ama apa aj, itu adalah reusable component)
        <div className='grid gap-4 items-center md:[grid-template-columns:1fr_1.5fr]'>
          <div>
            <Image src='/Image/about-image.jpg'alt='about-image'width={500}height={500} className='aspect-auto object-cover rounded-lg'/>
          </div>
          <div className='md:text-xl text-neutral-600 dark:text-neutral-300'>
            <p className='mb-3'>
              Hellow there, I&apos;m Umr,  i had some experience in visual design about 2 years using Figma, Adobe Ilustrator, and Affinity Designer.
              you can see it mostly on instagram, take a look in bottom right corner. Little experience in coding especially Renpy and thiss, Front End. 
              I will continue to make a really useful website, make the life easier for everyone. from trust we gain deal, from
              deal we can get profit. Andddd welcome to my initial step to become Front End Developer.

              
              
            </p>
            <p>
              I can&apos;t build something big alone, and i really know that. included this cool website that im build is
              guided by youtube EgbonTech, thanks to him. also thanks for easy explanation. lastly, you can see my project below:
            </p>
          </div>
        </div>
    </section>
  )
}


        // <div className='mt-20'>
        //    <iframe src="https://www.youtube.com/embed/AU5VpETlXi8" className='aspect-video w-100 rounded-xl'
        //    allow="fullscreen"
        //    >
            
        //    </iframe>
        // </div>