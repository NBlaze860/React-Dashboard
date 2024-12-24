import React, { useState } from 'react'
import {assets} from '../assets/assets.js'

function LeftSideBar() {
  const [activePageIndex, setActivePageIndex] = useState(1)
  // I have used the index useState so that whenever a button is clicked, Index is set for that button
  //  and the color of that icon is inverted to show that it is highlighted.
  // For tooltip, I have added the tooltip and has-tooltip classes in index.css`
  return (
    <div className='gap-y-10 flex flex-col mx-6 my-6  items-center text-nowrap min-w-fit '>
      <img src={assets.logo_icon} className='h-10 min-w-10 mb-5' alt="" />
      <div className='has-tooltip relative flex items-center'>
      <button onClick={()=>setActivePageIndex(1)} className={activePageIndex===1 ? 'bg-indigo-600 p-2 rounded-full' : ''}>
      <img src={assets.dashboard_icon} className={activePageIndex===1 ? 'h-7 min-w-7 bg-transparent invert' : 'h-7 min-w-7 bg-transparent'} alt="" />
      </button>
      <div className='tooltip absolute left-14 bg-indigo-500 py-1 px-3 rounded-lg text-white'>
        Dashboard
      </div>
      </div>
      <div className='has-tooltip relative flex items-center'>
      <button onClick={()=>setActivePageIndex(2)} className={activePageIndex===2 ? 'bg-indigo-600 p-2 rounded-full' : ''}>
      <img src={assets.jobs_icon} className={activePageIndex===2 ? 'h-7 min-w-7 bg-transparent invert' : 'h-7 min-w-7 bg-transparent'} alt="" />
      </button>
      <div className='tooltip absolute left-14 bg-indigo-500 py-1 px-3 rounded-lg text-white'>
        Find Jobs
      </div>
      </div>
      <div className='has-tooltip relative flex items-center'>
      <button onClick={()=>setActivePageIndex(3)} className={activePageIndex===3 ? 'bg-indigo-600 p-2 rounded-full' : ''}>
      <img src={assets.artist_icon} className={activePageIndex===3 ? 'h-7 min-w-7 bg-transparent invert' : 'h-7 min-w-7 bg-transparent'} alt="" />
      </button>
      <div className='tooltip absolute left-14 bg-indigo-500 py-1 px-3 rounded-lg text-white'>
        Artists
      </div>
      </div>
      <div className='has-tooltip relative flex items-center'>
      <button onClick={()=>setActivePageIndex(4)} className={activePageIndex===4 ? 'bg-indigo-600 p-2 rounded-full' : ''}>
      <img src={assets.inbox_icon} className={activePageIndex===4 ? 'h-7 min-w-7 bg-transparent invert' : 'h-7 min-w-7 bg-transparent'} alt="" />
      </button>
      <div className='tooltip absolute left-14 bg-indigo-500 py-1 px-3 rounded-lg text-white'>
        Inbox
      </div>
      </div>
      <div className='has-tooltip relative flex items-center'>
      <button onClick={()=>setActivePageIndex(5)} className={activePageIndex===5 ? 'bg-indigo-600 p-2 rounded-full' : ''}>
      <img src={assets.portfolio_icon} className={activePageIndex===5 ? 'h-7 min-w-7 bg-transparent invert' : 'h-7 min-w-7 bg-transparent'} alt="" />
      </button>
      <div className='tooltip absolute left-14 bg-indigo-500 py-1 px-3 rounded-lg text-white'>
        My Portfolio
      </div>
      </div>
      <div className='has-tooltip relative flex items-center'>
      <button onClick={()=>setActivePageIndex(6)} className={activePageIndex===6 ? 'bg-indigo-600 p-2 rounded-full' : ''}>
      <img src={assets.discover_icon} className={activePageIndex===6 ? 'h-7 min-w-7 bg-transparent invert' : 'h-7 min-w-7 bg-transparent'} alt="" />
      </button>
      <div className='tooltip absolute left-14 bg-indigo-500 py-1 px-3 rounded-lg text-white'>
        Discover
      </div>
      </div>
      <div className='has-tooltip relative flex items-center'>
      <button onClick={()=>setActivePageIndex(7)} className={activePageIndex===7 ? 'bg-indigo-600 p-2 rounded-full' : ''}>
      <img src={assets.notification_icon} className={activePageIndex===7 ? 'h-7 min-w-7 bg-transparent invert' : 'h-7 min-w-7 bg-transparent'} alt="" />
      </button>
      <div className='tooltip absolute left-14 bg-indigo-500 py-1 px-3 rounded-lg text-white'>
        Notifications
      </div>
      </div>
      <div className='has-tooltip relative flex items-center'>
      <button onClick={()=>setActivePageIndex(8)} className={activePageIndex===8 ? 'bg-indigo-600 p-2 rounded-full' : ''}>
      <img src={assets.settings_icon} className={activePageIndex===8 ? 'h-7 min-w-7 bg-transparent invert' : 'h-7 min-w-7 bg-transparent'} alt="" />
      </button>
      <div className='tooltip absolute left-14 bg-indigo-500 py-1 px-3 rounded-lg text-white'>
        Settings
      </div>
      </div>
    </div>
  )
}

export default LeftSideBar