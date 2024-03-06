import { About } from './components/About'
import { Cta } from './components/Cta'
import { FAQ } from './components/FAQ'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Pricing } from './components/Pricing'
import { ScrollToTop } from './components/ScrollToTop'
import { Services } from './components/Services'
import { Sponsors } from './components/Sponsors'
import { Team } from './components/Team'
import { Compliance } from './components/Compliance'

import './App.css'
import { Testimonials } from './components/Testimonials'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Compliance />
      <Testimonials />
      <Pricing />
      <Services />
      <Cta />
      <FAQ />
      <About />
      {/*
      <Newsletter />
      */}
      <Team />
      <Sponsors />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
