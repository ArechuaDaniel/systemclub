



import Barra from "../components/Barra";
import { useDispatch, useSelector } from "react-redux";
//import { deleteAlumno, startLoadingAlumnos, startLoadingInstructor, updateInstructor } from "../store/alumno/thunk";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { edadFecha, formatearFecha } from "../helpers/formatearFecha";
import Swal from "sweetalert2";


const Instructor = () => {
    
    
        //const [cedulaInstructor, setCedulaInstructor] = useState('')
        const [correo, setCorreo] = useState('')
        const [primerApellido, setPrimerApellido] = useState('')
        const [segundoApellido, setSegundoApellido] = useState('')
        const [primerNombre, setPrimerNombre] = useState('')
        const [segundoNombre, setSegundoNombre] = useState('')
        const [fechaNacimiento, setFechaNacimiento] = useState('')
        const [direccion, setDireccion] = useState('')
        const [fechaRegistro, setFechaRegistro] = useState('')
        const [telefono, setTelefono] = useState('')
        const [genero, setGenero] = useState('')
        const [idClub, setIdClub] = useState('')
        const [alerta, setAlerta] = useState({})
    
        const dispatch = useDispatch();
        const {instructor} = useSelector(state => state.alumno)
        const navigate = useNavigate();
        
    
        const fechaActual = new Date();
        
        const cedulaInstructor = instructor.cedulaInstructor;
        
        //const navigate = Navigate();
        useEffect(() => {
          
            dispatch(startLoadingInstructor())
        }, [])
        
        useEffect(() => {
          
            //dispatch(startLoadingInstructor())
            //setCedulaInstructor(instructor.cedulaInstructor)
            setPrimerApellido(instructor.primerApellido)
            setSegundoApellido(instructor.segundoApellido)
            setPrimerNombre(instructor.primerNombre)
            setSegundoNombre(instructor.segundoNombre)
            setFechaNacimiento(formatearFecha(instructor.fechaNacimiento))
            setDireccion(instructor.direccion)
            setFechaRegistro(formatearFecha(instructor.fechaRegistro))
            setTelefono(instructor.telefono)
            setCorreo(instructor.correo)
            setIdClub(instructor.idClub)
            setGenero(instructor.genero)
            
    
        }, [instructor])
        
        // console.log(cedula,primerApellido,segundoApellido,primerNombre,segundoNombre,fechaNacimiento,direccion,fechaRegistro,telefono,idClub,correo, genero);
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
                        title: "Ha regresado al perfil!",
                        //text: "Your file has been deleted.",
                        icon: "success"
                    });
    
                    navigate('/tkdsystem/api/perfil')
    
                }
            });
    
        }
        const handleSubmit = async e => {
            e.preventDefault();
    
    
            if ([correo, primerApellido, primerNombre, direccion, fechaRegistro, telefono, idClub, fechaNacimiento, genero].includes('')) {
                Swal.fire({
                    title: "Todos los campos son obligatorios",
                    //text: "That thing is still around?",
                    icon: "warning"
                });
                return;
            }
            
            
            try {
    
               dispatch(updateInstructor({cedulaInstructor,primerApellido,segundoApellido,primerNombre,segundoNombre,fechaNacimiento,direccion,fechaRegistro,telefono,idClub,correo, genero}))
               navigate('/tkdsystem/api/perfil') 
            } catch (error) {
    
                setAlerta({
                    msg: error.response.data.msg,
                    error: true
                })
    
            }
    
        }
    
    
    
        return (
            <>
    
                <div className="flex md:flex-row flex-col">
                    <Barra />
    
                    <div className=' overflow-y-auto h-screen shadow-2xl mx-auto'>
    
                        <div className='rounded-xl bg-white '>
                            <h1 className='text-sky-600 font-black md:text-3xl text-2xl px-10 mt-10'>
                                <span className="material-symbols-outlined align-middle text-3xl mr-2">
                                    person
                                </span>Actualizar datos del Instructor  </h1>
    
    
                            <form
                                onSubmit={handleSubmit}
                                className=' shadow rounded-lg md:p-2 p-10 m-10'>
    
                                <div className='my-5'>
                                    <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='cedulaInstructor'>Cédula*</label>
                                    <input
                                        type='text'
                                        id='cedulaInstructor'
                                        placeholder='Ingresa tu cédula'
                                        className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                        value={instructor.cedulaInstructor}
                                        //onChange={e => setCedulaInstructor(e.target.value)}
                                    />
                                </div>
                                <div className='my-5'>
                                    <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='primerApellido'>Apellido Paterno*</label>
                                    <input
                                        type='text'
                                        id='primerApellido'
                                        placeholder='Ingresa tu Apellido Paterno'
                                        className='capitalize w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                        value={primerApellido}
                                        onChange={e => setPrimerApellido(e.target.value)}
                                    />
                                </div>
                                <div className='my-5'>
                                    <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='segundoApellido'>Apellido Materno</label>
                                    <input
                                        type='text'
                                        id='segundoApellido'
                                        placeholder='Ingresa tu Apellido Materno'
                                        className='capitalize w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                        value={segundoApellido}
                                        onChange={e => setSegundoApellido(e.target.value)}
                                    />
                                </div>
                                <div className='my-5'>
                                    <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='primerNombre'>Primer Nombre*</label>
                                    <input
                                        type='text'
                                        id='primerNombre'
                                        placeholder='Ingresa tu Primer Nombre'
                                        className='capitalize w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                        value={primerNombre}
                                        onChange={e => setPrimerNombre(e.target.value)}
                                    />
                                </div>
                                <div className='my-5'>
                                    <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='segundoNombre'>Segundo Nombre</label>
                                    <input
                                        type='text'
                                        id='segundoNombre'
                                        placeholder='Ingresa tu Segundo Nombre'
                                        className='capitalize w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                        value={segundoNombre}
                                        onChange={e => setSegundoNombre(e.target.value)}
                                    />
                                </div>
                                <div className='my-5'>
                                    <label className=' text-gray-600  text-xl font-bold' htmlFor='fechaNacimiento'>Fecha de Nacimiento*</label>
                                    <input
                                        type='date'
                                        id='fechaNacimiento'
                                        className=' w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                        max={formatearFecha(fechaActual)}
                                        value={fechaNacimiento}
                                        onChange={e => setFechaNacimiento(e.target.value)}
                                    />
                                </div>
                                <div className='my-5'>
                                    <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='direccion'>Dirección*</label>
                                    <input
                                        type='text'
                                        id='direccion'
                                        placeholder='Ingresa tu Dirección'
                                        className='capitalize w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                        value={direccion}
                                        onChange={e => setDireccion(e.target.value)}
                                    />
                                </div>
                                <div className='my-5'>
                                    <label className=' text-gray-600  text-xl font-bold' htmlFor='fechaRegistro'>Fecha de Registro*</label>
                                    <input
                                        type='date'
                                        id='fechaRegistro'
                                        className=' w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                        max={formatearFecha(fechaActual)}
                                        value={fechaRegistro}
                                        onChange={e => setFechaRegistro(e.target.value)}
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
                                    <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='telefono'>Celular*</label>
                                    <input
                                        type='number'
                                        id='telefono'
                                        placeholder='Ingresa tu Celular'
                                        className='capitalize w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                        value={telefono}
                                        onChange={e => setTelefono(e.target.value)}
                                    />
                                </div>
                                {/* <div className='my-5'>
                                    <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='idClub'>Club*</label>
                                    <input
                                        type='number'
                                        id='idClub'
                                        placeholder='Ingresa tu Club'
                                
                                        className='capitalize w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                        value={instructor.idClub}
                                        //onChange={e => setIdClub(e.target.value)}
                                    />
                                </div> */}
                                <div className='my-5'>
                                    <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='correo'>Email*</label>
                                    <input
                                        type='email'
                                        id='correo'
                                        placeholder='Email de Registro'
                                        className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                        value={correo}
                                        onChange={e => setCorreo(e.target.value)}
                                    />
                                </div>
                               
                                
                                <div className="flex md:flex-row-reverse flex-col  justify-evenly">
                                        
                                        <button
                                            className='bg-sky-600  text-white  capitalize font-bold rounded-xl hover:cursor-pointer hover:bg-sky-700 transition-colors p-3 w-full'
                                        >
                                            <span className="material-symbols-outlined align-middle mr-2">
                                                save
                                            </span>
                                            Guardar
        
                                        </button>
                                        <button
                                            className='bg-red-400   text-white  capitalize font-bold rounded-xl hover:cursor-pointer hover:bg-red-500 transition-colors p-3  md:mt-0 mt-6 w-full md:mr-10'
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
    
    
    
     
export default Instructor