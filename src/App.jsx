import { Routes, Route } from 'react-router-dom'
import { Login } from './components/auth/Login'
import { NuevaCuenta } from './components/auth/NuevaCuenta'
import { Proyectos } from './components/Proyectos'
function App() {

  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/nueva-cuenta' element={<NuevaCuenta/>}/>
      <Route path='/proyectos' element={<Proyectos/>}/>
    </Routes>
  )
}

export default App
