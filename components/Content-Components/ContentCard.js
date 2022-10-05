import React from 'react'
import {BsStarFill, BsTag} from 'react-icons/bs'
import { offer } from '../../public'


const ContentCard = ({data, type}) => {
    const imageSrc = 'https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

    const colorType  = (type) => {
        switch (type) {
            case 'vocational':
                return "bg-[#121F4C]"
            case 'masterclass': 
                return "bg-[#4C1512]";
            default:
                return "bg-[#121F4C]"
        }
    };

  return (
    

    <div className='w-[220px] h-[220px] rounded-[4px] bg-no-repeat bg-cover bg-center flex flex-col justify-end' style={{backgroundImage: `url(${imageSrc})`}}>
        <div className={`clip-card-path2 ${colorType(type)} text-[white] h-3/5 flex flex-col justify-end px-2 pb-2 rounded-b-md`}>
        
        <div className='flex flex-row justify-end'>
            <div className='text-[13px] w-[50px] h-[25px] rounded-[5px] flex justify-center items-center bg-[#94F236] text-darkBlue'>Enroll</div>
        </div>

        <div className = 'text-[13px] mt-[3px] break-words'>{data.name}</div>

        <div className='flex flex-row justify-between items-center mt-0'>
            <div className=''>
                <div className='flex items-center gap-x-1'>
                    <div className='w-[20px] h-[20px] '>
                        <img src={offer.src} alt='' className='rounded-full' />
                    </div>
                    <p className='text-[11px] break-words'>{data.academy}</p>
                </div>
                
            </div>
            <div>
                <div className='flex flex-row gap-x justify-end'>
                    <BsStarFill size={12} color='#FFC700'/>
                    <BsStarFill size={12} color='#FFC700'/>
                    <BsStarFill size={12} color='#FFC700'/>
                    <BsStarFill size={12} color='#FFC700'/>
                    <BsStarFill size={12} color='#FFC700'/>
                </div>
                <p className='text-[10px]'>{data.total_students} students</p>
            </div>
        </div>
        </div>

    </div>
  )
}

export default ContentCard















/**
 * import React from 'react'
import {BsStarFill, BsTag} from 'react-icons/bs'
import { offer } from '../../public'


const ContentCard = ({data, type}) => {
    const imageSrc = 'https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

    const colorType  = (type) => {
        switch (type) {
            case 'vocational':
                return "bg-red-400"
                break;
        
            default:
                break;
        }
    };

  return (
    

    <div className='w-[220px] h-[220px] rounded-md bg-no-repeat bg-cover bg-center pt-[80px]' style={{backgroundImage: `url(${imageSrc})`}}>
        <div className={`clip-card-path2 ${colorType(type)} text-[white] h-full flex flex-col justify-end px-2 pb-2 rounded-b-md`}>
        
        <div className='flex flex-row justify-end'>
            <div className='text-[13px] w-[50px] h-[25px] rounded-[5px] flex justify-center items-center bg-[#94F236] text-darkBlue'>Enroll</div>
        </div>

        <div className = 'text-[14px] mt-[3px]'>{data.name}</div>

        <div className='flex flex-row justify-between items-center mt-1'>
            <div className=''>
                <div className='flex items-center gap-x-2'>
                    <div className='w-[20px] h-[20px] '>
                        <img src={offer.src} alt='' className='rounded-full' />
                    </div>
                    <p className='text-[13px]'>{data.academy}</p>
                </div>
                
            </div>
            <div>
                <div className='flex flex-row gap-x justify-end'>
                    <BsStarFill size={12} color='#FFC700'/>
                    <BsStarFill size={12} color='#FFC700'/>
                    <BsStarFill size={12} color='#FFC700'/>
                    <BsStarFill size={12} color='#FFC700'/>
                    <BsStarFill size={12} color='#FFC700'/>
                </div>
                <p className='text-xs'>{data.total_students} students</p>
            </div>
        </div>
        </div>

    </div>
  )
}

export default ContentCard

























{/**
import React from 'react'
import {BsStarFill, BsTag} from 'react-icons/bs'
import { offer } from '../../public'


const ContentCard = ({data, bottom}) => {
    const imageSrc = 'https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

    const bottomCard = 'w-[220px] h-[220px] md:w-[180px] md:h-[180px] xl:h-[220px] xl:w-[220px] rounded-md bg-no-repeat bg-cover bg-center pt-[80px] '
    const topCard = 'w-[220px] h-[220px] rounded-md bg-no-repeat bg-cover bg-center pt-[80px]'
    


    const bottomText = 'text-[14px] mt-[3px] xl:text-[14px] xl:mt-[3px] md:text-[11px] md:mt-[3px]  break-words'
    const topText = 'text-[14px] mt-[3px]'

    const bottomStar = 'flex flex-row gap-x justify-end'
    const topStar = 'flex flex-row gap-x justify-end'
     

  return (
    

    <div className={bottom === true ? bottomCard : topCard } style={{backgroundImage: `url(${imageSrc})`}}>
        <div className='clip-card-path2 bg-[#121F4C] text-[white]  h-full flex flex-col justify-end px-2 pb-2 rounded-b-md '>
        
        <div className='flex flex-row justify-end'>
            <div className='text-[13px] w-[50px] h-[25px] rounded-[5px] flex justify-center items-center bg-[#94F236] text-darkBlue '>Enroll</div>
        </div>

        <div className = {bottom === true ? bottomText : topText}>{data.name}</div>

        <div className='flex flex-row justify-between items-center mt-1'>
            <div className=''>
                <div className='flex items-center gap-x-2'>
                    <div className='w-[20px] h-[20px] '>
                        <img src={offer.src} alt='' className='rounded-full' />
                    </div>
                    <p className='text-[13px]'>{data.academy}</p>
                </div>
                <div className='flex items-center gap-x-2 mt-1'>
                    <BsTag size={13}/>
                    <p className='text-[11px]  box-overflow'>{data.category}</p>
                </div>
            </div>
            <div>
                <div className={bottom === true ? bottomStar : topStar}>
                    <BsStarFill size={12} color='#FFC700'/>
                    <BsStarFill size={12} color='#FFC700'/>
                    <BsStarFill size={12} color='#FFC700'/>
                    <BsStarFill size={12} color='#FFC700'/>
                    <BsStarFill size={12} color='#FFC700'/>
                </div>
                <p className='text-xs'>{data.total_students} students</p>
            </div>
        </div>
        </div>

    </div>
  )
}

export default ContentCard

 */









