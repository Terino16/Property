import React from 'react'
import Img from '../Assets/zach-miles-Y84-eo8drzk-unsplash.jpg'
import Search from '../Components/Search'
import CountUp from 'react-countup';
import Best from './Best';
import Value from './Value';
import Contatct from './Contatct';

const Home = () => {
  return (
    <div className='bg-Homi h-screen w-screen bg-cover '>
      <div className="flex justify-around pt-11 p-5">
      <div className='flex flex-col justify-start'>
      <p  className='bg-clip-text text-[80px] font-bold text-transparent bg-gradient-to-r from-green-400 to-purple-900 text-left'>
        Discoverable <br/>
        Most Suitable  <br/>
        Property
      </p>
      <p className='text-left text-zinc-600'>Find a variety of properties that suit you very easily,<br/>
      forget all difficulties in finding aresidence for you
      </p>
      <br/>
    <Search/>
    <br/>
    <div className='flex justify-between items-center  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-5'>
    <span className='flex flex-col'>
    <CountUp start={0} end={9000} delay={3}>
  {({ countUpRef }) => (
      <p ref={countUpRef} className='text-orange-500 font-bold text-2xl'> </p>
  )}
  </CountUp>
  <p className=' text-zinc-500'>Premium Product</p>
  </span>
  <span className='flex flex-col'>
    <CountUp start={0} end={2000} delay={3}>
  {({ countUpRef }) => (
      <p ref={countUpRef} className='text-orange-500 font-bold text-2xl'> +</p>
  )}
  </CountUp>
  <p className=' text-zinc-500'>Happy Customer</p>
  </span>
  <span className='flex flex-col'>
    <CountUp start={0} end={28} delay={3}>
  {({ countUpRef }) => (
      <p ref={countUpRef} className='text-orange-500 font-bold text-2xl'> +</p>
  )}
  </CountUp>
  <p className=' text-zinc-500'>Award Winning</p>
  </span>

    </div>
      </div>
      <img src={Img} alt="Img Error" style={{width:"34%"}} className='rounded-lg transition duration-300 ease-in-out hover:scale-110 shadow-xl shadow-black/5 dark:shadow-black/30'/>
      </div>
      <div>
      </div>
     <Best/> 
     <Value/>
     <Contatct/>
    </div>
  
  )
}

export default Home