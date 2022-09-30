import React from 'react';
import './styles.css';

import meuodonto1 from '../../assets/images/meuodonto1.jpg'
import meuodonto2 from '../../assets/images/meuodonto2.jpg'

const Home = () => {
  return (
    <section id='home'>
        <div className='container--titles'>
          <h1 className='title'>Meu Odonto</h1>
          <p className='slogan'>Sistema de gestão odontológica</p>
        </div>
        <div className='container--images'>
          <img src={meuodonto1} alt='meuodonto-1' className='login--meuodonto'/>
          <img src={meuodonto2} alt='meuodonto-2'  className='home--meuodonto'/>
        </div>
    </section>
  );
}

export default Home;