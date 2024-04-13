import React from 'react'
import AvatarTesting from "../Assets/AvatarTesting.jpg";
import "../components/TheTeam.css";
const TheTeam = () => {
  return (
    <div className='TeamContainer'>
      <h1 className='Team-Head'>OUR TEAM</h1>
      <div className='Team-Content'>
        <div className='Member-Details'>
          <section className='Member-Avatar'>
            <img id='avatar-settings' src={AvatarTesting} alt='avatar' />
          </section>
          <section className='Member-Links'>
            <h1>Name,</h1>
            <h1>Twitter, LinkedIn</h1>
          </section>

        </div>
        <div className='Member-Details'>
          <section className='Member-Avatar'>
            <img id='avatar-settings' src={AvatarTesting} alt='avatar' />
          </section>
          <section className='Member-Links'>
            <h1>Name,</h1>
            <h1>Intro,</h1>
            <h1>Twitter, LinkedIn</h1>
          </section>
        </div>
        <div className='Member-Details'>
          <section className='Member-Avatar'>
            <img id='avatar-settings' src={AvatarTesting} alt='avatar' />
          </section>
          <section className='Member-Links'>
            <h1>Name,</h1>
            <h1>Intro,</h1>
            <h1>Twitter, LinkedIn</h1>
          </section>
        </div>
      </div>

    </div>
  )
}

export default TheTeam