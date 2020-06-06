import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg'
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';


const CreatePoint = () => {
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta"/>
        <Link to="/">
          <FiArrowLeft/>
          Voltar para a home
        </Link>
      </header>

      <form >
        <h1>Cadastro do <br /> ponto de coleta.</h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">

            <label htmlFor="name">Nome da entidade</label>

            <input 
              type="text"
              name="name"
              id="name"
            />

          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="email">Email</label>
              <input 
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="field">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input 
                type="text"
                name="whatsapp"
                id="whatsapp"
              />
            </div>
          </div>

        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>

          <Map center={[-27.025425, -50.935877]} zoom={14}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-27.025425, -50.935877]}/>
          </Map>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select name="uf" id="uf">
                <option value="0">Seleicone um estado</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select name="city" id="uf">
                <option value="0">Seleicone uma cidade</option>
              </select>
            </div>
          </div>

        </fieldset>

        <fieldset>
          <legend>
            <h2>ítens de coleta</h2>
            <span>Selecione um ou mais ítens abaixo</span>
          </legend>

          <ul className="items-grid">
            <li className="selected">
              <img src="http://localhost:3333/uploads/lampadas.svg" alt="lampada"/>
              <span>Lâmpadas</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/lampadas.svg" alt="lampada"/>
              <span>Lâmpadas</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/lampadas.svg" alt="lampada"/>
              <span>Lâmpadas</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/lampadas.svg" alt="lampada"/>
              <span>Lâmpadas</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/lampadas.svg" alt="lampada"/>
              <span>Lâmpadas</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/lampadas.svg" alt="lampada"/>
              <span>Lâmpadas</span>
            </li>
          </ul>
        </fieldset>

        <button type="submit"> Cadastrar ponto de coleta</button>

      </form>
    </div>
  );
};


export default CreatePoint;