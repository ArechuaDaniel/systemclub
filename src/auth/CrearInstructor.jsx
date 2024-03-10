import { useNavigate } from "react-router-dom";
import Barra from "../components/Barra";
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { formatearFecha } from "../helpers/formatearFecha";
import { startCreateInstructor, startLoadingCantones, startLoadingPaises, startLoadingParroquias, startLoadingProvincias } from "../store/instructor/thunks";
    
    const CrearInstructor = () => {
    
        const [correo, setCorreo] = useState('')
        
        const [vista, setVista] = useState('')
        const [cedulaInstructor, setCedulaInstructor] = useState('')
        const [primerApellido, setPrimerApellido] = useState('')
        const [segundoApellido, setSegundoApellido] = useState('')
        const [primerNombre, setPrimerNombre] = useState('')
        const [segundoNombre, setSegundoNombre] = useState('')
        const [fechaNacimiento, setFechaNacimiento] = useState('')
        const [direccion, setDireccion] = useState('')
        const [fechaRegistro, setFechaRegistro] = useState('')
        const [genero, setGenero] = useState('')
        const [telefono, setTelefono] = useState('')
        const [tipoSangre, setTipoSangre] = useState('')
        const [idParroquia, setIdParroquia] = useState('');
        const [idPais, setIdPais] = useState('');
        const [idProvincia, setIdProvincia] = useState('')
        const [idCanton, setIdCanton] = useState('');
    
        const navigate = useNavigate();
        const dispatch = useDispatch();
        const password = cedulaInstructor
    
        const fechaActual = new Date()
      
        
        const {instructores, paises, provincias, cantones, parroquias} = useSelector(state => state.instructor)
      
    
        useEffect(() => {
          
            setFechaRegistro(formatearFecha(fechaActual))
            
            dispatch(startLoadingPaises())
            dispatch(startLoadingProvincias())
        
        }, [])
        useEffect(() => {
                
            try {
                dispatch(startLoadingCantones({idProvincia}))
            } catch (error) {
                console.log(error);
            }
        
        }, [idProvincia])
        useEffect(() => {
            dispatch(startLoadingParroquias({idCanton}))
        
        }, [idCanton])
    
        const regresar = (e) => {
            e.preventDefault()
            Swal.fire({
                title: "¿Estas seguro de regresar?",
                //text: "You won't be able to revert this!",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Ok",
                cancelButtonColor: "#d33",
                cancelButtonText: "Cancelar!",
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Ha regresado a Instructores!",
                    //text: "Your file has been deleted.",
                    icon: "success"
                  });
    
                  navigate('/systemclub/api/instructores')
                }
              });
            
        }
    
        const handleSubmit =async (e) => {
            e.preventDefault();
            if ([cedulaInstructor,primerApellido,segundoApellido,primerNombre,segundoNombre,fechaNacimiento,direccion,idParroquia,fechaRegistro,telefono, genero, tipoSangre, correo].includes('')){ 
                Swal.fire({
                    title: "Todos los campos son obligatorios",
                    //text: "That thing is still around?",
                    icon: "warning"
                  });
                  return
            }   
            try {
                
                dispatch(startCreateInstructor({cedulaInstructor,primerApellido,segundoApellido,primerNombre,segundoNombre,fechaNacimiento,direccion,idParroquia,fechaRegistro,telefono, genero, tipoSangre, correo, password}))
                navigate('/systemclub/api/instructores') 
    
        } catch (error) {
            console.log(error);
        }
        }
        return (
            <>
                
                <div className="flex md:flex-row flex-col">
    
                    <Barra />
                    <div className=' md:overflow-y-auto h-screen  md:w-4/5 w-full'>
                        <div className="flex justify-around items-center m-10">
    
                            <h1 className='text-sky-600 font-black md:text-3xl text-2xl'
                            >
                                <span className="material-symbols-outlined align-middle text-3xl mr-2">
                                person 
                                </span>
                                Registrar Instructor
                            </h1>
                        </div>
    
                        {/* FORMULARIO */}
                        <div className='flex justify-center '>
                            <form 
                            onSubmit={handleSubmit}
                            className='md:my-5 m-5  shadow-2xl rounded-lg p-10  capitalize '>
                                <div className="md:grid  md:grid-cols-3 md:gap-x-8">
                                    <div className='my-5'>
                                        <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='cedulaInstructor'>Cedula</label>
                                        <input
                                            type='text'
                                            id='cedulaInstructor'
                                            placeholder='Cedula del Alumno'
                                            className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                            value={cedulaInstructor}
                                            onChange={(e) => setCedulaInstructor(e.target.value)}
                                        />
                                    </div>
                                    <div className='my-5'>
                                        <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='primerApellido'>Apellido Paterno</label>
                                        <input
                                            type='text'
                                            id='primerApellido'
                                            placeholder='Ingrese Apellido Paterno'
                                            className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black capitalize'
                                            value={primerApellido}
                                            onChange={(e) => setPrimerApellido(e.target.value)}
                                        />
                                    </div>
                                    <div className='my-5'>
                                        <label className='capitalize text-gray-600 text-xl font-bold' htmlFor='segundoApellido'>Apellido Materno</label>
                                        <input
                                            type='text'
                                            id='segundoApellido'
                                            placeholder='Ingrese Apellido Materno'
                                            className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black capitalize'
                                            value={segundoApellido}
                                            onChange={(e) => setSegundoApellido(e.target.value)}
                                        />
                                    </div>
                                    <div className='my-5'>
                                        <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='primerNombre'>Primer Nombre</label>
                                        <input
                                            type='text'
                                            id='primerNombre'
                                            placeholder='Ingrese Primer Nombre'
                                            className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black capitalize'
                                            value={primerNombre}
                                            onChange={(e) => setPrimerNombre(e.target.value)}
                                        />
                                    </div>
                                    <div className='my-5'>
                                        <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='segundoNombre'>Segundo Nombre</label>
                                        <input
                                            type='text'
                                            id='segundoNombre'
                                            placeholder='Ingrese Segundo Nombre'
                                            className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black capitalize'
                                            value={segundoNombre}
                                            onChange={(e) => setSegundoNombre(e.target.value)}
                                        />
                                    </div>
                                    <div className='my-5'>
                                        <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='fechaNacimiento'>Fecha De Nacimiento</label>
                                        <input
                                            type='date'
                                            id='fechaNacimiento'
                                            className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                            value={fechaNacimiento}
                                            min="1940-01-01"
                                            max={formatearFecha(fechaActual)}
                                            onChange={(e) => setFechaNacimiento(e.target.value)}
                                        />
                                    </div>
                                    <div className='my-5'>
                                        <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='idPais'>País</label>
                                        <select id="idPais" className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black '
                                            value={idPais}
                                            onChange={(e) => setIdPais(e.target.value)}
                                        >
                                            
                                            
                                            <option value="" >--Seleccione--</option>
                                             {
                                                paises.map( pais => (
                                                <option key={pais.idPais} value={pais.idPais}>{pais.pais}</option>
                                                ))
                                            }
                                            
                                        </select>
                                    </div>
                                    <div className='my-5'>
                                        <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='idProvincia'>Provincia</label>
                                        <select id="idProvincia" className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black '
                                            value={idProvincia}
                                            onChange={(e) => setIdProvincia(e.target.value)}
                                        >
                                            
                                            
                                            <option value="" >--Seleccione--</option>
                                             {
                                                provincias.map( provincia => (
                                                <option key={provincia.idProvincia} value={provincia.idProvincia}>{provincia.provincia}</option>
                                                ))
                                            }
                                            
                                        </select>
                                    </div>
                                    <div className='my-5'>
                                        <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='idCanton'>Canton</label>
                                        <select id="idCanton" className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black '
                                            value={idCanton}
                                            onChange={(e) => setIdCanton(e.target.value)}
                                        >
                                            
                                            
                                            <option value="" >--Seleccione--</option>
                                             {
                                                cantones.map( canton => (
                                                <option key={canton.idCanton} value={canton.idCanton}>{canton.canton}</option>
                                                ))
                                            }
                                            
                                        </select>
                                    </div>
                                    <div className='my-5'>
                                        <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='idParroquia'>Parroquia</label>
                                        <select id="idParroquia" className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black '
                                            value={idParroquia}
                                            onChange={(e) => setIdParroquia(e.target.value)}
                                        >
                                            <option value="" >--Seleccione--</option>
                                             
                                            {
                                                parroquias.map( parroquia => (
                                                <option key={parroquia.idParroquia} value={parroquia.idParroquia}>{parroquia.parroquia}</option>
                                                ))
                                            }
                                            
    
                                        </select>
                                    </div>
                                    <div className='my-5'>
                                        <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='direccion'>Dirección</label>
                                        <input
                                            type='text'
                                            id='direccion'
                                            placeholder='Ingrese Dirección'
                                            className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black capitalize'
                                            value={direccion}
                                            onChange={(e) => setDireccion(e.target.value)}
                                        />
                                    </div>
                                    <div className='my-5'>
                                        <label className=' text-gray-600  text-xl font-bold' htmlFor='fechaRegistro'>Fecha de Registro</label>
                                        <input
                                            type='date'
                                            id='fechaRegistro'
                                            className='w-full mt-3 p-3 bordr rounded-xl bg-gray-50 text-black'
                                            min="1940-01-01"
                                            max={formatearFecha(fechaActual)}
                                            value={fechaRegistro}
                                            onChange={(e) => setFechaRegistro(e.target.value)}
                                        />
                                    </div>
                                    <div className='my-5'>
                                        <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='genero'>Genero</label>
                                        <select id="genero" className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black '
                                            value={genero}
                                            onChange={(e) => setGenero(e.target.value)}
                                        >
                                        
                                            <option value="" >--Seleccione--</option>
                                            <option value="Masculino">Masculino</option>
                                            <option value="Femenino">Femenino</option>
                                            <option value="Otros">Otros</option>
    
                                        </select>
                                    </div>
                                    <div className='my-5'>
                                        <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='tipoSangre'>Tipo de Sangre</label>
                                        <select id="tipoSangre" className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black '
                                            value={tipoSangre}
                                            onChange={(e) => setTipoSangre(e.target.value)}
                                        >
                                        
                                            <option value="" >--Seleccione--</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
    
                                        </select>
                                    </div>
                                    <div className='my-5'>
                                        <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='telefono'>Celular</label>
                                        <input
                                            type='text'
                                            id='telefono'
                                            placeholder='Ingrese Celular'
                                            className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                            value={telefono}
                                            onChange={(e) => setTelefono(e.target.value)}
                                        />
                                    </div>
                                    
                                    <div className='my-2'>
                            <label className='capitalize text-gray-600 block text-xl font-bold' htmlFor='correo'>
                                Email</label>
                            <input
                                type='email'
                                id='correo'
                                placeholder='Correo de Registro'
                                className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                value={correo}
                                onChange={e => setCorreo(e.target.value)}
                            />
                        </div>
                        <div className='my-5'>
                            <label className='capitalize text-gray-600 block text-xl font-bold' htmlFor='password'>
                                Contraseña</label>
                            <div className='flex items-center '>
                                <input

                                    type={vista ? 'text' : 'password'}
                                    id='password'
                                    placeholder='Password de Registro'
                                    className='w-full mt-3 mr-1 p-3 border rounded-xl bg-gray-50'
                                    value={password}
                                    //onChange={e => setPassword(e.target.value)}
                                />
                                <span
                                    className='text-2xl bg-gray-50 rounded-md p-2 flex items-center justify-center mt-3'
                                    onClick={() => setVista(!vista)}>
                                        <span className="material-symbols-outlined">
                                            {vista ? 'visibility' : 'visibility_off'}
                                        </span>
                                    
                                </span>
                            </div>
                        </div>
    
                                </div>
    
                                <div className="flex md:flex-row-reverse flex-col justify-start">
                                
                                    <button
                                        onClick={handleSubmit}
                                        className='bg-sky-600 md:w-1/4  text-white  capitalize font-bold rounded-xl hover:cursor-pointer hover:bg-sky-700 transition-colors p-3'
                                    >
                                        <span className="material-symbols-outlined align-middle mr-2">
                                            save
                                        </span>
                                        Guardar Instructor
    
                                    </button>
                                    <button
                                        className='bg-red-400 md:w-1/4  text-white  capitalize font-bold rounded-xl hover:cursor-pointer hover:bg-red-500 transition-colors p-3 md:mr-10 md:mt-0 mt-6'
                                        onClick={regresar}
                                    >
                                        <span className="material-symbols-outlined align-middle mr-2">
                                            cancel
                                        </span>
                                        Regresar
    
                                    </button>
                                </div>
    
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }


export default CrearInstructor