import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../store/auth/authSlice';

import Swal from 'sweetalert2'
import { isAction } from '@reduxjs/toolkit';
const Barra = () => {
    const Links = [
        { name: "Home", link: "/systemclub/api/home", value: "dashboard" },
        { name: "Intsructores", link: "/systemclub/api/instructores", value: "groups" },
        { name: "Alumnos", link: "/systemclub/api/alumnos", value: "groups" },
        { name: "Categorías", link: "/systemclub/api/alumnos", value: "category" },
        { name: "Campeonatos", link: "/systemclub/api/alumnos", value: "rewarded_ads" },
        { name: "Asensos", link: "/systemclub/api/asensos", value: "license" },


        //{ name: "Cerrar Sesión", link: "/tkdsystem/" },
    ];
    const [open, setOpen] = useState(false);


    const navigate = useNavigate();
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const cerrarSesion = () => {
        Swal.fire({
            title: "¿Estas seguro de Cerrar Sesión?",
            //text: "You won't be able to revert this!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Cerrar Sesión",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Sesión Cerrada!",
                    //text: "Your file has been deleted.",
                    icon: "success"
                });

                dispatch(logout(auth.status))
                navigate('/systemclub/')
                localStorage.clear();
            }
        });


    }
    return (
        <>
            <div className={` md:overflow-x-auto  md:h-screen shadow-2xl md:w-1/5 `}>


                <div className='text-white  flex  flex-col md:justify-between  p-6 bg-sky-800 md:w-full'>
                    <NavLink
                        to={'/systemclub/api'}
                    >
                        <h1 className='text-white md:text-3xl text-xl md:font-normal font-bold capitalize'>Sistema tkd</h1>



                        <div className='flex mt-4 bg-sky-500 p-3 md:justify-center rounded-full'>
                            <span className="material-symbols-outlined align-middle mr-2">
                                account_circle
                            </span>
                            <p className='capitalize font-bold'>
                                {auth.director}
                            </p>
                        </div>
                    </NavLink>

                </div>

                <div className=" text-4xl text-white absolute top-6 right-10 cursor-pointer md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    <span className="material-symbols-outlined text-3xl">
                        {open ? 'close' : 'menu' }
                    </span>
                    {/* //<ion-icon name={open ? "close" : "menu"}></ion-icon> */}

                </div>
                <ul className={` bg-sky-800 text-white transition-all duration-150 ease-in absolute md:static  ${open ? "top-300" : "top-[-9090px]"}`}>
                    {
                        Links.map((Link) => (
                            <NavLink key={Link.name}

                                className={({ isActive }) => (isActive ? 'text-white font-black bg-white' : '')}
                                //className={isActive => !isActive & (`text-black font-bold bg-white `) }

                                to={Link.link}
                            >
                                <p className="p-6 hover:bg-white hover:text-sky-800 hover:font-bold text-2xl capitalize md:w-full w-screen hover:rounded-l-full ml-5">
                                    <span className="material-symbols-outlined align-middle text-3xl mr-2">
                                        {Link.value}
                                    </span>
                                    {Link.name}
                                </p>
                            </NavLink>
                        ))
                    }


                    <NavLink className={({ isActive }) => (isActive ? 'text-sky-800' : '')}
                        // target="_blank"
                        //to={'/tkdsystem/'}
                        onClick={cerrarSesion}
                    >
                        <p className="hover:bg-white hover:text-sky-800 hover:font-bold p-6 text-white text-2xl capitalize hover:rounded-l-full ml-5 ">
                            <span className="material-symbols-outlined text-3xl mr-2 align-middle">
                                logout
                            </span>Cerrar Sesión
                        </p>
                    </NavLink>
                </ul>

            </div>
        </>
    )
}

export default Barra