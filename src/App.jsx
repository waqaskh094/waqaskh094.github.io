import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import Industries from './components/Industries'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Employers from './pages/Employers'
import JobSeekers from './pages/JobSeekers'
import RequestTalent from './pages/RequestTalent'
import JobOpenings from './pages/JobOpenings'

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  return (
    <Router>
      <div className='dark:bg-black relative'>
        <Navbar theme={theme} setTheme={setTheme} />

        <Routes>
          {/* Homepage stays exactly the same */}
          <Route path="/" element={
            <>
              <Hero />
              <TrustedBy />
              <Services />
              <Industries />
              <Teams />
              <ContactUs />
            </>
          } />

         
          <Route path="/employers" element={<Employers />} />
          <Route path="/jobseekers" element={<JobSeekers />} />
          <Route path="/RequestTalent" element={<RequestTalent />} />
          <Route path="/JobOpenings" element={<JobOpenings />} />
        </Routes>

        <Footer theme={theme} />
      </div>
    </Router>
  )
}

export default App
