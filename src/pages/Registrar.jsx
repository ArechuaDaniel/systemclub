import { useState } from 'react'


//import clienteAxios from '../config/clienteAxios';
import { Link, Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const Registrar = () => {

    const [cedulaInstructor, setCedulaInstructor] = useState('')
    const [correo, setCorreo] = useState('')
    const [primerApellido, setPrimerApellido] = useState('')
    const [segundoApellido, setSegundoApellido] = useState('')
    const [primerNombre, setPrimerNombre] = useState('')
    const [segundoNombre, setSegundoNombre] = useState('')
    const [direccion, setDireccion] = useState('')
    const [fechaRegistro, setFechaRegistro] = useState('')
    const [telefono, setTelefono] = useState('')
    const [password, setPassword] = useState('')
    const [repetirPassword, setRepetirPassword] = useState('')
    const [idClub, setIdClub] = useState('')
    const [alerta, setAlerta] = useState({})

    //const navigate = Navigate();

    const handleSubmit = async e => {
        e.preventDefault();
        

        if ([cedulaInstructor,correo, primerApellido, primerNombre, direccion, fechaRegistro, telefono,idClub, password].includes('')) {
            Swal.fire({
                title: "Todos los campos son obligatorios",
                //text: "That thing is still around?",
                icon: "warning"
              });
              return;
        }
        if (password != repetirPassword) {
            // setAlerta({
            //     msg: 'Los password no son iguales',
            //     error: true
            // })
            // return
        }
        if (password.length < 6) {
            // setAlerta({
            //     msg: 'El Password es muy corto, agrega minimo 6 caracteres',
            //     error: true
            // })
        }
        //setAlerta({})

        // INGRESAR EN LA API
        try {
            //todo: 
          //const {data} =  await clienteAxios.post(`/usuarios` ,{cedulaInstructor,correo,primerApellido,segundoApellido,primerNombre,segundoNombre,direccion,fechaRegistro,telefono,password,idClub})
          
          setAlerta({
            msg: data.msg,
            error: false
          })
          //navigate('/tkdsystem/')
            // setUsuario('')
            // setPassword('')
        } catch (error) {
            console.log(error);
            // setAlerta({
            //     msg: error.response.data.msg,
            //     error: true
            //   })
            
        }

    }
    //const { msg } = alerta;
    return (
        <>

            <div className='rounded-xl bg-white '>
                <h1 className='text-sky-600 font-black text-3xl capitalize px-10 mt-10'>Registrate al sistema </h1>

                {/* {msg && <Alerta alerta={alerta} />} */}
                <form
                    onSubmit={handleSubmit}
                    className=' shadow rounded-lg md:p-2 p-10 '>
                    <div className='md:grid md:grid-cols-3 md:gap-x-7'>
                    <div className='my-5'>
                        <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='cedulaInstructor'>Cédula*</label>
                        <input
                            type='text'
                            id='cedulaInstructor'
                            placeholder='Ingresa tu cédula'
                            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
                            value={cedulaInstructor}
                            onChange={e => setCedulaInstructor(e.target.value)}
                        />
                    </div>
                    <div className='my-5'>
                        <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='primerApellido'>Apellido Paterno*</label>
                        <input
                            type='text'
                            id='primerApellido'
                            placeholder='Ingresa tu Apellido Paterno'
                            className='capitalize w-full mt-3 p-3 border rounded-xl bg-gray-50'
                            value={primerApellido}
                            onChange={e => setPrimerApellido(e.target.value)}
                        />
                    </div>
                    <div className='my-5'>
                        <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='segundoApellido'>Apellido Materno</label>
                        <input
                            type='text'
                            id='segundoApellido'
                            placeholder='Ingresa tu Apellido Materno'
                            className='capitalize w-full mt-3 p-3 border rounded-xl bg-gray-50'
                            value={segundoApellido}
                            onChange={e => setSegundoApellido(e.target.value)}
                        />
                    </div>
                    <div className='my-5'>
                        <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='primerNombre'>Primer Nombre*</label>
                        <input
                            type='text'
                            id='primerNombre'
                            placeholder='Ingresa tu Primer Nombre'
                            className='capitalize w-full mt-3 p-3 border rounded-xl bg-gray-50'
                            value={primerNombre}
                            onChange={e => setPrimerNombre(e.target.value)}
                        />
                    </div>
                    <div className='my-5'>
                        <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='segundoNombre'>Segundo Nombre</label>
                        <input
                            type='text'
                            id='segundoNombre'
                            placeholder='Ingresa tu Segundo Nombre'
                            className='capitalize w-full mt-3 p-3 border rounded-xl bg-gray-50'
                            value={segundoNombre}
                            onChange={e => setSegundoNombre(e.target.value)}
                        />
                    </div>
                    <div className='my-5'>
                        <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='direccion'>Dirección*</label>
                        <input
                            type='text'
                            id='direccion'
                            placeholder='Ingresa tu Dirección'
                            className='capitalize w-full mt-3 p-3 border rounded-xl bg-gray-50'
                            value={direccion}
                            onChange={e => setDireccion(e.target.value)}
                        />
                    </div>
                    <div className='my-5'>
                        <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='fechaRegistro'>Fecha de Registro*</label>
                        <input
                            type='date'
                            id='fechaRegistro'
                            className=' w-full mt-3 p-3 border rounded-xl bg-gray-50'
                            value={fechaRegistro}
                            onChange={e => setFechaRegistro(e.target.value)}
                        />
                    </div>
                    <div className='my-5'>
                        <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='telefono'>Celular*</label>
                        <input
                            type='number'
                            id='telefono'
                            placeholder='Ingresa tu Celular'
                            className='capitalize w-full mt-3 p-3 border rounded-xl bg-gray-50'
                            value={telefono}
                            onChange={e => setTelefono(e.target.value)}
                        />
                    </div>
                    <div className='my-5'>
                        <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='idClub'>Club*</label>
                        <input
                            type='number'
                            id='idClub'
                            placeholder='Ingresa tu Club'
                            className='capitalize w-full mt-3 p-3 border rounded-xl bg-gray-50'
                            value={idClub}
                            onChange={e => setIdClub(e.target.value)}
                        />
                    </div>
                    <div className='my-5'>
                        <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='correo'>Email</label>
                        <input
                            type='email'
                            id='correo'
                            placeholder='Email de Registro'
                            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
                            value={correo}
                            onChange={e => setCorreo(e.target.value)}
                        />
                    </div>
                    <div className='my-5'>
                        <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='password'>Contraseña</label>
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
                    
                
                    <input
                        type='submit'
                        value='Crear Cuenta'
                        className='bg-sky-700 w-full  p-3 text-white  capitalize font-bold rounded-xl hover:cursor-pointer hover:bg-sky-800 grid col-span-1 col-end-4'
                        />
                        </div>
                </form>
                <nav className='mb-5'>
                        <Link
                            className='block text-center text-sky-700 capitalize text-sm'
                            to='/tkdsystem/'
                        >
                            Ya tengo cuenta
                        </Link>
                    </nav>
            </div>

        </>
    )
}

export default Registrar