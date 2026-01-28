import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './components/Navbar' 



function App() { 

  return (
    <Router>
      <div className="text-[#1F2937]">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </div>
    </Router>
  )
}

export default App