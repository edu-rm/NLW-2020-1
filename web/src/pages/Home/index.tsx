import React from 'react';
import { FiLogIn } from 'react-icons/fi'

import logo from '../../assets/logo.svg';
import './styles.css';

const Home = ( ) => {
  return (
    <div id="page-home">
      {/* Class palavra reservada do js */}
      <div className="content"> 
        <header>
          <img src={logo} alt="ecoleta"/>
        </header>

        <main>
          <h1>Seu marketplace de coleta de resíduos.</h1>
          <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</p>

          <a href="/cadastro">
            <span>
             <FiLogIn />
            </span>
            <strong>Cadastr um ponto de coleta</strong>
          </a>
        </main>
      </div>
    </div>
  );
}

export default Home;