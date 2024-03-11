import { useNavigate, useParams } from "react-router-dom";
import Barra from "../components/Barra";
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { formatearFecha } from "../helpers/formatearFecha";
import { startLoadingAlumno } from "../store/instructor/thunks";

const VerAlumno = () => {
    const { alumno} = useSelector(state => state.instructor);


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const params = useParams()


    const cedulaAlumno = (params.id)
    
    const fechaActual = Date.now()

   
    useEffect(() => {
            
        dispatch(startLoadingAlumno({ cedulaAlumno }))

      
    }, [])


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

                navigate('/systemclub/api/alumnos')
            }
        });
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
                                        value={alumno.cedulaAlumno}
                                        
                                    />
                                </div>
                                <div className='my-5'>
                                    <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='primerApellido'>Apellido Paterno</label>
                                    <input
                                        type='text'
                                        id='primerApellido'
                                        placeholder='Ingrese Apellido Paterno'
                                        className='w-full mt-3 p-3 capitalize border rounded-xl bg-gray-50 text-black'
                                        value={alumno.primerApellido}
                                        
                                    />
                                </div>
                                <div className='my-5'>
                                    <label className='capitalize text-gray-600 text-xl font-bold' htmlFor='segundoApellido'>Apellido Materno</label>
                                    <input
                                        type='text'
                                        id='segundoApellido'
                                        placeholder='Ingrese Apellido Materno'
                                        className='w-full mt-3 p-3 capitalize border rounded-xl bg-gray-50 text-black'
                                        value={alumno.segundoApellido}
                                        
                                    />
                                </div>
                                <div className='my-5'>
                                    <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='primerNombre'>Primer Nombre</label>
                                    <input
                                        type='text'
                                        id='primerNombre'
                                        placeholder='Ingrese Primer Nombre'
                                        className='w-full mt-3 p-3 capitalize border rounded-xl bg-gray-50 text-black'
                                        value={alumno.primerNombre}
                                        
                                    />
                                </div>
                                <div className='my-5'>
                                    <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='segundoNombre'>Segundo Nombre</label>
                                    <input
                                        type='text'
                                        id='segundoNombre'
                                        placeholder='Ingrese Segundo Nombre'
                                        className='w-full mt-3 p-3 capitalize border rounded-xl bg-gray-50 text-black'
                                        value={alumno.segundoNombre}
                                        
                                    />
                                </div>
                                <div className='my-5'>
                                    <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='fechaNacimiento'>Fecha De Nacimiento</label>
                                    <input
                                        type='text'
                                        id='fechaNacimiento'
                                        className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                        value={formatearFecha(alumno.fechaNacimiento)}
                                        
                                    />
                                </div>
                                <div className='my-5'>
                                    <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='direccion'>Dirección</label>
                                    <input
                                        type='text'
                                        id='direccion'
                                        placeholder='Ingrese Dirección'
                                        className='w-full  mt-3 p-3 capitalize border rounded-xl bg-gray-50 text-black'
                                        value={alumno.direccion}
                                        
                                    />
                                </div>
                                <div className='my-5'>
                                    <label className=' text-gray-600  text-xl font-bold' htmlFor='fechaIngreso'>Fecha De Ingreso</label>
                                    <input
                                        type='text'
                                        id='fechaIngreso'
                                        className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                        value={formatearFecha(alumno.fechaIngreso)}
                                        
                                    />
                                </div>
                                <div className='my-5'>
                                    <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='genero'>Genero</label>
                                    <select id="genero" className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black '
                                        value={alumno.genero}
                                        
                                    >
                                    
                                        <option value={alumno.genero} >{alumno.genero}</option>
                                    </select>
                                </div>
                                <div className='my-5'>
                                    <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='tipoSangre'>Tipo de Sangre</label>
                                    <select id="tipoSangre" className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black '
                                        value={alumno.tipoSangre}
                                        
                                    >
                                    
                                        <option value={alumno.tipoSangre} >{alumno.tipoSangre}</option>
                                    </select>
                                </div>
                                <div className='my-5'>
                                    <label className=' text-gray-600  text-xl font-bold' htmlFor='telefono'>Celular</label>
                                    <input
                                        type='text'
                                        id='telefono'
                                        placeholder='Ingrese Celular'
                                        className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                        value={alumno.telefono}
                                        
                                    />
                                </div>
                                <div className='my-5'>
                                    <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='ocupacion'>Ocupación</label>
                                    <select id="ocupacion" className='w-full mt-3 p-3 capitalize border rounded-xl bg-gray-50 text-black '
                                        value={alumno.ocupacion}
                                        
                                    >
                                        <option value={alumno.ocupacion} >{alumno.ocupacion}</option>
                                    </select>
                                </div>
                                <div className='my-5'>
                                    <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='estado'>Estado</label>
                                    <select id="estado" className='w-full  mt-3 p-3 capitalize border rounded-xl bg-gray-50 text-black '
                                        value={alumno.estado}
                                        
                                    >
                                        <option value={alumno.estado} >{alumno.estado}</option>

                                    </select>
                                </div>

                            </div>

                            <div className="flex md:flex-row-reverse flex-col  justify-start">
                                <button
                                    className='bg-red-400 md:w-1/4  text-white  capitalize font-bold rounded-xl hover:cursor-pointer hover:bg-red-500 transition-colors p-3 md:mr-10 md:mt-0 mt-6'
                                    onClick={regresarAlumno}
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


export default VerAlumno