import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Our Team", path: "/team" },
        { name: "Mining Operations", path: "/operations" },
        { name: "Exploration Projects", path: "/exploration" },
        { name: "Contact", path: "/contact" }
    ];

    const operations = [
        "Benk Colliery",
        "Rooipoort Colliery",
        "Chrome Wash Plant"
    ];

    const commodities = [
        "Coal",
        "Chrome",
        "Iron",
        "Limestone",
        "Platinum",
        "Manganese"
    ];

    return (
        <footer className="bg-[#004179] text-white mt-16 lg:mt-28">
            {/* Main Footer Content */}
            <div className="px-4 lg:px-16 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold mb-4 text-white">Kgabo Mokgatla Group</h3>
                        <p className="text-white text-sm leading-relaxed">
                            100% black-owned mining group specializing in exploration, 
                            project development, and technical advisory services across 
                            South Africa's mineral-rich regions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link 
                                        to={link.path}
                                        onClick={scrollToTop}
                                        className="text-white hover:text-[#04b7ef] transition-colors duration-200 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Operations & Commodities */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Our Focus</h3>
                        
                        <div className="mb-6">
                            <h4 className="text-sm font-semibold text-white mb-2">Operations</h4>
                            <ul className="space-y-2">
                                {operations.map((operation) => (
                                    <li key={operation} className="text-white text-sm flex items-start">
                                        <span className="text-[#04b7ef] mr-2">•</span>
                                        {operation}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold text-white mb-2">Commodities</h4>
                            <div className="flex flex-wrap gap-2">
                                {commodities.map((commodity) => (
                                    <span 
                                        key={commodity}
                                        className="px-2 py-1 bg-white/10 text-white text-xs rounded"
                                    >
                                        {commodity}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <FaMapMarkerAlt className="w-5 h-5 text-[#04b7ef] mt-1 shrink-0" />
                                <div className="text-sm text-white">
                                    <div className="font-medium text-white mb-1">Head Office</div>
                                    Pretoria, Gauteng<br />
                                    Menlyn, South Africa
                                </div>
                            </li>
                            
                            <li className="flex items-start gap-3">
                                <FaEnvelope className="w-5 h-5 text-[#04b7ef] mt-1 shrink-0" />
                                <div className="text-sm text-white">
                                    <div className="font-medium text-white mb-1">Email</div>
                                    <a 
                                        href="mailto:info@kgmgroup.co.za"
                                        className="text-white hover:text-[#04b7ef] transition-colors duration-200"
                                    >
                                        info@kgmgroup.co.za
                                    </a>
                                </div>
                            </li>
                            
                            <li className="flex items-start gap-3">
                                <FaPhone className="w-5 h-5 text-[#04b7ef] mt-1 shrink-0" />
                                <div className="text-sm text-white">
                                    <div className="font-medium text-white mb-1">Phone</div>
                                    <a 
                                        href="tel:+27120043942"
                                        className="text-white hover:text-[#04b7ef] transition-colors duration-200"
                                    >
                                        +27 12 004 3942
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/20">
                <div className="px-4 lg:px-16 py-6">
                    <div className="text-center">
                        <div className="text-sm text-white">
                            © {currentYear} Kgabo Mokgatla Group. All rights reserved.
                        </div>
                    </div>
                    
                    {/* Additional Legal Info */}
                    <div className="mt-4 pt-4 border-t border-white/10">
                        <p className="text-xs text-white text-center">
                            Kgabo Mokgatla Group is a 100% black-owned South African mining company 
                            operating in compliance with the Mineral and Petroleum Resources Development Act (MPRDA).
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;