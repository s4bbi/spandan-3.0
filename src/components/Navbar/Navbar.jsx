import React, {useState} from 'react'
import './Navbar.css'
// import {assets} from'../../assets/assets'
const Navbar = () => {
    
  const [menu,setMenu] = useState("Events");
  return (
    <div className='navbar'>
        <h1 className="logo">LOGO</h1>
        <ul className="navbar-menu">
            <li onClick={()=>setMenu("Home")} className={menu=="Home"?"active":""}>Home</li>
            <li onClick={()=>setMenu("Events")} className={menu=="Events"?"active":""}>Events</li>
            <li onClick={()=>setMenu("Team")} className={menu=="Team"?"active":""}>Team</li>
            <li onClick={()=>setMenu("Gallery")} className={menu=="Gallery"?"active":""}>Gallery</li>
        </ul>
        
        
        <button>REGISTER NOW</button>
     </div>

  )
}

export default Navbar
