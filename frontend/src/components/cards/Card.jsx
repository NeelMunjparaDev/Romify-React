import React from 'react'
import { CiCalendarDate, CiFlag1 } from 'react-icons/ci'
import { FaArrowsDownToPeople } from 'react-icons/fa6'
import { IoLocationOutline } from 'react-icons/io5'

const Card = () => {
  return (
    <div className="card w-96 bg-white shadow-xl mt-5 ml-8 mr-8">

    <div className='flex flex-col rounded-tl-2xl rounded-tr-2xl relative'>
        <figure>
            <img src="https://github.com/NeelMunjparaDev/Romify/blob/main/public/img/tours/tour-$65aa6e871e5eb6bd2206c1c0-1705668790916-cover.jpeg?raw=true" alt="Tour" />
        </figure>

        <h2 className="card-title mb-2 mr-4 w-auto mt-2 absolute right-0 bottom-7">
           <span className='bg-[#8f5aa585] text-white font-thin text-xl rounded-md p-2'>SUN KISSED GOA</span> 
        </h2>
        <h2 className="card-title mr-4 absolute right-0 bottom-1">
            <span className='bg-[#8e5aa5ca] text-white font-thin text-xl rounded-md p-1'>ESCAPE</span>
        </h2>
    </div>

    <div className="card-body">
        <div>
            <h2 className="card-title mb-2">EASY 5--DAY TOUR</h2>
            <p>Breathtaking hike through the Canadian Banff National Park</p>
        </div>
        <div className='flex flex-row items-center mt-3'>

            <IoLocationOutline className='text-2xl mr-2' />
            <p className=''>Banff, CAN</p>

            <CiCalendarDate className='text-2xl mr-2' />
            <p className=''>April 2021</p>
        </div>

        <div className='flex flex-row  items-center mt-5'>
            <CiFlag1 className='text-2xl mr-2' />
            <p className='mr-6'>3 stops</p>
            <FaArrowsDownToPeople className='text-2xl mr-2' />
            <p className=''>25 people</p>
        </div>

        <div className='flex flex-row items-center justify-between mt-3'>
            <div className='flex flex-col  pt-3 pb-5'>
                <a>
                ₹397000 per person
                </a>
                <a>
                5 rating (9)
                </a>
            </div>
            <div >
                <button className="btn btn-outline text-white hover:text-black bg-[#444444] hover:bg-indigo-50 rounded-3xl border-white hover:border-black py-3 px-6 flex items-center">
                    <span className='texi-lg'>DETAILS</span>
                </button>
            </div>
        </div>
    </div>  
</div>
  )
}

export default Card