import { useState } from 'react';
import './App.css';
import CrearComponentes from './Componentes/CrearComponentes'
import EliminarComponentes from './Componentes/EliminarComponentes'
import MostraLista from './Componentes/MostraLista';

function App() {

  const [lista, setLista]= useState([]);

  


  return (
    <div className="App"> 

    <CrearComponentes lista = {lista} setLista={setLista} />  
    <EliminarComponentes lista = {lista} setLista={setLista} />
    <MostraLista lista = {lista} setLista={setLista} />      
      
    </div>
  );
}

export default App;
