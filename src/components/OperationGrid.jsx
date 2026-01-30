const OperationsGrid = () => {
    const operations = [
        {
            name: "Benk Colliery",
            type: "Coal Mining Operation",
            status: "Operational",
            location: "Hartebeespruit farm, Bronkhorstspruit, Mpumalanga",
            production: "90,000 - 120,000 tons/month",
            area: "350 Ha",
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
            description: "Dedicated chrome ore beneficiation and processing facility adding value to mineral extraction.",
            icon: "🏭"
        }
    ];

    const explorationProjects = [
        {
            name: "Hetblok",
            location: "Springs, Gauteng (Delmas boundary)",
            area: "501 Ha",
            status: "Exploration",
            stage: "Initial Assessment"
        },
        {
            name: "Vischkuil",
            location: "Springs, Gauteng (Delmas boundary)",
            area: "2,516 Ha",
            status: "Exploration",
            stage: "Resource Evaluation"
        },
        {
            name: "Valschpruit",
            location: "Bronkhorstspruit, Gauteng (R25 road)",
            area: "1,781 Ha",
            status: "Exploration",
            stage: "Geological Mapping"
        },
        {
            name: "Grootspruit",
            location: "Bronkhorstspruit, Gauteng (R25 road)",
            area: "949 Ha",
            status: "Exploration",
            stage: "Initial Assessment"
        },
        {
            name: "Onspoed",
            location: "Balmoral, Mpumalanga (N4 road)",
            area: "3,270 Ha",
            status: "Exploration",
            stage: "Resource Evaluation"
        }
    ];

    return (
        <div className="mt-16 lg:mt-28 px-4 lg:px-16">
            {/* Active Operations Section */}
            <div className="mb-16 lg:mb-24">
                <div className="mb-8 lg:mb-12">
                    <h2 className="text-2xl font-bold lg:text-4xl mb-4">
                        Active Operations
                    </h2>
                    <p className="text-lg lg:text-xl lg:max-w-3xl">
                        Our operational mining and processing assets delivering consistent production and value.
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
                                    <div className="text-gray-500 mb-1">Description</div>
                                    <p className="text-gray-700">{operation.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Exploration Projects Section */}
            <div>
                <div className="mb-8 lg:mb-12">
                    <h2 className="text-2xl font-bold lg:text-4xl mb-4">
                        Exploration Portfolio
                    </h2>
                    <p className="text-lg lg:text-xl lg:max-w-3xl">
                        Strategic exploration projects representing our future growth pipeline across 9,237 Ha.
                    </p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6 lg:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
                        {explorationProjects.map((project) => (
                            <div 
                                key={project.name}
                                className="border border-gray-200 rounded-lg p-4 lg:p-5 hover:border-[#004179] transition-colors duration-200"
                            >
                                <div className="mb-3">
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">{project.name}</h4>
                                    <span className="inline-block px-2 py-1 bg-blue-50 text-[#004179] text-xs font-medium rounded">
                                        {project.status}
                                    </span>
                                </div>

                                <div className="space-y-3">
                                    <div>
                                        <div className="text-xs text-gray-500 mb-1">Location</div>
                                        <p className="text-sm text-gray-800">{project.location}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2">
                                        <div>
                                            <div className="text-xs text-gray-500 mb-1">Area</div>
                                            <div className="font-medium text-gray-900">{project.area}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500 mb-1">Stage</div>
                                            <div className="font-medium text-gray-900">{project.stage}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Total Area Summary */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-gray-900">9,237 Ha</div>
                            <div className="text-gray-600">Total Exploration Portfolio</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OperationsGrid;