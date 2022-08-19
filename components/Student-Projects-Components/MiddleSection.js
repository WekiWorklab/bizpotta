import React from 'react'
import ProjectProfileModal from '../Modal-Components/ProjectProfileModal'
import ProjectCard from '../Project-Components/ProjectCard'
import ProjCard from './ProjCard'

const MiddleSection = () => {

    const singleData = {
        name: "Emeka Samuel",
        image: "https://cdn.pixabay.com/photo/2022/01/17/17/20/bored-6945309__340.png",
        title: "design"
    }

    let data = Array(20).fill(singleData, 0)

  return (
    <div className=' mt-10 w-full flex flex-row flex-wrap gap-x-[20px] justify-center sm:justify-between gap-y-10 '>
        {data.map((el, index) => ( 
          <ProjCard key={index} data = {el} />
          )
        )}
        <ProjectProfileModal />
        
    </div>
  )
}

export default MiddleSection

// lg:w-[780px] xl:w-[1100px]