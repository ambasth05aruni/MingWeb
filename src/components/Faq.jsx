import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Faq() {
  return (
    <>
    <div  className='h-screen w-full bg-zinc-900 overflow-auto '>
      <Navbar/>
        <div className=' my-10'>
        <span className='text-white text-3xl font-medium mx-56   '>Users FAQs</span>
        <div className='flex justify-center my-10'>
        <ul className='list-disc list-inside mx-64 my-10 text-2xl font-medium  '>
              <li  className='text-white '>How do we refer a friend to Loco?</li>
              <li  className='text-white my-6 '>You can go to the Refer and Invite tab on the app by
              clicking on the DP in the top left corner and share 
              the referal link with your friends. Once they install 
              the app from that link and log in you'll recieve the
              referal.</li>
              <li  className='text-white my-6'>How do you change your username?</li>
              <li  className='text-white my-6'>You can log into the web dashboard via the link 
              <p className='underline '> https://dashboard.getloconow.com/dashboard/</p>
                profile and then click on the edit option to change the username </li>
              <li className='text-white my-6 '>Why and how is my phone number or Gmail address already registered in Loco?</li>
              <li className='text-white my-6 '>This generally happens when you  have create a profile with your
                   Gmail address or phone number and you are trying to link 
                   the same Gmail address or phone number with another profile.
                   You will get an error on Loco.
              </li>
        
             </ul>
              </div>
       
            </div>

      <Footer/>
           </div>
        
           </>
  )
}

export default Faq
