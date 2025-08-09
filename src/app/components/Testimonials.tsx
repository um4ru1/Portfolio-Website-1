import React from 'react'
import Header from './reusable-components.tsx/Header'
import { AnimatedTestimonials } from './ui/animated-testimonials'

  const testimonials = [
    {
      name:"Adil",
      designation: "Undergraduate Student In Meteorology at ITB",
      quote: "DAMN.",
      src: "/image/testimonials-image/adil.jpg",
    },
    {
      name:"Konstan Aftop",
      designation: "Undergraduate In Meteorology at ITB",
      quote: "Icikbos",
      src: "/image/testimonials-image/waru.jpg",
    },
    {
      name:"Opall",
      designation: "Undergraduate In Meteorology at ITB",
      quote: "Keoss",
      src: "/image/testimonials-image/opal.jpg",
    },
  ];

export default function Testimonials() {
  return (
    <div>
      <section id='testimonials'>
        <Header title='Testimonials'/>
        <AnimatedTestimonials testimonials={testimonials} autoplay={true}/>
      </section>
    </div>
  )
}
