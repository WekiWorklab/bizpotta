import React from 'react'
import { useState } from 'react'
import { AiFillCaretDown, AiOutlineArrowDown, AiOutlinePicture } from 'react-icons/ai'
import { specialization } from '../../../public'
import TailwindSelect from '../../TailwindSelect'

const Content = () => {

    const [select, setSelect] = useState('education')

  return (
    <div className='relative w-full h-full bg-[#FDFDFD] flex flex-col mt-[90px] md:mt-[120px] md:justify-center items-start md:translate-x-[250px] md:w-[calc(100%-250px)] px-2 xl:px-10 py-10 text-darkGray'>

        {/* Nav section */}
        <div className='w-full flex items-center gap-x-12 ' >
            <div className={`${select === "personal" ? 'bg-[#94F236] bg-opacity-[0.06] text-[#5CAC0D]' : "text-[#999999]"} px-2 py-2 rounded-md text-[13px] cursor-pointer `} onClick = {() => setSelect("personal")}>Personal information</div>
            <div className={`${select === "education" ? 'bg-[#94F236] bg-opacity-[0.06] text-[#5CAC0D]' : "text-[#999999]"} px-2 py-2 rounded-md text-[13px] cursor-pointer `} onClick = {() => setSelect("education")} >Education</div>
            <div className={`${select === "company" ? 'bg-[#94F236] bg-opacity-[0.06] text-[#5CAC0D]' : "text-[#999999]"} px-2 py-2 rounded-md text-[13px] cursor-pointer `} onClick = {() => setSelect("company")} >Company Profile</div>
            <div className={`${select === "payment" ? 'bg-[#94F236] bg-opacity-[0.06] text-[#5CAC0D]' : "text-[#999999]"} px-2 py-2 rounded-md text-[13px] cursor-pointer `} onClick = {() => setSelect("payment")} >Payment</div>
            <div className={`${select === "account" ? 'bg-[#94F236] bg-opacity-[0.06] text-[#5CAC0D]' : "text-[#999999]"} px-2 py-2 rounded-md text-[13px] cursor-pointer `} onClick = {() => setSelect("account")} >Account</div>
        </div>

        {/* Body */}

        <div className='w-full '>
            {select === "personal" && <PersonalInformation />}
            {select === "education" && <Education />}
            {select === "company" && <PersonalInformation />}
            {select === "payment" && <PersonalInformation />}
            {select === "account" && <PersonalInformation />}
        </div>





    </div>
  )
}

export default Content


