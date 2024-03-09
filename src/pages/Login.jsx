import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
//import { startLogin } from '../store/auth/thunks';


import Swal from 'sweetalert2'
import { useState } from 'react';
import { startLogin } from '../store/auth/thunks';


const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const auth = useSelector(state => state.auth)
    

    const [correo, setCorreo] = useState('')
    const [password, setPassword] = useState('')
    const [vista, setVista] = useState(false)
    

    //const isAuthenticated = useMemo(() => status === 'checking', [status]);

    const handleSubmit = async e => {
        e.preventDefault();


        if ([correo, password].includes('')) {
            Swal.fire({
                title: "Todos los campos son obligatorios",
                //text: "That thing is still around?",
                icon: "warning"
            });
            return;
        }

        try {
     
            const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/club/club/login`, { correo, password })
            
            

            //seteear en localstorage
            localStorage.setItem('token', data.token)
            localStorage.setItem('email', data.correo)
            localStorage.setItem('sesion', password)

            //navigate('/tkdsystem/api/')
            //todo:
            dispatch(startLogin({ correo, password }))
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Sesión Iniciada ¡Bienvenido!",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/systemclub/api/')
            //console.log(auth);

        } catch (error) {
            console.log(error);
            Swal.fire({
                title: error.response.data.msg,
                //text: "That thing is still around?",
                icon: "warning"
            });
            
        }
    }
    

    return (
        <>
            <div className='flex justify-center items-center h-screen '>
               
                <div
                    style={{ height: '575px' }}
                    className='rounded-xl bg-white shadow-2xl md:w-1/3'>
                    <h1 className='text-sky-600 font-bold text-3xl  p-5 m-5 text-center'>Ingreso al Sistema de Clubes </h1>
                    
                    <form
                        onSubmit={handleSubmit}
                        className='my-2 bg-white shadow rounded-lg p-10'>
                        <div className='my-2'>
                            <label className='capitalize text-gray-600 block text-xl font-bold' htmlFor='correo'>
                                <span className="material-symbols-outlined align-middle mr-2">
                                    mail
                                </span>
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
                                <span className="material-symbols-outlined align-middle">
                                    lock
                                </span>
                                Contraseña</label>
                            <div className='flex items-center '>
                                <input

                                    type={vista ? 'text' : 'password'}
                                    id='password'
                                    placeholder='Password de Registro'
                                    className='w-full mt-3 mr-1 p-3 border rounded-xl bg-gray-50'
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
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
                        <input
                            // disabled={isAuthenticated}
                            type='submit'
                            value='Iniciar Sesión'
                            className='bg-sky-700 w-full p-3 text-white  capitalize font-bold rounded-xl hover:cursor-pointer hover:bg-sky-800 transition-colors'
                        />
                    </form>
                    <nav>
                        <Link
                            className='text-slate-500 capitalize text-sm  hover:font-bold flex justify-center '
                            to='olvide-password'
                        >
                            Olvide constraseña
                        </Link>
                        
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Login