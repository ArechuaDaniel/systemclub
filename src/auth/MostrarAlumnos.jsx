import Barra from "../components/Barra";
import { useDispatch, useSelector } from "react-redux";
//import { deleteAlumno, startLoadingAlumnos } from "../store/alumno/thunk";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { edadFecha } from "../helpers/formatearFecha";
import Swal from "sweetalert2";
import { startLoadingAlumnos } from "../store/instructor/thunks";


const MostrarAlumnos = () => {


    const dispatch = useDispatch();
    const { alumnos, instructores } = useSelector(state => state.instructor);

    const [search, setSearch] = useState("")
    let numero = 0;

    const searcher = (e) => {
        setSearch(e.target.value)
    }

    let results = []
    if (!search) {
        results = alumnos
        //console.log(results); 
    }
    else {
        results = alumnos.filter((dato) => dato.primerNombre.toLowerCase().includes(search.toLocaleLowerCase()) || dato.primerApellido.toLowerCase().includes(search.toLocaleLowerCase()) || dato.cedulaAlumno.toLowerCase().includes(search.toLocaleLowerCase()) || dato.genero.toLowerCase().includes(search.toLocaleLowerCase()) || dato.cedulaInstructor.toLowerCase().includes(search.toLocaleLowerCase()))
    }

    useEffect(() => {

        dispatch(startLoadingAlumnos())
    }, [])
    const eliminar = (cedulaAlumno) => {
        //console.log(idHorario);
        Swal.fire({
            title: "¿Estas seguro de eliminar el Alumno?",
            //text: "You won't be able to revert this!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Eliminar",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Ha eliminado el Alumno!",
                    //text: "Your file has been deleted.",
                    icon: "success"

                });

                dispatch(deleteAlumno({ cedulaAlumno }))

            }
        });

    }

    return (
        <>

            <div className="flex md:flex-row flex-col">
                <Barra />

                <div className=' overflow-auto h-screen w-screen shadow-2xl md:w-4/5 '>
                    <div className="flex justify-around items-center m-10 ">
                        <h1 className='text-sky-600 font-black md:text-3xl text-2xl'>
                            <span className="material-symbols-outlined align-middle text-3xl mr-2">
                                groups
                            </span>
                            Datos  de los Alumnos </h1>
                        
                        <NavLink
                            className=''
                            to={'/tkdsystem/api/crear-alumno'}>

                            <button className='bg-sky-600 hover:bg-sky-700 p-3 text-white rounded-xl font-bold flex justify-center items-center capitalize'>
                                <span className="material-symbols-outlined align-middle mr-2">
                                    add_circle
                                </span>
                                Registrar Alumno
                            </button>
                        </NavLink>

                    </div>
                    

                



                    {/* BUSCAR ALUMNOS */}
                    <div className="flex md:flex-row flex-col-reverse items-center justify-evenly  shadow-md">
                        <div className="bg-gray-200 rounded-xl p-3  md:w-1/3 w-full flex justify-between ">

                            <input className=" bg-gray-200  uppercase w-full "
                                //value={search}
                                onChange={searcher}
                                type="text"
                                id="search"
                                placeholder="Buscar"
                            />
                            <span className="material-symbols-outlined align-middle">search</span>
                        </div>

                        <div className="mt-10 flex items-center">
                       
                        <div className="bg-yellow-500  hover:bg-yellow-600 hover:font-bold text-white cursor-default rounded-lg shadow-2xl ml-10 p-6 ">
                            <h3 className="md:text-3xl text-2xl flex flex-col items-center">Alumnos  <span className="font-bold  text-4xl">{alumnos.length}</span></h3>
                        </div>

                    </div>

                        <div className="flex md:justify-end justify-center p-3">
                            <div className="bg-gray-100 rounded-lg shadow-2xl w-48 ml-10 p-3 uppercase">
                                <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='genero'>Género</label>
                                <select
                                    className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                    name="genero"
                                    id='genero'

                                    onChange={searcher}
                                >
                                    <option value="">--Seleccione--</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Femenino">Femenino</option>
                                    {/* {
                                       alumnos.map( alumno => (
                                            <option key={alumno.genero} value={alumno.genero}>{alumno.genero}</option>
                                        ))
                                        } */}


                                </select>
                            </div>
                            <div className="bg-gray-100 rounded-lg shadow-2xl w-48 ml-10 p-3 uppercase">
                                <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='cedulaInstructor'>Instructor</label>
                                <select
                                    className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                    name="cedulaInstructor"
                                    id='cedulaInstructor'

                                    onChange={searcher}
                                >
                                    <option value="">--Seleccione--</option>
                                    {
                                        instructores.map(instructor => (
                                            <option key={instructor.cedulaInstructor} value={instructor.cedulaInstructor}>{`${instructor.primerNombre} ${instructor.primerApellido}`}</option>
                                        ))
                                    }


                                </select>
                            </div>

                        </div>

                    </div>


                    {/* ALUMNOS */}
                    <div className='flex justify-center m-5 shadow-2xl'>

                        <table className="table-fixed shadow-2xl bg-gray-200 rounded-2xl  m-4 ">
                            <thead className='bg-sky-600 text-white rounded-2xl'>
                                <tr>
                                    <th className=' w-16 text-center p-3'>#</th>
                                    <th className=' w-48 text-left p-3'>Nº Identificación</th>
                                    <th className=' w-48 text-left p-3' >Alumno</th>
                                    <th className=' w-32 text-left p-3' >Edad</th>
                                    <th className=' w-32 text-left p-3' >Género</th>
                                    <th className=' w-32 text-left p-3'>Estado</th>
                                    <th className=' w-48 text-left p-3'>Instructor</th>
                                    <th className=' w-32 text-left p-3'>Acción</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    results.map(alm => (
                                        <tr key={alm.cedulaAlumno} className="bg-gray-200 rounded-xl text-black p-2 m-2 hover:bg-gray-400">
                                            <td className=' text-center p-3 '> {numero = numero + 1}</td>
                                            <td className=' text-left p-3 '>{alm.cedulaAlumno} </td>
                                            <td className=' text-left p-3 capitalize'>{alm.primerApellido + ' ' + alm.primerNombre}</td>
                                            <td className='  text-left p-3'>{edadFecha(alm.fechaNacimiento) + ' '}años</td>
                                            <td className='  text-left p-3 capitalize'>{alm.genero}</td>
                                            <td className='  text-left p-3 capitalize'>{alm.estado}</td>
                                            <td className=' text-left p-3 capitalize'>{alm.nombreInstructor + ' ' + alm.apellidoInstructor}</td>

                                            <td className='  text-left p-3 flex'><Link to={`/systemclub/api/mostrar-alumno/${alm.cedulaAlumno}`}
                                                className="bg-sky-600 p-2 rounded-xl text-white uppercase font-bold hover:bg-sky-700 text-center mr-2 "><span className="material-symbols-outlined text-center align-middle ">
                                                    visibility
                                                </span></Link>

                                            
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MostrarAlumnos