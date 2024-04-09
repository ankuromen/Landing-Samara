import React from 'react'
// import LineSteps from '../components/LineSteps'
import '../App.css';
import ProfessionalBanner from '../components/ProfessionalBanner';
import ProfessionalFeatures from '../components/ProfessionalFeatures';
const Professional = () => {
  return (
    <div className='Professional-Container'>
      {/* <LineSteps/> */}
      <ProfessionalBanner/>
      <ProfessionalFeatures/>
    </div>
  )
}

export default Professional