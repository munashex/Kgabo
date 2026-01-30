import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './components/Navbar' 
import Operations from './Pages/Operations'


function App() { 

  return (
    <Router>
      <div className="text-[#1F2937]">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/operations" element={<Operations/>}/>
      </Routes>
      </div>
    </Router>
  )
}

export default App