import React from 'react'
import {TbBrandMeta} from 'react-icons/tb'
import {IoLogoInstagram} from 'react-icons/io'
import {RiTwitterXLine}  from 'react-icons/ri'
const Topbar = () => {
  return (
    <div className='bg-[#ea2e0e] text-white'>
        <div className='container mx-auto flex justify-between items-center py-3 px-4'> 
        {/* mx auto to center the container */}
            <div className='hidden md:flex items-center space-x-4'>
                <a href="" className='hover:text-gray-300'>
                    <TbBrandMeta className='h-5 w-5'/>
                </a>
            
                <a href="" className='hover:text-gray-300'>
                    <IoLogoInstagram className='h-5 w-5'/>
                </a>
            
                <a href="" className='hover:text-gray-300'>
                    <RiTwitterXLine className='h-5 w-5'/>
                </a>
            </div>
            <div className='text-sm text-center grow'>
                
                {/* grow = flex grow, will help cneter the 
                text on mobile screen since it is the 
                only thing visible on mobile in topbar */}

                <span>We ship world wide -Fast and Reliabale</span>
            </div>
            <div className='text-sm hidden md:block'>
                <a href="tel:+1233456" className='hover:text-gray-300'>tel:+1233456</a>
            </div>
        </div>

    </div>
  )
}

export default Topbar