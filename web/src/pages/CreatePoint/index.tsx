import React, { useEffect, useState, ChangeEvent } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { LeafletMouseEvent } from 'leaflet';
import logo from '../../assets/logo.svg'
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';
import api from '../../services/api';

// Criaão de estado para um array ou um objeto precisamos
// manualmente informar o tipo da varivel.

interface Item {
  id: number;
  title: string;
  image_url: string;
}

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECitiesResponse {
  nome: string;
}


const CreatePoint = () => {

  const [items, setItems] = useState<Item[]>([]);
  const [ufs, setUfs] = useState<string[]>([]);
  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0,0]);

  const [cities, setCities] = useState<string[]>([]);


  // [] = uma única vez
  useEffect(() => {
    api.get('items').then(response => {
      setItems(response.data);
    });
  },[]);

  useEffect(() => {
    axios
      .get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(response => 
        {
          const ufInitials = response.data.map(uf => uf.sigla);
          setUfs(ufInitials);
        });

  }, []);


  useEffect(()=>{
    if(selectedUf === '0') return;

    axios
      .get<IBGECitiesResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
      .then(response => 
        {
          const citiesApi = response.data.map(city => city.nome);
          setCities(citiesApi);
        });

  }, [selectedUf]);

  function handleSelectedCity(event: ChangeEvent<HTMLSelectElement>){
    setSelectedCity(event.target.value);
  }

  function handleSelectedUf(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedUf(event.target.value);
  }

  function handleMapClick(event : LeafletMouseEvent){
    setSelectedPosition([event.latlng.lat, event.latlng.lng]);
  }

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

          <Map center={[-27.025425, -50.935877]} zoom={14} onClick={handleMapClick}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={selectedPosition}/>
          </Map>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select 
                name="uf" 
                id="uf" 
                value={selectedUf} 
                onChange={handleSelectedUf}
              >

                <option value=""> Selecione uma UF</option>

                {ufs.map(uf => (
                  <option key={uf} value={uf}>{uf}</option>
                ))} 

              </select>
            </div>
            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select 
                name="city" 
                id="uf"
                value={selectedCity}
                onChange={handleSelectedCity}
              >
                <option value="0" >
                    Seleicone uma cidade
                  </option>
                {cities.map(city => (
                   <option key={city} value={city}>{city}</option>
                ))}

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
            {/* Quando fazemos uma iteração no react o primeiro 
            deve ter uma propriedade chamada key */}
            {items.map(item =>(
              <li key={item.title} className="">
                <img src={item.image_url} alt={item.title}/>
                <span>{item.title}</span>
              </li>
            ))}

            

          </ul>
        </fieldset>

        <button type="submit"> Cadastrar ponto de coleta</button>

      </form>
    </div>
  );
};


export default CreatePoint;