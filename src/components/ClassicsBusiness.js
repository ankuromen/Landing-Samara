import React from 'react'
import Test from '../Assets/test123.jpg';
import '../components/ClassicsBusiness.css';
const ClassicsBusiness = () => {
    return (
        <div className='Classic-Business-Container'>
            <div className='Classics-Content'>
            <section className='Bus-Img-Section' >
                <img src={Test} id='Bus-Img' alt='Business' />
            </section>
            <section className='Bus-Text-Section'>
                <h1>For business</h1>
                <h1>2 sentence, AI changing
                    generated text.
                </h1>
                <button id='Bus-Btn'>Our Solutions</button>
            </section>
            </div>
        </div>
    )
}

export default ClassicsBusiness