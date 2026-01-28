import {useState} from 'react' 
import {commodities} from '../data/services'

function Commodities() {
const [tab, setTabs] = useState('Coal')

const findCommodity = commodities.find((commodity) => commodity.name === tab) 

const changeTab = (name) => {
    setTabs(name)
 }

  return (
    <div className="mt-20 lg:mt-32 px-3 lg:px-16">
        <h1 className="text-3xl font-bold lg:text-5xl text-center lg:text-start">Commodities</h1>
        {/* Description below Commodities heading */}
        <p className="text-lg lg:text-xl text-gray-600 mt-3 text-center lg:text-start max-w-4xl">
            We specialize in mining and processing key mineral resources including coal, chrome, iron ore, manganese, and limestone for various industrial applications.
        </p>
        
        {/* tabs on sm and md screens */}
        <div className={`${findCommodity?.color} flex flex-col lg:hidden px-5 py-11 mt-7 rounded-xl`}>
         <div className="gap-y-2 mb-11 flex flex-col items-center">
            <h1 className="text-2xl text-center font-semibold">{findCommodity?.name}</h1> 
            <h1 className="text-center">{findCommodity?.description}</h1>
            <img src={findCommodity?.image} className="w-48 mt-3 mix-blend-multiply" />
         </div>
          {commodities.map((commodity) => (
            <div key={commodity.id}> 
             <div className="flex flex-col px-6"> 
                <button onClick={() => changeTab(commodity.name)} className={`mt-2 ${commodity.name === tab ? 'p-2 bg-black rounded-2xl text-white text-xl' : `p-2 rounded-xl ${findCommodity?.innerColor} text-lg `}`}>{commodity.name}</button>
             </div>
            </div>
          ))}
        </div>

        {/* tabs on lg screens  */} 
    <div className={`${findCommodity?.color} p-7 mt-11 rounded-xl hidden lg:flex w-full`}>
  <div className="flex flex-row justify-between w-full">
    <div className="w-[60%]">
      <div className="flex flex-row gap-x-6 items-center">
        <span className={`text-9xl font-bold px-7 py-16 rounded-2xl ${findCommodity?.innerColor}`}>{findCommodity?.id}</span>
        <div className='space-y-2'> 
          <h1 className="text-5xl font-semibold">{findCommodity?.name}</h1>
          <h1>{findCommodity?.description}</h1>
        </div>
      </div>

      <div className="mt-16">
        {commodities.map((commodity) => (
          <div key={commodity.id}> 
            <div className="flex flex-col"> 
              <button onClick={() => changeTab(commodity.name)} className={`mt-2 w-[70%] ${commodity.name === tab ? 'p-3 bg-black rounded-2xl text-white text-xl' : `p-2 rounded-xl ${findCommodity?.innerColor} text-lg `}`}>{commodity.name}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    <div className="w-[40%] flex items-center justify-center p-4">
      {/* Container with innerColor background */}
      <div className={`rounded-2xl p-8 ${findCommodity?.innerColor} w-full max-w-md`}>
        <img 
          src={findCommodity?.image} 
          className='w-full h-auto object-contain max-h-75'
          alt={findCommodity?.name} 
        />
      </div>
    </div>
  </div>
</div>
 
 </div>
  )
}

export default Commodities