const Education = () => {

    const [education, setEducation] = useState()
    const [experience, setExperience] = useState()
    const [institution, setInstitution] = useState()

    const [time, setTime] = useState()


    const level = [ "Less than High School Diploma (or equivalent)" , "High School Diploma (equivalent)", "College but no degree", "Associate degree", "Bachelor’s degree", "Master’s degree", "Professional school degree", "Doctorate school degree" ]
    const Experience = ["Employed", "Unemployed", "Self employed", "Prefer not to say"]
    const Institution = ["Leo's Photography", "Leo's Photography", "Leo's Photography", "Leo's Photography", "Leo's Photography"]

    const timeExperience = ["Less than 1 year", "Less than 5 years", "Less than 10 years", "More than 10 years"]



    return (
        <div className='w-full mt-8 pb-20'>
            <div className='font-bold text-[16px]'>Education</div>

            <div className = "mt-8 text-[14px]">
                <p className='font-bold'>Highest level of education</p>
                <div>
                    <SelectOptions data = {level} width = '330px' option = {education} setOption = {setEducation} />
                </div>
            </div>

            <div className = "mt-8 text-[14px]">
                <p className='font-bold'>Work Experience</p>
                <div>
                    <SelectOptions data = {Experience} width = '330px' option = {experience} setOption = {setExperience} />
                </div>
            </div>

            <div className = "mt-8 text-[14px]">
                <p className='font-bold'>Institution</p>
                <div>
                    <SelectOptions data = {Institution} width = '280px' option = {institution} setOption = {setInstitution} />
                </div>
            </div>

            <div className = "mt-8 text-[14px]">
                <p className='font-bold'>Departmental Role</p>
                <div>
                    <SelectOptions data = {Institution} width = '280px' option = {institution} setOption = {setInstitution} />
                </div>
            </div>

            <div className = "mt-8 text-[14px]">
                <p className='font-bold'>Years of Experience</p>
                <div>
                    <SelectOptions data = {timeExperience} width = '280px' option = {time} setOption = {setTime} />
                </div>
            </div>

            <div className = "mt-8 text-[14px]">
                <p className='font-bold'>Certification</p>
                <div>
                    <SelectOptions data = {timeExperience} width = '280px' option = {time} setOption = {setTime} />
                </div>
                <div className='flex w-[280px] items-center mt-3'>
                    <AiOutlinePicture size={20} />
                    <p className='text-[12px] ml-2'>Upload certification</p>
                    <label htmlFor='file' className='flex items-center justify-center gap-x-3 bg-darkBlue text-[13px] text-white py-1 px-2 rounded-md ml-8 cursor-pointer'>
                        <p className=''>Browse</p>
                        <AiFillCaretDown color='white' size={14} />
                        <input type='file' id='file' className='hidden' />
                    </label>

                </div>
            </div>


            <div className='flex justify-center sm:justify-end gap-x-3 mt-10'>
                <div className='w-[120px] h-[40px] bg-white border-[1px] border-darkBlue text-darkBlue centerFlex font-bold rounded-md text-[13px] cursor-pointer' onClick={() => {}}> Cancel </div>
                <div className='w-[120px] h-[40px] bg-darkBlue text-white centerFlex font-bold rounded-md text-[13px] cursor-pointer' onClick={() => {}}> Save changes </div>
            </div>

        </div>
    )
}



const SelectOptions = ({data, option, setOption, width}) => {

    const [showSelect, setShowSelect] = useState(false)

    return (
        <div className='relative mt-4'>
            <div className='flex items-center gap-x-3'>
                <div className={`w-[${width}] h-[40px] px-1 rounded-md focus:ring-0 outline-none border border-[1px] border-[#CCCCCC] border-opacity-[0.45] flex items-center text-[13px] text-gray-400 pl-10 `} >
                    {option || "select"}
                </div>
                <AiFillCaretDown size={20} color='#999999' onClick={() => setShowSelect(prev => !prev)}/>
            </div>
            {showSelect && <div className='absolute z-20 top-[42px] left-0 py-4 bg-white rounded-md dropdown-shadow'>
                {
                    data.map((el, index) => (
                        <div key={index} className='py-2 px-4 hover:bg-gray-500 hover:text-white text-[13px]' onClick={() => {setOption(el); setShowSelect(false)}}>
                            {el}
                        </div>
                    ))
                }
            </div>}
        </div>
    )
}




const PersonalInformation = () => {

    const [showEditSection, setShowEditSection] = useState(true)

    return(
        <div className='w-full mt-8'>
            {!showEditSection ?  <InformationPreview setShowEditSection = {setShowEditSection}/> : <InformationEdit setShowEditSection = {setShowEditSection}/> }
        </div>
    )
} 


