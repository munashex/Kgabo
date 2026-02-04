import { FaMountain } from "react-icons/fa6";
import { FaBullseye } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaTree } from "react-icons/fa";

const values = [
    {
     name: "Our Vision", 
     description: "To build a legacy of excellence in mining, consulting, and enterprise—empowering communities and shaping a sustainable future from the strength of African soil.",
     icon: <FaMountain size={24}/>  
    }, 
    {
    name: "Our Mission", 
    description: "At Kgabo Mokgatla Group, we are guided by purpose, integrity, and innovation. We strive to deliver reliable mining and consulting solutions that uplift industries and communities alike. Through responsible operations, collaboration, and continuous growth, we honour our heritage while creating opportunities for the next generation.", 
    icon: <FaBullseye size={24}/>  
    }, 
    {
    name: "Purpose-Driven Execution", 
    description: "Our work is more than business; it's a commitment to a larger goal. Every exploration project, mining operation, and consulting service is driven by the purpose of uplifting industries and creating tangible value for our stakeholders and nation.", 
    icon: <FaShieldAlt size={24}/>  
    }, 
    {
    name: "Heritage & Stewardship", 
    description: "We honour our past by being responsible stewards of the future. This means sustainable mining practices, respecting the land, and investing in people—ensuring the opportunities we create today empower generations to come.",
    icon: <FaTree size={24}/>  
    }
];

const Values = () => {
    return (
        <div className="mt-16 lg:mt-36 px-4 lg:px-16">
            <h1 className="text-2xl font-bold lg:text-4xl mb-4">
                The Values Behind Kgabo Mokgatla Group
            </h1>
            <h1 className="text-lg lg:text-2xl lg:max-w-3xl mb-8 lg:mb-12">
                We are committed to excellence—from the ground we work on to the people we serve.
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {values.map(item => (
                    <div 
                        key={item.name} 
                        className="bg-white border-l-4 border-[#004179] rounded-r-lg p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="text-[#004179] shrink-0">
                                {item.icon}
                            </div>
                            <h3 className="text-xl lg:text-2xl font-bold text-[#004179]">
                                {item.name}
                            </h3>
                        </div>
                        <p className="leading-relaxed">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Values;