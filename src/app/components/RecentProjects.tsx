import React from 'react'
import Header from './reusable-components.tsx/Header'
import { CardContainer, CardBody, CardItem } from './ui/3d-card'
import { projects } from '@/data/projects'

export default function RecentProjects() {
  return (
    <section id='recent-projects'>
      <Header title='Recent Projects'/>
    <div className='grid lg:grid-cols-3'>
        {projects.map((project) =>{
          return (
            <CardContainer className="inter-var w-100 h-90" key={project.id}>
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-90 sm:w-200 h-110 rounded-xl p-5 border break-words max-h-110 max-w-100">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {project.projectTitle}  
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm dark:text-neutral-300 w-full max-w-full whitespace-normal line-clamp-2"
        >
          {project.projectDescription}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4 ">
          <img
            src={project.ProjectImage}
            height="1000"
            width="1000"
            className="h-60 w-auto object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            as="a"
            href={project.ProjectPreviewLink}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Visit This Project →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <a href={project.ProjectSourceCode}>Source Code</a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
          )
      })}
    </div>
      
    </section>
  )
}
