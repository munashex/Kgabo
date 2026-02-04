import explorationImage from '../imgs/exploration/exploration.jpg'
import Seo from '../components/Seo' 
import { SEO_CONFIG } from '../constants/seo'

const ExplorationProjects = () => {
    const totalArea = 9237;

    const provinceFootprint = [
        {
            province: "Mpumalanga",
            area: "3,270 Ha",
            projects: 1,
            description: "Strategic location in South Africa's mining heartland with rich mineral deposits.",
            commodities: ["Coal", "Manganese", "Chrome"]
        },
        {
            province: "Gauteng",
            area: "5,967 Ha",
            projects: 4,
            description: "Multiple exploration licenses across key mining corridors with established infrastructure.",
            commodities: ["Coal", "Chrome", "Industrial Minerals"]
        }
    ];

    const commodityFocus = [
        {
            commodity: "Coal",
            icon: "⚫",
            coverage: "All Provinces",
            description: "Primary focus mineral with extensive exploration across our entire portfolio"
        },
        {
            commodity: "Chrome",
            icon: "⚪",
            coverage: "Gauteng, Mpumalanga",
            description: "Strategic mineral with growing market demand and export potential"
        },
        {
            commodity: "Iron",
            icon: "🔴",
            coverage: "Selected Regions",
            description: "Targeted exploration in mineral-rich geological formations"
        },
        {
            commodity: "Manganese",
            icon: "🟣",
            coverage: "Mpumalanga",
            description: "High-value mineral with significant industrial applications"
        }
    ];

    const regionalFootprint = [
        "Mpumalanga",
        "Gauteng",
        "North West",
        "Limpopo",
        "Northern Cape"
    ];

    return (
        <>
        <Seo {...SEO_CONFIG.exploration} />
        <div className="relative">
            {/* Hero Section - Fixed for mobile */}
            <div className="relative w-full h-125 lg:h-150">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${explorationImage})`
                    }}
                >
                    <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-black/70"></div>
                </div>
                
                {/* Hero Content - Adjusted spacing for mobile */}
                <div className="relative h-full flex items-center px-4 lg:px-16">
                    <div className="max-w-3xl space-y-4 lg:space-y-6">
                        <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-white">
                            Our Exploration Footprint
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
                                <div className="text-white/80 text-sm lg:text-base">Provinces</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 lg:p-4">
                                <div className="text-xl lg:text-2xl font-bold text-white">{totalArea.toLocaleString()} Ha</div>
                                <div className="text-white/80 text-sm lg:text-base">Total Area</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 lg:p-4">
                                <div className="text-xl lg:text-2xl font-bold text-white">4+</div>
                                <div className="text-white/80 text-sm lg:text-base">Target Commodities</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Provincial Footprint */}
            <div className="mt-12 lg:mt-28 px-4 lg:px-16">
                <div className="mb-8 lg:mb-12">
                    <h2 className="text-2xl font-bold lg:text-4xl mb-4">
                        Provincial Footprint
                    </h2>
                    <p className="text-lg lg:text-xl lg:max-w-3xl">
                        Our strategic exploration portfolio spans {totalArea.toLocaleString()} hectares across 
                        Gauteng and Mpumalanga, targeting multiple mineral commodities for future development.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
                    {provinceFootprint.map((province) => (
                        <div 
                            key={province.province}
                            className="bg-white border-l-4 border-[#004179] rounded-r-lg p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-3">
                                <div className="flex-1">
                                    <h3 className="text-xl lg:text-2xl font-bold text-[#004179]">
                                        {province.province}
                                    </h3>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mt-1">
                                        <span className="font-medium text-gray-900">{province.area}</span>
                                        <span className="hidden sm:inline text-gray-400">•</span>
                                        <span className="text-gray-600">{province.projects} {province.projects === 1 ? 'Project' : 'Projects'}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 mt-6">
                                <div>
                                    <div className="text-gray-500 mb-1">Description</div>
                                    <p className="text-gray-700">{province.description}</p>
                                </div>

                                <div>
                                    <div className="text-gray-500 mb-2">Target Commodities</div>
                                    <div className="flex flex-wrap gap-2">
                                        {province.commodities.map((commodity, idx) => (
                                            <span 
                                                key={idx}
                                                className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
                                            >
                                                {commodity}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Commodity Focus */}
                <div className="mb-12 lg:mb-24">
                    <h2 className="text-2xl font-bold lg:text-4xl mb-8">
                        Commodity Focus
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {commodityFocus.map((item) => (
                            <div 
                                key={item.commodity}
                                className="bg-white border-l-4 border-[#004179] rounded-r-lg p-6 shadow-sm"
                            >
                                <div className="text-3xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.commodity}</h3>
                                <div className="text-sm text-gray-500 mb-3">{item.coverage}</div>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Regional Presence */}
                <div className="mb-12 lg:mb-24">
                    <h2 className="text-2xl font-bold lg:text-4xl mb-8">
                        Regional Presence
                    </h2>
                    
                    <div className="bg-white rounded-lg border border-gray-200 p-6 lg:p-8">
                        <p className="text-gray-600 mb-6">
                            Kgabo Mokgatla Group maintains an active exploration footprint across five provinces in South Africa:
                        </p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {regionalFootprint.map((province) => (
                                <div 
                                    key={province}
                                    className="bg-linear-to-br from-[#004179]/10 to-[#04b7ef]/10 rounded-lg p-4 text-center"
                                >
                                    <div className="text-lg font-bold text-[#004179]">{province}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Portfolio Summary */}
                <div className="bg-linear-to-r from-[#004179]/5 to-[#04b7ef]/5 rounded-lg border border-gray-200 p-6 lg:p-8">
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
                            <div className="text-base lg:text-lg font-medium text-gray-900">Active Provinces</div>
                            <div className="text-gray-600 text-sm lg:text-base mt-2">Strategic coverage</div>
                        </div>
                        
                        <div className="text-center p-4 lg:p-6 bg-white rounded-lg border border-gray-200">
                            <div className="text-3xl lg:text-4xl font-bold text-[#004179] mb-2">
                                {totalArea.toLocaleString()} Ha
                            </div>
                            <div className="text-base lg:text-lg font-medium text-gray-900">Total Exploration Area</div>
                            <div className="text-gray-600 text-sm lg:text-base mt-2">Strategic land portfolio</div>
                        </div>
                        
                        <div className="text-center p-4 lg:p-6 bg-white rounded-lg border border-gray-200">
                            <div className="text-3xl lg:text-4xl font-bold text-[#004179] mb-2">4+</div>
                            <div className="text-base lg:text-lg font-medium text-gray-900">Mineral Commodities</div>
                            <div className="text-gray-600 text-sm lg:text-base mt-2">Diversified portfolio focus</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ExplorationProjects;