import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import first from '../assets/image 2.png'
import rec1 from '../assets/Rectangle 10.png'
import rec2 from '../assets/Rectangle 4.png'
import rec3 from '../assets/Rectangle 11.png'
import rec4 from '../assets/Rectangle 12.png'
import rec5 from '../assets/Rectangle 14.png'
import rec6 from '../assets/Rectangle 15.png'
import rec7 from '../assets/Rectangle 12-1.png'
import rec8 from '../assets/Rectangle 13-2.png'
import rec9 from '../assets/Rectangle 19.png'
import rec10 from '../assets/Rectangle 17.png'
import rec11 from '../assets/Rectangle 16.png'
import rec12 from '../assets/Rectangle 38.png'



function Blog() {
  return (
    <>
    <div className='h-screen bg-zinc-900 overflow-auto'>
        <Navbar/>
    <div className='flex items-center justify-center mt-24'>
        <img className='w-2/5' src={first} alt="" />
    </div>
    
<div className='flex items-center justify-center my-8 flex-col'>
<p className='text-white font-semibold text-2xl italic '>A few words about this blog 
          platform, <br/> Ghost, and how this site was made
     </p>
     <p  className='text-white font-semibold text-sm italic  mt-5 '>Why Ghost (& Figma) instead of Medium  WordPress  or other options?</p>

</div>
<hr className=" bg-white mx-96 my-3 "/>
<p className='text-white flex  items-center justify-center font-semibold mt-10 mb-5 text-2xl'>All articles</p>



<div className='flex items-center justify-center flex-col'>

<div className='flex flex-row m-10'>
    <div className='mr-2'>
        <img src={rec1} className='w-60 ' alt="" />
        <p className='text-white text-sm mx-2 mt-3 mb-8 flex items-center justify-center '>Here are some things you should  <br />   know regarding how we work</p>
        </div>
    <div>
        <img src={rec2}  className='w-60 ' alt="" />
        <p className='text-white text-sm mx-2 mt-3 mb-8 flex items-center justify-center'>Granny gives everyone the finger  <br /> and other trips from  OFFF Barcelona</p>
        </div>



</div>

<div  className='flex flex-row'>
    <div  className='mr-2'>
    <img className='w-60 ' src={rec3} alt="" />
    <p className='text-white text-sm mx-2 mt-3 mb-8 flex items-center justify-center'>Hello world, or in other <br /> words, why this blog exists</p>
    </div>

    <div>

    <img className='w-60 ' src={rec4} alt="" />
    <p className='text-white text-sm mx-2 mt-3 mb-8 flex items-center justify-center'>Here are some things you should  <br />   know regarding how we work</p>
    </div>


</div>

<div  className='flex flex-row'>
    <div className='mr-2' >
    <img className='w-60 ' src={rec5} alt="" />
    <p className='text-white text-sm mx-2 mt-3 mb-8 flex items-center justify-center'>Correcting artificial <br/> intelligence with digital <br/> product design</p>
    </div>

    <div>
    <img className='w-60 ' src={rec6} alt="" />
    <p className='text-white text-sm mx-2 mt-3 mb-8 flex items-center justify-center'>It's all about finding the <br /> perfect balance</p>
    </div>
    
    
</div>


<div  className='flex flex-row'>
    <div className='mr-2'>
    <img className='w-60 ' src={rec7} alt="" />
    <p className='text-white text-sm mx-2 mt-3 mb-8 flex items-center justify-center'>I believe learning is the <br /> most important skill</p>
    </div>
   
   <div>
   <img className='w-60 ' src={rec8} alt="" />
   <p className='text-white text-sm mx-2 mt-3 mb-8 flex items-center justify-center'>Clients are the part of the team</p>
   </div> 
</div>



<div  className='flex flex-row'>
    <div className='mr-2'>
    <img  className='w-60 'src={rec9} alt="" />
    <p className='text-white text-sm mx-2 mt-3 mb-8 flex items-center justify-center'>Clients are the part of the team</p>
    </div>
    
    <div>
    <img  className='w-60 'src={rec10} alt="" />
    <p className='text-white text-sm mx-2 mt-3 mb-8 flex items-center justify-center'>Here are some things you <br /> should know regarding how <br /> we work</p>
    </div>
    
</div>


<div  className='flex flex-row'>
    <div className='mr-2'>
    <img className='w-60 ' src={rec11} alt="" />
    <p className='text-white text-sm mx-2 mt-3 mb-8 flex items-center justify-center'>Correcting artificial <br /> intelligence with digital <br /> product design </p>
    </div>
    
    <div>
    <img className='w-60 ' src={rec12} alt="" />
    <p className='text-white text-sm mx-2 mt-3 mb-8 flex items-center justify-center'>How modern remote <br /> working tools get along <br /> with Old School Cowboy's <br /> methods</p>
    </div>
   
</div>

</div>






   



                     
<Footer/>
   </div>
    </>
  )
}

export default Blog
