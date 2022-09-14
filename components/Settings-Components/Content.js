import React from 'react'
import { useState } from 'react'
import { cards, offer, paypal } from '../../public'

const Content = () => {

    const [select, setSelect] = useState('account')

  return (
    <div className='relative w-full h-full bg-[#E5E5E5]  flex flex-col mt-[90px] md:mt-[120px]  md:translate-x-[200px] md:w-[calc(100%-200px)] pl-8 pr-20 py-10'>
        
        <p className='text-[18px] text-darkBlue font-bold'>Settings</p>

        <div className='w-full flex flex-row items-center gap-x-20 mt-10 '>

            <div className={`${select === 'account' ? "text-darkBlue border-b-2 border-bizpotta-green" : "text-gray-500 border-b-0"} text-[14px] font-bold`} onClick={() => setSelect('account')}>
                Account
            </div>

            <div className={`${select === 'payment' ? "text-darkBlue border-b-2 border-bizpotta-green" : "text-gray-500 border-b-0"} text-[14px] font-bold`} onClick={() => setSelect('payment')}>
                Payment Method 
            </div>

            <div className={`${select === 'language' ? "text-darkBlue border-b-2 border-bizpotta-green" : "text-gray-500 border-b-0"} text-[14px] font-bold`} onClick={() => setSelect('language')}>
                Language
            </div>

            <div className={`${select === 'language' ? "text-darkBlue border-b-2 border-bizpotta-green" : "text-gray-500 border-b-0"} text-[14px] font-bold`} onClick={() => setSelect('language')}>
                Language
            </div>

            <div className={`${select === 'language' ? "text-darkBlue border-b-2 border-bizpotta-green" : "text-gray-500 border-b-0"} text-[14px] font-bold`} onClick={() => setSelect('language')}>
                Language
            </div>

            <div className={`${select === 'language' ? "text-darkBlue border-b-2 border-bizpotta-green" : "text-gray-500 border-b-0"} text-[14px] font-bold`} onClick={() => setSelect('language')}>
                Language
            </div>
            
        </div>        

        {( select === 'account') && <Account />}   

        {(select === 'payment') && <Payment />}     



    </div>
  )
}

export default Content



const Payment = () => {

    return (
        <div>
            <div className='flex flex-row items-center gap-x-20 mt-8'>
                <img src={cards.src} alt='' className = 'w-[90px] h-[55px]' />
                <img src={paypal.src} alt='' className = 'w-[100px] h-[45px]' />
            </div>

            <div className='w-full h-[70px] bg-gray-600 flex flex-row items-center gap-x-4 pl-20 mt-10'>
                <input type='checkBox' className='focus:ring-0 outline-none' />
                <p className='text-[13px]'>Show my saved payments method</p>
            </div>


            <div className='w-full mt-10'>
            <div className='w-full flex flex-row items-center justify-between'>
                <p className='mb-2 text-[14px] text-darkBlue font-bold'>Your saved payment methods</p>
                <p className='mb-2 text-[12px] text-gray-500 font-bold'>Edit</p>
            </div>
            <textarea className='w-full min-h-[150px] bg-white centerFlex outline-none pl-4 border border-gray-700 rounded-sm' placeholder='No payment here' value='' />

            <div className='w-full flex flex-row items-center justify-between mt-8'>
                <p className='mb-2 text-[14px] text-darkBlue font-bold'>Add payment</p>
                <p className='mb-2 text-[12px] text-gray-500 font-bold'>Select Payment method</p>
            </div>


            <div className='w-full mt-10'>
                <div className='w-full flex flex-row items-center justify-start'>
                    <p className='mb-2 text-[14px] text-darkBlue font-bold'>Name on card</p>
                </div>
                <input className='w-full h-[50px] bg-white centerFlex outline-none pl-4 border border-gray-700 rounded-sm' value='' type='text'/>
            </div>

            <div className='w-[full mt-10'>
                <div className='w-full flex flex-row items-center justify-start'>
                    <p className='mb-2 text-[14px] text-darkBlue font-bold'>Card number </p>
                </div>
                <input className='w-full h-[50px] bg-white centerFlex outline-none pl-4 border border-gray-700 rounded-sm' value='' type='text'/>
            </div>

            <div className='w-[full mt-10'>
                <div className='w-full flex flex-row items-center justify-start'>
                    <p className='mb-2 text-[14px] text-darkBlue font-bold'>Expiration date</p>
                </div>
                <input className='w-full h-[50px] bg-white centerFlex outline-none pl-4 border border-gray-700 rounded-sm' value='' type='text'/>
            </div>

            <div className='w-[full mt-10'>
                <div className='w-full flex flex-row items-center justify-start'>
                    <p className='mb-2 text-[14px] text-darkBlue font-bold'>CCV</p>
                </div>
                <input className='w-full h-[50px] bg-white centerFlex outline-none pl-4 border border-gray-700 rounded-sm' value='' type='text'/>
            </div>
            

            </div>

            <div className='flex flex-row gap-x-5 justify-end pr-10 mt-16'>
                <div className='w-[130px] h-[35px] rounded-md centerFlex bg-darkBlue text-[13px] text-white'>Save</div>
                <div className='w-[130px] h-[35px] rounded-md centerFlex bg-white text-[13px] border border-darkBlue text-darkBlue'>Close Account</div>
            </div>

        </div>
    )
}







