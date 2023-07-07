import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import playimg from '../assets/3_gameplay-io-first-person-shooter.jpg'
import logog from '../assets/IMG_8346.JPG'
import green from '../assets/green.jpg'
import heart from '../assets/lovenew.png'
import mythical from '../assets/Q4OZKP6TMFHWZKW6YDZ7PXNLMM.jpg'
import rumble from '../assets/Bloxmith-Launches-Raiders-Rumble-a-Web2Web3-Mobile-Strategy-Game-on-Flow-Blockchain.jpg'
import effle from '../assets/download-effie-offer-mrdpw.jpeg'
import robo from '../assets/image 4.jpeg'

function StreamPage() {
  return (
    <div className='bg-stone-950 h-screen overflow-auto'>
        <Navbar/>

       <div className='ml-20 my-6  '>
        <div className='flex flex-row'>
        <div>
       <img src={playimg} className='w-3/5 rounded-t-lg' alt="" />
       <div className='w-3/5  bg-zinc-900 h-28 rounded-b-lg p-3 '>
  <div className=' '>
  <h1 className='text-white font-medium text-lg '>Grand Finals  |  RNX Battle of Nations  ||  Fire free  ||  Top 1 rank</h1>
  </div>
  <hr className='mr-4   ' />
  <div className='flex justify-between items-center' >
  <div className='mt-3 flex flex-row'>
    <img className='w-10 rounded-full cursor-pointer' src={logog} alt="" />
    <div className='flex  flex-col mx-2.5 cursor-pointer'>
      <p className='text-white text-base'>3Ming.space</p>
      <p className='text-white text-xs'>1000 Followers</p>
    </div>
    <button className='  bg-zinc-800 rounded-xl  text-white   focus:outline-none  font-medium  text-sm px-5 py-2.5 text-center mr-2 mb-2'>Ev.io</button>

  </div>
  <div className='flex flex-row'>
    <div className='flex flex-row mx-3'>
    <img className='rounded-full w-5' src={green} alt="" />
    <p className='text-white text-sm mx-1'>1406</p>
   </div>

   <div  className='flex flex-row'>
    <img className='w-5' src={heart} alt="" />
    <p className='text-white text-sm mx-1'>100</p>
   </div>
   <button className='text-white mx-2 bg-red-600 font-normal rounded-lg text-xs px-2 py-1 '>Like</button>
   <button className='  bg-zinc-800 rounded-lg mx-1  text-white   font-normal  text-xs px-2 py-1'>Report</button>
   

  
   

  </div>
  </div>
 

</div>
  </div>
 {/* sidebar */}



























  </div>
  

<div className='my-12'>
<ul className=' text-white flex justify-between '>
       <li className=' capitalize font-medium text-lg'>Recommended Games</li>
          <li className='mr-20 capitalize font-medium text-lg'>See More</li>
          </ul>
          <hr className='mr-20 my-2 ' />
</div>


<div className='flex flex-row mr-20 my-4'>
  <div className='mx-2 flex flex-col'>
    <img className=' rounded-lg h-80 ' src={mythical} alt="" />
    <p className='text-white my-2 font-bold text-xl  '>Mythical</p>
    </div>

  <div className='mx-2 w-96 flex flex-col'>
    <img className='h-80 rounded-lg' src={rumble} alt="" />
    <p className='text-white my-2 font-bold text-xl'>Raiders Rumble</p>
    </div>

  <div className='mx-2 w-96 flex flex-col'>
    <img className=' h-80 rounded-lg' src={effle} alt="" />
    <p className='text-white my-2 font-bold text-xl  '>Effie</p>
    </div>

  <div className='mx-2 w-80 flex flex-col '>
    <img className='h-80 rounded-lg' src={robo} alt="" />
    <p className='text-white my-2 font-bold text-xl  '>Mechwarrior 5</p>
    </div>




</div>




</div>


      <Footer/>
    </div>
  )
}

export default StreamPage
