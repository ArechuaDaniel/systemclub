
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

//import clienteAxios from '../config/clienteAxios'
import Swal from 'sweetalert2'
import axios from 'axios'

const NuevoPassword = () => {
    const [tokenValido, setTokenValido] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordModificado, setPasswordModificado] = useState(false)
    const params = useParams();
    const { token } = params;

    const navigate = useNavigate();
    useEffect(() => {
        const comprobarToken = async () => {
            try {
                //todo:
                const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}/api/club/olvide-password/${token}`)
                //await clienteAxios(`/usuarios/olvide-password/${token}`)
                setTokenValido(true)
            } catch (error) {
                console.log(error);
                Swal.fire({
                    title: error.response.data.msg,
                    //text: "That thing is still around?",
                    icon: "warning"
                    
                });
                
            }
        }
        comprobarToken()
    }, [])
    const handleSubmit = async e => {
        e.preventDefault();
        if (password.length < 6) {
            Swal.fire({
                title: "El Password es muy corto, agrega minimo 6 caracteres",
                //text: "That thing is still around?",
                icon: "warning"
            });
            return;
            
        }
        try {
            const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/club/olvide-password/${token}`, { password })
            
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: data.msg,
                showConfirmButton: false,
                timer: 1500
            });
            setPasswordModificado(true)
            navigate('/systemclub')  
        } catch (error) {
            Swal.fire({
                title: error.response.data.msg,
                //text: "That thing is still around?",
                icon: "warning"
                
            });
            
        }
    }
 

    return (
        <>
            <div className='rounded-xl flex flex-col  justify-center items-center mx-auto  md:h-screen h-full'>
                <h1 className='text-sky-600 font-black text-3xl px-10 mt-10'>Reestablece tu Contraseña</h1>
                

                {tokenValido && (
                    <form
                        onSubmit={handleSubmit}
                        className='rounded-lg p-10 shadow-2xl bg-white'>

                        <div className='my-5'>
                            <label className=' text-gray-600  text-xl font-bold' htmlFor='password'>Nueva Contraseña</label>
                            <input
                                type='password'
                                id='password'
                                placeholder='Escribe tu nueva Contraseña'
                                className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>

                        <input
                            type='submit'
                            value='Guardar nuevo Password'
                            className='bg-sky-700 w-full py-3 text-white mb-5 font-bold rounded-xl hover:cursor-pointer hover:bg-sky-800 transition-colors'
                        />

                    </form>

                )}
                {passwordModificado && (
                    <nav className="mb-5">
                        <Link
                            className='block text-center text-slate-500 uppercase text-sm'
                            to='/systemclub/'
                        >
                            Inicia Sesión
                        </Link>
                    </nav>
                )}
            </div>
        </>
    )
}

export default NuevoPassword