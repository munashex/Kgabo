import explorationImage from  '../imgs/exploration/exploration.jpg'

const ExplorationProjects = () => {
    const explorationProjects = [
        {
            name: "Hetblok",
            location: "Springs, Gauteng (Delmas boundary)",
            area: "501 Ha",
            status: "Exploration Phase",
            stage: "Initial Assessment",
            commodities: ["Coal", "Other Minerals"],
            description: "Early-stage exploration project in mineral-rich region with promising geological indicators.",
            distance: "Boundary to Delmas, Mpumalanga"
        },
        {
            name: "Vischkuil",
            location: "Springs, Gauteng (Delmas boundary)",
            area: "2,516 Ha",
            status: "Advanced Exploration",
            stage: "Resource Evaluation",
            commodities: ["Coal", "Chrome"],
            description: "Large-scale exploration property undergoing detailed resource assessment and drilling programs.",
            distance: "Major mineral corridor"
        },
        {
            name: "Valschpruit",
            location: "Bronkhorstspruit, Gauteng (R25 road)",
            area: "1,781 Ha",
            status: "Exploration Phase",
            stage: "Geological Mapping",
            commodities: ["Coal", "Industrial Minerals"],
            description: "Strategic location along R25 transport corridor with established mining infrastructure nearby.",
            distance: "Along R25 road corridor"
        },
        {
            name: "Grootspruit",
            location: "Bronkhorstspruit, Gauteng (R25 road)",
            area: "949 Ha",
            status: "Exploration Phase",
            stage: "Initial Assessment",
            commodities: ["Coal"],
            description: "Compact exploration license with favorable geology adjacent to existing mining operations.",
            distance: "Bronkhorstspruit mining district"
        },
        {
            name: "Onspoed",
            location: "Balmoral, Mpumalanga (N4 road)",
            area: "3,270 Ha",
            status: "Advanced Exploration",
            stage: "Resource Evaluation",
            commodities: ["Coal", "Manganese", "Chrome"],
            description: "Major exploration property in Mpumalanga's mining heartland with multi-commodity potential.",
            distance: "Proximity to N4 national highway"
        }
    ];

    const totalArea = explorationProjects.reduce((sum, project) => sum + parseInt(project.area.replace(' Ha', '').replace(',', '')), 0);

    return (
        <div className="relative">
            {/* Hero Section */}
            <div className="relative w-full h-[500px] lg:h-[600px]">
                {/* Background Image - You'll need to add exploration.jpg */}
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${explorationImage})`
                    }}
                >
                    {/* Full black gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/70"></div>
                </div>
                
                {/* Hero Content */}
                <div className="relative h-full flex items-center px-4 lg:px-16">
                    <div className="max-w-3xl space-y-6">
                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white">
                            Our Exploration Portfolio
                        </h1>
                        
                        {/* Subheading */}
                        <h2 className="text-xl lg:text-2xl font-medium text-white max-w-2xl">
                            Building Future Resources Through Strategic Mineral Exploration
                        </h2>
                        
                        {/* Description */}
                        <p className="text-lg text-white/90 max-w-xl">
                            Kgabo Mokgatla Group is actively developing a diversified mineral portfolio 
                            across strategic locations, positioning for both current and future market demands.
                        </p>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap gap-6 pt-4">
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                <div className="text-2xl font-bold text-white">{explorationProjects.length}</div>
                                <div className="text-white/80">Active Projects</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                <div className="text-2xl font-bold text-white">{totalArea.toLocaleString()} Ha</div>
                                <div className="text-white/80">Total Exploration Area</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                <div className="text-2xl font-bold text-white">5+</div>
                                <div className="text-white/80">Target Commodities</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Exploration Projects Grid */}
            <div className="mt-16 lg:mt-28 px-4 lg:px-16">
                <div className="mb-8 lg:mb-12">
                    <h2 className="text-2xl font-bold lg:text-4xl mb-4">
                        Exploration Projects
                    </h2>
                    <p className="text-lg lg:text-xl lg:max-w-3xl">
                        Our strategic exploration portfolio spans {totalArea.toLocaleString()} hectares across 
                        Gauteng and Mpumalanga, targeting multiple mineral commodities for future development.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
                    {explorationProjects.map((project) => (
                        <div 
                            key={project.name}
                            className="bg-white border-l-4 border-[#004179] rounded-r-lg p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-xl lg:text-2xl font-bold text-[#004179]">
                                        {project.name}
                                    </h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-gray-600">{project.location}</span>
                                        <span className="text-gray-400">•</span>
                                        <span className="font-medium text-gray-900">{project.area}</span>
                                    </div>
                                </div>
                                <span className="px-3 py-1 bg-blue-50 text-[#004179] text-sm font-medium rounded-full">
                                    {project.status}
                                </span>
                            </div>

                            <div className="space-y-4 mt-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <div className="text-gray-500 mb-1">Exploration Stage</div>
                                        <div className="font-medium text-gray-900">{project.stage}</div>
                                    </div>
                                    <div>
                                        <div className="text-gray-500 mb-1">Proximity</div>
                                        <div className="font-medium text-gray-900">{project.distance}</div>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-gray-500 mb-2">Target Commodities</div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.commodities.map((commodity, idx) => (
                                            <span 
                                                key={idx}
                                                className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
                                            >
                                                {commodity}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <div className="text-gray-500 mb-1">Project Description</div>
                                    <p className="text-gray-700">{project.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Portfolio Summary */}
                <div className="bg-gradient-to-r from-[#004179]/5 to-[#04b7ef]/5 rounded-lg border border-gray-200 p-8">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            Exploration Portfolio Summary
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our exploration strategy focuses on developing a sustainable pipeline of 
                            mineral resources for future mining operations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                            <div className="text-4xl font-bold text-[#004179] mb-2">
                                {explorationProjects.length}
                            </div>
                            <div className="text-lg font-medium text-gray-900">Active Projects</div>
                            <div className="text-gray-600 mt-2">Across Gauteng & Mpumalanga</div>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                            <div className="text-4xl font-bold text-[#004179] mb-2">
                                {totalArea.toLocaleString()} Ha
                            </div>
                            <div className="text-lg font-medium text-gray-900">Total Exploration Area</div>
                            <div className="text-gray-600 mt-2">Strategic land portfolio</div>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                            <div className="text-4xl font-bold text-[#004179] mb-2">
                                5+
                            </div>
                            <div className="text-lg font-medium text-gray-900">Mineral Commodities</div>
                            <div className="text-gray-600 mt-2">Diversified portfolio focus</div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Strategic Development Path</h4>
                                <p className="text-gray-600">
                                    Our exploration projects follow a systematic development path from 
                                    initial assessment through to resource evaluation and feasibility studies.
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-center">
                                    <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
                                    <div className="text-sm text-gray-600">Initial</div>
                                </div>
                                <div className="w-8 h-1 bg-gray-300"></div>
                                <div className="text-center">
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full mx-auto mb-2"></div>
                                    <div className="text-sm text-gray-600">Advanced</div>
                                </div>
                                <div className="w-8 h-1 bg-gray-300"></div>
                                <div className="text-center">
                                    <div className="w-3 h-3 bg-[#004179] rounded-full mx-auto mb-2"></div>
                                    <div className="text-sm text-gray-600">Feasibility</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExplorationProjects;