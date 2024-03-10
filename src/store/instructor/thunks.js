import Swal from "sweetalert2"
import { addInstructor, setAlumnos, setCantones, setClub, setInstructores, setPaises, setParroquias, setProvincias } from "./instructorSlice"
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
export const updateClub= ({clubs, director, fechaAfiliacion, telefono, correo, idParroquia, direccion, idClub }) => {

    return async (dispatch, getState) => {

        const token = localStorage.getItem('token')
        //console.log(clubs, director, fechaAfiliacion, telefono, correo, idParroquia, direccion, idClub);
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
            const { data } = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/club/usuario-club/${idClub}`, { clubs, director, fechaAfiliacion, telefono, correo, idParroquia, direccion}, config)
            //console.log(data); 
        
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
export const updatePasswordClub = ({idClub,password }) => {

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
            const { data } = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/club/usuario-club/cambiar-password/${idClub}`, { password }, config)
            
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
export const startCreateInstructor = ({cedulaInstructor,primerApellido,segundoApellido,primerNombre,segundoNombre,fechaNacimiento,direccion,idParroquia,fechaRegistro,telefono, genero, tipoSangre, correo, password}) => {
    
    return async(dispatch) => {

            // useEffect(() => {
            //  const autenticarUsuario = async () => {
                
                const token = localStorage.getItem('token')
                    
                if (!token) {
                    return
                }
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization":`Bearer ${token}` 
                    }
                }
                

                try {
                    const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/club/usuarios-instructor`,{cedulaInstructor,primerApellido,segundoApellido,primerNombre,segundoNombre,fechaNacimiento,direccion,idParroquia,fechaRegistro,telefono, genero, tipoSangre, correo, password}, config)

                    const idHorario = data.id;
                    //console.log(data.id);
                    dispatch(addInstructor({id:data.cedulaInstructor,primerApellido,segundoApellido,primerNombre,segundoNombre,fechaNacimiento,direccion,idParroquia,fechaRegistro,telefono, genero, tipoSangre, correo, password}))
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: data.msg,
                        showConfirmButton: false,
                        timer: 4500
                    });
                      

                        
                    } catch (error) {
                        
                        console.log(error);
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
export const startLoadingPaises = () => {

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
            const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}/api/ubicacion`, config)
            console.log(data);
            const paises = [];
            
            data.forEach(dato => {
                paises.push({ id: dato.idPais, ...dato });
            })
            
            dispatch(setPaises(paises))
            //console.log(alumnos);
            //return alumnos;


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

export const startLoadingProvincias = () => {

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
            const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}/api/ubicacion/provincia`, config)
            //console.log(data);
            const provincias = [];
            
            data.forEach(dato => {
                provincias.push({ id: dato.idProvincia, ...dato });
            })
            
            dispatch(setProvincias(provincias))
            //console.log(alumnos);
            //return alumnos;


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

export const startLoadingCantones = ({idProvincia}) => {

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
            const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}/api/ubicacion/canton/${idProvincia}`, config)
            
            const cantones = [];
            
            data.forEach(dato => {
                cantones.push({ id: dato.idCanton, ...dato });
            })
            
            dispatch(setCantones(cantones))
            //console.log(alumnos);
            //return alumnos;


        } catch (error) {
            console.log(error);
            
        
        }
    }
}

export const startLoadingParroquias = ({idCanton}) => {

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
            const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}/api/ubicacion/parroquia/${idCanton}`, config)
            
            const parroquias = [];
            
            data.forEach(dato => {
                parroquias.push({ id: dato.idParroquia, ...dato });
            })
            
            dispatch(setParroquias(parroquias))
            


        } catch (error) {
            console.log(error);
            
            
        
        }
    }
}
