import HomeImage from '../imgs/home/Home.avif'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Commodities from '../components/Commodities'

const Home = () => {
    return (
        <div>
        <div className="relative">
            <img 
                src={HomeImage} 
                alt="kgabo mokgatla group"  
                className="w-full object-cover h-[86vh]"
            />
            
            {/* Gradient overlay - fixed the gradient class */}
            <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-transparent"></div>
        
            <div className="absolute top-20 left-3 lg:left-16  space-y-3 lg:space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white drop-shadow-2xl">Kgabo Mokgatla Group</h1>
                <h1 className="text-xl lg:text-2xl font-bold text-white drop-shadow-lg">Shaping mining projects with purpose and precision.</h1>
                <h1 className="lg:max-w-3xl lg:text-lg text-white drop-shadow-md">We specialize in exploration, technical advisory, project development, and mining across key mineral regions, combining technical expertise with a deep understanding of local mining environments.</h1>
                
                {/* Learn More Button with Icon */}
                <Link 
                    to="/services" 
                    className="inline-flex items-center gap-2 mt-4 lg:mt-6 px-6 lg:px-8 py-3 lg:py-4 bg-[#024177] hover:bg-[#04b7ef] text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg group"
                >
                    <span>Learn More</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
            </div>
        </div>


        <Commodities/>
        </div>
    )
}

export default Home