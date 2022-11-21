import { useRouter } from "next/router";
import React, {useRef, useState, useEffect} from "react";
import { AiOutlineDown } from "react-icons/ai";

const AllNotesComponent = () => {

    return(
        <div className="relative w-full min-h-screen bg-white sm:bg-gray-50 flex flex-col pt-[90px] md:pt-[120px] items-center md:translate-x-[200px] md:w-[calc(100%-200px)] px-2 md:px-8 pb-10 text-darkGray ">
            <CondenseNotes />
            <CondenseNotes />
            <CondenseNotes />
            <CondenseNotes />


        </div>
    )
};

export default AllNotesComponent;



const CondenseNotes = () => {
        const parentRef = useRef(null);
        const childRef = useRef(null);
      
        const [drop, setDrop] = useState(true);
        const [height, setHeight] = useState(null);
        const [realHeight, setRealHeight] = useState(null);
      
        useEffect(() => {
          setRealHeight(parentRef.current?.firstChild.offsetHeight);
          setHeight(parentRef.current?.firstChild.offsetHeight);
        }, []);
      
        const handleClick = () => {
          if (drop === true) {
            setHeight(0);
          } else if (drop === false) {
            setHeight(realHeight);
          }
          setDrop(!drop);
        };
      
        const body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"

        return (
              <div className="w-full lg:w-[700px]  lg:px-10">
      
                <div className="border-2 border-gray-400 rounded-md mt-6 px-2 sm:px-6 pb-4 ">
                  <div className="flex flex-row justify-between items-center h-10 w-full mt-2 sm:mt-6 ">
                    <p className="text-[14px] sm:text-base">Week 1</p>
                    <AiOutlineDown
                      onClick={handleClick}
                      className={`${drop ? "arrow-right" : "arrow-down"} cursor-pointer`}
                    />
                  </div>
                  <div
                    className="dropParent"
                    style={{ height: `${height}px` }}
                    ref={parentRef}
                  >
                    <div className={drop ? "drop" : "no-drop"} ref={childRef}>
                      <Note body={body} />
                      <Note body={body} />
                      <Note body={body} />
                    </div>
                  </div>
                </div>
              </div>
      
              
        );
}



const Note = ({ body }) => {

    const router = useRouter()
    // const {}

    const handleClick = () => {
        router.push({
            pathname: "/students/notes/[id]/week/[weekId]",
            query: {
                id: router.query.id,
                weekId: 3,
                noteId: 10
            }
        })
    }
    //
    return (
      <div className="w-full border-2  border-gray-400 rounded-md px-2 sm:px-4 py-4 mt-4 sm:mt-8 text-[12px] sm:text-[14px] cursor-pointer" onClick={handleClick}>
        <div>
          {body}
        </div>
        
      </div>
    );
  };