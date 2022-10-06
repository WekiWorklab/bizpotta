import { ArrowRightIcon } from '@heroicons/react/solid'
import axios from 'axios'
import React, {useEffect, useRef, useState} from 'react'
import { AiOutlineCheck } from 'react-icons/ai';
// import {IoIosCheckmark} from 'react-icons/io5'

const SelectCourses = ({selectCourse, setSelectCourse}) => {
   
    const base = process.env.NEXT_PUBLIC_REACT_APP_API_URL;
    console.log(base)

    const [optionsLists1, setOptionsLists1] = useState([])
    const [optionsLists, setOptionsLists] = useState([])

    useEffect(() => {
        const fetchCourseCategories = async() => {
            const results = await axios.get(`${base}/courses-categories`)
            console.log(results.data.data)
            setOptionsLists1(results.data.data)
        }
        const fetchCourseSubCategories = async(id) => {
            const results = await axios.get(`${base}/courses-sub-categories/${id}`)
            setOptionsLists(results.data.data)
            console.log(results.data.data)
        }
        fetchCourseCategories()
        fetchCourseSubCategories(3)

    }, [])

    const parentRef = useRef()
 
    const id = 1


  return (
    
    <div className='w-full no-scrollbar overflow-x-scroll bg-gray-50 flex flex-col font-light'>
      <div className='w-[1100px] flex flex-col space-y-4 py-4 px-2'>
        <CourseTabs current={id} courseCategories={optionsLists1} />

        <div
          className='grid grid-cols-3 gap-8 py-8'
          ref={parentRef}
        >
          {optionsLists.map((option, index) => (
            <CourseLibraryCheckBox key={index} option={option} selectCourse = {selectCourse} setSelectCourse = {setSelectCourse}  current={id}  />
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default SelectCourses



const CourseLibraryCheckBox = ({option, selectCourse, setSelectCourse}) => {

    const [checked, setChecked] = useState(false);

    const handleChange = () => { 
        setSelectCourse(option.name)
    };
    
    return (
        <div className='flex items-center justify-between overflow-hidden transition-all rounded-md bg-transparent group h-14 w-80 border-l-2 px-8 shadow-md border-l-bizpotta-green border'>
        <p className='text-bizpotta-purple text-sm font-semibold '>
            <span>{option.name}</span>
        </p>
        {/* <input type='checkbox' name={option.id} value={checked} onChange={handleChange} className='focus:ring-0 rounded-full text-bizpotta-green' /> */}
        <div className='centerFlex rounded-full w-[25px] h-[25px] border-2 border-white' onClick = {handleChange}>
            {selectCourse === option.name && <div className='centerFlex bg-bizpotta-green rounded-full w-[15px] h-[15px]'>
                <AiOutlineCheck size={12} color = 'white' />
            </div>}
        </div>
        </div>
    );
      
    
}


const CourseTabs = ({current, courseCategories}) => {
 function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
 }

  const tabs = courseCategories;

  const [currentTab, setCurrentTab] = useState(current) 
  
  const handleClick = (id) => {
    setCurrentTab(id)
  }

    return (
      <div className=''>
        <nav className='flex space-x-4' aria-label='Tabs'>
          {tabs.map((tab) => (
            <div
              key={tab.name}
              onClick={() => handleClick(tab.id)}
              className={classNames(
                tab.id == currentTab ? "font-bold" : "text-gray-500 hover:text-gray-700",
                "px-3 py-2 font-medium rounded-md text-[15px]"
              )}
            >
              {tab.name}
            </div>
          ))}
        </nav>
      </div>
    )
}









/**
 * <div className=''>
        <label htmlFor='tabs' className='sr-only'>
          Select a tab
        </label>
        <select
          id='tabs'
          name='tabs'
          className='block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md '
          defaultValue={tabs.find((tab) => tab.current)?.name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
 */