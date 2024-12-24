import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

function RightSideBar() {
  const [user, setUser] = useState({
    name: "Anjali Singh",
    roles: ["Actor","Singer"]
  })
  const [dayIndex, setDayIndex] = useState(6)
  const [weekIndex, setWeekIndex] = useState(0)
  const[btnActive, setBtnActive] = useState(0)
  const [auditions, setAuditions] = useState([
      {
        role: "Co-actor",
        location: "Mumbai",
        startTime: "17:00",
        endTime: "18:00",
        date: 6,
      },
      {
        role: "Co-actor",
        location: "Mumbai",
        startTime: "18:00",
        endTime: "19:00",
        date: 6,
      },
      {
        role: "Co-actor",
        location: "Mumbai",
        startTime: "18:00",
        endTime: "19:00",
        date: 7,
      },
      {
        role: "Co-actor",
        location: "Mumbai",
        startTime: "18:00",
        endTime: "19:00",
        date: 7,
      },
      {
        role: "Co-actor",
        location: "Mumbai",
        startTime: "18:00",
        endTime: "19:00",
        date: 7,
      },
      {
        role: "Co-actor",
        location: "Mumbai",
        startTime: "18:00",
        endTime: "19:00",
        date: 7,
      },
      {
        role: "Co-actor",
        location: "Mumbai",
        startTime: "18:00",
        endTime: "19:00",
        date: 7,
      },
      {
        role: "Co-actor",
        location: "Mumbai",
        startTime: "18:00",
        endTime: "19:00",
        date: 7,
      },
      
  ])
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const [tomorrowIndex, setTomorrowIndex] = useState(-1);

useEffect(() => {
  for (let i = 0; i < auditions.length; i++) {
    if (auditions[i].date === dayIndex+1) {
      setTomorrowIndex(i);
      console.log(i)
      break;
    }
  }
}, [dayIndex, auditions]);
  
  return (
    <div className='md:w-1/4 mt-10 flex flex-col items-center'>
      <div className='image w-full flex flex-col items-center'>
        <div className='flex flex-col items-center bg-no-repeat relative bg-cover min-w-72 w-10/12 h-72 rounded-3xl' 
        style={{
           backgroundImage: `url(${assets.profile_icon})`,
            backgroundPosition: "35%"
           }}>
          <div className='flex gap-24 bg-white w-fit p-3 absolute bottom-0 rounded-xl mb-6'>
            <div>
              <div className='font-semibold text-lg'>
                {user.name}
              </div>
              <div className='text-blue-700 text-xs font-semibold'>
                {
                  user.roles.map((role,index)=>(
                    `${role}${index!==user.roles.length-1 ? " | " : ""}`
                  ))
                }
              </div>
            </div>
            <button className='bg-indigo-500 p-3 rounded-full hover:bg-indigo-600'>
              <img src={assets.edit_icon} className='h-5 min-w-5 bg-transparent' alt="" />
            </button>
            </div>
        </div>
      </div>
      <div className='w-10/12'>
        <div className='flex justify-between items-center mt-10'>
          <div className='font-syne font-semibold text-2xl'>
              Auditions
          </div>
          <div className='flex gap-4'>
              <button><img src={assets.leftArrowBlack_icon} onClick={()=>{
                if(dayIndex===1) {
                  setDayIndex(26)
                }
                else {
                  setDayIndex((e)=>(e-1))
                }
                if(weekIndex==0) {
                  setWeekIndex(6)
                }
                else {
                  setWeekIndex((e)=>(e-1))
                }
              }} className='w-5 h-5' alt="" /></button>
              <button><img src={assets.rightArrowBlack_icon} onClick={()=>{
                if(dayIndex===26) {
                  setDayIndex(1)
                }
                else {
                  setDayIndex((e)=>(e+1))
                }
                if(weekIndex==6) {
                  setWeekIndex(0)
                }
                else {
                  setWeekIndex((e)=>(e+1))
                }
              }} className='w-5 h-5' alt="" /></button>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between w-11/12 mt-3'>
        <button onClick={()=>{btnActive===0 ? setBtnActive(-1) : setBtnActive(0)}} className={btnActive===0 ? 'flex flex-col items-center text-white bg-indigo-600 py-2 px-3 rounded-xl' : 'flex flex-col items-center hover:shadow-sm border border-transparent hover:border-gray-200 py-2 px-3 rounded-xl'}>
          <div className='font-bold text-lg bg-transparent'>{dayIndex}</div>
          <div className={`text-xs ${btnActive===0 ? "text-white" : "text-gray-600"} bg-transparent`}>{week[weekIndex%7]}</div>
        </button>
        <button onClick={()=>{btnActive===1 ? setBtnActive(-1) : setBtnActive(1)}} className={btnActive===1 ? 'flex flex-col items-center text-white bg-indigo-600 py-2 px-3 rounded-xl' : 'flex flex-col items-center hover:shadow-sm border border-transparent hover:border-gray-200 py-2 px-3 rounded-xl'}>
          <div className='font-bold text-lg bg-transparent'>{dayIndex+1}</div>
          <div className={`text-xs ${btnActive===1 ? "text-white" : "text-gray-600"} bg-transparent`}>{week[(weekIndex+1)%7]}</div>
        </button>
        <button onClick={()=>{btnActive===2 ? setBtnActive(-1) : setBtnActive(2)}} className={btnActive===2 ? 'flex flex-col items-center text-white bg-indigo-600 py-2 px-3 rounded-xl' : 'flex flex-col items-center hover:shadow-sm border border-transparent hover:border-gray-200 py-2 px-3 rounded-xl'}>
          <div className='font-bold text-lg bg-transparent'>{dayIndex+2}</div>
          <div className={`text-xs ${btnActive===2 ? "text-white" : "text-gray-600"} bg-transparent`}>{week[(weekIndex+2)%7]}</div>
        </button>
        <button onClick={()=>{btnActive===3 ? setBtnActive(-1) : setBtnActive(3)}} className={btnActive===3 ? 'flex flex-col items-center text-white bg-indigo-600 py-2 px-3 rounded-xl' : 'flex flex-col items-center hover:shadow-sm border border-transparent hover:border-gray-200 py-2 px-3 rounded-xl'}>
          <div className='font-bold text-lg bg-transparent'>{dayIndex+3}</div>
          <div className={`text-xs ${btnActive===3 ? "text-white" : "text-gray-600"} bg-transparent`}>{week[(weekIndex+3)%7]}</div>
        </button>
        <button onClick={()=>{btnActive===4 ? setBtnActive(-1) : setBtnActive(4)}} className={btnActive===4 ? 'flex flex-col items-center text-white bg-indigo-600 py-2 px-3 rounded-xl' : 'flex flex-col items-center hover:shadow-sm border border-transparent hover:border-gray-200 py-2 px-3 rounded-xl'}>
          <div className='font-bold text-lg bg-transparent'>{dayIndex+4}</div>
          <div className={`text-xs ${btnActive===4 ? "text-white" : "text-gray-600"} bg-transparent`}>{week[(weekIndex+4)%7]}</div>
        </button>
      </div>
      <div className='no-scrollbar w-11/12 flex flex-col items-center overflow-y-scroll gap-4 mt-10' style={{maxHeight: '480px'}}>
              {
                auditions.map((audition,index)=>(
                  <>
                  {
                    tomorrowIndex===-1||tomorrowIndex!==index ? <></>  :  
                      <div className="flex flex-col items-center border-t w-10/12"><span className='text-xs text-gray-600 font-semibold -mt-2'>Tomorrow</span></div>
                  }
                  <div className='w-full flex p-4 shadow-sm border rounded-2xl divide-x-2 divide-black'>
                    <div className={`py-2 px-2 m-2 ${index===0 ? 'bg-teal-400 rounded-xl' : ''}`}>
                      <img src={index===0 ? assets.maskHighlight_icon : assets.mask_icon} className='h-6 min-w-6 bg-transparent' alt="" />
                    </div>
                    <div className='flex w-full justify-between'>
                      <div className='flex ml-3 flex-col items-start gap-2'>
                        <div className='font-semibold text-sm tracking-wide'>
                          {audition.role}
                        </div>
                        <div className='text-gray-500 font-semibold text-sm'>
                          Location: {audition.location}
                        </div>
                      </div>
                      <div className={`text-xs h-fit py-1 px-3 font-semibold text-teal-400 ${index===0 ? '!text-white !font-normal bg-teal-500 rounded-xl' : '' }`}>  
                        {audition.startTime}-{audition.endTime}
                      </div>
                    </div>
                  </div>
                  </>
                ))
              }
      </div>
    </div>
  )
}

export default RightSideBar