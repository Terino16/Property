import React from 'react'
import Values from '../Assets/Values.jpg';
import Collapse from '../Components/Collapse';


const Value = () => {
  return (
    <div className='flex justify-evenly bg-gray-200 p-11 '>
     <div className='w-[600px] mr-11'>
        <img src={Values} alt="Value" className='rounded-[40px] w-[500px] h-[400px]'/>
     </div>
     <div>
        <p className='bg-clip-text font-bold text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 text-2xl text-left'>Our Value</p>
        <p className='font-bold text-blue-800 text-5xl text-left'>Value we give to you</p>
        <p className='text-zinc-400 text-left pt-3'>We always ready to help by providing the best service
          for you,<br/> We believe a good place to live can make your
          life better</p>
          <div>
       <Collapse text={"Best Interest rates on Market"} ctext={"We provide best intrest rate on the dubai real estate market. with Customer asssitances."}/>
       <Collapse text={"Prevent Unstable prices"} ctext={"Price we provide is the best for you, we guarantee no price changes on your property due to various unexpected costs that may come."}/>
       <Collapse text={"Best prices on the market"} ctext={"Price we provide is the best for you, we guarantee no price changes on your property due to various unexpected costs that may come."}/>
       </div>
     </div>
    </div>
  )
}

export default Value