const Account = () => {
        
    const [radioSelect, setRadioSelect] = useState('')

    return (
        <div className='w-full'>
            <div className='flex flex-row gap-x-20 mt-10'>
            <div>
                <p className='mb-2 text-[14px] text-darkBlue font-bold'>First Name</p>
                <input className='w-[250px] h-[50px] bg-white centerFlex outline-none pl-4 border border-gray-700 rounded-sm' value='' />
            </div>
            <div>
                <p className='mb-2 text-[14px] text-darkBlue font-bold'>Middle Name</p>
                <input className='w-[250px] h-[50px] bg-white centerFlex outline-none pl-4 border border-gray-700 rounded-sm' value='' />
            </div>

            <div>
                <p className='mb-2 text-[14px] text-darkBlue font-bold'>Last Name</p>
                <input className='w-[250px] h-[50px] bg-white centerFlex outline-none pl-4 border border-gray-700 rounded-sm' value='' />
            </div>
        </div>


        <div className='w-[600px] mt-10'>
            <div className='w-full flex flex-row items-center justify-between'>
                <p className='mb-2 text-[14px] text-darkBlue font-bold'>Email</p>
                <p className='mb-2 text-[12px] text-gray-500 font-bold'>Edit</p>

            </div>
            <input className='w-full h-[50px] bg-white centerFlex outline-none pl-4 border border-gray-700 rounded-sm' value='' type='email'/>
        </div>


        <div className='w-[450px] mt-10'>
            <div className='w-full flex flex-row items-center justify-between'>
                <p className='mb-2 text-[14px] text-darkBlue font-bold'>Password</p>
                <p className='mb-2 text-[12px] text-gray-500 font-bold'>Edit</p>

            </div>
            <input className='w-full h-[50px] bg-white centerFlex outline-none pl-4 border border-gray-700 rounded-sm' value='' type='password'/>
        </div>


        <div className='text-[14px] text-darkBlue font-bold mt-10'>Video quality</div>
        <div className='flex flex-row items-center gap-x-6 mt-2'>
            <div className='flex flex-row items-center gap-x-1'>
                <p className='text-[14px]'>Low</p>
                <div className='w-[20px] h-[20px] rounded-full bg-gray-700 centerFlex' onClick = {() => setRadioSelect('low')}>
                    {radioSelect === 'low' ? <div className='w-[10px] h-[10px] rounded-full bg-gray-400'/> : null}
                </div>
            </div>
            <div className='flex flex-row items-center gap-x-1'>
                <p className='text-[14px]'>Medium</p>
                <div className='w-[20px] h-[20px] rounded-full bg-gray-700 centerFlex' onClick = {() => setRadioSelect('medium')}>
                   {radioSelect === 'medium' ? <div className='w-[10px] h-[10px] rounded-full bg-gray-400'/> : null}
                </div>
                <p className='text-[11px]'>&#40;recommended&#41;</p>
            </div>
            <div className='flex flex-row items-center gap-x-1'>
                <p className='text-[14px]'>High</p>
                <div className='w-[20px] h-[20px] rounded-full bg-gray-700 centerFlex' onClick = {() => setRadioSelect('high')}>
                    {radioSelect === 'high' ? <div className='w-[10px] h-[10px] rounded-full bg-gray-400'/> : null}
                </div>
            </div>
        </div>

        <div className='mt-10'>
            <p className='mb-2 text-[14px] text-darkBlue font-bold'>Appearance</p>
            <input className='w-[250px] h-[50px] bg-white centerFlex outline-none pl-4 text-gray-500 border border-gray-700 rounded-sm' value='Select Theme' />
        </div>

        <div className='mt-10'>
            <p className='mb-2 text-[14px] text-darkBlue font-bold'>Language</p>
            <input className='w-[250px] h-[50px] bg-white centerFlex outline-none pl-4 text-gray-500 border border-gray-700 rounded-sm' value='Select Language' />
        </div>


        <div className='flex flex-row gap-x-5 justify-end pr-10 mt-6'>
            <div className='w-[130px] h-[35px] rounded-md centerFlex bg-darkBlue text-[13px] text-white'>Save</div>
            <div className='w-[130px] h-[35px] rounded-md centerFlex bg-white text-[13px] border border-darkBlue text-darkBlue'>Close Account</div>
        </div>
        </div>

        
    )
}