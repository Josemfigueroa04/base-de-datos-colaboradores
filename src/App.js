
import './App.css';
import Nav from './componente/Nav';
import List from './componente/List';
import React, {useState} from 'react';
import data from './data/data';
import Insert from './componente/Insert';


function App() {

  const [colaboradores, setColaboradores] = useState(data);
  const [search, setSearch] = useState("");

  const handleSearchChange = (value) => {
    setSearch(value);
  }
  const handleAddColaborador = (colaborador) => {
    const newColaborador = {
      ...colaborador,
      id: colaboradores.length + 1
    };
    setColaboradores([...colaboradores, newColaborador]);
  };


  return (
    <div className="container-fluid">
        <Nav onSearchChange={handleSearchChange} />
        <div className="container">
        <Insert onSubmit={handleAddColaborador}/>
        <hr/>
        <h2>Lista de Colaboradores</h2>
        <List colaboradores= {colaboradores} busquedaColb={search} />
   
        </div>
      
    </div>

  );
}

export default App;
