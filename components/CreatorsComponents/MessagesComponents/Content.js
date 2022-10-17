import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'
import { AiFillStar, AiOutlinePlus } from 'react-icons/ai'
import { BsDashLg, BsThreeDotsVertical } from 'react-icons/bs'
import { specialization } from '../../../public'
import ComposeModal from './ComposeModal'

const Content = () => {

    const [select, setSelected] = useState("inbox")
    const [show, setShow] = useState(false)

  return (
    <div className='relative w-full h-full bg-[#FEFEFE] flex flex-col mt-[90px] md:mt-[120px] md:justify-center items-start md:translate-x-[250px] md:w-[calc(100%-250px)] px-1 sm:px-2 xl:px-8 py-12 text-darkGray'>

        <div className='w-full flex justify-between items-center '>
            <p className='text-darkBlue font-bold'>Messages</p>
            <div className='w-[120px] h-[40px] flex justify-center items-center gap-x-3 text-[15px] text-white bg-darkBlue rounded-md cursor-pointer' onClick={() => setShow(true)}>
                <AiOutlinePlus color = 'white' />
                <p>Compose</p>
            </div>


        </div>
        
        <div className='w-full border-[1px] border-[#CCCCCC] border-opacity-[0.45] rounded-md py-8 px-2 md:px-6 mt-10'>
            {/* navsection */}
            <div className='w-full flex justify-between items-center text-[12px] sm:text-[15px]'>
                <div className='flex items-center gap-x-3 md:gap-x-20'>
                    <div className={`flex cursor-pointer items-center px-2 py-2 rounded-sm ${select === "inbox" ? "bg-[#94F236] bg-opacity-[0.06] " : ""}`} onClick = {() => setSelected("inbox")}>
                        <div className={`px-1 py-1 centerFlex font-bold ${select === "inbox" ? "text-[#5CAC0D]" : "text-[#999999]" }`}>Inbox</div>
                        <div className={`w-[14px] h-[14px] font-bold rounded-full pt-[0.4px] text-[8px] centerFlex ${select === "inbox" ? "bg-[#5CAC0D]" : "bg-[#999999]" }`}>20</div>
                    </div>

                    <div className={`flex cursor-pointer items-center px-2 py-2 rounded-sm ${select === "updates" ? "bg-[#94F236] bg-opacity-[0.06] " : " bg-transparent"}`} onClick = {() => setSelected("updates")}>
                        <div className={`px-1 py-1 centerFlex font-bold ${select === "updates" ? "text-[#5CAC0D]" : "text-[#999999]" }`}>Updates</div>
                    </div>

                    <div className={`flex cursor-pointer items-center px-2 py-2 rounded-sm ${select === "starred" ? "bg-[#94F236] bg-opacity-[0.06] " : " bg-transparent"}`} onClick = {() => setSelected("starred")}>
                        <div className={`px-1 py-1 centerFlex font-bold ${select === "starred" ? "text-[#5CAC0D]" : "text-[#999999]" }`}>Starred Message</div>
                    </div>
                </div>

                <div className='flex items-center text-[#333333] text-opacity-[0.4] text-[18px] gap-x-3'>
                    <AiFillStar   />
                    <BsThreeDotsVertical  />
                </div>
            </div>

            <div className="my-2 horizontal-scrollbar overflow-x-scroll pb-2 ">
                {select === "inbox" && <Inbox />}  
                {select === "updates" && <Inbox />}   
                {select === "starred" && <Inbox />}  

            </div>

        </div>

        <ComposeModal show = {show} setShow = {setShow} />
    </div>
  )
}

export default Content


const Inbox = () => {

  const router = useRouter()

    const data = [
        {
            item: 1,
            name: " Emeka Jesus",
            title: "Request",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris, massa mi leo sodales mi nibh consectetur. Eu faucibus sit cum egestas sit. Et sed nulla sagittis, mattis placerat. Arcu duis malesuada auctor montes, condimentum. mattis",
            new: true
        },
        {
            item: 2,
            name: "Chibuike Umoh",
            title: "Request",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris, massa mi leo sodales mi nibh consectetur. Eu faucibus sit cum egestas sit. Et sed nulla sagittis, mattis placerat. Arcu duis malesuada auctor montes, condimentum. mattis",
            new: true
        },
        {
            item: 3,
            name: "Adama Okonkwo",
            title: "Product Update ",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris, massa mi leo sodales mi nibh consectetur. Eu faucibus sit cum egestas sit. Et sed nulla sagittis, mattis placerat. Arcu duis malesuada auctor montes, condimentum. mattis",
            new: true
        },
        {
          item: 4,
          name: "Adama Okonkwo",
          title: "Product Update ",
          message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris, massa mi leo sodales mi nibh consectetur. Eu faucibus sit cum egestas sit. Et sed nulla sagittis, mattis placerat. Arcu duis malesuada auctor montes, condimentum. mattis",
          new: true
      },
      {
        item: 5,
        name: "Adama Okonkwo",
        title: "Product Update ",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris, massa mi leo sodales mi nibh consectetur. Eu faucibus sit cum egestas sit. Et sed nulla sagittis, mattis placerat. Arcu duis malesuada auctor montes, condimentum. mattis",
        new: true
    },
    {
      item: 6,
      name: "Adama Okonkwo",
      title: "Product Update ",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris, massa mi leo sodales mi nibh consectetur. Eu faucibus sit cum egestas sit. Et sed nulla sagittis, mattis placerat. Arcu duis malesuada auctor montes, condimentum. mattis",
      new: true
  },
    ]

    const [select, setSelect] = useState()

    return (
            <div className="py-2 align-middle inline-block min-w-[1050px] xl:w-full">
            {/* Table */}
            {<table className=" min-w-full divide-y divide-gray-200 text-[12px]">
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((el) => (
                  <tr key={el.item} onClick = {() => setSelect(el.item)} className={`${select === el.item ? "bg-[#858585] bg-opacity-[0.07]" : "bg-transparent"} `}>
                    <td className="px-2 py-2 whitespace-nowrap">
                      <div className="w-[14px] h-[14px] border-[1px] border-[#323232]"></div>
                    </td>
                    
                    <td className="px-2 py-2 ">
                        <div className='max-w-[200px] break-words font-bold'>{el.name}</div>
                    </td>
                    <td className="px-2 py-2 whitespace-nowrap">
                        <img src={specialization.src} alt='' className ='w-[48px] h-[48px] rounded-full' />
                    </td>
                    <td className="px-2 py-2 whitespace-nowrap">
                        <div className='text-[12px] text-white centerFlex bg-[#5CAC0D] w-[50px] h-[25px] rounded-sm'>
                            New
                        </div>
                    </td>
                    <td className="px-2 py-2 ">
                        <div className='max-w-[200px] text-right break-words font-bold'>{el.title}</div>
                    </td>

                    <td className=" py-2 ">
                      <BsDashLg />
                    </td>

                    <td className="px-2 py-2 cursor-pointer max-w-[320px] break-all" onClick={() => router.push(`/creators/messages/${el.item}`)}>
                        {/* <div className='max-w-[420px] break-all '>{el.message}</div> */}
                        {el.message}
                    </td>

                   
                    
                  </tr>
                ))}
              </tbody>
            </table>}

          {/* </div> */}
        </div>
    )
}