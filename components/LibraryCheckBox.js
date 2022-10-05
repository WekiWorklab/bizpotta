import React, { useState } from "react";

import { addCourse, removeCourse } from "../store/courseSlice";
import { useDispatch } from "react-redux";

export default function LibraryCheckBox({ option, setSelectedCourses, current, selectedCourses }) {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(value, name);

    setChecked(!checked);
    console.log(value);
  };

  return (
    <div className='flex items-center justify-between overflow-hidden transition-all rounded-md bg-transparent group h-14 w-80 border-l-2 px-8 shadow-md border-l-bizpotta-green border'>
      <p className='text-bizpotta-purple text-sm font-semibold'>
        <span>{option.name}</span>
      </p>
      <input type='checkbox' name={option.id} value={checked} onChange={handleChange} className='focus:ring-0 rounded-full text-bizpotta-green' />
    </div>
  );
}

//onChange={(e) => setSelectedCourse(e.target.value)}
