import React from 'react';
import Navabr from './Components/Navabr';
import { Route, Routes } from 'react-router-dom';
import Body from './Components/Body';
import MailDeatils from './Components/MailDeatils';


function App() {
  return (
    <>
      <div className='bg-[#F6F8FC] h-screen'>
        <Navabr />
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/mailDetails/:id' element={<MailDeatils/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
