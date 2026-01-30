import { Link } from "react-router-dom";

const OperationsStats = () => {
    return (
        <div className="relative w-full h-100 lg:h-125 mt-20 lg:mt-32">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url("https://gemad.co/assets/mining-9d5a4668.jpg")'
                }}
            >
                {/* FULL COVERAGE gradient - covers entire image */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/70 to-black/50">
                    {/* Extra dark fade at BOTTOM */}
                    <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-black to-transparent"></div>
                </div>
            </div>
            
            <div className="relative h-full flex items-center px-4 lg:px-16">
                <div className="max-w-2xl space-y-4">
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white drop-shadow-2xl">
                        Mining Operations Across
                    </h1>
                    
                    <div className="space-y-3">
                        <div className="flex items-baseline gap-2">
                            <span className="text-white text-lg lg:text-xl drop-shadow-md">
                                7
                            </span>
                            <span className="text-white text-lg lg:text-xl drop-shadow-md">
                                Strategic Locations
                            </span>
                        </div>
                    </div>
                    
                    <Link 
                        to="/operations"
                        className="inline-flex items-center gap-2 mt-6 px-6 lg:px-8 py-3 lg:py-4 bg-[#024177] hover:bg-[#04b7ef] text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg group"
                    >
                        <span>Browse Operations</span>
                        <svg 
                            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OperationsStats;