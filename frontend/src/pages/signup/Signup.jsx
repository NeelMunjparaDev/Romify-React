import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import {Link} from "react-router-dom"

const Signup = () => {
  return (
    <>
        
        <Header/>

        <div className='bg-slate-200 h-[80%] flex align-middle'>
            <div className="flex flex-col items-center justify-center min-w-96 mx-auto">


                <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">

                    <h1 className="text-3xl font-se text-center text-[#7b51e5] font-medium mb-4">
                    CREATE A NEW USER ACCOUNT</h1>

                <form  className="mt-5">
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text font-medium">Full Name</span>
                        </label>

                        <input type="text" placeholder="Enter full Name" className="input input-bordered w-full  bg-[#51515368] h-10 font-medium"/>
                    </div>

                    <div className="pt-2">
                        <label className="label p-2">
                            <span className="text-base label-text font-medium">Email</span>
                        </label>
                        <input type="text" placeholder="Enter Email" className="input input-bordered w-full  bg-[#51515368] h-10 font-medium"/>

                    </div>

                    <div className="pt-2">

                        <label className="label p-2">

                            <span className="text-base label-text font-medium">Password</span>

                        </label>

                        <input type="password" placeholder="Enter password" className="input input-bordered w-full   h-10 bg-[#51515368] font-medium"/>

                    </div>

                    <div className="pt-2">
                        <label className="label p-2">
                        <span className="text-base label-text font-medium">
                            Confirm Password
                        </span>
                        </label>
                        <input
                        type="password"
                        placeholder="Confirm password"
                        className="input input-bordered w-full   h-10 bg-[#51515368] font-medium"/>
                    </div>

                    <div className="mt-2">
                        <button className="btn btn-block btn-sm mt-2 bg-[#4ade80]">
                        Create User Account
                        </button>
                    </div>
                </form>
            </div>
        </div>

        </div>
        <Footer/>
    </>
  )
}

export default Signup