import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './components/Navbar' 
import Footer from './components/Footer'
import Operations from './Pages/Operations'
import ExplorationProjects from './Pages/Exploration'
import About from './Pages/About'
import Team from './Pages/OurTeam'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound'

function App() { 

  return (
    <Router>
      <div className="text-[#1F2937]">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/operations" element={<Operations/>}/> 
          <Route path="/exploration" element={<ExplorationProjects/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App