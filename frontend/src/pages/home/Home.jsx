import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { CiFlag1 } from "react-icons/ci";
import { FaArrowsDownToPeople } from "react-icons/fa6";






const Home = () => {
  return (
    <div>
      <div>
        <div className="navbar  bg-[#444444] flex justify-between align-middle p-4 rounded-md">
            <div >
              <button className="btn btn-outline text-white hover:text-black bg-[#444444] hover:bg-indigo-50 rounded-3xl border-white hover:border-black py-3 px-6 flex items-center">
                <span className='texi-lg'>All Tours</span>
              </button>
              </div>
              <div>
              <button className="btn btn-outline mr-5 text-white hover:text-black bg-[#444444] hover:bg-indigo-50 rounded-3xl border-white hover:border-black py-3 px-6 flex items-center" >
              <span className='texi-lg text-justify'>Login</span>
              </button>
              <button className="btn btn-outline text-white hover:text-black bg-[#444444] hover:bg-indigo-50 rounded-3xl border-white hover:border-black py-3 px-6 flex items-center">
              <span className='texi-lg'>Signup</span>
              </button>
            </div>
          </div>
        </div>

      <div className='mt-2'>
        <div className=' bg-slate-200 p-6'>
        <div className="card w-96 bg-white shadow-xl">
          <figure>
            <img src="https://github.com/NeelMunjparaDev/Romify/blob/main/public/img/tours/tour-$65aa6e871e5eb6bd2206c1c0-1705668790916-cover.jpeg?raw=true" alt="Tour" />

          </figure>
            <div className="card-body">
              <div className='mb-3'>

              <h2 className="card-title mb-2">EASY 5--DAY TOUR</h2>
              <p>Breathtaking hike through the Canadian Banff National Park</p>
              </div>
              
            

              <div className='flex flex-row items-center'>

                  <IoLocationOutline className='text-2xl' />
                  <p className=''>Banff, CAN</p>

                  <CiCalendarDate className='text-2xl' />
                  <p className=''>April 2021</p>
                </div>

                <div className='mt-4'>

                <div className='flex flex-row  items-center mb-4'>
                <CiFlag1 className='text-2xl' />

                  <p className='mr-6'>3 stops</p>

                  <FaArrowsDownToPeople className='text-2xl' />
                  <p className=''>25 people</p>
                </div>
              </div>

                <div className='flex flex-row items-center justify-between pb-3 pt-3'>
                    
                    <div className='flex flex-col  pt-3 pb-5'>
                      <a>
                      ₹397000 per person
                      </a>
                      <a>
                      5 rating (9)
                      </a>
                  </div>
                  <div className=''>
                    <button className="btn btn-outline text-white hover:text-black bg-[#444444] hover:bg-indigo-50 rounded-3xl border-white hover:border-black py-3 px-6 flex items-center">
                      <span className='texi-lg'>DETAILS</span>
                    </button>
                  </div>
                </div>

            </div>
        </div>
        </div>
      </div>
       
    </div>
  )
}

export default Home