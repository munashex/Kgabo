import { Link } from 'react-router-dom';
import { FaArrowRight, FaHome } from 'react-icons/fa';
import Seo from '../components/Seo';
import { SEO_CONFIG } from '../constants/seo';


const NotFound = () => {
    return (
        <>
        <Seo {...SEO_CONFIG.notFound} />
        <div className="relative min-h-screen flex items-center justify-center bg-linear-to-b from-[#004179] to-[#024177]">
            {/* Content */}
            <div className="relative px-4 lg:px-16 py-16 text-center">
                <div className="max-w-3xl mx-auto space-y-6">
                    {/* 404 Number */}
                    <div className="mb-8">
                        <h1 className="text-9xl md:text-[12rem] lg:text-[15rem] font-bold text-white/10 leading-none">
                            404
                        </h1>
                        <div className="-mt-20 lg:-mt-32">
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white">
                                Page Not Found
                            </h2>
                        </div>
                    </div>

                    {/* Message */}
                    <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto">
                        The page you're looking for doesn't exist or has been moved. 
                        Let's get you back to exploring our mining operations and projects.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                        <Link 
                            to="/"
                            className="inline-flex items-center gap-2 px-6 lg:px-8 py-3 lg:py-4 bg-[#024177] hover:bg-[#04b7ef] text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg group"
                        >
                            <FaHome className="w-5 h-5" />
                            <span>Back to Home</span>
                        </Link>

                        <Link 
                            to="/operations"
                            className="inline-flex items-center gap-2 px-6 lg:px-8 py-3 lg:py-4 bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-[#024177] text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg group"
                        >
                            <span>View Operations</span>
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </div>

                    {/* Quick Links */}
                    <div className="pt-12 border-t border-white/20 mt-12">
                        <p className="text-white/80 mb-4">Or explore these pages:</p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link 
                                to="/about"
                                className="text-white hover:text-[#04b7ef] transition-colors duration-200"
                            >
                                About Us
                            </Link>
                            <span className="text-white/40">•</span>
                            <Link 
                                to="/team"
                                className="text-white hover:text-[#04b7ef] transition-colors duration-200"
                            >
                                Our Team
                            </Link>
                            <span className="text-white/40">•</span>
                            <Link 
                                to="/exploration"
                                className="text-white hover:text-[#04b7ef] transition-colors duration-200"
                            >
                                Exploration Projects
                            </Link>
                            <span className="text-white/40">•</span>
                            <Link 
                                to="/contact"
                                className="text-white hover:text-[#04b7ef] transition-colors duration-200"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default NotFound;