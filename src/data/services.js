import CoalImage from '../imgs/services/coal.svg';
import ChromeImage from '../imgs/services/chrome.svg';
import IronImage from '../imgs/services/iron.svg';
import ManganeseImage from '../imgs/services/manganese.svg';
import LimestoneImage from '../imgs/services/limestone.svg';

export const commodities = [
    {
        id: "01", 
        image: CoalImage,
        name: "Coal", 
        description: "Comprehensive coal mining solutions including exploration, extraction, processing, and supply chain management for thermal and metallurgical coal.",
        color: "bg-[#CBE2CA]",
        innerColor: "bg-[#E6F1E5]"
    }, 
    {
        id: "02", 
        image: ChromeImage,
        name: "Chrome", 
        description: "Expertise in chrome ore mining, beneficiation, and ferrochrome production for stainless steel and alloy manufacturing industries.",
        color: "bg-[#DAE4F0]", 
        innerColor: "bg-[#EAEFF6]"
    }, 
    {
        id: "03", 
        image: IronImage,
        name: "Iron Ore", 
        description: "End-to-end iron ore services from exploration and mining to processing and logistics for global steel production markets.",
        color: "bg-[#EDEADF]", 
        innerColor: "bg-[#F5F4ED]"
    }, 
    {
        id: "04", 
        image: ManganeseImage,
        name: "Manganese", 
        description: "Specialized manganese mining and processing for steel production, battery technology, and industrial applications.",
        color: "bg-[#D2DFF7]", 
        innerColor: "bg-[#E5ECFA]"
    },
    {
        id: "05", 
        image: LimestoneImage,
        name: "Limestone", 
        description: "Complete limestone quarrying, processing, and distribution solutions for construction, cement production, and industrial applications.",
        color: "bg-[#F4E1D2]", 
        innerColor: "bg-[#FAF0E6]"
    }
]