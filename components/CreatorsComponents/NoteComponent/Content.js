// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
// // import { TextEditor } from '../../TextEditor'
// // import NotesErrorModal from './NotesErrorModal'
// // import NotesSuccessModal from '../CourseLandingComponent/CourseStructureComponent/NotesSuccessModal'

// const Content = () => {

//     const [error, setError] = useState(false)
//     const [success, setSuccess] = useState(false)

//     useEffect(() => {
//         setTimeout(() => {
//             setError(true)
            
//         }, 4000);
//     }, [])

//   return (
//     <div className='relative w-full h-full bg-[#E5E5E5] flex flex-col mt-[90px] md:mt-[120px] md:justify-center items-start md:translate-x-[250px] md:w-[calc(100%-250px)] py-10 text-darkGray flex flex-col items-center justify-center'>
//         <div className='w-[500px]'>
//             <p className='font-bold'>New Note</p>
            
//             <div className='mt-10 min-h-[500px]'>
//                {/* <TextEditor /> */}

//                <div className='flex flex-row justify-end mt-6'>
//                 <div className='w-[120px] h-[35px] bg-seaBlue text-white text-[13px] rounded-md flex items-center justify-center font-bold'>
//                     Save Changes
//                 </div>
//             </div> 
//             </div>
            
//             {/* <NotesErrorModal error= {error} setError = {setError} success = {success}  setSuccess = {setSuccess} /> */}

//             {/* <NotesSuccessModal error= {error} setError = {setError} success = {success}  setSuccess = {setSuccess} /> */}

//         </div>

        

//     </div>
//   )
// }

// export default Content