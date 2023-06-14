import React from 'react'



const Inicio = ({cerrarInicio}) => {

  const handleClick = (e) =>{
    e.preventDefault();
    cerrarInicio()
  }

  return (
    <div id="inicio">
      <header>Hola</header>
      <div className='BtnPanel'>
        <button className='btn1'>Samantha</button>
        <button 
            className='btn2'
            onClick={handleClick}
            >Mamá/Papá</button>
      </div>
    </div>
  )
}

export default Inicio
