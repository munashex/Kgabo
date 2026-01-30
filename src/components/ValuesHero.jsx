import { Link } from "react-router-dom";

const ValuesHero = () => {
    const heroValues = [
        "Environmental Preservation",
        "Encouraging a Learning Culture", 
        "Sustainability and Consistency",
        "Ubuntu"
    ];

    return (
        <div className="relative w-full h-100 lg:h-125 mt-16 lg:mt-28">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url("https://gemad.co/assets/mining-9d5a4668.jpg")'
                }}
            >
                <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/70 to-transparent"></div>
            </div>
            
            {/* Content */}
            <div className="relative h-full flex items-center px-4 lg:px-16">
                <div className="max-w-2xl">
                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Values Driving Us
                    </h1>
                    
                    <div className="space-y-3 mb-8">
                        {heroValues.map((value, index) => (
                            <div key={index} className="flex items-center">
                                <div className="w-2 h-2 bg-[#04b7ef] rounded-full mr-3"></div>
                                <span className="text-white text-lg">{value}</span>
                            </div>
                        ))}
                    </div>
                    
                    <Link 
                        to="/about"
                        className="inline-flex items-center gap-2 text-white border-2 border-white px-6 py-2 rounded hover:bg-white hover:text-[#004179] transition-colors duration-300"
                    >
                        Read Our Story
                        <svg 
                            className="w-5 h-5" 
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