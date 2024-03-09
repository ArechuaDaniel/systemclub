

import { useDispatch, useSelector } from "react-redux";
//import { startLoadingAlumnos } from "../store/alumno/thunk";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Barra from "../components/Barra";
import { startLoadingAlumnos, startLoadingInstructor } from "../store/instructor/thunks";
//import { edadFecha } from "../helpers/formatearFecha";


const Side = () => {



    const dispatch = useDispatch();
    const { alumnos, instructores } = useSelector(state => state.instructor);
    const auth = useSelector(state => state.auth);

    useEffect(() => {

        dispatch(startLoadingAlumnos())
        dispatch(startLoadingInstructor())

    }, [])
    return (
        <>

            <div className="flex md:flex-row flex-col">
                <Barra />
                <div className=' overflow-y-auto h-screen shadow-2xl md:w-4/5'>

                    <div className="flex justify-between items-center m-10">

                        <h1 className='text-sky-600 font-black md:text-3xl text-2xl'>
                            <span className="material-symbols-outlined align-middle text-3xl mr-2">
                                sports_gymnastics
                            </span>
                            Club:  {auth.club}
                        </h1>
                        <NavLink
                            className=''
                            to={'/systemclub/api/perfil'}>

                            <button className='bg-sky-600 hover:bg-sky-700 p-3 text-white rounded-xl font-bold flex justify-center items-center capitalize'>
                                <span className="material-symbols-outlined align-middle mr-2">
                                    edit
                                </span> 
                                Ver información
                            </button>
                        </NavLink>
                    </div>
                    {/* NOMBRE DEL DIRECTOR */}
                    <div className='md:text-3xl text-2xl capitalize ml-10'>
                        <span className="material-symbols-outlined align-middle text-3xl mr-2">
                            account_circle
                        </span>
                        Bienvenido  {auth.director}
                    </div>



                    {/* TOTAL DE ALUMNOS E INSTRUCTORES */}
                    <div className="mt-10 flex justify-around items-center">
                        <div className="bg-sky-500  hover:bg-sky-600 hover:font-bold text-white cursor-default rounded-lg shadow-2xl ml-10 p-6  w-1/3">
                            <h3 className="md:text-3xl text-2xl flex flex-col items-center">Instructores  <span className="font-bold md:text-7xl text-4xl">{instructores.length}</span></h3>
                        </div>
                        <div className="bg-yellow-500  hover:bg-yellow-600 hover:font-bold text-white cursor-default rounded-lg shadow-2xl ml-10 p-6  w-1/3">
                            <h3 className="md:text-3xl text-2xl flex flex-col items-center">Alumnos  <span className="font-bold  md:text-7xl text-4xl">{alumnos.length}</span></h3>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}



export default Side