import axios from 'axios';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';


const OlvidePassword = () => {

    const [correo, setCorreo] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        if ([correo].includes('')) {
            Swal.fire({
                title: "El Email es obligatorio",
                //text: "That thing is still around?",
                icon: "warning"
              });
              return;
        }
        try {
            
            const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/club/olvide-password`,{correo})
            console.log(data);
            //const {data} = await clienteAxios.post(`/usuarios/olvide-password`,{correo})
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Hemos enviado un Email con las instrucciones revisa tu correo!",
                showConfirmButton: false,
                timer: 3500
            });
            navigate('/systemclub')
            
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: error.response.data.msg,
                text: "That thing is still around?",
                icon: "warning"
            });
        }
        

    }
    
    return (
        <>
            <div className='flex md:flex-row  justify-center items-center mx-auto  md:h-screen h-full'>

                <div

                    className='rounded-xl bg-white shadow-2xl'>
                    <h1 className='text-sky-600 font-black text-3xl  px-10 mt-10'>Recupera tu acceso al Sistema </h1>
                    

                    <form
                        onSubmit={handleSubmit}
                        className='my-10 bg-white shadow rounded-lg p-10'>
                        <div className='my-5'>
                            <label className=' text-gray-600 block text-xl font-bold' htmlFor='correo'>
                            <span className="material-symbols-outlined align-middle mr-2">
                                    mail
                                </span>Email</label>
                            <input
                                type='email'
                                id='correo'
                                placeholder='Correo de Registro'
                                className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                value={correo}
                                onChange={e => setCorreo(e.target.value)}
                            />
                        </div>

                        <input
                            type='submit'
                            value='Enviar Instrucciones'
                            className='bg-sky-700 w-full p-3 text-white  capitalize font-bold rounded-xl hover:cursor-pointer hover:bg-sky-800 transition-colors'
                        />

                    </form>
                    <nav className='mb-5'>
                        <Link
                            className='block text-center text-slate-500 capitalize text-sm'
                            to='/systemclub/'
                        >
                            Ya tengo cuenta
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default OlvidePassword