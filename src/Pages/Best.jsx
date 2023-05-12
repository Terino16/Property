import React from 'react'
import CompaniesList from '../Components/CompaniesList'
import Carousel from '../Components/Carousel'

const Best = () => {
  return (
    <div className='bg-Homi-dark h-screen w-screen bg-cover '>
        <CompaniesList/>
        <div className='bg-pink m-7 h-full p-11'>
            <span className='text-left'>
                <p className='font-bold text-2xl text-orange-500'>Best Choices</p>
                <p className='bg-clip-text text-6xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-blue-900 text-left pb-2'>Popular Residences</p>
            </span>
        <Carousel/>
        </div>
       
    </div>
  )
}

export default Best