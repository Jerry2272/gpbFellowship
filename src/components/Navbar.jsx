import { FaBars } from 'react-icons/fa6'
// import  Logo from '../assets/kelisLogo.jpg'
import {useState} from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [nav , setNav] =useState(false);

  const displayNav = () =>{
      setNav(!nav)
  }

  return (
    <header className='header'>
    <div className="text-center flex lg:justify-center items-center justify-between px-8 py-4 lg:px-6 ">
   {/* <a href="/">
   <img src={Logo} className='h-[auto] lg:w-[auto] lg:fixed right-0 z-20 w-[50%]'  alt="logo" />
   </a> */}
    <FaBars  onClick={displayNav}   className='block lg:hidden text-white text-2xl bg-transparent' />
    </div>
    <nav className="lg:flex gap-[40px] justify-center flex-row lg:flex-row bg-slate-800 py-3 text-white hidden  z-50 w-[50%]" >
        <a href="/" className="text-white nav_link">Home</a>
        <a href="#about" className="text-white nav_link">About Us</a>
        <a href="#how" className="text-white nav_link">How It Works</a>
        <a href="#service" className="text-white nav_link">Services</a>
        <a href="#price" className="text-white nav_link">Pricing</a>
        <Link to="/contact" className="text-white nav_link">Contact</Link>
        <Link to="/blog" className="text-white nav_link">Blog</Link>
      </nav>
    {
      nav && (
        <nav className="flex gap-[20px] flex-col lg:flex-row bg-slate-950 text-white navMenu" >
        <a href="/" className="text-white nav_link">Home</a>
        <a href="#about" className="text-white nav_link">About Us</a>
        <a href="#how" className="text-white nav_link">How It Works</a>
        <a href="#service" className="text-white nav_link">Services</a>
        <a href="#price" className="text-white nav_link">Pricing</a>
        <Link to="/contact" className="text-white nav_link">Contact</Link>
        <Link to="/blog" className="text-white nav_link">Blog</Link>
      </nav>
      )
    }

    </header>
  )
}
