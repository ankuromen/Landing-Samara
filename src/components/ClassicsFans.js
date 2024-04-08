import React from 'react'
import Test from "../Assets/test123.jpg";
const ClassicsFans = () => {
  return (
    <div className='Classic-Business-Container'>
      <div className='Classics-Content'>
        <section className='Bus-Text-Section'>
          <h1>For Fans</h1>
          <h1>2 sentence, AI changing
            generated text.
          </h1>
          <button id='Bus-Btn'>Our Solutions</button>
        </section>
        <section className='Bus-Img-Section' >
          <img src={Test} id='Bus-Img' alt='Business' />
        </section>

      </div>
    </div>
  )
}

export default ClassicsFans