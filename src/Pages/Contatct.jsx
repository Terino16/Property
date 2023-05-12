import React from 'react'
import Contact from '../Assets/Contatct.jpg';
import Chat from '../Components/Chat';



const Contatct = () => {
    return (
      <div className='flex justify-between bg-gray-200 p-11  h-screen space-x-11 '>
       <div className='p-11'>
          <p className='bg-clip-text font-bold text-transparent bg-gradient-to-r from-yellow-500 to-yellow-600 text-2xl text-left'>Contact Us.</p>
          <p className='font-bold text-blue-800 text-5xl text-left'>Its Easy to Contact us</p>
          <p className='text-zinc-400 text-left pt-3'>Is there a problem finding your dream home? <br/>Need a
guide in buying your first home? or need a consultation
on residential issues? just contact us.</p>
         <div className='grid grid-cols-2 gap-3'>
          <Chat/>
          <Chat/>
          <Chat/>
          <Chat/>
         </div>
       </div>
       <div className='w-[600px] pr-11 '>
          <img src={Contact} alt="Value" className='rounded-[40px] w-[500px] h-[700px]'/>
       </div>
      </div>
    )
  }

export default Contatct