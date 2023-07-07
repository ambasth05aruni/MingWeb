import React from 'react'
import backpic from '../assets/circle.png'
import logo from '../assets/minglogo.jpg'
import linkedin from '../assets/icons8-linkedin-circled-48.png'
import discord from '../assets/3069758_circle_discord_gaming_messenger_round icon_icon.png'
import facebook from '../assets/icons8-facebook-circled-48.png'
import twitter from '../assets/icons8-twitter-circled-48.png'
import mailbox from '../assets/email.png'


function AboutUs() {
  return (
    <div className='h-screen w-full bg-gray-950  overflow-auto  ' >
      <div className='flex justify-center relative mt-10'>
        <img className='my-9 absolute ' src={backpic} alt="" />
      </div>
      <div>
        <h1 className='text-3xl font-semibold ml-20  text-white'>UNLOCK THE POWER OF WEB3 STREAMING</h1>
      </div>
      <div>
        <p className='text-white ml-20 font-light   text-2xl w-1/2 my-6'>
3MING will be a Web3 games streaming platform. Where we allow creators to stream web3 games.
3MING will help Creators to establish there presence in web3 gaming community and build there own virtual gaming communities.

        </p>
      </div>

<div className='my-8'>
  <p className='text-white text-3xl font-semibold ml-20 '>BACKED BY</p>
</div>

<div className=''>
<p className='text-white ml-20 font-light text-sm '>Microsoft</p>
<p  className='text-white ml-20 font-light text-sm '> for Startups</p>
</div>

<div>
  <p  className='text-white text-3xl font-semibold ml-20 ' >Founders</p>
  <p  className='text-white text-3xl font-semibold ml-20 '>Hub</p>
</div>

<div className=' ml-20 my-5'>
<div className='flex flex-row my-2'>
<img className='mr-1' src={linkedin} alt="" />
<img className='w-10 mr-1' src={discord} alt="" />
<img className='mr-1' src={facebook} alt="" />
<img className='w-10 mr-1' src={mailbox} alt="" />
<img src={twitter} alt="" />
</div>
</div>
<div className='flex flex-row '>
  <div >
  <div className='mt-20 mb-24'>
<p  className='text-white text-3xl font-semibold ml-20 ' >ROADMAP</p>
</div>

<div className='mt-20 mb-24'>
<p  className='text-white text-3xl font-semibold ml-20 ' >Connect with Games</p>
<p className='text-white ml-20 font-light text-sm '>Feb 2023</p>
</div>

<div className='mt-20 mb-24'>
<p  className='text-white text-3xl font-semibold ml-20 ' >Launch 3Ming.List</p>
<p className='text-white ml-20 font-light text-sm '>March 2023</p>
</div>
  </div>
  <div
    className="inline-block h-[500px] mx-4 mt-16  min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50">

    </div>
    <div className='flex flex-col'>
    <div className='mt-20 mb-24'>
<p  className='text-white text-3xl font-semibold ml-20 ' >Coming Soon Page</p>
<p className='text-white ml-20 font-light text-sm '>Jan 2023</p>
</div>

<div className='mt-24 mb-24'>
<p  className='text-white text-3xl font-semibold ml-20 ' >5 College Game Events</p>
<p className='text-white ml-20 font-light text-sm '>March 2023</p>
</div>

<div className='mt-24 mb-24'>
<p  className='text-white text-3xl font-semibold ml-20 ' >Launch 3Ming.Stream</p>
<p className='text-white ml-20 font-light text-sm '>May 2023</p>
</div>
    </div>
    






</div>






    </div>
  )
}

export default AboutUs