const InformationEdit = ({setShowEditSection}) => {


    return(
        <div >
            <p className='font-bold text-[14px] text-center xl:text-left'>My Information</p>
            <div className='w-full flex flex-col xl:flex-row gap-x-28 mt-7'>
                <div className=''>
                    <img src={specialization.src} alt='' className = 'min-w-[250px] min-h-[250px] max-w-[250px] max-h-[250px] rounded-md mx-auto xl:mx-[0px]'  />
                    <form className='mt-6 mx-auto centerFlex' >
                        <label htmlFor='file'  >
                            <div className='w-[140px] h-[40px] bg-white border-[1px] border-darkBlue text-black centerFlex font-bold rounded-sm text-[13px] cursor-pointer'> Change picture </div>
                            <input type='file' id='file' className = 'hidden' />
                        </label>
                    </form>
                </div>

                <div className='grid mt-10 xl:mt-[0px]  lg:grid-cols-2 gap-y-10 gap-x-28 text-[14px]'>
                    <div className='flex flex-col items-center xl:block  '>
                        <p className='font-bold'>First name</p>
                        <input type='text' className='w-[250px] h-[40px] mt-3 focus:ring-0 outline-none bg-[#FCFDFE] border-[1px] border-[#CCCCCC] border-opacity-[0.45] text-[13px] text-[#999999] pl-3 rounded-md' placeholder='Ahmed'/>
                    </div>
                    <div className='flex flex-col items-center xl:block '>
                        <p className='font-bold'>Last name</p>
                        <input type='text' className='w-[250px] h-[40px] mt-3 focus:ring-0 outline-none bg-[#FCFDFE] border-[1px] border-[#CCCCCC] border-opacity-[0.45] text-[13px] text-[#999999] pl-3 rounded-md' placeholder='Ahmed'/>
                    </div>
                    <div className='flex flex-col items-center xl:block '>
                        <p className='font-bold'>Mobile number</p>
                        <input type='number' className='w-[250px] h-[40px] mt-3 focus:ring-0 outline-none bg-[#FCFDFE] border-[1px] border-[#CCCCCC] border-opacity-[0.45] text-[13px] text-[#999999] pl-3 rounded-md' placeholder='09030395075'/>
                    </div>
                    <div className='flex flex-col items-center xl:block '>
                        <p className='font-bold'>Gender</p>
                        <select className='w-[250px] h-[40px] mt-3 focus:ring-0 outline-none bg-[#FCFDFE] border-[1px] border-[#CCCCCC] border-opacity-[0.45] text-[13px] text-[#999999] pl-3 rounded-md'>
                            <option value="" className='hidden'></option>
                            <option value = 'male'>Male</option>
                            <option value = 'female'>Female</option>
                        </select>
                            {/* <TailwindSelect data = {data} /> */}
                    </div>
                    <div className='flex flex-col items-center xl:block xl:col-span-2'>
                        <p className='font-bold'>Email address</p>
                        <input type='email' className='w-[300px] h-[40px] mt-3 focus:ring-0 outline-none bg-[#FCFDFE] border-[1px] border-[#CCCCCC] border-opacity-[0.45] text-[13px] text-[#999999] pl-3 rounded-md' placeholder='ahmed@gmail.com'/>
                    </div>
                    <div className='flex flex-col items-center xl:block '>
                        <p className='font-bold'>Organisation</p>
                        <input type='text' className='w-[250px] h-[40px] mt-3 focus:ring-0 outline-none bg-[#FCFDFE] border-[1px] border-[#CCCCCC] border-opacity-[0.45] text-[13px] text-[#999999] pl-3 rounded-md' placeholder='weki-work'/>
                    </div>
                    <div className='flex flex-col items-center xl:block '>
                        <p className='font-bold'>Date of birth</p>
                        <input type='date' className='w-[250px] h-[40px] mt-3 focus:ring-0 outline-none bg-[#FCFDFE] border-[1px] border-[#CCCCCC] border-opacity-[0.45] text-[13px] text-[#999999] pl-3 rounded-md' />
                    </div>
                    <div className='flex flex-col items-center xl:block xl:col-span-2'>
                        <p className='font-bold'>Residential Address</p>
                        <input type='text' className='w-[300px] h-[40px] mt-3 focus:ring-0 outline-none bg-[#FCFDFE] border-[1px] border-[#CCCCCC] border-opacity-[0.45] text-[13px] text-[#999999] pl-3 rounded-md' placeholder='12, Omowunmi Lane, Ikeja Bus Stop, Lagos'/>
                    </div>
                    <div className='flex flex-col items-center xl:block '>
                        <p className='font-bold'>Country</p>
                        <input type='text' className='w-[250px] h-[40px] mt-3 focus:ring-0 outline-none bg-[#FCFDFE] border-[1px] border-[#CCCCCC] border-opacity-[0.45] text-[13px] text-[#999999] pl-3 rounded-md' placeholder='weki-work'/>
                    </div>
                    <div className='flex flex-col items-center xl:block '>
                        <p className='font-bold'>State</p>
                        <input type='text' className='w-[250px] h-[40px] mt-3 focus:ring-0 outline-none bg-[#FCFDFE] border-[1px] border-[#CCCCCC] border-opacity-[0.45] text-[13px] text-[#999999] pl-3 rounded-md' placeholder='weki-work'/>
                    </div>
                    <div className='flex flex-col items-center xl:block '>
                        <p className='font-bold'>Password</p>
                        <input type='password' className='w-[250px] h-[40px] mt-3 focus:ring-0 outline-none bg-[#FCFDFE] border-[1px] border-[#CCCCCC] border-opacity-[0.45] text-[13px] text-[#999999] pl-3 rounded-md' placeholder='*********'/>
                    </div>
                    <div className='flex flex-col items-center xl:block self-end'>
                        <input type='password' className='w-[250px] h-[40px] mt-3 focus:ring-0 outline-none bg-[#FCFDFE] border-[1px] border-[#CCCCCC] border-opacity-[0.45] text-[13px] text-[#999999] pl-3 rounded-md' placeholder='*********'/>
                    </div>

                    <div className='lg:col-span-2 gap-x-12 flex justify-end mt-6'>
                        <div className='w-[120px] h-[40px] bg-white border-[1px] border-darkBlue text-darkBlue centerFlex font-bold rounded-md text-[13px] cursor-pointer' onClick={() => setShowEditSection(false)}> Cancel </div>
                        <div className='w-[120px] h-[40px] bg-darkBlue text-white centerFlex font-bold rounded-md text-[13px] cursor-pointer' onClick={() => setShowEditSection(false)}> Save changes </div>
                    </div>


                </div>
            </div>
        </div>
    )
    

}

