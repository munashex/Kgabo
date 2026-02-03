import { Link } from "react-router-dom";

const GetInTouch = () => {
    return (
        <div className="relative w-full h-100 lg:h-125">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80")'
                }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
            </div>
            
            {/* Content */}
            <div className="relative h-full flex items-center px-4 lg:px-16">
                {/* Container that pushes content to right on large screens */}
                <div className="w-full flex justify-start lg:justify-end">
                    <div className="max-w-2xl space-y-8">
                        {/* Main Heading */}
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white drop-shadow-2xl">
                            Get in Touch with Us
                        </h1>
                        
                        {/* Contact Options - Smaller compact buttons */}
                        <div className="space-y-4">
                            {/* Phone Button - More compact */}
                            <a 
                                href="tel:+27120043942"
                                className="inline-flex items-center gap-3 p-4 bg-[#024177] hover:bg-[#04b7ef] text-white rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg group w-full max-w-sm"
                            >
                                <div className="p-2 bg-white/20 rounded-md">
                                    <svg 
                                        className="w-5 h-5" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <div className="text-xs font-medium text-white/80">Call us directly</div>
                                    <div className="text-lg font-bold">Call Our Office</div>
                                </div>
                                <svg 
                                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                            
                            {/* Contact Details Button - More compact */}
                            <Link 
                                to="/contact"
                                className="inline-flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg group w-full max-w-sm"
                            >
                                <div className="p-2 bg-white/20 rounded-md">
                                    <svg 
                                        className="w-5 h-5" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <div className="text-xs font-medium text-white/80">View all contact info</div>
                                    <div className="text-lg font-bold">Contact Details</div>
                                </div>
                                <svg 
                                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
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
            </div>
        </div>
    );
};

export default GetInTouch;