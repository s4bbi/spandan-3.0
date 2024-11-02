import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from  './pages/Home/Home'
import Events from  './pages/Events/Events'


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      { <Routes>
        <Route path="" element={<Home />} />
        <Route path="Events" element={<Events />} />
      </Routes> }
    </div>
  )
}

export default App
