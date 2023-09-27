import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {FaBars} from 'react-icons/fa6'
import ThemeIcon from '../components/ThemeIcon';
import ThemeContext from '../components/context/ThemeContext';

const NavBar = () => {
  const titleText = "[STOCK SIMPLER]";
  const [showMenu, setShowMenu] = useState(false);
  const{darkMode} = useContext(ThemeContext);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`fixed top-0 w-full  z-50 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]  ${darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100"}`}>

      <nav className='w-full sm:max-w-6xl mx-auto sm:flex sm:gap-3 sm:justify-between  py-4 sm:py-6 sm:items-center  '>

          <Link>
            <div className='sm:flex items-center justify-between ml-4 font-bold text-[22px]'>
              {titleText}
            </div>
          </Link>

        <div className='lg:hidden absolute top-0 right-0 mt-5 mr-5 text-[20px]'>

          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <FaBars className={`${darkMode ? "text-gray-300" : null}`}/>
          </button>
        </div>

          

        <div className={`lg:flex lg:items-center lg:space-x-10 text-[1rem] font-medium font-sans  ${showMenu ? 'block' : 'hidden space-x-1 '} text-center text-[20px]'}`}>

          

          <NavLink to='/' onClick={toggleMenu}>
            <div className='hover:text-indigo-600 ease-in'>
              HOME
            </div>
          </NavLink>

          <NavLink to='/AllStocks' onClick={toggleMenu}>
            <div className='hover:text-indigo-600 ease-in'>
              ALL STOCKS
            </div>
          </NavLink>

          <NavLink to='/About' onClick={toggleMenu}>
            <div className='hover:text-indigo-600 ease-in'>
              ABOUT
            </div>
          </NavLink>

          <NavLink to='/Contact' onClick={toggleMenu}>
            <div className='hover:text-indigo-600 ease-in'>
              CONTACT
            </div>
          </NavLink>

          <ThemeIcon/>

        </div>

        
      </nav>
    </div>
  );
};

export default NavBar;
