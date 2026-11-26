import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Product from './pages/Product'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
