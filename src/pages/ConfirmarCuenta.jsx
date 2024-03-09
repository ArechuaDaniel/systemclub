import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
//import clienteAxios from "../config/clienteAxios"



const ConfirmarCuenta = () => {
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false)

  const params = useParams();
  const { id } = params;
  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `/usuarios/confirmar/${id}`

        //const data = await clienteAxios(url)
        setAlerta({
          msg: data.msg,
          error: false
        })
        setCuentaConfirmada(true)
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }
    }
    confirmarCuenta()
  }, [])
  const { msg } = alerta

  return (
    <div className='rounded-xl flex md:flex-row  justify-center items-center mx-auto  bg-gray-200 md:h-screen h-full'>
      <div

        className='rounded-xl bg-white'>
        <h1 className='text-sky-600 font-black text-3xl uppercase px-10 mt-10'>Confirma tu cuenta</h1>
        <div className="mt-20 md:mt-10 shadow-lg px-5 py-10 rounded-xl bg-slate-200">
          {msg && <Alerta alerta={alerta} />}
          {cuentaConfirmada && (
            <nav className="mb-5">
              <Link
                className='block text-center text-slate-500 uppercase text-sm'
                to='/tkdsystem/'
              >
                Inicia Sesión
              </Link>
            </nav>
          )}
        </div>
        </div>
      </div>
      )
}

      export default ConfirmarCuenta