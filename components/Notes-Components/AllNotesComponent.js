import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, {useRef, useState, useEffect} from "react";
import { AiOutlineDown } from "react-icons/ai";
import useCourse from "../../hooks/useCourse";

const AllNotesComponent = () => {

  const router = useRouter()

  const {id, weekId} = router.query
  const [dataId, setDataId] = useState()

  const{getNotes, getMyCourse} = useCourse()

  useEffect(() => {
    id
      ? getMyCourse(id)
          .then((res) => {
            if (!res) {
              router.push("/students");
            }
            setDataId(res?.id);
          })
      : null;
  }, [router, id]);

  const getAllNotes = async(id) => {
    const res = await getNotes(id)
    // console.log(res)
    return res.data
  }

  console.log(dataId)

  // const {data: coursesData,} = useQuery(["get-course-data", id], () => getMyCourse(id), {
  //   onSuccess: (data) => {
  //     console.log(data)
  // },
  // staleTime: 60 * 1000 * 10, 
  // retry: 2 
  // })

  const {data, isLoading} = useQuery(["get-all-notes", dataId], () => getAllNotes(dataId), {
    onSuccess: (data) => {
        console.log(data)
    },
    staleTime: 60 * 1000 * 10, 
    retry: 2 
  })

    return(
        <div className="relative w-full min-h-screen bg-white sm:bg-gray-50 flex flex-col pt-[90px] md:pt-[120px] items-center md:translate-x-[200px] md:w-[calc(100%-200px)] px-2 md:px-8 pb-10 text-darkGray ">
            {data?.map((el, index) => (
              <CondenseNotes key={index} weekNumber = {index + 1} data = {el}/>
            ))}
        </div>
    )
};


export default AllNotesComponent;



const CondenseNotes = ({data, weekNumber}) => {
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

        return (
              <div className="w-full lg:w-[700px]  lg:px-10">
      
                <div className="border-2 border-gray-400 rounded-md mt-6 px-2 sm:px-6 pb-4 ">
                  <div className="flex flex-row justify-between items-center h-10 w-full mt-2 sm:mt-6 ">
                    <p className="text-[14px] sm:text-base">Week {data?.[0]?.week?.week_number}</p>
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
                      {
                        data?.map((el, index) => (
                          <Note key={index} body={el?.note} weekId = {el?.week_id} noteId={el?.id} />
                          
                        ))
                      }
                      {/* <Note body={body} />
                      <Note body={body} /> */}
                    </div>
                  </div>
                </div>
              </div>
      
              
        );
}



const Note = ({ body, weekId, noteId }) => {

    const router = useRouter()
    const {id} = router.query

    const handleClick = () => {
        router.push({
            pathname: "/students/notes/[id]/week/[weekId]",
            query: {
                id: id,
                weekId: weekId,
                noteId: noteId
            }
        })
    }

    return (
      <div className="w-full border-2  border-gray-400 rounded-md px-2 sm:px-4 py-4 mt-4 sm:mt-8 text-[12px] sm:text-[14px] cursor-pointer" onClick={handleClick}>
        <div>
          {body}
        </div>
        
      </div>
    );
  };