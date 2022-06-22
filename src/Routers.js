import React from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom';

import Auth from './page/auth/Auth';

import Home from './page/home/Home';
import ProtectRoute from './components/protectRouter/ProtectRoute';


const Routers = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<ProtectRoute />}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth />} />
      </Routes>
    </>

  )
}

export default Routers