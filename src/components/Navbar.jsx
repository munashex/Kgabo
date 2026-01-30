import Logo from '../imgs/Logo.png'
import { CgMenu } from "react-icons/cg";
import { Link, useLocation } from 'react-router-dom'; 
import {useState} from 'react'
import { RiCloseFill } from "react-icons/ri";


const navLinks = [ 
  {
  name: "Home", path: "/"
  }, 
  {
  name: "About", path: "/about"
  }, 
  {
  name: "Our Team", path: "/team", 
  },
  {
  name: "Operations", path: "/operations" 
  },
  {
  name: "Contact", path: "/contact"
  }
]

const Navbar = () => {
    const [toggleNav, setToggleNav] = useState(false) 
    const handleNav = () => setToggleNav(!toggleNav)
    const location = useLocation()

    return (
        <div>
         {/* navbar on sm and md screens */} 
         <div className='flex justify-between  px-2 mt-2 lg:hidden'> 
        
           {/* Logo container - takes full width for centering */}
           <div className="">
             <Link to="/">
               <img src={Logo} alt="KGABO MOKGATLA GROUP" 
               className="w-56"
               /> 
             </Link>
           </div>

          {/* Menu button - positioned absolute or fixed on right */}
          <div className="absolute right-4" onClick={handleNav}>
            <button className="hover:cursor-pointer relative w-10 h-10">
              <RiCloseFill 
                size={40} 
                className={`absolute transform transition-all duration-500 ease-out ${
                  toggleNav 
                    ? 'rotate-0 opacity-100 scale-100' 
                    : 'rotate-180 opacity-0 scale-0'
                }`}
              />
              <CgMenu 
                size={40} 
                className={`absolute transform transition-all duration-500 ease-out ${
                  toggleNav 
                    ? 'rotate-180 opacity-0 scale-0' 
                    : 'rotate-0 opacity-100 scale-100'
                }`}
              />
            </button>
          </div>
         </div> 
    

          {/* navlinks on sm and md screens  */} 
         {toggleNav ?  
         (
         <div className="flex flex-col animate-fade-right px-4 lg:hidden space-y-2 py-4"> 
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              onClick={handleNav} 
              className={
                item.name === 'Contact' 
                  ? 'text-lg bg-[#014277] hover:bg-[#01b9f1] transition delay-100 duration-200 w-fit px-5 py-1 rounded-full  text-white'
                  : 'text-xl font-bold'
              }
            >
              {item.name}
            </Link>
          ))}
         </div> 
         ) 
         :  
         null} 

         {/* navbar on lg screen */} 
         <div className="hidden mt-3 lg:flex items-center justify-between px-16">
           <Link to="/">
             <img src={Logo} alt="KGABO MOKGATLA GROUP" 
             className="w-56"
             /> 
           </Link> 
      
           <div className="space-x-11">
             {navLinks.map((item) => (
               <Link 
                 key={item.name}
                 to={item.path} 
                 className={
                   item.name === 'Contact' 
                     ? 'inline-block text-lg bg-[#014277] text-white w-fit px-5 py-1 rounded-full transition-all delay-200 duration-300 hover:bg-[#01b9f1] hover:scale-105 transform-gpu'
                     : 'text-lg font-bold'
                 }
               >
                 {item.name}
               </Link>
             ))}
           </div>
         </div>
        </div>
    )
}

export default Navbar