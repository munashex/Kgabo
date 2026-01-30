import operationsImage from '../imgs/operations/operations.jpg'

const Operations = () => {
    const operations = [
        {
            name: "Benk Colliery",
            type: "Coal Mining Operation",
            status: "Operational",
            location: "Hartebeespruit farm, Bronkhorstspruit, Mpumalanga",
            production: "90,000 - 120,000 tons/month",
            area: "350 Ha",
            details: [
                "3 mining permits within 350 Ha prospecting right",
                "Water use license in progress",
                "Average strip ratio: 1.3",
                "Neighboring to Palesa Colliery, HCI Coal",
                "37km north of Bronkhorstspruit"
            ],
            description: "Fully operational coal colliery with established production and logistics infrastructure.",
            icon: "⚒️"
        },
        {
            name: "Rooipoort Colliery",
            type: "Coal Mining Operation",
            status: "Forthcoming",
            location: "Rooipoort farm, Gauteng Province",
            production: "Development Phase",
            area: "1,114 Ha",
            details: [
                "3 mining permits secured",
                "Mining right in progress",
                "Water use license in progress",
                "Opposite new Palesa Colliery, HCI Coal box-cut",
                "Green field project"
            ],
            description: "Advanced-stage development project awaiting off-take agreement, positioned adjacent to major operations.",
            icon: "📈"
        },
        {
            name: "Chrome Wash Plant",
            type: "Processing Facility",
            status: "Operational",
            location: "Processing Center",
            production: "Active Processing",
            area: "Processing Plant",
            details: [
                "Chrome ore beneficiation",
                "Value addition to mining operations",
                "Quality processing facility"
            ],
            description: "Dedicated chrome ore beneficiation and processing facility adding value to mineral extraction.",
            icon: "🏭"
        }
    ];

    return (
        <div className="relative">
            {/* Hero Section */}
            <div className="relative w-full h-100 lg:h-125">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${operationsImage})`
                    }}
                >
                    <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-black/70"></div>
                </div>
                
                <div className="relative h-full flex items-center px-4 lg:px-16">
                    <div className="max-w-3xl space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white">
                            Mining Operations
                        </h1>
                        
                        <h2 className="text-xl lg:text-2xl font-medium text-white max-w-2xl">
                            Active Mine Locations and Production Capacity Across Our Strategic Portfolio
                        </h2>
                        
                        <p className="text-lg text-white/90 max-w-xl">
                            Kgabo Mokgatla Group operates and develops mining assets with precision, 
                            focusing on sustainable extraction and community-focused development.
                        </p>
                    </div>
                </div>
            </div>

            {/* Operations Content */}
            <div className="mt-16 lg:mt-28 px-4 lg:px-16">
                <div className="mb-8 lg:mb-12">
                    <h2 className="text-2xl font-bold lg:text-4xl mb-4">
                        Our Operations
                    </h2>
                    <p className="text-lg lg:text-xl lg:max-w-3xl">
                        Operational mining and processing assets delivering consistent production and value.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {operations.map((operation) => (
                        <div 
                            key={operation.name}
                            className="bg-white border-l-4 border-[#004179] rounded-r-lg p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-start gap-4">
                                    <div className="text-2xl">{operation.icon}</div>
                                    <div>
                                        <h3 className="text-xl lg:text-2xl font-bold text-[#004179]">
                                            {operation.name}
                                        </h3>
                                        <p className="text-gray-600">{operation.type}</p>
                                    </div>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                    operation.status === 'Operational' 
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                    {operation.status}
                                </span>
                            </div>

                            <div className="space-y-4 mt-6">
                                <div>
                                    <div className="text-gray-500 mb-1">Location</div>
                                    <p className="text-gray-800">{operation.location}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <div className="text-gray-500 mb-1">Production</div>
                                        <div className="font-medium text-gray-900">{operation.production}</div>
                                    </div>
                                    <div>
                                        <div className="text-gray-500 mb-1">Area</div>
                                        <div className="font-medium text-gray-900">{operation.area}</div>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-gray-500 mb-1">Key Details</div>
                                    <div className="space-y-2">
                                        {operation.details.map((detail, index) => (
                                            <div key={index} className="flex items-start">
                                                <div className="w-1.5 h-1.5 bg-[#004179] rounded-full mt-2 mr-3 shrink-0"></div>
                                                <span className="text-gray-700 text-sm">{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <div className="text-gray-500 mb-1">Description</div>
                                    <p className="text-gray-700">{operation.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Business Development */}
                <div className="mt-16 lg:mt-24 bg-linear-to-r from-[#004179]/5 to-[#04b7ef]/5 rounded-lg border border-gray-200 p-8">
                    <div className="text-center">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            Coal Supply Capacity
                        </h3>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                            We hereby express our interest in supplying coal to Sasol Limited with our coal resources.
                        </p>
                        <p className="text-gray-600 mt-4">
                            Current production capacity: Up to 120,000 tons per month
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Operations