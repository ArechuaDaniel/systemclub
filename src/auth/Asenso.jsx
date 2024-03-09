import Header from '../components/Header'
import Barra from '../components/Barra'
import { Link, NavLink, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
//import { deleteAsenso, startLoadingAsensos } from '../store/alumno/thunk'
import { formatearFecha } from '../helpers/formatearFecha'
import Swal from 'sweetalert2'

const Asenso = () => {
    const params = useParams();

    const dispatch = useDispatch();
    const { asensos } = useSelector(state => state.alumno);

    const [fechaAsenso, setFechaAsenso] = useState('')

    useEffect(() => {

        dispatch(startLoadingAsensos())
    }, [])

    console.log(asensos);
    const [search, setSearch] = useState("")
    const searcher = (e) => {
        setSearch(e.target.value)
        setFechaAsenso(e.target.value)
    }
    let results = []
    let numero = 0;
    if (!search) {
        results = asensos
        //console.log(results); 
    }
    else {
        results = asensos.filter((dato) => dato.primerNombre.toLowerCase().includes(search.toLocaleLowerCase()) || dato.primerApellido.toLowerCase().includes(search.toLocaleLowerCase()) || dato.cedulaAlumno.toLowerCase().includes(search.toLocaleLowerCase()) || dato.fechaAsenso.toLowerCase().includes(search.toLocaleLowerCase()))
    }
    const eliminar = (idAsenso) => {
        //console.log(idHorario);
        Swal.fire({
            title: "¿Estas seguro de eliminar la Asenso?",
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
                    title: "Ha eliminado el Asenso!",
                    //text: "Your file has been deleted.",
                    icon: "success"
                    
                });

                //navigate('/tkdsystem/api/horarios')
                
                dispatch(deleteAsenso({idAsenso}))
            }
        });
        
    }
    return (
        <>

            <div className="flex md:flex-row flex-col">

                <Barra />
                <div className=' md:overflow-y-auto overflow-x-auto h-screen shadow-2xl md:w-4/5'><div className="flex justify-around items-center m-10">
                    <h1 className='text-sky-600 font-black md:text-3xl text-2xl'>
                            <span className="material-symbols-outlined align-middle text-3xl mr-2">
                                license
                            </span>
                            Asensos</h1>
                        <NavLink
                            className=''
                            to={'/tkdsystem/api/registrar-asenso'}>

                            <button className='bg-sky-600 p-3 text-white rounded-xl font-bold flex justify-center items-center capitalize '>
                                <span className="material-symbols-outlined mr-2">
                                    add_circle
                                </span>
                                Registrar Asenso
                            </button>
                        </NavLink>
                    </div>

                    {/* BUSCAR ALUMNOS */}
                    <div className="flex md:flex-row  items-center justify-evenly  shadow-md">
                        <div className="bg-gray-200 rounded-xl p-3  md:w-1/3 w-full flex justify-between ">

                            <input className=" bg-gray-200  uppercase w-full "
                                value={search}
                                onChange={searcher}
                                type="text"
                                id="search"
                                placeholder="Buscar"
                            />
                            <span className="material-symbols-outlined align-middle">search</span>
                        </div>
                        <div className="flex md:justify-end justify-center p-3">
                            <div className="bg-gray-100 rounded-lg shadow-2xl w-48 ml-10 p-3 uppercase">
                                <input
                                    type='month'
                                    id='fechaAsenso'
                                    className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                    value={(fechaAsenso)}
                                    onChange={searcher}
                                />
                            </div>
                        </div>
                    </div>
                    {/* HORARIOS */}
                    <div className='flex justify-center m-5 shadow-2xl'>

                        <table className="table-fixed shadow-2xl bg-gray-200 rounded-2xl  m-4">
                            <thead>
                                <tr className='bg-sky-600 text-white rounded-2xl'>
                                    <th className=' w-16 text-center p-3 capitalize '>#</th>
                                    <th className=' w-32 text-left p-3 capitalize' >Fecha</th>
                                    <th className=' w-48 text-left p-3 capitalize '>Nº Identificación</th>
                                    <th className=' w-48 text-left p-3 capitalize '>Alumno</th>
                                    <th className=' w-48 text-left p-3 capitalize'>Cinturón</th>
                                    <th className=' w-28 text-left p-3 capitalize'>Color</th>
                                    <th className=' w-28 text-left p-3 capitalize'>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    results.map(asenso => (
                                        <tr key={asenso.idAsenso} className="bg-gray-200 rounded-xl text-black p-2 m-2 hover:bg-gray-400 ">
                                            <td className=' text-center p-3 '> {numero = numero + 1}</td>
                                            <td className='  text-left p-3 '>{formatearFecha(asenso.fechaAsenso)}</td>
                                            <td className=' text-left p-3 '>{asenso.cedulaAlumno} </td>
                                            <td className=' text-left p-3 capitalize'>{asenso.primerApellido + ' ' + asenso.primerNombre}</td>
                                            <td className='  text-left p-3 capitalize'>{asenso.asensoColor}

                                            </td>
                                            <td >



                                                {
                                                    asenso.color2 ?
                                                        <div className=' w-full'>
                                                            <span style={{ backgroundColor: asenso.color }} className={`px-5`}>

                                                            </span>
                                                            <span style={{ backgroundColor: asenso.color2 }} className={`px-5`}>

                                                            </span>
                                                        </div>
                                                        :

                                                        <div className='w-full'>
                                                            <span style={{ backgroundColor: asenso.color }} className={`px-10`}>

                                                            </span>

                                                        </div>
                                                }

                                            </td>

                                            <td className='  text-left p-3 flex'><Link to={`/tkdsystem/api/editar-asenso/${asenso.idAsenso}`}
                                                className="bg-sky-600 p-2 rounded-xl text-white uppercase font-bold hover:bg-sky-700 text-center mr-2"><span className="material-symbols-outlined text-center align-middle ">
                                                    edit_square
                                                </span></Link>
                                                <Link 
                                                
                                                className='bg-red-500 p-2 rounded-xl text-white uppercase font-bold hover:bg-red-600 text-center'
                                                onClick={() => eliminar(asenso.idAsenso)}
                                                >
                                                <span className="material-symbols-outlined align-middle">
                                                    delete
                                                </span>
                                                </Link>
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



export default Asenso