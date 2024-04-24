import React from 'react'
import { useEffect } from 'react'
import OurStory from '../components/OurStory'
import StoryInfo from '../components/StoryInfo'
import TheTeam from '../components/TheTeam'

const TeamInfo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    
    <div>
      <OurStory/>
      <StoryInfo/>
      <TheTeam/>
    </div>
  )
}

export default TeamInfo