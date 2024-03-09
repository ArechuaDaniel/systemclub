import axios from "axios";
import { checkingCredential, login, logout } from "./authSlice"

export const checkingAuthentication = (correo, password) => {
    return async(dispatch) => {
       dispatch(checkingCredential());
    }
}

export const endLogin = () => {
    return async(dispatch) => {
       dispatch(logout(auth.status));
    }
}

export const startLogin = ({correo, password}) => {
    
    return async(dispatch) => {

            // useEffect(() => {
            //  const autenticarUsuario = async () => {
                dispatch(checkingCredential());
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
                    const {data} = await axios(`${import.meta.env.VITE_BACKEND_URL}/api/club/club/perfil`, config)
                    
                    //console.log(data);
                    //console.log(data);
                        
                        dispatch(login({correo:data.correo,password:data.password,director:data.director,token, idClub: data.idClub, club: data.club}))
                        //dispatch(login(data))

                        
                    } catch (error) {
                        dispatch(logout('Credenciales Incorrectas'))
                        console.log(error);
                    }          
            //   }
            //   autenticarUsuario();
              
            // }, [])
     }
}
export const olvidePassword = ({correo, password}) => {
    
    return async(dispatch) => {
        dispatch(checkingCredential());
                

                try {
                    const {data} = await axios(`${import.meta.env.VITE_BACKEND_URL}/api/club/club/olvide-password`,{correo})
                    //const {data} = await clienteAxios.post(`/usuarios/olvide-password`,{correo})
                    //console.log(data);
                        
                        dispatch(login({correo:data.correo,password:data.password,director:data.director,token, idClub: data.idClub}))
                        //dispatch(login(data))

                        
                    } catch (error) {
                        dispatch(logout('Credenciales Incorrectas'))
                    }          
    }
}


