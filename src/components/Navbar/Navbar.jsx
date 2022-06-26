import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo2.jpg'
const Navbar = () => {
  return (
    <div className='topbarContainer'>
        {/* Left  side */}
        <div className='logo'>
          <span>
            <img src={logo} alt='logo' className='logo'/>
          </span>
          </div>
          <div className='head'>
          <span className='heading'>Dashboard</span>
          <span className='heading'>Orders</span>
          <span className='heading'>Configuration</span>
          
        </div>

        <div className='Rightside'>
         <span className='right'>KS</span>
        </div>
    </div>
  )
}

export default Navbar