import React from 'react'
import Navabr from './Components/Navabr'
import SideBar from './Components/SideBar'
import Inbox from './Components/Inbox'

function App() {
  return (
    <div className='bg-[#F6F8FC] h-screen'>
      <Navabr />
      <div className='flex'>
        <SideBar />
        <Inbox />
      </div>
    </div>
  )
}

export default App
