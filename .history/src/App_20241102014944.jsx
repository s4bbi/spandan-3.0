import React from 'react'
import Navbar from './components/Navbar/Navbar'
// import {Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Events" element={<Events />} />
      </Routes> */}
    </div>
  )
}

export default App
