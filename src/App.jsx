
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import InternationalTrade from './components/InternationalTrade'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ManualPage from './pages/manualPage'
import ElectraChatbot from './components/ElectraChatBot'
import PoliticaPrivacidade from './pages/PoliticaDePrivacidade'
import ProductsDetails from './pages/ProductDetails'
import RelatedProducts from './pages/RelatedProducts'
import Eventos from './pages/Eventos'

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Hero /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/products" element={<PageWrapper><Products /></PageWrapper>} />
        <Route path="/international" element={<PageWrapper><InternationalTrade /></PageWrapper>} />
        <Route path="/location" element={<PageWrapper><Location /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/manuais" element={<PageWrapper><ManualPage /></PageWrapper>} />
        <Route path="/politica-de-privacidade" element={<PageWrapper><PoliticaPrivacidade /></PageWrapper>} />
        <Route path="/eventos" element={<PageWrapper><Eventos /></PageWrapper>} />

        <Route path="/products/:id" element={<PageWrapper><ProductsDetails /></PageWrapper>} />
        <Route path="/products/related/:category" element={<PageWrapper><RelatedProducts /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  )
}

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  )
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex-1">
        <AnimatedRoutes />
        <ElectraChatbot />
      </div>
      <Footer />
    </Router>
  )
}

export default App

