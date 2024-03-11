import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Login'
import Registrar from './pages/Registrar'
import OlvidePassword from './pages/OlvidePassword'
import NuevoPassword from './pages/NuevoPassword'
import ConfirmarCuenta from './pages/ConfirmarCuenta'
import RutaProtegida from './layouts/RutaProtegida'
import Side from './auth/Side'
import Instructor from './auth/Instructor'
import Perfil from './auth/Perfil'
import CambiarPassword from './auth/CambiarPassword'
import MostrarAlumnos from './auth/MostrarAlumnos'
import Asenso from './auth/Asenso'
import MostrarInstructores from './auth/MostrarInstructores'
import EditarClub from './auth/EditarClub'
import CrearInstructor from './auth/CrearInstructor'
import VerAlumno from './auth/VerAlumno'

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          {/* ÁREA PÚBLICA */}
          <Route path="systemclub/" element={<AuthLayout />}>

            <Route index element={<Login />} />
            <Route path='registrar' element={<Registrar />} />
            <Route path='olvide-password' element={<OlvidePassword />} />
            <Route path='olvide-password/:token' element={<NuevoPassword />} />
            <Route path='confirmar/:id' element={<ConfirmarCuenta />} />
          </Route>

          
          {/* ÁREA PRIVADA */}
          <Route path="systemclub/api/" element={<RutaProtegida/>}>
            <Route index element={<Side />} />
            <Route path='home' element={<Side />} />
            <Route path='editar-club' element={<EditarClub />} />
            <Route path='crear-instructor' element={<CrearInstructor />} />
            <Route path='instructores' element={<MostrarInstructores />} />
            <Route path='editar-instructor/:id' element={<Instructor />} />
            <Route path='perfil' element={<Perfil />} />
            <Route path='cambiar-password' element={<CambiarPassword />} />
            <Route path='alumnos' element={<MostrarAlumnos />} />
            <Route path='mostrar-alumno/:id' element={<VerAlumno />} />
            <Route path='asensos' element={<Asenso />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
