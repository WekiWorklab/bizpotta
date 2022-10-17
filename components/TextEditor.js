import React, { useMemo, useState, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';

export const TextEditor = ({api_key}) => {
    const editorRef = useRef(null);
    const log = () => {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
      }
    };
    return (
      <>
        <Editor
          apiKey={api_key}
          onInit={(evt, editor) => editorRef.current = editor}
          initialValue=""
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
        {/* <div className='flex center mt-7'>
          <button onClick={log} className=' mx-auto border-2'>Log editor content</button>
        </div> */}
        {/* This button above outputs what is typed into the text editor.*/}
      </>
    );
  }