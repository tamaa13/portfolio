import React from 'react'
import './App.css'
import Navigasi from './Components/Navigasi'
import HeroSection from './Components/Hero'
import Project from './Components/Project'
import Techstack from './Components/Techstack'
import Footer from './Components/Footer'

const LandingPage = () => {
    return (
        <>
            <div className='bg-gray-900 min-h-screen'>
                <Navigasi />
                <HeroSection />
                <Techstack />
                <Project />
                <Footer />
            </div>
        </>
    )
}

export default LandingPage