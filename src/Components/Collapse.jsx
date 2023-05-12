import React from 'react'
import UilReact from '@iconscout/react-unicons/icons/uil-react';

const Collapse = ({text,ctext}) => {
  return (
    <div className="collapse p-2">
    <div tabIndex={0} className="collapse group">
    <div className=" flex justify-center collapse-title bg-white text-primary-content group-focus:bg-white group-focus:text-secondary-content">
    <span className='w-7'>
    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="security"><path fill="#6563ff" d="M14 11h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2Z"></path><path fill="#b2b1ff" d="M19.63 3.65a1.002 1.002 0 0 0-.835-.203 7.985 7.985 0 0 1-6.223-1.267.999.999 0 0 0-1.144 0 7.98 7.98 0 0 1-6.223 1.267A1 1 0 0 0 4 4.427v7.456a9.019 9.019 0 0 0 3.769 7.324l3.65 2.607a1 1 0 0 0 1.162 0l3.65-2.607A9.017 9.017 0 0 0 20 11.883V4.426a1.001 1.001 0 0 0-.37-.776ZM14 13h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2Z"></path></svg></span>
      <p className='text-xl font-semibold text-blue-700'>
      {text}</p>
     
    </div>
    <div className="collapse-content bg-white text-primary-content group-focus:bg-white group-focus:text-secondary-content">
      <p className='text-l text-blue-700' >{ctext}</p>
    </div>
  </div>
    
  </div>
  )
}

export default Collapse