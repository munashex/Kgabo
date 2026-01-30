import explorationImage from '../imgs/exploration/exploration.jpg'

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

    const totalArea = 9237;

    return (
        <div className="relative">
            {/* Hero Section - Fixed for mobile */}
            <div className="relative w-full h-[500px] lg:h-[600px]">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${explorationImage})`
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/90"></div>
                </div>
                
                {/* Hero Content - Adjusted spacing for mobile */}
                <div className="relative h-full flex items-center px-4 lg:px-16">
                    <div className="max-w-3xl space-y-4 lg:space-y-6">
                        <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-white">
                            Our Exploration Portfolio
                        </h1>
                        
                        <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-white max-w-2xl">
                            Building Future Resources Through Strategic Mineral Exploration
                        </h2>
                        
                        <p className="text-base md:text-lg text-white/90 max-w-xl">
                            Kgabo Mokgatla Group is actively developing a diversified mineral portfolio 
                            across strategic locations, positioning for both current and future market demands.
                        </p>

                        {/* Stats - Stacked on mobile */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 lg:p-4">
                                <div className="text-xl lg:text-2xl font-bold text-white">5</div>
                                <div className="text-white/80 text-sm lg:text-base">Active Projects</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 lg:p-4">
                                <div className="text-xl lg:text-2xl font-bold text-white">{totalArea.toLocaleString()} Ha</div>
                                <div className="text-white/80 text-sm lg:text-base">Total Area</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 lg:p-4">
                                <div className="text-xl lg:text-2xl font-bold text-white">5+</div>
                                <div className="text-white/80 text-sm lg:text-base">Target Commodities</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Exploration Projects Grid */}
            <div className="mt-12 lg:mt-28 px-4 lg:px-16">
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
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-3">
                                <div className="flex-1">
                                    <h3 className="text-xl lg:text-2xl font-bold text-[#004179]">
                                        {project.name}
                                    </h3>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mt-1">
                                        <span className="text-gray-600">{project.location}</span>
                                        <span className="hidden sm:inline text-gray-400">•</span>
                                        <span className="font-medium text-gray-900">{project.area}</span>
                                    </div>
                                </div>
                                <span className="px-3 py-1 bg-blue-50 text-[#004179] text-sm font-medium rounded-full self-start sm:self-auto">
                                    {project.status}
                                </span>
                            </div>

                            <div className="space-y-4 mt-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                <div className="bg-gradient-to-r from-[#004179]/5 to-[#04b7ef]/5 rounded-lg border border-gray-200 p-6 lg:p-8">
                    <div className="text-center mb-6 lg:mb-8">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            Exploration Portfolio Summary
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our exploration strategy focuses on developing a sustainable pipeline of 
                            mineral resources for future mining operations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                        <div className="text-center p-4 lg:p-6 bg-white rounded-lg border border-gray-200">
                            <div className="text-3xl lg:text-4xl font-bold text-[#004179] mb-2">5</div>
                            <div className="text-base lg:text-lg font-medium text-gray-900">Active Projects</div>
                            <div className="text-gray-600 text-sm lg:text-base mt-2">Across Gauteng & Mpumalanga</div>
                        </div>
                        
                        <div className="text-center p-4 lg:p-6 bg-white rounded-lg border border-gray-200">
                            <div className="text-3xl lg:text-4xl font-bold text-[#004179] mb-2">
                                {totalArea.toLocaleString()} Ha
                            </div>
                            <div className="text-base lg:text-lg font-medium text-gray-900">Total Exploration Area</div>
                            <div className="text-gray-600 text-sm lg:text-base mt-2">Strategic land portfolio</div>
                        </div>
                        
                        <div className="text-center p-4 lg:p-6 bg-white rounded-lg border border-gray-200">
                            <div className="text-3xl lg:text-4xl font-bold text-[#004179] mb-2">5+</div>
                            <div className="text-base lg:text-lg font-medium text-gray-900">Mineral Commodities</div>
                            <div className="text-gray-600 text-sm lg:text-base mt-2">Diversified portfolio focus</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExplorationProjects;