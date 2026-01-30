import operationsImage from '../imgs/operations/operations.jpg'
import OperationsGrid from '../components/OperationGrid'

const Operations = () => {
    return (
        <div className="relative">
            {/* Hero Section with Background Image */}
            <div className="relative w-full h-125 lg:h-150">
                {/* Background Image */}
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${operationsImage})`
                    }}
                >
                    {/* FULL BLACK gradient overlay - covers entire image */}
                    <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-black/70"></div>
                </div>
                
                {/* Hero Content - Clean white text */}
                <div className="relative h-full flex items-center px-4 lg:px-16">
                    <div className="max-w-3xl space-y-6">
                        {/* Main Heading - Clean white text */}
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white">
                            Mining Operations
                        </h1>
                        
                        {/* Subheading */}
                        <h2 className="text-xl lg:text-2xl font-medium text-white max-w-2xl">
                            Active Mine Locations and Production Capacity Across Our Strategic Portfolio
                        </h2>
                        
                        {/* Description */}
                        <p className="text-lg text-white/90 max-w-xl">
                            Kgabo Mokgatla Group operates and develops mining assets with precision, 
                            focusing on sustainable extraction and community-focused development.
                        </p>
                    </div>
                </div>
            </div>

            
            <div className="mt-16 lg:mt-28 px-4 lg:px-16">
                {/* Your operations details, maps, production data, etc. will go here */}
                <OperationsGrid/>
            </div> 

        </div>
    )
}

export default Operations