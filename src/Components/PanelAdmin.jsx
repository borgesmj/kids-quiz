import React from 'react'
import { GrClose } from "react-icons/gr";

const PanelAdmin = ({cerrarAdmin, abrirAgregarNuevo}) => {

    const handleClick = (e) => {
        e.preventDefault()
        cerrarAdmin()
    }

    const handleAgregar = (e) =>{
        e.preventDefault()
        abrirAgregarNuevo()
    }
  return (
    <div id="panelAdmin">
        <div 
            className='btncerrar'
            onClick={handleClick}
            ><GrClose/></div>
        <header>¿Que deseas hacer hoy?</header>
        <div className='BtnPanel'>
                <button 
                    className='btn1'
                    onClick={handleAgregar}
                    >Agregar Nuevo</button>
                <button 
                    className='btn2'
                    // onClick={handleClick}
                    >Canjear Premios</button>
        </div>

    </div>
  )
}

export default PanelAdmin
