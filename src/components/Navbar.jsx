import Logo from '../imgs/Logo.png'
import { CgMenu, CgChevronDown } from "react-icons/cg";
import { Link, useLocation } from 'react-router-dom'; 
import { useState } from 'react'
import { RiCloseFill } from "react-icons/ri";

const Navbar = () => {
    const [toggleNav, setToggleNav] = useState(false);
    const [isBusinessOpen, setIsBusinessOpen] = useState(false);
    const [isMobileBusinessOpen, setIsMobileBusinessOpen] = useState(false);
    const location = useLocation();

    const handleNav = () => setToggleNav(!toggleNav);
    
    const navLinks = [ 
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Our Team", path: "/team" },
        {name: "Commodities", path: "/commodities"},
        { 
            name: "Business Focus", 
            isDropdown: true,
            items: [
                { name: "Mining Operations", path: "/operations" },
                { name: "Exploration Projects", path: "/exploration" }
            ]
        },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <div className="bg-white">
            {/* Large Screen Navbar */}
            <div className="hidden lg:block ">
                <div className="container mx-auto px-6 lg:px-12 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="shrink-0">
                            <img 
                                src={Logo} 
                                alt="KGABO MOKGATLA GROUP" 
                                className="w-56 hover:opacity-90 transition-opacity duration-200"
                            /> 
                        </Link>

                        {/* Navigation Links */}
                        <div className="flex items-center space-x-8">
                            {navLinks.map((item) => {
                                if (item.isDropdown) {
                                    return (
                                        <div 
                                            key={item.name}
                                            className="relative"
                                            onMouseEnter={() => setIsBusinessOpen(true)}
                                            onMouseLeave={() => setIsBusinessOpen(false)}
                                        >
                                            <button className="flex items-center space-x-1 text-lg font-semibold text-gray-800 hover:text-[#014277] transition-colors duration-200 py-2">
                                                <span>{item.name}</span>
                                                <CgChevronDown className={`w-4 h-4 transition-transform duration-200 ${isBusinessOpen ? 'rotate-180' : ''}`} />
                                            </button>
                                            
                                            {/* Dropdown Menu */}
                                            {isBusinessOpen && (
                                                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 animate-fade-in">
                                                    {item.items.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            to={subItem.path}
                                                            className="block px-6 py-3 text-gray-700 hover:bg-[#014277]/5 hover:text-[#014277] transition-colors duration-200 font-medium"
                                                            onClick={() => setIsBusinessOpen(false)}
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                }
                                
                                return (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className={`text-lg font-semibold py-2 transition-colors duration-200 ${
                                            item.name === 'Contact' 
                                                ? 'bg-[#014277] text-white px-6 py-2 rounded-full hover:bg-[#01b9f1] hover:scale-105 transition-all duration-300'
                                                : 'text-gray-800 hover:text-[#014277]'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="lg:hidden">
                <div className="px-4 py-3 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" onClick={() => setToggleNav(false)}>
                        <img 
                            src={Logo} 
                            alt="KGABO MOKGATLA GROUP" 
                            className="w-48"
                        />
                    </Link>

                    {/* Menu Button */}
                    <button 
                        onClick={handleNav}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        aria-label="Toggle menu"
                    >
                        {toggleNav ? (
                            <RiCloseFill size={28} className="text-gray-700" />
                        ) : (
                            <CgMenu size={28} className="text-gray-700" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {toggleNav && (
                    <div className="absolute left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-40 animate-slide-down">
                        <div className="px-4 py-3 space-y-1">
                            {navLinks.map((item) => {
                                if (item.isDropdown) {
                                    return (
                                        <div key={item.name} className="space-y-1">
                                            <button
                                                onClick={() => setIsMobileBusinessOpen(!isMobileBusinessOpen)}
                                                className="flex items-center justify-between w-full text-left px-4 py-3 text-lg font-semibold text-gray-800 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                                            >
                                                <span>{item.name}</span>
                                                <CgChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileBusinessOpen ? 'rotate-180' : ''}`} />
                                            </button>
                                            
                                            {/* Mobile Dropdown */}
                                            {isMobileBusinessOpen && (
                                                <div className="ml-4 space-y-1 border-l border-gray-200 pl-4">
                                                    {item.items.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            to={subItem.path}
                                                            onClick={() => {
                                                                setToggleNav(false);
                                                                setIsMobileBusinessOpen(false);
                                                            }}
                                                            className="block px-4 py-3 text-gray-600 hover:text-[#014277] hover:bg-gray-50 rounded-lg transition-colors duration-200"
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                }
                                
                                return (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        onClick={() => setToggleNav(false)}
                                        className={`block px-4 py-3 text-lg font-semibold rounded-lg transition-colors duration-200 ${
                                            item.name === 'Contact'
                                                ? 'bg-[#014277] text-white hover:bg-[#01b9f1] text-center'
                                                : 'text-gray-800 hover:bg-gray-50 hover:text-[#014277]'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;