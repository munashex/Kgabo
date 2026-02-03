import teamImage from '../imgs/team/team.jpg'
import Seo from '../components/Seo' 
import { SEO_CONFIG } from '../constants/seo'

const Team = () => {
    const teamMembers = [
        {
            name: "Molefe H. Ratsela",
            position: "Chairman & Managing Director",
            qualifications: "Electrical Engineer (B.Eng); Master Installation Electricians (MIE)",
            experience: "12+ years in mining and industrial sector",
            description: "Provides strategic leadership and electrical engineering expertise across all operations.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        {
            name: "Reolebogile H. Phenya",
            position: "CEO & Managing Director",
            qualifications: "BSc (Hons.) Geology; MSc. Mineral Resource Management",
            experience: "Registered Professional Natural Scientist (Pr.Nat.Sci.) with 6+ years in coal mining",
            description: "Leads geological strategy, exploration programs, and resource management.",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        }
    ];

    return (
        <>
        <Seo {...SEO_CONFIG.team} />
        <div className="relative">
            {/* Hero Section */}
            <div className="relative w-full h-100 lg:h-125">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${teamImage})`
                    }}
                >
                    <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-black/70"></div>
                </div>
                
                <div className="relative h-full flex items-center px-4 lg:px-16">
                    <div className="max-w-3xl space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white">
                            Meet Our Strategic Team
                        </h1>
                        
                        <h2 className="text-xl lg:text-2xl font-medium text-white max-w-2xl">
                            DIRECTORS AND MANAGEMENT EXECUTIVES
                        </h2>
                        
                        <p className="text-lg text-white/90 max-w-xl">
                            A 100% black-owned leadership team driving Kgabo Mokgatla Group's 
                            vision for sustainable mineral resource development in South Africa.
                        </p>
                    </div>
                </div>
            </div>

            {/* Team Grid - EXACT same style as About page */}
            <div className="mt-16 lg:mt-28 px-4 lg:px-16">
                <div className="mb-8 lg:mb-12">
                    <h2 className="text-2xl font-bold lg:text-4xl mb-4">
                        Executive Leadership
                    </h2>
                    <p className="text-lg lg:text-xl lg:max-w-3xl">
                        Our leadership team combines technical expertise with strategic vision 
                        to drive Kgabo Mokgatla Group's growth and operational excellence.
                    </p>
                </div>

                {/* EXACT same layout as About page leadership section */}
                <div className="bg-linear-to-r from-[#004179]/5 to-[#04b7ef]/5 rounded-lg p-6 lg:p-8 mb-16 lg:mb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {teamMembers.map((member) => (
                            <div 
                                key={member.name}
                                className="bg-white rounded-lg p-6 shadow-sm"
                            >
                                <div className="flex flex-col sm:flex-row gap-6">
                                    {/* Profile Image - Same as About page */}
                                    <div className="shrink-0">
                                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                            <img 
                                                src={member.image} 
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-[#004179]">
                                            {member.name}
                                        </h3>
                                        <p className="text-gray-600 mb-3">{member.position}</p>
                                        
                                        <div className="space-y-2">
                                            <div>
                                                <div className="text-gray-500 text-sm mb-1">Qualifications</div>
                                                <p className="text-gray-800">{member.qualifications}</p>
                                            </div>
                                            
                                            <div>
                                                <div className="text-gray-500 text-sm mb-1">Experience</div>
                                                <p className="text-gray-800">{member.experience}</p>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-4">
                                            <div className="text-gray-500 text-sm mb-1">Role Description</div>
                                            <p className="text-gray-700">{member.description}</p>
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

                {/* Team Structure */}
                <div className="mb-16 lg:mb-24">
                    <h2 className="text-2xl font-bold lg:text-4xl mb-8">
                        Management Structure
                    </h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="bg-white border-l-4 border-[#004179] rounded-r-lg p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Level</h3>
                            <div className="space-y-3">
                                <p className="text-gray-700">• Board of Directors</p>
                                <p className="text-gray-700">• Executive Committee</p>
                                <p className="text-gray-700">• Overall Company Strategy</p>
                            </div>
                        </div>
                        
                        <div className="bg-white border-l-4 border-[#004179] rounded-r-lg p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Operational Level</h3>
                            <div className="space-y-3">
                                <p className="text-gray-700">• Operations Management</p>
                                <p className="text-gray-700">• Project Directors</p>
                                <p className="text-gray-700">• Department Heads</p>
                            </div>
                        </div>
                        
                        <div className="bg-white border-l-4 border-[#004179] rounded-r-lg p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Specialist Level</h3>
                            <div className="space-y-3">
                                <p className="text-gray-700">• Technical Experts</p>
                                <p className="text-gray-700">• Geological Specialists</p>
                                <p className="text-gray-700">• Engineering Teams</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Expertise Summary */}
                <div className="bg-linear-to-r from-[#004179]/5 to-[#04b7ef]/5 rounded-lg p-6 lg:p-8">
                    <div className="text-center mb-6">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            Leadership Expertise
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Combining specialized experience in mining engineering, geology, 
                            and mineral resource management.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                            <div className="text-3xl lg:text-4xl font-bold text-[#004179] mb-2">18+</div>
                            <div className="text-gray-900 font-medium">Combined Years Experience</div>
                            <div className="text-gray-600 text-sm mt-2">Mining and industrial sector</div>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                            <div className="text-3xl lg:text-4xl font-bold text-[#004179] mb-2">2</div>
                            <div className="text-gray-900 font-medium">Executive Directors</div>
                            <div className="text-gray-600 text-sm mt-2">Board-level leadership</div>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                            <div className="text-3xl lg:text-4xl font-bold text-[#004179] mb-2">100%</div>
                            <div className="text-gray-900 font-medium">Black-Owned</div>
                            <div className="text-gray-600 text-sm mt-2">Executive leadership team</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Team;