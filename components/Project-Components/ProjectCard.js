import React from 'react'

const ProjectCard = ({data}) => {
    console.log('first')
  return (
    <div className='w-[220px] h-[220px] rounded-md bg-no-repeat bg-cover bg-center pt-[160px] shadow-xl' style={{backgroundImage: `url(${data.image})`}}>
        <div className='bg-[#121F4C] text-[white]  h-full flex flex-row justify-between pl-2 pr-2 rounded-b-md'>
            <div className='flex flex-col justify-center max-w-[70%] box-overflow'>
                <p className='text-[14px] '>{data.name}</p> 
                <p className='text-[11px] capitalize'>{data.title}</p>
            </div>
            <div className='flex flex-col justify-center items-center rounded-[4px] h-[25px] w-[60px] mt-4 bg-bizpotta-green'>
                <p className='text-xs text-black'>View</p>
            </div>
        </div>

    </div>
  )
}

export default ProjectCard




/**
 * import React from 'react'

const ProjectCard = ({data}) => {
    console.log('first')
  return (
    <div className='min-w-[220px] min-h-[220px]  rounded-md bg-no-repeat bg-cover bg-center pt-[160px] shadow-xl' style={{backgroundImage: `url(${data.image})`}}>
        <div className='bg-[#121F4C] text-[white]  h-full flex flex-row justify-between pl-2 pr-2 rounded-b-md'>
            <div className='flex flex-col justify-center'>
                <p className='text-[14px] '>{data.name}</p> 
                <p className='text-[11px] '>{data.title}</p>
            </div>
            <div className='flex flex-col justify-center items-center rounded-[4px] h-[25px] w-[60px] mt-4 bg-bizpotta-green'>
                <p className='text-xs text-black'>follow</p>
            </div>
        </div>

    </div>
  )
}

export default ProjectCard
 */