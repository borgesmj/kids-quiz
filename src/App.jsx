import { useState } from 'react'
import Inicio from './Components/Inicio'
import PanelAdmin from './Components/PanelAdmin'
import AgregarNuevo from './Components/AgregarNuevo'

function App() {

  const [inicio, setInicio] = useState(true)
  const [panelAdmin, setPanelAdmin] = useState(false)
  const [agregarNuevo, setAgregarNuevo] = useState(false)

  const cerrarInicio = () => {
    setInicio(false)
    setPanelAdmin(true)
  }

  const cerrarAdmin = () =>{
    setInicio(true)
    setPanelAdmin(false)
  }

  const abrirAgregarNuevo = () => {
    setPanelAdmin(false)
    setAgregarNuevo(true)
  }

  return (
    <>
        {inicio && <Inicio
        cerrarInicio={cerrarInicio}
        />}
        {panelAdmin &&<PanelAdmin
        cerrarAdmin={cerrarAdmin}
        abrirAgregarNuevo={abrirAgregarNuevo}
        />}
        {agregarNuevo && <AgregarNuevo/>}
    </>
  )
}

export default App
