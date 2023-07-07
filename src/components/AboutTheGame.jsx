import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import myLogo from '../assets/gamelogo.jpg'
import gameImg from '../assets/gameImage.jpeg'

function AboutTheGame() {
  return (
    <div className='bg-black h-screen overflow-auto '>
        <Navbar/>
        < div className='head flex items-center'>
        <div>
        <img className='w-20 mx-10 lg:ml-80 my-6 rounded-md ' src={myLogo} alt="" />
        </div>
      <div className=''>
         <h2 className='font-bold lg:text-xl text-white'>CryptoKitties</h2>
         <p className='my-2  text-white'>Etherum</p>
         <p className=' text-white'>Genre:Virtual-Pet</p>
      </div>
      <div className='button bg-slate-900  hover:bg-neutral-800 rounded-full duration-300 py-1 px-6 relative mx-20 lg:mx-96'>
        <button className=' text-white'>Play Now</button>
      </div>
    </div>


    <div className='img2 flex flex-row w-52 items-center my-6  lg:w-72'>
    <img className=' mx-12 lg:ml-96 ' src={gameImg} alt="" />
    <img className='mx-12 ' src={gameImg} alt="" />
    </div>
     
     <div className='mx-72'>
     <h3 className='font-bold my-2 lg:text-2xl  text-white'>Short Description:</h3>
     <p className='my-2 sm:break-words lg:text-lg  text-white'>
            CryptoKitties is a game centered around breedable, collectible,
             and oh-so-adorable creatures we call CryptoKitties! Each cat is
             one-of-a-kind and 100% owned by you.
        </p>
        <p className='my-3 lg:text-xl lg:font-semibold  text-white'>
            Publisher: Dapper Labs
        </p>
        <p className='my-3 lg:text-xl lg:font-semibold  text-white'>
            Release Date: 28 November 2017
        </p>
        <p className='lg:text-xl  text-white'>
            Developer: Roham, Raul Piirimees, Jack Pickett, Vivian, Jordan
        </p>
        <p className='my-4 lg:text-2xl lg:font-bold  text-white'>
            Minimum System Requirements
        </p>
        <ul>
          <li className='lg:text-lg  text-white'>os:MacBook, Windows</li>
          <li className='lg:text-lg  text-white'>processor:------</li>
          <li className='lg:text-lg  text-white'>memory:-----</li>
          <li className='lg:text-lg  text-white'>graphics:-----</li>
          <li className='lg:text-lg  text-white'>storage:-----</li>
        </ul>
        <p className='my-5 lg:text-2xl lg:font-bold  text-white'>Long Description</p>
        <p className='my-2 flex justify-center lg:text-lg  text-white '>
            In CryptoKitties, users collect and breed oh-so-adorable creatures that we 
            call CryptoKitties! Each kitty has a unique genome that defines its appearence and traits. Players can breed their kitties to 
            create new furry  friends and unlock rare attributes. CryptoKitties is one of the world's first 
            blockchain games.'Blockchain' is the technology that make things like  Bitcoin possible. While CryptoKitties isn't a 
            digital currency, it does offer  the same security: each CryptoKitty is one-of-a-kind and 100% owned by  you. It 
            cannot be replicated, taken away, or destroyed.
        </p>
     </div>











    

{/* 
    <div className="data mx-12 my-10  lg:mx-16  ">
        
        
        
       
       
        
        
        
       
    </div> */}



      <Footer/>
    </div>
  )
}

export default AboutTheGame
