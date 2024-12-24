import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import LeftSideBar from './components/LeftSideBar.jsx'
import UpperMain from './components/UpperMain.jsx'
import RightSideBar from './components/RightSideBar.jsx'
import LowerMain from './components/LowerMain.jsx'

function App() {

  return (
    <div className='flex '>
      <div className='hidden md:block'>
        <LeftSideBar />
      </div>
      <div className='flex flex-col w-full'>
        <Header />
        <div className='flex flex-col md:flex-row flex-grow'>
          <div className='flex flex-col flex-grow m-10'>
            <UpperMain />
            <LowerMain />
          </div>
          <RightSideBar />
        </div>
      </div>
    </div>
  )
}

export default App
