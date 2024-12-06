import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Diet from './Diet.jsx'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/About/Dhanu">About</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
              <li><Link to="/Diet/lowcorb">Low Carb</Link></li>
              <li><Link to="/Diet/highprotein">High Protein</Link></li>
              <li><Link to="/Diet/lowfat">Low Fat</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" exact Component={Home}></Route>
            <Route path="/About/:name" Component={About}></Route>
            <Route path="/Contact" Component={Contact}></Route>
            <Route path="/Diet/:dietName" Component={Diet}></Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
