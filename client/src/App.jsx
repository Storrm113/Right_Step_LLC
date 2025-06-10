import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import ContactForm from './components/ContactForm'
// import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Services />
            <ContactForm />
          </>
        } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
