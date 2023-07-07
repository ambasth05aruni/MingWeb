import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { CButtonGroup, CButton} from '@coreui/react'
import note from '../assets/note.png'
import tick from '../assets/tick.jpg'
import player from '../assets/player.png'


function Promote() {
  return (
    <div className=' h-screen bg-gray-950 overflow-auto'>
        <Navbar/>
        <div className='flex items-center justify-center mt-24  '>
            <div className='flex flex-col '>
            <p className='text-blue-700 text-sm font-medium text-center '>Friendly Pricing</p>
          <p className='text-white font-bold text-4xl text-center mt-3 '>Start Your Game Promotion <br /> Journey Together</p>
          <div className='text-center mt-16'>
          <button type="button" className="px-8 py-2 text-sm font-normal text-gray-600 bg-transparent border border-gray-600 rounded-l-3xl hover:bg-blue-600  hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-600 focus:bg-blue-600 focus:text-white  ">
    Daily
  </button>
  <button type="button" className="px-8 py-2 text-sm font-normal  text-gray-600 bg-transparent border-t border-b border-gray-600 hover:bg-blue-600 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-600 focus:bg-blue-600  focus:text-white">
    Monthly
  </button>
  <button type="button" className="px-8 py-2 text-sm font-normal text-gray-600 bg-transparent border border-gray-600 rounded-r-3xl hover:bg-blue-600 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-600 focus:bg-blue-600  focus:text-white">
    Yearly
  </button>

          </div>
            </div>
         
        </div>



        <div className=' flex  items-center justify-center  '>
                
    <div className="  p-8 bg-white border border-white mr-10  rounded-3xl shadow">
        <div className='flex flex-row'>
            <img className='w-18  ' src={note} alt="" />
            <div className='flex flex-col ml-4'>
            <p className='text-black font-medium text-sm'>Standard</p>
            <div className='flex flex-row mt-2 mx'>
            <p className='text-black font-bold text-3xl'>$12</p>
            <p className='text-gray-500 font-normal text-sm mt-3  '>/month</p>
            </div>
           
            </div>
       
       
        </div>

<div className='flex flex-col mx-3'>

    <div className='flex justify-between mt-9 '>
        <p className='text-black text-sm font-medium mr-32'>Mail Service Auth </p>
        <img className='w-6' src={tick} alt="" />

    </div>


</div>



<div className='flex flex-col mx-3'>

    <div className='flex justify-between mt-3'>
        <p className='text-black text-sm font-medium mr-32'>Users Google Form </p>
        <img className='w-6' src={tick} alt="" />

    </div>


</div>

<div className='flex flex-col mx-3'>

    <div className='flex justify-between mt-3'>
        <p className='text-black text-sm font-medium mr-32'>Responsive Template </p>
        <img className='w-6' src={tick} alt="" />

    </div>


</div>

<div className='flex flex-col mb-4 mx-3'>

    <div className='flex justify-between mt-3'>
        <p className='text-black text-sm font-medium mr-32'>Bulk Upload Images </p>
        <img className='w-6' src={tick} alt="" />

    </div>


</div>



        
        <button type="button" class="text-white mb-4 bg-gray-400 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-3xl text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Get Started</button>
    </div>

            

            <div className='w-auto p-8 bg-white border border-white  rounded-3xl shadow ml-10 mt-24  '>
            <div className='flex flex-row'>
            <img className='w-18  ' src={note} alt="" />
            <div className='flex flex-col ml-4'>
            <p className='text-black font-medium text-sm'>Pro</p>
            <div className='flex flex-row mt-2 mx'>
            <p className='text-black font-bold text-3xl'>$69</p>
            <p className='text-gray-500 font-normal text-sm mt-3  '>/month</p>
            </div>
           
            </div>
       
       
        </div>

        <div className='flex flex-col mx-3'>

    <div className='flex justify-between mt-3'>
        <p className='text-black text-sm font-medium mr-32'>Mail Service Auth </p>
        <img className='w-6' src={tick} alt="" />

    </div>


</div>

<div className='flex flex-col mx-3'>

    <div className='flex justify-between mt-3'>
        <p className='text-black text-sm font-medium mr-32'>Users Google Form </p>
        <img className='w-6' src={tick} alt="" />

    </div>


</div>

<div className='flex flex-col mx-3'>

    <div className='flex justify-between mt-3'>
        <p className='text-black text-sm font-medium mr-32'>Responsive Template </p>
        <img className='w-6' src={tick} alt="" />

    </div>


</div>

<div className='flex flex-col mx-3'>

    <div className='flex justify-between mt-3'>
        <p className='text-black text-sm font-medium mr-32'>Bulk Upload Images </p>
        <img className='w-6' src={tick} alt="" />

    </div>


</div>

<div className='flex flex-col mx-3'>

    <div className='flex justify-between mt-3'>
        <p className='text-black text-sm font-medium mr-32'>Grid Automatically On </p>
        <img className='w-6' src={tick} alt="" />

    </div>


</div>

<div className='flex flex-col mx-3'>

    <div className='flex justify-between mt-3'>
        <p className='text-black text-sm font-medium mr-32'>Export to Sheets </p>
        <img className='w-6' src={tick} alt="" />

    </div>


</div>

<div className='flex flex-col mx-3'>

    <div className='flex justify-between mt-3'>
        <p className='text-black text-sm font-medium mr-32'>24/7 Customers Service </p>
        <img className='w-6' src={tick} alt="" />

    </div>


</div>

<div className='flex flex-col mx-3'>

    <div className='flex justify-between mt-3'>
        <p className='text-black text-sm font-medium mr-32'>Unlimited Links </p>
        <img className='w-6' src={tick} alt="" />

    </div>


</div>
<button type="button" class="text-white mb-4 mt-4 bg-gray-400 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-3xl text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Schedule Demo</button>
            </div>
        </div>


        <div className='main mt-20 flex justify-between'>


<div className='left w-1/2   p-10'>
  <p className='text-white font-semibold text-xl'>Welcome to 3MING.SPACE ,the revolutionary web3 streaming platform that empowers creators to earn money
  by sharing their content! With our innovative platform, creators have the opportunity to monetize their  content and earn cryptocurrency 
  through views. Say goodbye to to traditional streaming platform that only benefit a select few - at 3MING.SPACE
, we believe that all creators should have the 
  opportunity to earn money from their hard work.

  </p>
 
</div>



<div className='right'>
  <img className='rounded-lg mx-24' src={player} alt="" />
</div>



        </div>
      




      <Footer/>
    </div>
  )
}

export default Promote
