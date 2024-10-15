import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Demolition from './components/Demolition';
import Dimensions from './components/Dimensions';
import Contact from './components/Contact';
import Door from './components/Door';
import Electrical from './components/Electrical';
import Insulation from './components/Insulation';
import Heating from './components/Heating';
import Layout from './components/Layout';
import Water from './components/Water';
import Windows from './components/Windows';
import Taillights from './components/Taillights';

function App() {


  return (
    <>
     <Router>
      <div>
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/demolition" element={<Demolition />} /> */}
          <Route path="/dimensions" element={<Dimensions />} />
          <Route path='/taillights' element={<Taillights />} /> 
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/door" element={< Door/>} />
          <Route path="/electrical" element={< Electrical/>} />
          <Route path="/insulation" element={< Insulation/>} />
          <Route path='/heating' element={<Heating />} /> */}
          <Route path="/layout" element={< Layout/>} />
          {/* <Route path="/water" element={< Water/>} /> */}
          {/* <Route path="/windows" element={< Windows/>} /> */}
        </Routes>
      </div>
    </Router>    
    </>
  )
}

export default App