const InformationPreview = ({setShowEditSection}) => {
     
    return(
        <div >
            <p className='font-bold text-[14px]'>My Information</p>
            <div className='w-full flex flex-col lg:flex-row gap-x-40 mt-7'>
                <img src={specialization.src} alt='' className = 'min-w-[250px] min-h-[250px] max-w-[250px] max-h-[250px] rounded-md '  />
                <div className='grid mt-10 lg:mt-[0px] grid-cols-2 gap-y-10 gap-x-28 text-[14px]'>
                    <div className=''>
                        <p className='font-bold'>First name</p>
                        <p className = 'text-darkBlue break-words'>Ahmed</p>
                    </div>
                    <div className=''>
                        <p className='font-bold'>Mobile Number</p>
                        <p className = 'text-darkBlue break-words'>Ahmed</p>
                    </div>
                    <div className=''>
                        <p className='font-bold'>Mobile number</p>
                        <p className = 'text-darkBlue'>09030395075</p>
                    </div>
                    <div className=''>
                        <p className='font-bold'>Gender</p>
                        <p className = 'text-darkBlue'>Male</p>
                    </div>
                    <div className='col-span-2'>
                        <p className='font-bold'>Email address</p>
                        <p className = 'text-darkBlue break-words'>Ahmedsalisu@email.com</p>
                    </div>
                    <div className=''>
                        <p className='font-bold'>Organisation</p>
                        <p className = 'text-darkBlue break-words'>Weki-work</p>
                    </div>
                    <div className=''>
                        <p className='font-bold'>Date of birth</p>
                        <p className = 'text-darkBlue'>DD/MM/YY</p>
                    </div>
                    <div className='col-span-2'>
                        <p className='font-bold'>Residential Address</p>
                        <p className = 'text-darkBlue break-words'>12, Omowunmi Lane, Ikeja Bus Stop, Lagos</p>
                    </div>
                    <div className=''>
                        <p className='font-bold'>Country</p>
                        <p className = 'text-darkBlue break-words'>Nigeria</p>
                    </div>
                    <div className=''>
                        <p className='font-bold'>State</p>
                        <p className = 'text-darkBlue break-words'>Osun</p>
                    </div>
                    <div className='col-span-2 flex justify-end'>
                        <div className='w-[120px] h-[40px] bg-darkBlue text-white centerFlex font-bold rounded-md text-[13px] cursor-pointer' onClick={() => setShowEditSection(true)}> Edit </div>
                    </div>


                </div>
            </div>
        </div>
    )
}