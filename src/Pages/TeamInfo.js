import React from 'react'
import { useEffect } from 'react'
import OurStory from '../components/OurStory'
import StoryInfo from '../components/StoryInfo'
import TheTeam from '../components/TheTeam'
import Manifesto from '../components/Manifesto';

const TeamInfo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    
    <div>
      <OurStory/>
      <Manifesto/>
      <StoryInfo/>
      <TheTeam/>
    </div>
  )
}

export default TeamInfo