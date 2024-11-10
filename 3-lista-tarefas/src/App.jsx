import { useState } from 'react';
import './App.css';
import ListaTarefas from './components/ListaTarefas'; // Corrigi o caminho e removi a importação desnecessária do sequelize

function App() {
  return (
    <>
      <div>
        <ListaTarefas />
      </div>
    </>
  );
}

export default App;
