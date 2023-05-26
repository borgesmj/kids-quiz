import { useState } from 'react'
import Inicio from './Components/Inicio'
import './App.css'

function App() {

const [inicio, setInicio] = useState(true)
console.log(inicio)
  return (
    <>
      {inicio && <Inicio/>}
    </>
  )
}

export default App
