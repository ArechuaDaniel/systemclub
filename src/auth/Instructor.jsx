import { useNavigate, useParams } from "react-router-dom";
import Barra from "../components/Barra";
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { formatearFecha } from "../helpers/formatearFecha";
import { mostrarInstructor, startCreateInstructor, startLoadingCantones, startLoadingPaises, startLoadingParroquias, startLoadingProvincias } from "../store/instructor/thunks";

const Instructor = () => {

        
            
        
            const navigate = useNavigate();
            const dispatch = useDispatch();
            const params = useParams()
            

            //const password = cedulaInstructor
        
            const fechaActual = new Date()
          
            
            const {verInstructor, paises, provincias, cantones, parroquias} = useSelector(state => state.instructor)
          
            const cedulaInstructor = params.id
            useEffect(() => {
                
                dispatch(startLoadingPaises())
                dispatch(startLoadingProvincias())
                dispatch(mostrarInstructor({cedulaInstructor}))

            
            }, [])
           
        
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
                                     Datos del Instructor
                                </h1>
                            </div>
        
                            {/* FORMULARIO */}
                            <div className='flex justify-center '>
                                <form 
                                
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
                                                
                                            />
                                        </div>
                                        <div className='my-5'>
                                            <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='primerApellido'>Apellido Paterno</label>
                                            <input
                                                type='text'
                                                id='primerApellido'
                                                placeholder='Ingrese Apellido Paterno'
                                                className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black capitalize'
                                                value={verInstructor.primerApellido}
                                                
                                            />
                                        </div>
                                        <div className='my-5'>
                                            <label className='capitalize text-gray-600 text-xl font-bold' htmlFor='segundoApellido'>Apellido Materno</label>
                                            <input
                                                type='text'
                                                id='segundoApellido'
                                                placeholder='Ingrese Apellido Materno'
                                                className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black capitalize'
                                                value={verInstructor.segundoApellido}
                                                
                                            />
                                        </div>
                                        <div className='my-5'>
                                            <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='primerNombre'>Primer Nombre</label>
                                            <input
                                                type='text'
                                                id='primerNombre'
                                                placeholder='Ingrese Primer Nombre'
                                                className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black capitalize'
                                                value={verInstructor.primerNombre}
                                                
                                            />
                                        </div>
                                        <div className='my-5'>
                                            <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='segundoNombre'>Segundo Nombre</label>
                                            <input
                                                type='text'
                                                id='segundoNombre'
                                                placeholder='Ingrese Segundo Nombre'
                                                className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black capitalize'
                                                value={verInstructor.segundoNombre}
                                                
                                            />
                                        </div>
                                        <div className='my-5'>
                                            <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='fechaNacimiento'>Fecha De Nacimiento</label>
                                            <input
                                                type='text'
                                                id='fechaNacimiento'
                                                className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                                value={formatearFecha(verInstructor.fechaNacimiento)}
                                                
                                                
                                            />
                                        </div>
                                        <div className='my-5'>
                                            <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='idPais'>País</label>
                                            <select id="idPais" className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black '
                                                value={verInstructor.idPais}
                                                
                                            >
                                                
                                                
                                                <option value={verInstructor.idPais}>{verInstructor.pais}</option>
                                                
                                                
                                            </select>
                                        </div>
                                        <div className='my-5'>
                                            <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='idProvincia'>Provincia</label>
                                            <select id="idProvincia" className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black '
                                                value={verInstructor.idProvincia}
                                                
                                            >
                                                
                                                
                                                <option value={verInstructor.idProvincia}>{verInstructor.provincia}</option>
                                                
                                            </select>
                                        </div>
                                        <div className='my-5'>
                                            <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='idCanton'>Canton</label>
                                            <select id="idCanton" className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black '
                                                value={verInstructor.idCanton}
                                                
                                            >
                                                
                                                
                                                <option value={verInstructor.idCanton} >{verInstructor.canton}</option>
                                                 
                                                
                                            </select>
                                        </div>
                                        <div className='my-5'>
                                            <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='idParroquia'>Parroquia</label>
                                            <select id="idParroquia" className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black '
                                                value={verInstructor.idParroquia}
                                                
                                            >
                                                <option value={verInstructor.idParroquia} >{verInstructor.parroquia}</option>
                                                 
                                               
                                                
        
                                            </select>
                                        </div>
                                        <div className='my-5'>
                                            <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='direccion'>Dirección</label>
                                            <input
                                                type='text'
                                                id='direccion'
                                                placeholder='Ingrese Dirección'
                                                className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black capitalize'
                                                value={verInstructor.direccion}
                                                
                                            />
                                        </div>
                                        <div className='my-5'>
                                            <label className=' text-gray-600  text-xl font-bold' htmlFor='fechaRegistro'>Fecha de Registro</label>
                                            <input
                                                type='text'
                                                id='fechaRegistro'
                                                className='w-full mt-3 p-3 bordr rounded-xl bg-gray-50 text-black'
                                                
                                                value={formatearFecha(verInstructor.fechaRegistro)}
                                                
                                            />
                                        </div>
                                        <div className='my-5'>
                                            <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='genero'>Genero</label>
                                            <select id="genero" className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black '
                                                value={verInstructor.genero}
                                                
                                            >
                                            
                                                <option value={verInstructor.genero} >{verInstructor.genero}</option>
   
        
                                            </select>
                                        </div>
                                        <div className='my-5'>
                                            <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='tipoSangre'>Tipo de Sangre</label>
                                            <select id="tipoSangre" className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black '
                                                value={verInstructor.tipoSangre}
                                                
                                            >
                                            
                                                <option value={verInstructor.tipoSangre} >{verInstructor.tipoSangre}</option>
        
                                            </select>
                                        </div>
                                        <div className='my-5'>
                                            <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='telefono'>Celular</label>
                                            <input
                                                type='text'
                                                id='telefono'
                                                placeholder='Ingrese Celular'
                                                className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                                value={verInstructor.telefono}
                                                
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
                                    value={verInstructor.correo}
                                    onChange={e => setCorreo(e.target.value)}
                                />
                            </div>
                            
                            
        
                                    </div>
        
                                    <div className="flex md:flex-row-reverse flex-col justify-start">
                                    
                                        
                                        <button
                                            className='bg-red-400 md:w-1/4  text-white  capitalize font-bold rounded-xl hover:cursor-pointer hover:bg-red-500 transition-colors p-3 md:mr-10 md:mt-0 mt-6'
                                            onClick={regresar}
                                        >
                                            <span className="material-symbols-outlined align-middle mr-2">
                                                arrow_back
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