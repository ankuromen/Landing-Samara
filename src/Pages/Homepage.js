import React from 'react'
import FinalIntro from '../components/FinalIntro';
import Footer from '../components/Footer';
import LineSteps from '../components/LineSteps';
import Navbar from '../components/Navbar';
import ShortIntro from '../components/ShortIntro';
const Homepage = () => {
    return (
        <div>
            <Navbar />
            <ShortIntro />
            <LineSteps />
            <FinalIntro />
            <Footer />
        </div>
    )
}

export default Homepage