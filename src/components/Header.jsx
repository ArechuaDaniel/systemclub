import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const auth = useSelector(state => state.auth);
  return (
    <>

      <div className='text-white  flex md:flex-row flex-col md:justify-between md:items-center p-6 bg-sky-900 '>
        <NavLink
          to={'/tkdsystem/api'}
        >
          <h1 className='text-white md:text-5xl text-xl md:font-normal font-bold capitalize'>Sistema tkd</h1>
        </NavLink>
        <div className='flex'>
        <span className="material-symbols-outlined align-middle mr-2">
            account_circle
          </span>
        <p className='capitalize font-bold'>
          {auth.primerNombre}{' '}{auth.primerApellido}
        </p>
        </div>
      </div>

    </>
  )
}

export default Header