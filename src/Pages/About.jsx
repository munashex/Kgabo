import aboutImage from '../imgs/about/about.jpg'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react';
import coal from '../imgs/home/coal.png' 
import chrome from '../imgs/home/chrome.png' 
import iron from '../imgs/home/iron.png' 
import limestone from '../imgs/home/limestone.png' 
import platinum from '../imgs/home/platinum.png' 
import manganese from '../imgs/home/manganese.png'
import Seo from '../components/Seo' 
import { SEO_CONFIG } from '../constants/seo'

const About = () => {
    const scrollRef = useRef(null);
    
    // Auto-scroll animation for commodities
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;
        
        const interval = setInterval(() => {
            if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                scrollContainer.scrollLeft = 0;
            } else {
                scrollContainer.scrollLeft += 1;
            }
        }, 20);
        
        return () => clearInterval(interval);
    }, []);

    const commodities = [ 
        {
            name: "Coal",
            image: coal,
        },
        {
            name: "Chrome",
            image: chrome,
        },
        {
            name: "Iron",
            image: iron,
        },
        {
            name: "Limestone",
            image: limestone,
        },
        {
            name: "Platinum",
            image: platinum,
        },
        {
            name: "Manganese",
            image: manganese,
        }
    ];

    const leadership = [
        {
            name: "Molefe H. Ratsela",
            position: "Chairman & Managing Director",
            experience: "12+ years in mining and industrial sector",
            description: "Provides strategic leadership and electrical engineering expertise across all operations.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        {
            name: "Reolebogile H. Phenya",
            position: "CEO & Managing Director",
            experience: "Registered Professional Natural Scientist (Pr.Nat.Sci.) with 6+ years in coal mining",
            description: "Leads geological strategy, exploration programs, and resource management.",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        }
    ];

    return (
        <>
        <Seo {...SEO_CONFIG.about} />
        <div className="relative">
            {/* Hero Section */}
            <div className="relative w-full h-125 lg:h-150">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${aboutImage})`
                    }}
                >
                    <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-black/70"></div>
                </div>
                
                <div className="relative h-full flex items-center px-4 lg:px-16">
                    <div className="max-w-3xl space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white">
                            About Us
                        </h1>
                        
                        <h2 className="text-xl lg:text-2xl font-medium text-white max-w-2xl">
                            Kgabo Mokgatla Group - Driving Strategic Mineral Development
                        </h2>
                        
                        <p className="text-lg text-white/90 max-w-xl">
                        100% black-owned mining group specializing in exploration, project development, and technical advisory services across Africa's mineral-rich regions.
                        </p>

                        <Link 
                            to="/contact"
                            className="inline-flex items-center gap-2 mt-6 px-6 lg:px-8 py-3 lg:py-4 bg-[#024177] hover:bg-[#04b7ef] text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg group"
                        >
                            <span>Contact Us</span>
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* About Content */}
            <div className="mt-16 lg:mt-28 px-4 lg:px-16">
                {/* Company Overview */}
                <div className="mb-16 lg:mb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        <div>
                            <h2 className="text-2xl font-bold lg:text-4xl mb-6">
                                Our Story & Mission
                            </h2>
                            <div className="space-y-4">
                                <p>
                                    <strong>Kgabo Mokgatla Group</strong>, based in Pretoria, Gauteng, 
                                    was established with the primary objective of exploring, developing, 
                                    and managing South Africa's mineral resources.
                                </p>
                                <p>
                                    As a 100% black-owned and managed company, we are deeply committed 
                                    to transforming the mining sector while creating sustainable value 
                                    for our stakeholders and communities.
                                </p>
                                <p>
                                    Our foundation is built on technical excellence, strategic 
                                    partnerships, and a deep understanding of the South African 
                                    mining landscape.
                                </p>
                            </div>
                        </div>
                        
                        <div className="bg-linear-to-br from-[#004179]/10 to-[#04b7ef]/10 rounded-lg p-6 border border-gray-200">
                            <div className="space-y-6">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-[#004179] mb-2">100%</div>
                                    <div className="text-gray-900 font-medium">Black-Owned</div>
                                </div>
                                <div className="h-px bg-gray-300"></div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-[#004179] mb-2">2+</div>
                                    <div className="text-gray-900 font-medium">Active Collieries</div>
                                </div>
                                <div className="h-px bg-gray-300"></div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-[#004179] mb-2">9,237 Ha</div>
                                    <div className="text-gray-900 font-medium">Exploration Portfolio</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Commodities Scrolling Section */}
                <div className="mb-16 lg:mb-24">
                    <h2 className="text-2xl font-bold lg:text-4xl mb-4">
                        Our Commodity Spectrum
                    </h2>
                    <p className="text-lg lg:text-xl lg:max-w-3xl mb-8">
                        We work across multiple mineral commodities, with a primary focus on coal 
                        and diversified interests in other strategic minerals.
                    </p>
                    
                    <div 
                        ref={scrollRef}
                        className="flex gap-4 overflow-x-hidden py-4"
                    >
                        {[...commodities, ...commodities].map((item, index) => (
                            <div 
                                key={`${item.name}-${index}`}
                                className="shrink-0 w-64 h-72 relative"
                            >
                                <img 
                                    src={item.image} 
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                    <h3 className="text-2xl font-bold text-white text-center">{item.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View All Commodities Link */}
                    <div className="mt-4 text-center">
                        <Link 
                            to="/commodities"
                            className="inline-flex items-center gap-2 px-6 lg:px-8 py-3 lg:py-4 bg-[#024177] hover:bg-[#04b7ef] text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg group"
                        >
                            <span>View All Commodities</span>
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </div>
                </div>

                {/* Focus Areas */}
                <div className="mb-16 lg:mb-32 lg:mt-28">
                    <h2 className="text-2xl font-bold lg:text-4xl mb-8">
                        Our Core Focus Areas
                    </h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
                        <div className="bg-white border-l-4 border-[#004179] rounded-r-lg p-6 shadow-sm">
                            <div className="text-2xl mb-4">🔍</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Exploration</h3>
                            <p className="text-gray-600">
                                Identifying and evaluating mineral resources across strategic locations 
                                in South Africa.
                            </p>
                        </div>
                        
                        <div className="bg-white border-l-4 border-[#004179] rounded-r-lg p-6 shadow-sm">
                            <div className="text-2xl mb-4">🏗️</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Project Development</h3>
                            <p className="text-gray-600">
                                Managing the full project lifecycle from discovery to operational 
                                readiness.
                            </p>
                        </div>
                        
                        <div className="bg-white border-l-4 border-[#004179] rounded-r-lg p-6 shadow-sm">
                            <div className="text-2xl mb-4">⚙️</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Advisory</h3>
                            <p className="text-gray-600">
                                Providing expert consultation and solutions for mining operations 
                                and industrial projects.
                            </p>
                        </div>
                        
                        <div className="bg-white border-l-4 border-[#004179] rounded-r-lg p-6 shadow-sm">
                            <div className="text-2xl mb-4">⛏️</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Mining Operations</h3>
                            <p className="text-gray-600">
                                Efficient and responsible extraction of coal, chrome, and other 
                                mineral resources.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Leadership with Images */}
                <div className="bg-linear-to-r from-[#004179]/5 to-[#04b7ef]/5 rounded-lg p-6 lg:p-8 mb-16 lg:mb-24">
                    <h2 className="text-2xl font-bold lg:text-4xl mb-8">
                        Leadership & Expertise
                    </h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {leadership.map((leader) => (
                            <div 
                                key={leader.name}
                                className="bg-white rounded-lg p-6 shadow-sm"
                            >
                                <div className="flex flex-col sm:flex-row gap-6">
                                    {/* Profile Image */}
                                    <div className="shrink-0">
                                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                            <img 
                                                src={leader.image} 
                                                alt={leader.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-[#004179]">
                                            {leader.name}
                                        </h3>
                                        <p className="text-gray-600 mb-3">{leader.position}</p>
                                        
                                        <div className="space-y-2">
                                            <div>
                                                <div className="text-gray-500 text-sm mb-1">Experience</div>
                                                <p className="text-gray-800">{leader.experience}</p>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-4">
                                            <div className="text-gray-500 text-sm mb-1">Role Description</div>
                                            <p className="text-gray-700">{leader.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <p className="text-gray-700">
                            Our leadership combines technical engineering expertise with deep 
                            geological knowledge, ensuring sound decision-making and operational 
                            excellence across all our projects.
                        </p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 lg:mt-24">
                    <h2 className="text-2xl font-bold lg:text-4xl mb-6">
                        Partner With Us
                    </h2>
                    <p className="text-gray-600 mb-8 lg:max-w-3xl">
                        Interested in learning more about our capabilities or exploring partnership 
                        opportunities? Our team is ready to discuss how we can collaborate.
                    </p>
                    
                    <Link 
                        to="/contact"
                        className="inline-flex items-center gap-2 px-6 lg:px-8 py-3 lg:py-4 bg-[#024177] hover:bg-[#04b7ef] text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg group"
                    >
                        <span>Get In Touch</span>
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
};

export default About;