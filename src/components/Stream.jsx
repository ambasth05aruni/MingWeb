import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


function Stream() {
  return (
    <>
    <div>
      {/* <Navbar/> */}
      <div  className=' h-screen w-full bg-gray-950 overflow-auto '>
      <Navbar/>
        <div className='mx-56 '>
        
        <div className=''>
        <p className='text-white font-medium text-xl mb-5 mt-6 '>Ready for stream...!!!!</p>
        </div>
        <div className=''>
            <label className='text-white font-normal block mb-2 text-md my-1'>Stream title</label>
            <input className='bg-zinc-700  border-gray-300 text-gray-900 text-sm rounded-lg mb-6 focus:ring-blue-500 focus:border-black  block w-full p-1  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 required>  ' type="text" />
        </div> 
       

         <div>
         <label className='text-white font-normal block mb-2 text-md my-1 '>Stream description</label>
            <input   className='bg-zinc-700 border border-gray-300 text-gray-900 text-sm mb-6 rounded-lg focus:ring-blue-500 focus:border-black  block w-full p-6  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 required>  ' type="text" />
        </div>

           <div>
           <label className='text-white font-normal  text-md my-1 '>Who can send messages</label>
            <input className='bg-zinc-700 my-4  border-gray-300 text-gray-900 text-sm mb-6 rounded-lg focus:ring-blue-500 focus:border-black  block w-full p-1  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 required>  'type="text" />

           </div>

           <div>
            <label className='text-white font-normal  text-md my-1'>Games</label>
            <input  className='bg-zinc-700  border-gray-300 text-gray-900 text-sm mb-6 rounded-lg focus:ring-blue-500 focus:border-black  block w-full p-1  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 required>  ' type="text" />

           </div>

           <div>
            <label className='text-white font-normal  text-md my-1'>Tags</label>
            <input  className='bg-zinc-700  border-gray-300 text-gray-900 text-sm mb-6 rounded-lg focus:ring-blue-500 focus:border-black  block w-full p-1  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 required>  ' type="text" />

            </div>

            <div>
            <label className='text-white font-normal  text-md my-1 '>Thumbnail</label>
            <textarea  rows="4" className="block p-2.5 w-full text-sm bg-zinc-700 mb-6 text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-black  dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>

            </div>

             <div>
              <p className='text-white text-start font-normal my-8 '>Schedule</p>
              <p className='text-white text-sm my-3'>Select the date and time you want to go live</p>
              </div>

             <div>
              <button className='py-2.5  px-5 mr-2 mb-6 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>Reset</button>
              <button className='py-2.5 px-5 mr-2 mb-6 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>Start</button>
              </div>
       

            
             </div>
             <Footer/>
             </div>
      
     
            
             </div>
           
             </>       
  )
}

export default Stream
