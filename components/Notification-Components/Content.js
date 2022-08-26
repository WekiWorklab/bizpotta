import React from 'react'

const Content = () => {
  return (
    <div className='relative w-full h-full bg-white sm:bg-gray-50 flex flex-col pt-[90px] md:pt-[120px] md:justify-center items-center md:translate-x-[200px] md:w-[calc(100%-200px)] pb-10  pl-10 pr-32'>
       <div className='w-full red  pt-10 text-[14px] text-darkBlue'>
            <p className='text-darkBlue text-base font-[600]'>Notification</p>
            <div className='flex flex-row w-full justify-start gap-x-16 mt-8'> 
                <div>Account</div>
                <div>Payment method</div>
                <div>Notification</div>
                <div>Progress</div>
                <div>History</div>
                <div>API</div>
            </div>

            <div className='w-full h-[50px] mt-24 bg-gray-400 flex flex-row items-center gap-x-8 pl-10 rounded-sm '>
                <input type='checkbox' className='focus:ring-0 text-darkBlue ' />
                <p className='text-sm font-[600]'>Show my saved payments method</p>
            </div>

            <div className='mt-10'>
                <div className='flex flex-row justify-between text-[14px] text-darkBlue pr-8'>
                    <p className=' font-[600]'>Your saved payment method</p>
                    <p>Edit</p>
                </div>
                <textarea className='w-full min-h-[100px]'></textarea>
            </div>

            <div className='flex flex-row justify-between mt-8'>
                <p className='font-[600]'>Add payment</p>
                <p> Select payment method</p>
            </div>

            <div className='flex flex-col mt-8'>
                <p className='mb-4'>Name on card</p>
                <textarea className='w-full min-h-[50px]'>

                </textarea>
            </div>

            <div className='flex flex-col mt-8'>
                <p className='mb-4'>Card number</p>
                <textarea className='w-full min-h-[50px]'>

                </textarea>
            </div>

            <div className='flex flex-col mt-8'>
                <p className='mb-4'>Expiration date</p>
                <textarea className='w-full min-h-[50px]'>

                </textarea>
            </div>

            <div className='flex flex-col mt-8'>
                <p className='mb-4'>CVV</p>
                <textarea className='w-full min-h-[50px]'>

                </textarea>
            </div>


            <div className='mt-32 flex flex-row justify-end gap-x-6'>
                <div className='w-[100px] h-[40px] bg-darkBlue flex items-center rounded-md text-white justify-center'>Save</div>
                <div className='w-[120px] h-[40px] bg-white  flex items-center rounded-md border border-darkBlue justify-center'>Close Account</div>

            </div>

       </div>
    </div>
  )
}

export default Content