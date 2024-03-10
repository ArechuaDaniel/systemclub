import React from 'react'

import Barra from "../components/Barra";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { startLoadingClub, updatePasswordClub } from '../store/instructor/thunks';


const CambiarPassword = () => {
    
        const [password, setPassword] = useState('')
        const [repetirPassword, setRepetirPassword] = useState('')
        
        
    
        const dispatch = useDispatch();
        const {club} = useSelector(state => state.instructor)
        const navigate = useNavigate();
        const idClub = club.idClub
        
    
        //const navigate = Navigate();
        useEffect(() => {
          
            dispatch(startLoadingClub())
        }, [])
        
        // useEffect(() => {
          
        //     //dispatch(startLoadingInstructor())
        // }, [club])
        
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
                        title: "Ha regresado al Perfil!",
                        //text: "Your file has been deleted.",
                        icon: "success"
                    });
    
                    navigate('/systemclub/api/perfil')
    
                }
            });
    
        }
        const handleSubmit = async e => {
            e.preventDefault();
    
            if ([password, repetirPassword].includes('')) {
                Swal.fire({
                    title: "Todos los campos son obligatorios",
                    //text: "That thing is still around?",
                    icon: "warning"
                });
                return;
            }
            
            if (password.length < 6) {
                Swal.fire({
                    title: "El Password es muy corto, agrega minimo 6 caracteres",
                    //text: "That thing is still around?",
                    icon: "warning"
                });
                return;
                
            }
            if (password != repetirPassword) {
                Swal.fire({
                    title: "Los password no son iguales",
                    //text: "That thing is still around?",
                    icon: "warning"
                });
                
                return;
            }
            try {
    
               dispatch(updatePasswordClub({idClub,password}))
               navigate('/systemclub/api/perfil') 
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
    
                        <div className='rounded-xl bg-white mx-auto'>
                            <h1 className='text-sky-600 font-black md:text-3xl text-2xl px-10 mt-10'>
                                <span className="material-symbols-outlined align-middle text-3xl mr-2">
                                    person
                                </span>Actualizar Contraseña  </h1>
    
    
                            <form
                                onSubmit={handleSubmit}
                                className=' shadow rounded-lg md:p-2 p-10 m-10'>
    
                                <div className='my-5'>
                                    <label className=' text-gray-600  text-xl font-bold ' >Nombre del Club</label>
                                    <input
                                        type='text'
                                        id='club'
                                        className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                        value={club.club}
                                    />
                                </div>
                               
                                
                                <div className='my-5'>
                                    <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='password'>Cambiar contraseña</label>
                                    <input
                                        type='password'
                                        id='password'
                                        placeholder='Contraseña de Registro'
                                        className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className='my-5'>
                                    <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='password2'>Repetir Contraseña</label>
                                    <input
                                        type='password'
                                        id='password2'
                                        placeholder='Repetir Contraseña'
                                        className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                        value={repetirPassword}
                                        onChange={e => setRepetirPassword(e.target.value)}
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
    
    
    
    

export default CambiarPassword