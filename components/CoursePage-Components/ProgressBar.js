import React from 'react'

const ProgressBar = ({time:{total, completed}}) => {
    
    

  return (
    <div className='w-[225px] h-[10px] bg-[#C4C4C4] rounded-[10px]'>
        <div className='h-full bg-[green] rounded-[10px]' style={{width: `${(completed/total) * 100}%`}}></div>
    </div>
  )
}

export default ProgressBar