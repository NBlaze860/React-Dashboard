import React, { useState } from 'react'
import {assets} from '../assets/assets.js'

function UpperMain() {
  const [score, setScore] = useState(412)
  const [invites, setInvites] = useState(12)
  const [requests, setRequests] = useState(23)
  const [roles, setRoles] = useState(406)
  const [percent, setPercent] = useState(70)
  return (
    <div className='flex flex-col md:flex-row md:text-nowrap gap-20'>
      <div className="left flex flex-col w-fit ">
        <div className='upperLeft flex items-center gap-9'>
        <div className="txt font-semibold text-2xl mt-7 tracking-wide font-syne">
          Your Profile score
        </div>
        <div className="btn text-xs font-semibold flex flex-col gap-3 items-center">
          <div>view profile</div>
          <button><img src={assets.rightarrow_icon} className='h-12 w-12' /></button>
        </div>
        </div>
        <div className="lowerLeft flex flex-col items-center">
            <div className=''><img src={assets.score_icon} className=' min-w-80 h-48' alt="" /></div>
            <div className='font-semibold tracking-wide text-5xl relative -translate-y-14'>{score}</div>
            <div className='font-semibold tracking-tight text-lg relative -translate-y-10'>Each skill contributes to the score</div>
            <div className="text-gray-500 tracking-tight relative -translate-y-10">Add more skills to boost profile score</div>
            <button className='font-semibold mx-3 text-white py-2 px-24 rounded-3xl tracking-wide hover:bg-indigo-600 bg-indigo-500 relative -translate-y-5'>Add Skills</button>
        </div>
      </div>
      <div className="right flex flex-col gap-y-7 md:w-2/3 md:flex-grow">
        <div className='upperRight flex items-center justify-between'>
        <div className="txt font-semibold text-2xl mt-7 tracking-wide font-syne">
          Applications Overview
        </div>
        <div className="btn text-xs font-semibold  flex flex-col gap-3 items-center">
          <div>Applications</div>
          <button><img src={assets.rightarrow_icon} className='h-12 w-12' /></button>
        </div>
        </div>
        <div className="lowerRight flex flex-col gap-7">
          <div className='flex gap-2'>
            <div className='flex justify-between w-1/2  border-2 border-indigo-500 p-4 rounded-xl items-center'>
                <div className='font-semibold text-md md:text-xl tracking-tight'>Application Invites</div><div className='font-semibold text-indigo-500 text-2xl md:text-4xl'>{invites}</div>
            </div>
            <div className='flex justify-between w-1/2 border-2 border-indigo-500 p-4 rounded-xl items-center'>
                <div className='font-semibold text-md md:text-xl tracking-tight'>Audition Requests</div><div className='font-semibold text-indigo-500 text-2xl md:text-4xl'>{requests}</div>
            </div>
          </div>
          <div className='border-2 flex flex-col rounded-xl justify-between items-center border-indigo-500 bg-no-repeat bg-cover bg-center ' style={{backgroundImage: `url(${assets.background_icon})`}} >
            <div className='flex items-center gap-2 mt-7'>
              <div className='font-semibold text-indigo-500 text-4xl'>{roles}</div>
              <div className='text-green-600 text-sm font-semibold'>{percent}%</div>
            </div>
            <div className='font-semibold text-lg mb-7'>New Roles Matched</div>
            <div><img src={assets.hiring_icon} className='min-w-40 h-16' alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpperMain