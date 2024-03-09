import Swal from "sweetalert2"
import { setAlumnos, setClub, setInstructores } from "./instructorSlice"
import axios from "axios"

export const startLoadingClub = () => {

    return async (dispatch, getState) => {


        const token = localStorage.getItem('token')

        if (!token) {
            return
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }
        
        try {
            const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}/api/club/usuario-club`, config)
            //console.log(data);

           
            const club = data;
            //club.push({ id: data.idClub});

            // data.forEach(dato => {
            //     club.push({ id: dato.idClub, ...dato });

            // })
            
            dispatch(setClub(club))
            //console.log(alumnos);
            //return alumnos;


        } catch (error) {
            console.log(error);
            Swal.fire({
            //title: error.response.data.message,
            //text: "That thing is still around?",
            icon: "warning"
            
        });
        }
    }
}
export const updateClub= ({club, director, fechaAfiliacion, telefono, correo, idParroquia, direccion, idClub }) => {

    return async (dispatch, getState) => {

        const token = localStorage.getItem('token')
        // console.log(cedulaInstructor,primerApellido,segundoApellido,primerNombre,segundoNombre,fechaNacimiento,direccion,fechaRegistro,telefono,idClub,correo, genero);
        if (!token) {
            return
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }

        try {
            const { data } = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/club/usuario-club/${idClub}`, { club, director, fechaAfiliacion, telefono, correo, idParroquia, direccion}, config)
            
        
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "El Club se ha actualizado con exito",
                showConfirmButton: false,
                timer: 1500
            });

            
        } catch (error) {
            console.log(error);
            Swal.fire({
            title: error.response.data.message,
            //text: "That thing is still around?",
            icon: "warning"
            
        });
        }
    }
}

export const startLoadingInstructor = () => {

    return async (dispatch, getState) => {


        const token = localStorage.getItem('token')

        if (!token) {
            return
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }
        
        try {
            const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}/api/club/instructor`, config)
            //console.log(data);

            const { cedulaAlumno } = getState().auth;
            const instructores = [];
            
            data.forEach(dato => {
                instructores.push({ id: dato.idClub, ...dato });

            })
            
            dispatch(setInstructores(instructores))
            //console.log(alumnos);
            //return alumnos;


        } catch (error) {
            console.log(error);
            Swal.fire({
            //title: error.response.data.message,
            //text: "That thing is still around?",
            icon: "warning"
            
        });
        }
    }
}
export const updateInstructor = ({cedulaInstructor,primerApellido,segundoApellido,primerNombre,segundoNombre,fechaNacimiento,direccion,fechaRegistro,telefono,idClub,correo, genero }) => {

    return async (dispatch, getState) => {

        const token = localStorage.getItem('token')
        // console.log(cedulaInstructor,primerApellido,segundoApellido,primerNombre,segundoNombre,fechaNacimiento,direccion,fechaRegistro,telefono,idClub,correo, genero);
        if (!token) {
            return
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }

        try {
            const { data } = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/instructor/${cedulaInstructor}`, { primerApellido,segundoApellido,primerNombre,segundoNombre,fechaNacimiento,direccion,fechaRegistro,telefono,idClub,correo, genero}, config)
            
        
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "El instructor se ha actualizado con exito",
                showConfirmButton: false,
                timer: 1500
            });

            
        } catch (error) {
            console.log(error);
            Swal.fire({
            title: error.response.data.message,
            //text: "That thing is still around?",
            icon: "warning"
            
        });
        }
    }
}
export const updatePassword = ({cedulaInstructor,password }) => {

    return async (dispatch, getState) => {

        const token = localStorage.getItem('token')

        if (!token) {
            return
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }

        try {
            const { data } = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/instructor/cambiar-password/${cedulaInstructor}`, { password }, config)
            
            //console.log(data);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "La contraseña se ha actualizado con exito",
                showConfirmButton: false,
                timer: 1500
            });

            
        } catch (error) {
            console.log(error);
            Swal.fire({
            title: error.response.data.message,
            //text: "That thing is still around?",
            icon: "warning"
            
        });
        }
    }
}


export const startLoadingAlumnos = () => {

    return async (dispatch, getState) => {


        const token = localStorage.getItem('token')

        if (!token) {
            return
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }

        try {
            const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}/api/club/alumnos`, config)
            //console.log(data);
            const { cedulaAlumno } = getState().auth;
            const alumnos = [];
            data.forEach(dato => {
                alumnos.push({ id: dato.cedulaAlumno, ...dato });

            })
            dispatch(setAlumnos(alumnos))
            //console.log(alumnos);
            //return alumnos;


        } catch (error) {
            Swal.fire({
            title: error.response.data.message,
            //text: "That thing is still around?",
            icon: "warning"
            
        });
        }
    }
}
