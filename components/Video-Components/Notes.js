import React from 'react'
// import {ReactComponent as NoteSvg} from '../../public/vectors/clarity_note-line.svg'

//////
import {FaRegStickyNote} from 'react-icons/fa' 


const Notes = () => {
  return (
    <div className='px-2'>
        <input
            className='w-full border border-gray-200 focus:ring-0 h-[60px] pl-4 rounded-sm mt-6'
            placeholder='Search Notes'

        />

        <FaRegStickyNote size={36} color = '#121F4C' className='mt-32 mx-auto'/>
        {/* <NoteSvg  /> */}
    </div>
    
  )
}

export default Notes