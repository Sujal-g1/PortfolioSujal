
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import ServiceSummary from './sections/ServiceSummary'
import Services from './sections/Services'
import ReactLenis from 'lenis/react'
import About from './sections/About'
import Works from './sections/Works'
import ContactSummary from './sections/ContactSummary'
import Contact from './sections/Contact'
import { useState } from 'react'
import Skills from './sections/Skills'
import Loader from './components/Loader'

const App = () => {

  const [isReady, setIsReady] = useState(false)

  return (
    <ReactLenis
      root
      className="relative w-full min-h-screen overflow-x-hidden"
    >

      {/* =========================================
          LOADER
          ========================================= */}

      {!isReady && (
        <Loader
          onComplete={() => setIsReady(true)}
        />
      )}


      {/* =========================================
          MAIN WEBSITE

          IMPORTANT:
          Don't mount the website until the
          loader has completed.
          ========================================= */}

      {isReady && (
        <div
          className="
            animate-[heroReveal_1.2s_ease-out_forwards]
          "
        >
          <Navbar />

          <Hero />

          <ServiceSummary />

          <Services />

          <About />

          <Skills />

          <Works />

          <ContactSummary />

          <Contact />
        </div>
      )}

    </ReactLenis>
  )
}

export default App

