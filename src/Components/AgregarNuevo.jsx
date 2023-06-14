import React from 'react'

const AgregarNuevo = () => {
  return (
    <div className='addNuevo'>
      <header>Agregar niña o niño</header>    
      <form action="">
        <div>
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id='nombre' />
        </div>
        <div>
              <label htmlFor="nombre">Edad:</label>
              <input type="number" min={5} max={7} id='nombre' />
        </div>
        <button>Agregar</button>
      </form>
    </div>
  )
}

export default AgregarNuevo
