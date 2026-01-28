import { useRef, useEffect } from 'react';
import coal from '../imgs/home/coal.jpg' 
import chrome from '../imgs/home/chrome.avif' 
import iron from '../imgs/home/iron.avif' 
import limestone from '../imgs/home/limestone.webp' 
import platinum from '../imgs/home/plantinum.jpeg' 
import manganese from '../imgs/home/manganese.jpeg' 

const commodities = [ 
    {
        name: "Coal",
        image: coal,
    },
    {
        name: "Chrome",
        image: chrome,
    },
    {
        name: "Iron",
        image: iron,
    },
    {
        name: "Limestone",
        image: limestone,
    },
    {
        name: "Platinum",
        image: platinum,
    },
    {
        name: "Manganese",
        image: manganese,
    }
]

const Commodities = () => {
    const scrollRef = useRef(null);

    // Auto-scroll animation
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;
        
        const interval = setInterval(() => {
            if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                scrollContainer.scrollLeft = 0;
            } else {
                scrollContainer.scrollLeft += 1;
            }
        }, 20);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mt-16 lg:mt-28 px-4 lg:px-16">
            <h1 className="text-2xl font-bold lg:text-4xl mb-4">Our Commodity Spectrum</h1>
            
            <div 
                ref={scrollRef}
                className="flex gap-4 overflow-x-hidden py-4"
            >
                {[...commodities, ...commodities].map((item, index) => (
                    <div 
                        key={`${item.name}-${index}`}
                        className="shrink-0 w-64 h-72 relative"
                    >
                        <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                            <h3 className="text-2xl font-bold text-white text-center">{item.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Commodities