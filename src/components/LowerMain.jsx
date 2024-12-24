import React, { useRef, useState } from 'react'
import { assets } from '../assets/assets'

function LowerMain() {
  const [isDropDown, setIsDropDown] = useState(false)
  const [filter, setFilter] = useState("Recent")
  const [activeIndex, setActiveIndex] = useState(1)
  const [dropDownIndex, setDropDownIndex] = useState(-1)
  const [pages, setPages] = useState(5)
  const [currpage, setCurrpage] = useState(1)
  const [applicationArray, setApplicationArray] = useState([
    {
      description: "Dance Troupe for Corporate Event",
      role: "Actor",
      location: "Gurgaon, Haryana",
      date: "5/27/15",
      status: "Selected",
    },
    {
      description: "Dance Troupe for Corporate Event",
      role: "Actor",
      location: "Gurgaon, Haryana",
      date: "5/27/15",
      status: "Shortlisted",
    },
    {
      description: "Dance Troupe for Corporate Event",
      role: "Actor",
      location: "Gurgaon, Haryana",
      date: "5/27/15",
      status: "Shortlisted",
    },
    {
      description: "Dance Troupe for Corporate Event",
      role: "Actor",
      location: "Gurgaon, Haryana",
      date: "5/27/15",
      status: "Pending Review",
    },
    {
      description: "Dance Troupe for Corporate Event",
      role: "Actor",
      location: "Gurgaon, Haryana",
      date: "5/27/15",
      status: "Not Selected",
    },
    {
      description: "Dance Troupe for Corporate Event",
      role: "Actor",
      location: "Gurgaon, Haryana",
      date: "5/27/15",
      status: "Selected",
    },
    {
      description: "Dance Troupe for Corporate Event",
      role: "Actor",
      location: "Gurgaon, Haryana",
      date: "5/27/15",
      status: "Selected",
    },
    {
      description: "Dance Troupe for Corporate Event",
      role: "Actor",
      location: "Gurgaon, Haryana",
      date: "5/27/15",
      status: "Selected",
    },
    {
      description: "Dance Troupe for Corporate Event",
      role: "Actor",
      location: "Gurgaon, Haryana",
      date: "5/27/15",
      status: "Selected",
    },
    {
      description: "Dance Troupe for Corporate Event",
      role: "Actor",
      location: "Gurgaon, Haryana",
      date: "5/27/15",
      status: "Selected",
    },
    {
      description: "Dance Troupe for Corporate Event",
      role: "Actor",
      location: "Gurgaon, Haryana",
      date: "5/27/15",
      status: "Selected",
    },
    {
      description: "Dance Troupe for Corporate Event",
      role: "Actor",
      location: "Gurgaon, Haryana",
      date: "5/27/15",
      status: "Selected",
    },
    {
      description: "Dance Troupe for Corporate Event",
      role: "Actor",
      location: "Gurgaon, Haryana",
      date: "5/27/15",
      status: "Selected",
    },
    {
      description: "Dance Troupe for Corporate Event",
      role: "Actor",
      location: "Gurgaon, Haryana",
      date: "5/27/15",
      status: "Selected",
    },
    {
      description: "Dance Troupe for Corporate Event",
      role: "Actor",
      location: "Gurgaon, Haryana",
      date: "5/27/15",
      status: "Selected",
    },

  ])
  const [dropDownPosition, setDropDownPosition] = useState({ top: 0, left: 0 });
  const menuRef = useRef([]);

  const handleMenuClick = (index, event) => {     // this function was used because the dropdown menu was not getting placed correctly after implementing the scroll feature as they were getting placed as per the position of when scroll was not there
    const rect = event.target.getBoundingClientRect(); // Get the button's position
    setDropDownPosition({
      top: rect.bottom + window.scrollY/12, // Account for vertical scrolling    /10 because it's position was not corr3ect vertically
      left: rect.left + window.scrollX, // Account for horizontal scrolling
    });
    setDropDownIndex(dropDownIndex === index ? -1 : index); // Toggle dropdown
  };
  

  return (
    <div className='text-nowrap mt-16 flex flex-col'>
      <div className="btns flex justify-between items-center">
        <div className=' flex gap-8 items-center'>
          <button onClick={() => setActiveIndex(1)} className={`font-semibold px-4 py-2 border-2 shadow-sm rounded-xl ${activeIndex === 1 ? 'bg-black text-white' : 'md:block hidden'}`}>All Applications</button>
          <button onClick={() => setActiveIndex(2)} className={`font-semibold px-4 py-2 border-2 shadow-sm rounded-xl ${activeIndex === 2 ? 'bg-black text-white' : 'md:block hidden'}`}>Invites</button>
          <button onClick={() => setActiveIndex(3)} className={`font-semibold px-4 py-2 border-2 shadow-sm rounded-xl ${activeIndex === 3 ? 'bg-black text-white' : 'md:block hidden'}`}>Drafts</button>
          <button onClick={() => setActiveIndex(4)} className={`font-semibold px-4 py-2 border-2 shadow-sm rounded-xl ${activeIndex === 4 ? 'bg-black text-white' : 'md:block hidden'}`}>Submitted</button>
          <button onClick={() => setActiveIndex(5)} className={`font-semibold px-4 py-2 border-2 shadow-sm rounded-xl ${activeIndex === 5 ? 'bg-black text-white' : 'md:block hidden'}`}>Auditions</button>
          <button onClick={() => setActiveIndex(6)} className={`font-semibold px-4 py-2 border-2 shadow-sm rounded-xl ${activeIndex === 6 ? 'bg-black text-white' : 'md:block hidden'}`}>Archived</button>
        </div>
        <div className='flex flex-col items-end relative'>
          <button onClick={() => setIsDropDown((e) => (!e))} className='flex gap-3 '>{filter} <img src={assets.downarrow_icon} className='h-6 w-6' alt="" /></button>
          <div className={isDropDown ? 'absolute ml-2 translate-y-10 flex flex-col items-end gap-1 border-2 shadow-sm rounded-xl px-4 py-2 z-50' : 'hidden'}>
            <button onClick={() => { setFilter("Recent"); setIsDropDown(false) }} className='Recent'>Recent</button>
            <button onClick={() => { setFilter("Selected"); setIsDropDown(false) }} className="Selected">Selected</button>
            <button onClick={() => { setFilter("Shortlisted"); setIsDropDown(false) }} className="Shortlisted">Shortlisted</button>
            <button onClick={() => { setFilter("Pending Review"); setIsDropDown(false) }} className="Pending">Pending Review</button>
          </div>
        </div>
      </div>
      <div className="w-full mt-4 relative">
      <div className="no-scrollbar overflow-y-scroll scroll-auto max-h-96 scrollbar-none">
        <table className='md:w-full w-fit text-left'>
          <thead className='text-gray-500 border-t-2 border-b-2 sticky top-0'>    
            <tr>
            <th className='px-6 py-3 flex font-semibold'>Job Title & Role</th>
            <th className='px-6 py-3 font-semibold table-cell'>Location</th>
            <th className='px-6 py-3 font-semibold text-center table-cell'>Date Applied</th>
            <th className='px-6 py-3 font-semibold'>Status</th>
            <th className='px-6 py-3'></th>
            </tr>
          </thead>
          <tbody className='divide-y-2'>
            {
              applicationArray.map((app, index) => {
                  if(filter!=="Recent" && filter!== app.status) {
                    return
                  }
                return (
                <tr className='' key={index}>
                  <td className='px-6 py-3'>
                    <div className='font-semibold'>
                      {app.description}
                    </div>
                    <div className='text-gray-500 '>
                      Role: {app.role}
                    </div>
                  </td>
                  <td className='px-6 py-3 table-cell'>{app.location}</td>
                  <td className='px-6 py-3 text-center table-cell'>{app.date}</td>
                  {
                      app.status === "Selected" ? (<td className='px-6 py-3 flex items-center gap-1 text-blue-500 text-sm font-semibold'><span className='text-3xl mb-2'>•</span> Selected</td>) : app.status==="Shortlisted" ? (<td className='px-6 py-3 flex items-center gap-1 text-green-600 text-sm font-semibold'><span className='text-3xl mb-2'>•</span> Shortlisted</td>) : app.status==="Pending Review" ? (<td className='px-6 py-3 flex items-center gap-1 text-yellow-500 text-sm font-semibold'><span className='text-3xl mb-2'>•</span> Pending Review</td>) : (<td className='px-6 py-3 flex items-center gap-1 text-black text-sm font-semibold'><span className='text-3xl mb-2'>•</span>Not Selected</td>)
                  }
                  <td className=''><button ref={(el) => (menuRef.current[index] = el)} onClick={(e) => handleMenuClick(index, e)} className=' font-bold text-xl px-6 py-3'>⋮</button>
                    <div className={dropDownIndex === index ? 'fixed flex flex-col items-start gap-1 border-2 shadow-sm rounded-xl px-2 py-2 z-50' : 'hidden'} style={{ top: dropDownPosition.top, left: dropDownPosition.left,}}>
                      <button className='Recent'>View Details</button>
                      <button className="Selected">Archive</button>
                    </div>
                  </td>

                </tr>)})}
          </tbody>
        </table>
        </div>
      </div>
      <div>
        <div className="footer mt-2 flex justify-between md:mx-4">
        <button onClick={()=>{currpage!==1 ? setCurrpage((e)=>(e-1)) : {}}} className='font-semibold text-lg mx-7 '>Prev</button>
        <div className='md:flex hidden'>
          {
            Array.from({length: pages}).map((pages,index)=>(
              <button key={index} onClick={()=>setCurrpage(index+1)} className={currpage===index+1 ?  'bg-indigo-500 rounded-lg text-white py-3 px-4' : ' py-3 px-4 hover:text-indigo-700 '}>{(index+1)<10 ? `0${index+1}` : index+1}</button>
            ))
          }
        </div>
        <button onClick={()=>{currpage!==pages ? setCurrpage((e)=>(e+1)) : {}}} className='font-semibold text-lg mx-7 '>Next</button>
        </div>
      </div>
    </div>
  )
}

export default LowerMain