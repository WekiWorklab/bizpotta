/*********Sidebar Component******* */

// import React from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import {MdOutlineDashboard, MdOutlineSchool} from 'react-icons/md'
// import {HiOutlineBookOpen} from 'react-icons/hi'
// import {AiOutlineProject} from 'react-icons/ai'
// import {CgProfile} from 'react-icons/cg'
// import {IoSettingsOutline, IoLogOutOutline} from 'react-icons/io5'


// export default function Sidebar() {
//   const [collapseShow, setCollapseShow] = React.useState("hidden");
//   const router = useRouter();
//   return (
//     <>
//       <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
//         <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
         
//           <Link href="/">
//             <a
//               href="#pablo"
//               className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
//             >
//               Bizpotta
//             </a>
//           </Link>
          
//           <div
//             className={
//               " mt-20 md:flex md:flex-col md:items-stretch md:opacity-100 md:relative  md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
//               collapseShow
//             }
//           >

            

//             <ul className="md:flex-col md:min-w-full flex flex-col list-none mb-10 mt-5 ">
//               <li className="items-center  mb-5">
//                 <div  className="flex flex-row justify-start">
//                   <MdOutlineDashboard color="#121F4C"/>
//                   <div className="text-sm text-darkBlue font-semibold ml-5">
//                     Dashboard
//                   </div>
                  
//                 </div>
//               </li>

//               <li className="items-center  mb-5">
//                 <div  className="flex flex-row justify-start">
//                   <HiOutlineBookOpen color="#E5E5E5"/>
//                   <div className="text-sm text-[#999999] font-light ml-5">
//                     Courses
//                   </div>
                  
//                 </div>
//               </li>

//               <li className="items-center ">
//                 <div  className="flex flex-row justify-start">
//                   <MdOutlineSchool color="#E5E5E5"/>
//                   <div className="text-sm text-[#999999] font-light ml-5">
//                     Classroom
//                   </div>
                  
//                 </div>
//               </li>

//             </ul>

//             <hr className="my-4 md:min-w-full" />
//             <ul className="md:flex-col md:min-w-full flex flex-col list-none mb-10 mt-5 ">
//               <li className="items-center  mb-5">
//                 <div  className="flex flex-row justify-start ">
//                   <AiOutlineProject color="#999999" className="mt-[2px]"/>
//                   <div className="text-sm text-[#999999] font-light ml-5">
//                     Projects
//                   </div>
                  
//                 </div>
//               </li>

//               <li className="items-center  mb-5">
//                 <div  className="flex flex-row justify-start ">
//                   <div className="text-sm text-[#999999] font-light ml-8">
//                     My projects
//                   </div>
//                   <span className="text-sm text-[#999999] font-light ml-5"> 15 </span>
                  
//                 </div>
//               </li>

//               <li className="items-center ">
//                 <div  className="flex flex-row justify-start ">
//                   <div className="text-sm text-[#999999] font-light ml-8">
//                     Browse
//                   </div>
                  
//                 </div>
//               </li>

//             </ul>

//             <hr className="my-4 md:min-w-full" />
//             <ul className="md:flex-col md:min-w-full flex flex-col list-none mb-10 mt-5 ">
//             <li className="items-center  mb-5">
//                 <div  className="flex flex-row justify-start">
//                   <CgProfile color="#E5E5E5"/>
//                   <div className="text-sm text-[#999999] font-light ml-5">
//                     Profile
//                   </div>
                  
//                 </div>
//               </li>

//               <li className="items-center  mb-5">
//                 <div  className="flex flex-row justify-start">
//                   <IoSettingsOutline color="#E5E5E5"/>
//                   <div className="text-sm text-[#999999] font-light ml-5">
//                     Settings
//                   </div>
                  
//                 </div>
//               </li>

//               <li className="items-center ">
//                 <div  className="flex flex-row justify-start">
//                   <IoLogOutOutline color="#E5E5E5"/>
//                   <div className="text-sm text-[#999999] font-light ml-5">
//                     Log-out
//                   </div>
                  
//                 </div>
//               </li>

//             </ul>

                      
//             </div>
//         </div>
//       </nav>
//     </>
//   );
// }

/******************** */