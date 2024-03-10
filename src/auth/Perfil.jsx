import Barra from "../components/Barra";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { formatearFecha } from "../helpers/formatearFecha";
import { startLoadingClub} from '../store/instructor/thunks';

const Perfil = () => {


    const dispatch = useDispatch();
    const { club } = useSelector(state => state.instructor)

    useEffect(() => {

        dispatch(startLoadingClub())
    }, [])

    return (
        <>

            <div className="flex md:flex-row flex-col">
                <Barra />

                <div className=' shadow-2xl md:w-4/5 '>

                    <div className='rounded-xl bg-white '>
                        <h1 className='text-sky-600 font-black md:text-3xl text-2xl px-10 mt-10'>
                            <span className="material-symbols-outlined align-middle text-3xl mr-2">
                            sports_gymnastics
                            </span>Datos generales del Club
                        </h1>

                        {/* CUENTA */}
                        <div className='flex md:flex-row flex-col justify-center'>
                            {/* INFORMACIÓN */}
                            <div className='shadow-2xl bg-white p-10 md:w-1/3 m-10 '>
                                <div className='flex flex-col justify-center items-center'>

                                    <img className='h-40 w-40 rounded-3xl ' src="https://scontent.fuio14-1.fna.fbcdn.net/v/t39.30808-6/305155729_616573516493016_1951109240157697607_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MbEzKNlH9H4AX9Y9sdN&_nc_ht=scontent.fuio14-1.fna&oh=00_AfBom7G9vaFQAu0e84-Y_NJ-bW2pAQsuEPMi4pwr0X9T0w&oe=65F002B1" alt="" />
                                    <p className='capitalize bg-sky-500 p-3 text-white font-bold my-4 rounded-2xl'>
                                    <span className="align-middle mr-2 material-symbols-outlined">
                                        sports_gymnastics
                                    </span> {club.club}
                                    </p>
                                </div>
                                
                                <p className='mt-2'>
                                    <span className="align-middle mr-2 material-symbols-outlined">
                                        pin_drop
                                    </span>
                                    {`${club.pais}, ${club.provincia}, ${club.canton}`}
                                    
                                </p>
                                <p className=''>
                                    <span className="align-middle mr-2 material-symbols-outlined">
                                        mail
                                    </span>
                                    {club.correo}
                                </p>
                                <p className=''>
                                    <span className="align-middle mr-2 material-symbols-outlined">
                                        phone_iphone
                                    </span>
                                    {club.telefono}
                                </p>
                            </div>

                            {/* DETEALLE CUENTA */}
                            <div className=''>
                            {/* INFORMACIÓN     */}
                            <div className='shadow-2xl bg-white p-10  m-10  '>
                                <h2 className='flex justify-between font-bold'>Detalle de la cuenta
                                    <NavLink
                                        to={'/systemclub/api/editar-club'}
                                    >

                                        <span className="material-symbols-outlined align-middle mr-2">
                                            edit_square
                                        </span>
                                    </NavLink>
                                </h2>
                                <div className='mt-4'>
                                    <p className='capitalize font-bold'>
                                        Director:
                                        <span className='font-normal'>
                                            {` ${club.director} `}
                                        </span>
                                    </p>
                                    <p className='capitalize font-bold'>
                                        Club:
                                        <span className='font-normal'>
                                            {` ${club.club}`}
                                        </span>
                                    </p>
                                    <p className='capitalize font-bold'>
                                        Fecha Afiliación:
                                        <span className='font-normal'>
                                            {` ${formatearFecha(club.fechaAfiliacion)}`}
                                        </span>
                                    </p>
                                    <p className='capitalize font-bold'>
                                        Parroquia:
                                        <span className='font-normal'>
                                            {` ${club.parroquia}`}
                                        </span>
                                    </p>
                                    <p className='capitalize font-bold'>
                                        Dirección:
                                        <span className='font-normal'>
                                            {` ${club.direccion}`}
                                        </span>
                                    </p>
                                    
                                </div>
                            </div>

                            {/* CONTRASEÑA */}
                            <div className='shadow-2xl bg-white p-10  m-10  '>
                                <h2 className='flex justify-between font-bold'>Cambiar Contraseña
                                    <NavLink
                                        to={'/systemclub/api/cambiar-password'}
                                    >

                                        <span className="material-symbols-outlined align-middle mr-2">
                                            edit_square
                                        </span>
                                    </NavLink>
                                </h2>
                            </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}


export default Perfil
