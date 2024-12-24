import React from 'react'
import {assets} from '../assets/assets.js'
function Header() {
  return (
    <div className="header my-4 mx-6 items-center flex justify-between text-nowrap max-w-full h-fit">
      <img src={assets.logo_icon} className='h-10 min-w-10 mb-5 block md:hidden' alt="" />
      <div className='left-side md:block hidden'>
        <span>Artist  /  </span>
        <span className='text-indigo-700'>Dashboard</span>
      </div>
      <div className='right-side flex items-center'>
        <div className='hidden md:flex searchBar border-2 h-fit rounded-3xl p-1  shadow-sm'>
          <img src={assets.search_icon} className='h-5 w-5 m-1' />
        <input type="text" placeholder='Search' className='ml-2 pr-5 outline-none' />
        </div>
        <button className='font-semibold text-lg mx-7 '>Upload</button>
        <button className='font-semibold text-lg mx-3  text-white py-2 px-5 rounded-3xl hover:bg-indigo-600 bg-indigo-500'>Get Pro</button>
        <button className='hidden md:block rounded-full border-2 mx-3 p-2 shadow-sm'><img src={assets.bell_icon} className='h-5 min-w-5' /></button>
        <button className='hidden md:block rounded-full border-2 mx-1 px-1 py-0.5 shadow-sm'><img src={assets.menu_icon} className='h-8 w-8 ml-8 mr-2' /></button>
      </div>

    </div>
  )
}

export default Header