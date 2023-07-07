import React from 'react'
import logo from '../assets/minglogo.jpg'
import linkedin from '../assets/icons8-linkedin-circled-48.png'
import discord from '../assets/3069758_circle_discord_gaming_messenger_round icon_icon.png'
import facebook from '../assets/icons8-facebook-circled-48.png'
import twitter from '../assets/icons8-twitter-circled-48.png'
import mailbox from '../assets/email.png'
import {Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='bg-black sticky text-white rounded-3xl mb-5'>
       <div className='px-4 py-7 flex flex-row'>
        <div className='mr-96 '>
          <img className='w-44 ml-8 mt-10 ' src= {logo} alt="" />
        </div>

        <div className='flex flex-row '>

          <div className='flex flex-col mr-44'>
<ul>

  <li className='text-white'>Community</li>
  <li className='text-white my-2 hover:underline cursor-pointer '>
  <Link to="/faq">Faq</Link>
    {/* Faq */}
    </li>
  <li className='text-white my-2'>Help</li>
</ul>
          </div>

          <div className='flex flex-col mr-44'>
            <ul>
              <li className='text-white  hover:underline cursor-pointer'>
              <Link to="/aboutus">About Us</Link>

                {/* About Us */}
              
              </li>
              <li className='text-white text-sm my-2'>Terms of Use</li>
              <li className='text-white text-sm'>Privacy Policy</li>
            </ul>

          </div>

          <div className='flex flex-col mr-44'>
           <p>Social</p>
           <div className='flex flex-row my-2'>
<img className='mr-1' src={linkedin} alt="" />
<img className='w-10 mr-1' src={discord} alt="" />
<img className='mr-1' src={facebook} alt="" />
<img className='w-10 mr-1' src={mailbox} alt="" />
<img src={twitter} alt="" />
           </div>
          </div>

        </div>
       

       </div>
  </div>
  )
}

export default Footer
