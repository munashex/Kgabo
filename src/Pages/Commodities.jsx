import Seo from '../components/Seo'
import coal from '../imgs/home/coal.jpg' 
import chrome from '../imgs/home/chrome.avif' 
import iron from '../imgs/home/iron.avif' 
import limestone from '../imgs/home/limestone.webp' 
import platinum from '../imgs/home/plantinum.jpeg' 
import manganese from '../imgs/home/manganese.jpeg'
import commoditiesImage from '../imgs/commodities/commodities.jpg'

const Commodities = () => {
    const commodities = [ 
        {
            name: "Coal",
            image: coal,
            description: "Primary mineral resource with extensive operations across our portfolio"
        },
        {
            name: "Chrome",
            image: chrome,
            description: "Strategic mineral with active processing and exploration initiatives"
        },
        {
            name: "Iron",
            image: iron,
            description: "Essential industrial mineral in our exploration programs"
        },
        {
            name: "Limestone",
            image: limestone,
            description: "Industrial mineral supporting construction and agricultural sectors"
        },
        {
            name: "Platinum",
            image: platinum,
            description: "Precious metal with high market value and industrial applications"
        },
        {
            name: "Manganese",
            image: manganese,
            description: "Critical mineral for steel production and battery technology"
        }
    ];

    return (
        <>
        <Seo 
            title="Our Commodities"
            description="Explore Kgabo Mokgatla Group's diverse mineral portfolio including coal, chrome, iron, limestone, platinum, and manganese across South Africa."
            keywords="coal mining, chrome, iron ore, manganese, platinum, limestone, mineral commodities, South Africa mining"
            canonical="/commodities"
        />
        
        <div className="relative">
            {/* Hero Section */}
            <div className="relative w-full h-100 lg:h-125">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${commoditiesImage})`
                    }}
                >
                    <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-black/70"></div>
                </div>
                
                <div className="relative h-full flex items-center px-4 lg:px-16">
                    <div className="max-w-3xl space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white">
                            Our Commodities
                        </h1>
                        
                        <h2 className="text-xl lg:text-2xl font-medium text-white max-w-2xl">
                            Diversified Mineral Exploration & Extraction
                        </h2>
                        
                        <p className="text-lg text-white/90 max-w-xl">
                            Kgabo Mokgatla Group specializes in exploring, developing, and extracting 
                            a diverse range of mineral commodities across South Africa's rich geological landscape.
                        </p>
                    </div>
                </div>
            </div>

            {/* Commodities Grid */}
            <div className="mt-16 lg:mt-28 px-4 lg:px-16">
                <div className="mb-8 lg:mb-12">
                    <h2 className="text-2xl font-bold lg:text-4xl mb-4">
                        Our Mineral Portfolio
                    </h2>
                    <p className="text-lg lg:text-xl lg:max-w-3xl">
                        We focus on strategic minerals with strong market demand, sustainable extraction 
                        methods, and long-term value creation for our stakeholders.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-24">
                    {commodities.map((commodity) => (
                        <div 
                            key={commodity.name}
                            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            {/* Commodity Image */}
                            <div className="relative h-80 overflow-hidden">
                                <img 
                                    src={commodity.image} 
                                    alt={commodity.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-transparent"></div>
                                
                                {/* Commodity Name */}
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-3xl font-bold text-white mb-2">
                                        {commodity.name}
                                    </h3>
                                    <p className="text-white/90 text-sm">
                                        {commodity.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Commodity Focus Summary */}
                <div className="bg-linear-to-r from-[#004179]/5 to-[#04b7ef]/5 rounded-lg border border-gray-200 p-6 lg:p-8">
                    <div className="text-center mb-6 lg:mb-8">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            Strategic Commodity Approach
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our commodity strategy balances primary coal operations with diversified 
                            exploration across chrome, iron, manganese, and other strategic minerals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                        <div className="text-center p-4 lg:p-6 bg-white rounded-lg border border-gray-200">
                            <div className="text-3xl lg:text-4xl font-bold text-[#004179] mb-2">Coal</div>
                            <div className="text-base lg:text-lg font-medium text-gray-900">Primary Focus</div>
                            <div className="text-gray-600 text-sm lg:text-base mt-2">Active mining operations</div>
                        </div>
                        
                        <div className="text-center p-4 lg:p-6 bg-white rounded-lg border border-gray-200">
                            <div className="text-3xl lg:text-4xl font-bold text-[#004179] mb-2">Chrome</div>
                            <div className="text-base lg:text-lg font-medium text-gray-900">Processing</div>
                            <div className="text-gray-600 text-sm lg:text-base mt-2">Active wash plant facility</div>
                        </div>
                        
                        <div className="text-center p-4 lg:p-6 bg-white rounded-lg border border-gray-200">
                            <div className="text-3xl lg:text-4xl font-bold text-[#004179] mb-2">4+</div>
                            <div className="text-base lg:text-lg font-medium text-gray-900">Other Minerals</div>
                            <div className="text-gray-600 text-sm lg:text-base mt-2">Exploration & development</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Commodities;