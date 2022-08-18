import React from 'react'
import ProjectCard from './ProjectCard'

const MiddleSection = () => {
    const singleData = {
        name: "Emeka Samuel",
        image: "https://cdn.pixabay.com/photo/2022/01/17/17/20/bored-6945309__340.png",
        title: "design"
    }

    let data = Array(20).fill(singleData, 0)

    


    return (
    <div className=' mt-10 lg:w-[780px] xl:w-[1100px] flex flex-row flex-wrap gap-x-[20px] justify-center sm:justify-between gap-y-10 '>
        {data.map((el, index) => ( 
          <ProjectCard key={index} data = {el} />
          )
        )}
        
    </div>
  )
}

export default MiddleSection

// lg:gap-x-[58px] xl:gap-x-[72px] 