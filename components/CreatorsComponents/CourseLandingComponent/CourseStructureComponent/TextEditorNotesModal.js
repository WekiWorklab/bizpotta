import React, { useMemo, useState, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';

export const TextEditorNotesModal = ({api_key, value, setCurrentValue, section, initialState, setInitialState}) => {

    // console.log(section)
    // console.log(initialState[0])

    const editorRef = useRef(null);
    const log = () => {


      if (editorRef.current) {
        console.log(editorRef.current.getContent());
        let newValue = {}

        // const stateFunc = (prev) => {
            // console.log(prev)
            for(let el in initialState){
                if (el.key === section) {
                    console.log(el)
                    // return({[section]: editorRef.current.getContent()})
                    // break
                    // console.log({[section]: editorRef.current.getContent()})
                    newValue = {[section]: editorRef.current.getContent()}
                    console.log(newValue)
                    // console.log({name: 'hgvbnkj'})
                }
            }
        // }

        // state
        setInitialState(
            (prevState) => [...prevState, newValue]
        )

      }
    };
    return (
      <>
        <Editor
          apiKey={api_key}
          onInit={(evt, editor) => editorRef.current = editor}
          initialValue={value}
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
        <button onClick={log} className='mx-auto border-2'>Log editor content</button>
        {/* This button above outputs what is typed into the text editor.*/}
      </>
    );
  }