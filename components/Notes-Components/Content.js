import React, { useMemo, useState, useRef } from 'react'


////////////
import { Editor } from '@tinymce/tinymce-react';
import { TextEditor } from '../TextEditor';

const Content = () => {

  const API_KEY = process.env.NEXT_PUBLIC_TINY_API_KEY

  return (
    <div className='relative w-full h-full min-h-[100vh] bg-white sm:bg-gray-50 flex flex-col pt-[90px] md:pt-[120px] md:justify-center items-center md:translate-x-[200px] md:w-[calc(100%-200px)] px-2 md:px-8 pb-10 text-darkGray '>
        
        {/* <Editor /> */}
        <div className='w-full sm:w-[600px] '>
          <p className='mt-10 mb-10'>New Note</p>
          <div className='w-full min-h-[200px] border border-gray-100 bg-white rounded-md p-4 sm:p-10'>
           <TextEditor api_key = {API_KEY}/>
          </div>
        </div>
        
    </div>
  )
}





export default Content