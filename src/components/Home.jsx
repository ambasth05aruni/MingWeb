import React from 'react'
import axiebanner from '../assets/Axie-Banner.jpg'
import blanko from '../assets/Blanko_Banner-ed2214.jpg'
import bloxmith from '../assets/Bloxmith-Launches-Raiders-Rumble-A-Mobile-Strategy-Game-for-Both-Web2-and-Web3-Gamers-on-the-Flow-Blockchain-768x368.jpg'
import rgl from '../assets/rgl tournament 2 final thumb.jpg'
import lower from '../assets/IMG_8346.JPG'
import live from '../assets/pngwing.com.png'
import mythical from '../assets/Q4OZKP6TMFHWZKW6YDZ7PXNLMM.jpg'
import rumble from '../assets/Bloxmith-Launches-Raiders-Rumble-a-Web2Web3-Mobile-Strategy-Game-on-Flow-Blockchain.jpg'
import effle from '../assets/download-effie-offer-mrdpw.jpeg'
import robo from '../assets/image 4.jpeg'
import logo from '../assets/minglogo.jpg'
import Navbar from './Navbar'
import Footer from './Footer'
import {Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
    <div className=' w-full bg-gray-950 overflow-auto'>
      <Navbar/>
      <div>
      <div className='mx-6 flex justify-between h-full px-4'>

<div className='my-20 '>
<img className='w-full object-right  rounded-lg mx-12'  src={axiebanner} alt="Axie Banner" />
  </div>

  <div className='flex flex-col mx-12 my-20 '>
    <div  className=''>
   <img className='w-full h-52 rounded-lg' src={blanko} alt="" />
    </div>
    <div  className='my-10 '>
    <img className='w-full h-48 rounded-lg' src= {bloxmith} alt="" />
    </div>
  </div>
  
 </div>

 <ul className='bg-gray-950 text-white flex justify-between '>
       <li className='mx-20 capitalize font-medium text-lg'> Live Streaming</li>
          <li className='mx-20 capitalize font-medium text-lg'>See More</li>
          </ul>
          <hr className='mx-20 my-3 ' />

<div className='flex flex-row  my-6 mx-20'>
<div className='mx-2 flex flex-col'>
  <img src={rgl} alt="" />
 
   
    <div className='flex flex-row'>
      <div className='flex flex-col'>
      <img className='rounded-full w-14' src={lower} alt="" />
      <img className='w-10' src={live} alt="" />
      </div>
      <div className='flex flex-col'>
      <li className='text-white mx-2 text-sm list-none'>
      <Link to="/streamPage"> Grand Finals | RNX Battle of Nations || Free fire || Top 1 rank.</Link>
     
     
     
       </li>
      <p  className='text-white mx-2 text-xs my-1'>Total gaming . 1k watching</p>
      </div>
    
    </div>

    </div>

{/* <Link to="/streampage">

      </Link> */}
          


 
    <div className='mx-2 flex flex-col'>
    <img src={rgl} alt="" />
    <div className='flex flex-row'>
      <div className='flex flex-col'>
      <img className='rounded-full w-14' src={lower} alt="" />
      <img className='w-10' src={live} alt="" />
      </div>
      <div className='flex flex-col'>
      <p className='text-white mx-2 text-sm'>Grand Finals | RNX Battle of Nations || Free fire || Top 1 rank.</p>
      <p  className='text-white mx-2 text-xs my-1'>Total gaming . 1k watching</p>
      </div>
    
    </div>

    </div>
    <div className='mx-2 flex flex-col'>
    <img src={rgl} alt="" />
    <div className='flex flex-row'>
      <div className='flex flex-col'>
      <img className='rounded-full w-14' src={lower} alt="" />
      <img className='w-10' src={live} alt="" />
      </div>
      <div className='flex flex-col'>
      <p className='text-white mx-2 text-sm'>Grand Finals | RNX Battle of Nations || Free fire || Top 1 rank.</p>
      <p  className='text-white mx-2 text-xs my-1'>Total gaming . 1k watching</p>
      </div>
    
    </div>

    </div>
    <div className='mx-2 flex flex-col'>
    <img src={rgl} alt="" />
    <div className='flex flex-row'>
      <div className='flex flex-col'>
      <img className='rounded-full w-14' src={lower} alt="" />
      <img className='w-10' src={live} alt="" />
      </div>
      <div className='flex flex-col'>
      <p className='text-white mx-2 text-sm'>Grand Finals | RNX Battle of Nations || Free fire || Top 1 rank.</p>
      <p  className='text-white mx-2 text-xs my-1'>Total gaming . 1k watching</p>
      </div>
    
    </div>

    </div>
  
</div>





<div className='flex flex-row  my-4 mx-20'>
  <div className='mx-2 flex flex-col'>
    <img src={rgl} alt="" />
    <div className='flex flex-row'>
      <div className='flex flex-col'>
      <img className='rounded-full w-14' src={lower} alt="" />
      <img className='w-10' src={live} alt="" />
      </div>
      <div className='flex flex-col'>
      <p className='text-white mx-2 text-sm'>Grand Finals | RNX Battle of Nations || Free fire || Top 1 rank.</p>
      <p  className='text-white mx-2 text-xs my-1'>Total gaming . 1k watching</p>
      </div>
    
    </div>

    </div>
    <div className='mx-2 flex flex-col'>
    <img src={rgl} alt="" />
    <div className='flex flex-row'>
      <div className='flex flex-col'>
      <img className='rounded-full w-14' src={lower} alt="" />
      <img className='w-10' src={live} alt="" />
      </div>
      <div className='flex flex-col'>
      <p className='text-white mx-2 text-sm'>Grand Finals | RNX Battle of Nations || Free fire || Top 1 rank.</p>
      <p  className='text-white mx-2 text-xs my-1'>Total gaming . 1k watching</p>
      </div>
    
    </div>

    </div>
    <div className='mx-2 flex flex-col'>
    <img src={rgl} alt="" />
    <div className='flex flex-row'>
      <div className='flex flex-col'>
      <img className='rounded-full w-14' src={lower} alt="" />
      <img className='w-10' src={live} alt="" />
      </div>
      <div className='flex flex-col'>
      <p className='text-white mx-2 text-sm'>Grand Finals | RNX Battle of Nations || Free fire || Top 1 rank.</p>
      <p  className='text-white mx-2 text-xs my-1'>Total gaming . 1k watching</p>
      </div>
    
    </div>

    </div>
    <div className='mx-2 flex flex-col'>
    <img src={rgl} alt="" />
    <div className='flex flex-row'>
      <div className='flex flex-col'>
      <img className='rounded-full w-14' src={lower} alt="" />
      <img className='w-10' src={live} alt="" />
      </div>
      <div className='flex flex-col'>
      <p className='text-white mx-2 text-sm'>Grand Finals | RNX Battle of Nations || Free fire || Top 1 rank.</p>
      <p  className='text-white mx-2 text-xs my-1'>Total gaming . 1k watching</p>
      </div>
    
    </div>

    </div>
  
</div>


<ul className='bg-gray-950 text-white flex justify-between '>
       <li className='mx-20 capitalize font-medium text-lg'>Recommended Games</li>
          <li className='mx-20 capitalize font-medium text-lg'>See More</li>
          </ul>
          <hr className='mx-20 my-2 ' />



<div className='flex flex-row mx-20 my-4'>
  <div className='mx-2 flex flex-col'>
    <img className=' rounded-lg h-80 ' src={mythical} alt="" />
    <li className='text-white my-2 font-bold text-xl  list-none  '>
    <Link to="/aboutthegame">Mythical</Link>
      </li>
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


    </>
  )

}

export default Home
