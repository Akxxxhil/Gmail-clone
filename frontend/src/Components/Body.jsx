import React from 'react';
import SideBar from './SideBar';
import Inbox from './Inbox';

function Body() {
  return (
    <div className='flex h-screen'>
      <SideBar />
      <Inbox />
    </div>
  );
}

export default Body;
