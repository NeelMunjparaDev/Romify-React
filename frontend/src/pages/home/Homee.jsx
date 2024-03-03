import React from 'react'
import Header from '../../components/header/Header';
import Card from '../../components/cards/Card';
import Footer from '../../components/footer/Footer';


const Homee = () => {
  return (
    <div>
        <div>
            <Header/>
        </div>
            <div className='mt-2 mb-2'>
                <div className=" bg-slate-200 p-6 flex flex-wrap">
                    {/* card div start */}
                    <Card/>    
                    <Card/>    
                    <Card/>    
                    <Card/>    
                    <Card/>    
                </div>
            </div>

            {/* footer start */}
            
                <Footer/> 
                 
    </div>
  )
}

export default Homee