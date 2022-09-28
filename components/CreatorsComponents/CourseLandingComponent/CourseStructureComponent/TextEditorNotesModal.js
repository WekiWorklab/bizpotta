import React, { useMemo, useState, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';

export const TextEditorNotesModal = ({api_key, value, week, setSuccess, initialState, setInitialState, type, setCurrentValue}) => {

    console.log(value)
    console.log(initialState)

    // let previousObj = initialState[week]
    // console.log(previousObj, week)
    const editorRef = useRef(null);
    const log = () => {

      let stringValue = editorRef.current?.getContent()
      if ((stringValue===null) || (stringValue===''))
        return false;
      else
        stringValue = stringValue.toString().replace( /(<([^>]+)>)/ig, '');

      console.log(initialState)

      let newObj = {...initialState[week], [type]: stringValue}
      console.log(newObj)

      const newState = initialState.splice((week - 1), 1, newObj)
      console.log(newState)

      setInitialState((prevState) => [...newState])
      // setSuccess(false)
    };


    return (
      <>
      
        <Editor
          apiKey={api_key}
          onInit={(evt, editor) => editorRef.current = editor}
          // initialValue={value}
          initialValue='value'
          init={{
            width: "100%",
            height: "100%",
            menubar: true,
            plugins: [
              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
              'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
              'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
            ],
            toolbar: 'undo redo | blocks | ' +
              'bold italic forecolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
        />
        <button onClick={log} className='mx-auto border-2 w-[80px] h-[30px] text-[14px] rounded-md border my-2'>Save</button>
        {/* This button above outputs what is typed into the text editor.*/}
      </>
    );
  }













  /**
   * 
   *  let stringValue = editorRef.current?.getContent()
      if ((stringValue===null) || (stringValue===''))
        return false;
      else
        stringValue = stringValue.toString().replace( /(<([^>]+)>)/ig, '');

      console.log(initialState)

      let newElement;
      let elIndex ;
      for(let el of previousArray) {
        if(Object.keys(el) === type) {
          newElement = {type: stringValue}
          elIndex = previousArray.indexOf(el)
        }
      }

      const arr = previousArray.splice(elIndex, 1, newElement)

      setInitialState((prevState) => ({...prevState, [week]: arr}))
      setSuccess(false)
      console.log(initialState)
   */



    /** Turned out to be overkill but is good reference material */
  // if (editorRef.current) {
      //   for(let el in initialState){
      //       if (el === section) {
      //           console.log(el)
      //           newValue = {[el]: editorRef.current?.getContent()}
      //       }
      //   }

      //   console.log(newValue)
      //   setInitialState(
      //       (prevState) => ({...prevState, ...newValue})
      //   )
      // }