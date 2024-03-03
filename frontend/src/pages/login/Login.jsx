import React from 'react'



import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
    
    const Login = () => {
      return (
        <>
            <Header/>

            <div className='bg-slate-200 h-[80%] flex align-middle'>

                <div className="flex flex-col item justify-center min-w-96 mx-auto">
                    
                    <div className="m-12 p-[100px] rounded-lg shadow-md bg-[#ffffff34] bg-clip-padding backdrop-filter backdrop-blur-lg ">

                        <h1 className="text-3xl font-se text-center text-[#7b51e5] font-medium mb-4">
                        LOG INTO YOUR ACCOUNT</h1>

                        <form >
                            <div>
                                <label className="label p-2">
                                <span className="text-base label-text font-medium">Username</span>
                                </label>
                                <input
                                type="text"
                                placeholder="Enter username"
                                className="input input-bordered w-full  bg-[#51515368] h-10 font-medium"/>
                            </div>

                            <div className="pt-2 mt-3 mb-9">
                                <label className="label p-2">
                                <span className="text-base label-text font-medium">Password</span>
                                </label>
                                <input
                                type="password"
                                placeholder="Enter password"
                                className="input input-bordered w-full   h-10 bg-[#51515368] font-medium"/>
                            </div>

            

                            <div>
                                <button
                                className="btn w-[120px] h-[50px] bg-[#444444] text-white font-semibold text-md  rounded-3xl">
                                
                                    <span className="">Login</span>
                                
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
    
    export default Login