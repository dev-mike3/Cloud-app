import React from 'react'
import "./App.css";
import About from './Pages/About'
import Platform from './Pages/Platform';
import Pricing from './Pages/Pricing';
import Support from './Pages/Support';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Footer from './Component/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    <Router>

    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}/>

      <Route path='/about' element={<About/>}/>
      <Route path='/Platform' element={<Platform/>}/>
      <Route path='/Pricing' element={<Pricing/>}/>
      <Route path='/Pricing' element={<Pricing/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Support' element={<Support/>}/>


    </Routes>

    <Footer/>

    </Router>
  )
}


export default App
