import React from 'react'
import logo from '../../assets/logo.svg'
import bell from '../../assets/bell.svg'
import searchicon from '../../assets/searchicon.svg'
import './header.css'

const Header = () => {
  return (
    <section className='flex justify-around justify-items-center items-center text-slate-200 bg-[#2ED89B] h-16'>

    <h2 className="text-2xl font-bold text-[#D7FFC9] md:text-xl">
      <img src={logo} alt='logo' className='logo'/>
    </h2>

    <nav className="flex gap-x-16 justify-items-center items-center md:gap-x-8">
    
      <div>
        <ul className="flex lg:gap-x-6 md:gap-x-4">
          <li><a href="#">Home</a></li>
          <li><a href="profile">Profile</a></li>
          <li><a href="packages">Packages</a></li>
          <li><a href="Blog">Blog</a></li>
          <li><a href="about">About Us</a></li>
        </ul>
      </div>

      <div className="flex gap-x-6 justify-center items-center md:gap-x-3">
        <div>
        <img src={searchicon} className="searchicon"/>
        </div>
        <div>
          <input type="search" placeholder="Search" />
        </div>
        <button className="rounded-sm px-4 bg-green-600 pb-1">
          <a href="#">Log In</a>
        </button>
        <button className="border border-green-800 rounded-sm px-2">
          <a className="text-green-800" href="#">Sign UP</a>
        </button>
      </div>

      <div>
        <img src={bell} alt='bell-icon' className='bell'/>
      </div>
    </nav>
  </section>
  )
}

export default Header