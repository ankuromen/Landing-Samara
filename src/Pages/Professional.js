import { useEffect } from 'react';
import React from 'react'
// import LineSteps from '../components/LineSteps'
import '../App.css';
import ProfessionalBanner from '../components/ProfessionalBanner';
import ProfessionalFeatures from '../components/ProfessionalFeatures';
import FAQ from '../components/FAQ';
const Professional = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div className='Professional-Container'>
      <ProfessionalBanner/>
      <ProfessionalFeatures/>
      <FAQ/>
    </div>
  )
}

export default Professional