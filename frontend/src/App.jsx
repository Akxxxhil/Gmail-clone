import React from 'react';
import Navabr from './Components/Navabr';
import { Route, Routes } from 'react-router-dom';
import Body from './Components/Body';


function App() {
  return (
    <>
      <div className='bg-[#F6F8FC] h-screen'>
        <Navabr />
        <Routes>
          <Route path='/' element={<Body />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
