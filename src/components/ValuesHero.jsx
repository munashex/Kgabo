import { Link } from "react-router-dom";
import valueBgImage from '../imgs/exploration/exploration.jpg'

const ValuesHero = () => {
    const heroValues = [
        "Environmental Preservation",
        "Encouraging a Learning Culture", 
        "Sustainability and Consistency",
        "Ubuntu"
    ];

    return (
        <div className="relative w-full h-100 lg:h-125">
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${valueBgImage})`
                }}
            >
                {/* FULL COVERAGE gradient - covers entire image */}
                <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/70 to-black/50">
                    {/* Extra dark fade at TOP */}
                    <div className="absolute top-0 left-0 right-0 h-48 bg-linear-to-b from-black to-transparent"></div>
                </div>
            </div>
            
            <div className="relative h-full flex items-center px-4 lg:px-16">
                <div className="max-w-2xl space-y-4">
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white drop-shadow-2xl">
                        Values Driving Us
                    </h1>
                    
                    <div className="space-y-3">
                        {heroValues.map((value, index) => (
                            <div key={index} className="flex items-center">
                                <div className="w-2 h-2 bg-[#04b7ef] rounded-full mr-3"></div>
                                <span className="text-white text-lg lg:text-xl drop-shadow-md">{value}</span>
                            </div>
                        ))}
                    </div>
                    
                    <Link 
                        to="/about"
                        className="inline-flex items-center gap-2 mt-6 px-6 lg:px-8 py-3 lg:py-4 bg-[#024177] hover:bg-[#04b7ef] text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg group"
                    >
                        <span>Read Our Story</span>
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

export default ValuesHero;