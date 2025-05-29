import { FaBars, FaChevronDown } from 'react-icons/fa6';
import Logo from '../assets/greenpastureLogo.png';

import {  useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  const NavItems = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'Services', link: '/programme' },
    { name: 'Contact Us', link: '/contact' },
  ];

  const [nav, setNav] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const displayNav = () => setNav(!nav);
  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
<header
  className={` top-0 w-full z-50 transition-transform duration-300 transform  md:flex justify-between items-center lg:h-[96px] h-[12vh] px-[20px] py-[20px] md:px-[100px] md:py-[60px]  `}
>
          <span className="flex items-center justify-between w-full md:w-auto">
        <Link to="/">
          <img src={Logo} className="w-[120px] md:w-[150px]" alt="logo" />
        </Link>
        <FaBars
          onClick={displayNav}
          className="block md:hidden text-2xl text-activeColor cursor-pointer"
        />
      </span>

      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center gap-[30px] navbar">
        {NavItems.map((item, i) => (
          <div key={i} className="relative">
            {item.link ? (
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  
                  `${isActive ? 'text-white' : 'text-white'}
                  text-[16px] font-[600] font-manRope hover:text-activeColor transition-all
                  ${item.name === 'Contact Us' ? 'bg-green-800 text-white py-3 px-5 hover:text-white hover:bg-[#F7931E]' : ''}
                  `
                }
              >
                {item.name}
              </NavLink>
            ) : (
              <span
                onClick={() => toggleDropdown(item.name)}
                className="text-navColor text-[16px] font-[600] font-manRope hover:text-activeColor transition-all cursor-pointer flex items-center gap-1"
              >
                {item.name}
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openDropdown === item.name ? 'rotate-180' : ''
                  }`}
                />
              </span>
            )}

            {/* Desktop Dropdown */}
            {item.ServiceChildren && openDropdown === item.name && (
              <div className="absolute top-full left-0 lg:left-[-24em] lg:p-[3em] mt-1 lg:grid grid-cols-3 flex flex-col bg-white shadow-md rounded-[24px] z-50 p-2 min-w-[200px] lg:w-[700px] ">
                {item.ServiceChildren.map((child, j) => (
                  <NavLink
                    key={j}
                    to={child.link}
                    className="hover:bg-[#FDE7E7] rounded-[8px] px-3 py-2 text-sm text-navColor hover:text-activeColor flex"
                    onClick={() => setOpenDropdown(null)}
                  >
                    <img src={child.img} className="mr-2" />
                    {child.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Navbar */}
      {nav && (
        <nav className="md:hidden flex flex-col gap-4 bg-white text-activeColor p-[20px] absolute top-full left-0 w-full z-[999] shadow-lg transition-all duration-300 ease-in-out">
          {NavItems.map((item, i) => (
            <div key={i} className="flex flex-col gap-2">
              {item.link ? (
                <Link
                  to={item.link}
                  className={`text-navColor text-[16px] font-[600] font-manRope hover:text-activeColor transition-all 
                  
                  ${item.name === 'Contact Us' ? 'bg-[#ED2625] text-white   py-3 px-3 text-center rounded-[8px] hover:text-white hover:bg-[#ED2625]' : ''}
                  
                  `}
                  onClick={() => setNav(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <div>
                  <span
                    className="text-navColor font-[600] font-manRope cursor-pointer flex items-center gap-1"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    {item.name}
                    <FaChevronDown
                      className={`transition-transform duration-300 ${
                        openDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  </span>
                  {item.ServiceChildren && openDropdown === item.name && (
                    <div className="ml-4 flex flex-col gap-[16px] mt-2">
                      {item.ServiceChildren.map((child, j) => (
                        <Link
                          key={j}
                          to={child.link}
                          className="text-sm text-navColor hover:text-activeColor"
                          onClick={() => {
                            setOpenDropdown(null);
                            setNav(false);
                          }}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
};
