import React from "react";

export default function LibraryRadioButton({ option, setSelectedCourse, current, selectedCourse, multiSelect }) {

  const handleChange = (e, option) => {
    const {value} = e.target
    if (multiSelect){
       value ? setSelectedCourse(option.id) : setSelectedCourse('')

      console.log(selectedCourse, value)
    }
    else if(!multiSelect) {
      setSelectedCourse(value)
    }
  }

  return (
    <div className='flex items-center justify-between overflow-hidden transition-all rounded-md bg-transparent group h-14 w-[150px] md:w-80 border-l-2 px-4 md:px-8 shadow-md border-l-bizpotta-green border '>
      <p className='text-bizpotta-purple text-sm font-semibold'>
        <span>{option.name}</span>
      </p>
      <input
        type='radio'
        id='library'
        value={option.id}
        name={multiSelect ? option.id : 'library'}
        onChange={(e) => setSelectedCourse(e.target.value)}
        // onChange={handleChange}
        className='text-bizpotta-green ring-0'
      />
    </div>
  );
}


//onChange={(e) => setSelectedCourse(e.target.value)}
