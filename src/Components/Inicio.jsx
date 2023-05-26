import React from 'react'
import './Inicio.css'


const Inicio = () => {
  return (
    <div id="container">
      <header>Hola</header>
      <div id="button-panel">
        <div id="panel-kids">
            <button className="button-kid">Samantha</button>
        </div>
        <button className='button-admin'>Mamá/Papá</button>
      </div>
      <img src='src/IMG/cuteanimated_kid.png' alt="jjj" />
      <div id="img"></div>
    </div>
  )
}

export default Inicio
