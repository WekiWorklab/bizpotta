import React, { useMemo, useState, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export const TextEditorNotesModal = ({ api_key, setValue }) => {
  const editorRef = useRef(null);

  const log = () => {
    let stringValue = editorRef.current?.getContent();
    if (stringValue === null || stringValue === "") return false;
    else stringValue = stringValue.toString().replace(/(<([^>]+)>)/gi, "");
    setValue(stringValue);
  };

  return (
    <>
      <Editor
        apiKey={api_key}
        onInit={(evt, editor) => (editorRef.current = editor)}
        onChange={log}
        // initialValue='value'
        init={{
          width: "100%",
          height: "400",
          menubar: true,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      {/* <button onClick={log} className='mx-auto border-2 w-[80px] h-[30px] text-[14px] rounded-md border my-2'>Save</button> */}
      {/* This button above outputs what is typed into the text editor.*/}
    </>
  );
};
