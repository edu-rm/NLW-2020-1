import React from 'react';
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom';

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

          {/* <a href> carregará a página completa novamente (contradizendo SPA) */}
          <Link to="/create-point">
            <span>
             <FiLogIn />
            </span>
            <strong>Cadastr um ponto de coleta</strong>
          </Link>
        </main>
      </div>
    </div>
  );
}

export default Home;