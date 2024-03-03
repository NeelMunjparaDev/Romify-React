import React from 'react'

const Header = () => {
  return (
    <div className="navbar bg-[#444444] flex justify-between align-middle p-4 rounded-md">
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
                    <div className="avatar ml-2">
                        <div className="w-[50px] rounded-full">
                            <img src="https://as2.ftcdn.net/v2/jpg/00/97/58/97/1000_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg" />
                        </div>
                    </div>

                </div>
                
            </div>
  )
}

export default Header