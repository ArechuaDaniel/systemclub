import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Barra from "../components/Barra";

import Swal from 'sweetalert2'
import { useDispatch, useSelector } from "react-redux";
import { startUpdateAlumno, updateAlumno } from "../store/alumno/thunk";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { formatearFecha } from "../helpers/formatearFecha";
import { actualizarAlumno } from "../store/alumno/alumnoSlice";

const EditarAlumno = () => {
    const { editAlumno, alumnos} = useSelector(state => state.alumno);

    const [cedulaAlumno, setCedulaAlumno] = useState('')
    const [primerApellido, setPrimerApellido] = useState('')
    const [segundoApellido, setSegundoApellido] = useState('')
    const [primerNombre, setPrimerNombre] = useState('')
    const [segundoNombre, setSegundoNombre] = useState('')
    const [fechaNacimiento, setFechaNacimiento] = useState('')
    const [direccion, setDireccion] = useState('')
    const [fechaIngreso, setFechaIngreso] = useState('')
    const [genero, setGenero] = useState('')
    const [tipoSangre, setTipoSangre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [ocupacion, setOcupacion] = useState('')
    const [estado, setEstado] = useState('')


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const params = useParams()


    const cedula = (params.cedulaAlumno)
    const fechaActual = Date.now()

   
    useEffect(() => {
            
        dispatch(startUpdateAlumno({ cedula }))

      
    }, [])

    
    
    useEffect(() => {
                setCedulaAlumno(editAlumno.cedulaAlumno)
                setPrimerApellido(editAlumno.primerApellido)
                
                setSegundoApellido(editAlumno.segundoApellido)
                setPrimerNombre(editAlumno.primerNombre)
                setSegundoNombre(editAlumno.segundoNombre)
                setFechaNacimiento(formatearFecha(editAlumno.fechaNacimiento))
                setDireccion(editAlumno.direccion)
                setFechaIngreso(formatearFecha(editAlumno.fechaIngreso))
                setGenero(editAlumno.genero)
                
                setTipoSangre(editAlumno.tipoSangre)
                setTelefono(editAlumno.telefono)
                setOcupacion(editAlumno.ocupacion)
                setEstado(editAlumno.estado)
                
          
    }, [editAlumno])
   

    const regresarAlumno = (e) => {
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
                    title: "Ha regresado a Alumnos!",
                    //text: "Your file has been deleted.",
                    icon: "success"
                });

                navigate('/tkdsystem/api/alumnos')
            }
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if ([cedulaAlumno, primerApellido, segundoApellido, primerNombre, segundoNombre, fechaNacimiento, direccion, fechaIngreso, telefono, ocupacion, estado,genero,tipoSangre].includes('')) {
            Swal.fire({
                title: "Todos los campos son obligatorios",
                //text: "That thing is still around?",
                icon: "warning"
            });
            return;
        }
        
        try {


            dispatch(updateAlumno({cedula,cedulaAlumno,primerApellido,segundoApellido,primerNombre,segundoNombre,fechaNacimiento,direccion,fechaIngreso,telefono,ocupacion,estado,genero,tipoSangre}))
            navigate('/tkdsystem/api/alumnos')

        } catch (error) {
            console.log(error);
        }

    }
    return (
        <>
            
            <div className="flex md:flex-row flex-col">

                <Barra />
                <div className=' md:overflow-y-auto h-screen  md:w-4/5'>
                <div className="flex justify-around items-center m-10">

                    <h1 className='text-sky-600 font-black md:text-3xl text-2xl'
>
                        <span className="material-symbols-outlined align-middle text-3xl mr-2">
                            person 
                            </span>
                            Editar Alumno</h1>
                    </div>

                    {/* FORMULARIO */}
                    <div className='flex justify-center '>
                        <form
                            onSubmit={handleSubmit}
                            className='md:my-5 m-5  shadow-2xl rounded-lg p-10'
                        >
                            <div className="md:grid  md:grid-cols-3 md:gap-x-8">
                                <div className='my-5'>
                                    <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='cedulaAlumno'>Cedula</label>
                                    <input
                                        type='text'
                                        id='cedulaAlumno'
                                        placeholder='Cedula del Alumno'
                                        className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                        value={cedulaAlumno}
                                        onChange={(e) => setCedulaAlumno(e.target.value)}
                                    />
                                </div>
                                <div className='my-5'>
                                    <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='primerApellido'>Apellido Paterno</label>
                                    <input
                                        type='text'
                                        id='primerApellido'
                                        placeholder='Ingrese Apellido Paterno'
                                        className='w-full mt-3 p-3 capitalize border rounded-xl bg-gray-50 text-black'
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
                                        className='w-full mt-3 p-3 capitalize border rounded-xl bg-gray-50 text-black'
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
                                        className='w-full mt-3 p-3 capitalize border rounded-xl bg-gray-50 text-black'
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
                                        className='w-full mt-3 p-3 capitalize border rounded-xl bg-gray-50 text-black'
                                        value={segundoNombre}
                                        onChange={(e) => setSegundoNombre(e.target.value)}
                                    />
                                </div>
                                <div className='my-5'>
                                    <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='fechaNacimiento'>Fecha De Nacimiento</label>
                                    <input
                                        type='date'
                                        id='fechaNacimiento'
                                        min="1940-01-01"
                                        max={formatearFecha(fechaActual)}
                                        className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                        value={fechaNacimiento}
                                        onChange={(e) => setFechaNacimiento(e.target.value)}
                                    />
                                </div>
                                <div className='my-5'>
                                    <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='direccion'>Dirección</label>
                                    <input
                                        type='text'
                                        id='direccion'
                                        placeholder='Ingrese Dirección'
                                        className='w-full  mt-3 p-3 capitalize border rounded-xl bg-gray-50 text-black'
                                        value={direccion}
                                        onChange={(e) => setDireccion(e.target.value)}
                                    />
                                </div>
                                <div className='my-5'>
                                    <label className=' text-gray-600  text-xl font-bold' htmlFor='fechaIngreso'>Fecha De Ingreso</label>
                                    <input
                                        type='date'
                                        id='fechaIngreso'
                                        className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                        min="1940-01-01"
                                        max={formatearFecha(fechaActual)}
                                        value={fechaIngreso}
                                        onChange={(e) => setFechaIngreso(e.target.value)}
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
                                    <label className=' text-gray-600  text-xl font-bold' htmlFor='telefono'>Celular</label>
                                    <input
                                        type='text'
                                        id='telefono'
                                        placeholder='Ingrese Celular'
                                        className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                        value={telefono}
                                        onChange={(e) => setTelefono(e.target.value)}
                                    />
                                </div>
                                <div className='my-5'>
                                    <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='ocupacion'>Ocupación</label>
                                    <select id="ocupacion" className='w-full mt-3 p-3 capitalize border rounded-xl bg-gray-50 text-black '
                                        value={ocupacion}
                                        onChange={(e) => setOcupacion(e.target.value)}
                                    >

                                        <option value="" >--Seleccione--</option>
                                        <option value="Estudiante">Estudiante</option>
                                        <option value="Trabaja">Trabaja</option>
                                        <option value="Otros">Otros</option>

                                    </select>
                                </div>
                                <div className='my-5'>
                                    <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='estado'>Estado</label>
                                    <select id="estado" className='w-full  mt-3 p-3 capitalize border rounded-xl bg-gray-50 text-black '
                                        value={estado}
                                        onChange={(e) => setEstado(e.target.value)}
                                    >

                                        <option value="" >--Seleccione--</option>
                                        <option value="Activo">Activo</option>
                                        <option value="Inactivo">Inactivo</option>

                                    </select>
                                </div>

                            </div>

                            <div className="flex md:flex-row-reverse flex-col  justify-start">
                                
                                <button
                                    className='bg-sky-600 md:w-1/4  text-white  capitalize font-bold rounded-xl hover:cursor-pointer hover:bg-sky-700 transition-colors p-3'
                                >
                                    <span className="material-symbols-outlined align-middle mr-2">
                                        save
                                    </span>
                                    Guardar Alumno

                                </button>
                                <button
                                    className='bg-red-400 md:w-1/4  text-white  capitalize font-bold rounded-xl hover:cursor-pointer hover:bg-red-500 transition-colors p-3 md:mr-10 md:mt-0 mt-6'
                                    onClick={regresarAlumno}
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


export default EditarAlumno