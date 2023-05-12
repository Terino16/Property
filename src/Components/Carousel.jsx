import React from 'react'
import Img from '../Assets/Interior/Interior2.jpg'
import Img2 from '../Assets/Interior/Interior3.jpg'
import Img3 from '../Assets/Interior/Interior1.jpg'
import Img4 from '../Assets/Interior/Interior5.jpg'
import Img5 from '../Assets/Interior/Interior4.jpg'
import Img6 from '../Assets/Interior/Interior6.jpg'


const Carousel = () => {
  return (
    <div className="carousel carousel-end rounded-box space-x-5 ">
  <div className="carousel-item flex flex-col bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
    <img src={Img} style={{width:"400px",height:"260px"}} alt="Drink" />
    <p className=' pl-3 text-left font-bold text-2xl text-orange-500'>$<span className="font-semibold text-2xl text-zinc-400">56,455</span></p>
    <p className=' pl-3 text-left font-bold text-2xl text-blue-800'>Aliva Priva Jardin</p>
    <span className='pl-3 py-1 text-zinc-400 text-justify break-words'>Lorem ipsum dolor sit amet consectetur  <br/>Illum quasi, quisquam maxime et </span>
  </div> 
  <div className="carousel-item flex flex-col  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
    <img src={Img2} alt="Drink" style={{width:"400px",height:"260px"}} />
    <p className=' pl-3 text-left font-bold text-2xl text-orange-500'>$<span className="font-semibold text-2xl text-zinc-400">56,455</span></p>
    <p className=' pl-3 text-left font-bold text-2xl text-blue-800'>Aliva Priva Jardin</p>
    <span className='pl-3 py-1 text-zinc-400 text-justify break-words'>Lorem ipsum dolor sit amet consectetur  <br/>Illum quasi, quisquam maxime et </span>
  </div> 
  <div className="carousel-item flex flex-col  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
    <img src={Img3} alt="Drink" style={{width:"400px",height:"260px"}}/>
    <p className=' pl-3 text-left font-bold text-2xl text-orange-500'>$<span className="font-semibold text-2xl text-zinc-400">56,455</span></p>
    <p className=' pl-3 text-left font-bold text-2xl text-blue-800'>Aliva Priva Jardin</p>
    <span className='pl-3 py-1 text-zinc-400 text-justify break-words'>Lorem ipsum dolor sit amet consectetur  <br/>Illum quasi, quisquam maxime et </span>
  </div> 
  <div className="carousel-item flex flex-col  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
    <img src={Img6} alt="Drink" style={{width:"400px",height:"260px"}}/>
    <p className=' pl-3 text-left font-bold text-2xl text-orange-500'>$<span className="font-semibold text-2xl text-zinc-400">56,455</span></p>
    <p className=' pl-3 text-left font-bold text-2xl text-blue-800'>Aliva Priva Jardin</p>
    <span className='pl-3 py-1 text-zinc-400 text-justify break-words'>Lorem ipsum dolor sit amet consectetur  <br/>Illum quasi, quisquam maxime et </span>
  </div>
  <div className="carousel-item flex flex-col  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
    <img src={Img4} alt="Drink" style={{width:"400px",height:"260px"}}/>
    <p className=' pl-3 text-left font-bold text-2xl text-orange-500'>$<span className="font-semibold text-2xl text-zinc-400">56,455</span></p>
    <p className=' pl-3 text-left font-bold text-2xl text-blue-800'>Aliva Priva Jardin</p>
    <span className='pl-3 py-1 text-zinc-400 text-justify break-words'>Lorem ipsum dolor sit amet consectetur  <br/>Illum quasi, quisquam maxime et </span>
  </div>  <div className="carousel-item flex flex-col  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 ">
    <img src={Img5} alt="Drink" style={{width:"400px",height:"260px"}}/>
    <p className=' pl-3 text-left font-bold text-2xl text-orange-500'>$<span className="font-semibold text-2xl text-zinc-400">56,455</span></p>
    <p className=' pl-3 text-left font-bold text-2xl text-blue-800'>Aliva Priva Jardin</p>
    <span className='pl-3 py-1 text-zinc-400 text-justify break-words'>Lorem ipsum dolor sit amet consectetur  <br/>Illum quasi, quisquam maxime et </span>
  </div>

 
</div>
  )
}

export default Carousel