{/**
import React from 'react'
import {BsStarFill, BsTag} from 'react-icons/bs'
import { offer } from '../../public'


const ContentCard = ({data, bottom}) => {
    const imageSrc = 'https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

    const bottomCard = 'w-[220px] h-[220px] md:w-[180px] md:h-[180px] xl:h-[220px] xl:w-[220px] rounded-md bg-no-repeat bg-cover bg-center pt-[80px] '
    const topCard = 'w-[220px] h-[220px] rounded-md bg-no-repeat bg-cover bg-center pt-[80px]'
    


    const bottomText = 'text-[14px] mt-[3px] xl:text-[14px] xl:mt-[3px] md:text-[11px] md:mt-[3px]  break-words'
    const topText = 'text-[14px] mt-[3px]'

    const bottomStar = 'flex flex-row gap-x justify-end'
    const topStar = 'flex flex-row gap-x justify-end'
     

  return (
    

    <div className={bottom === true ? bottomCard : topCard } style={{backgroundImage: `url(${imageSrc})`}}>
        <div className='clip-card-path2 bg-[#121F4C] text-[white]  h-full flex flex-col justify-end px-2 pb-2 rounded-b-md '>
        
        <div className='flex flex-row justify-end'>
            <div className='text-[13px] w-[50px] h-[25px] rounded-[5px] flex justify-center items-center bg-[#94F236] text-darkBlue '>Enroll</div>
        </div>

        <div className = {bottom === true ? bottomText : topText}>{data.name}</div>

        <div className='flex flex-row justify-between items-center mt-1'>
            <div className=''>
                <div className='flex items-center gap-x-2'>
                    <div className='w-[20px] h-[20px] '>
                        <img src={offer.src} alt='' className='rounded-full' />
                    </div>
                    <p className='text-[13px]'>{data.academy}</p>
                </div>
                <div className='flex items-center gap-x-2 mt-1'>
                    <BsTag size={13}/>
                    <p className='text-[11px]  box-overflow'>{data.category}</p>
                </div>
            </div>
            <div>
                <div className={bottom === true ? bottomStar : topStar}>
                    <BsStarFill size={12} color='#FFC700'/>
                    <BsStarFill size={12} color='#FFC700'/>
                    <BsStarFill size={12} color='#FFC700'/>
                    <BsStarFill size={12} color='#FFC700'/>
                    <BsStarFill size={12} color='#FFC700'/>
                </div>
                <p className='text-xs'>{data.total_students} students</p>
            </div>
        </div>
        </div>

    </div>
  )
}

export default ContentCard

*/}




















