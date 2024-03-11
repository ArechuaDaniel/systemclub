import { createSlice } from '@reduxjs/toolkit';

export const instructorSlice = createSlice({
    name: 'instructor',
    initialState: {
        paises: [],
        provincias: [],
        cantones: [],
        parroquias: [],

        club: '',
        instructores: [],
        verInstructor: '',

        alumnos: [],
        alumno: '',


    },
    reducers: {
        setPaises: (state, action) => {
            
            state.paises = action.payload

        },
        setProvincias: (state, action) => {
            
            state.provincias = action.payload

        },
        setCantones: (state, action) => {
            
            state.cantones = action.payload

        },
        setParroquias: (state, action) => {
            
            state.parroquias = action.payload

        },
        setClub: (state, action) => {
            
            state.club = action.payload

        },
        setInstructores: (state, action) => {
            
            state.instructores = action.payload

        },
        setInstructor: (state, action) => {
            
            state.verInstructor = action.payload

        },
        addInstructor: (state, {payload}) => {
            state.instructores.push(payload)
        },
        setAlumnos: (state, action) => {
            
            state.alumnos = action.payload

        },
        setAlumno: (state, action) => {
            
            state.alumno = action.payload

        },
        eliminaInstructor: (state, {payload}) => {
            
            const instructores = payload
            const {cedulaInstructor} = instructores
            
            //console.log(horarios);
            const foundInstructor = state.instructores.find(instructor => instructor.cedulaInstructor === instructores.cedulaInstructor)
            
            if (foundInstructor) {
                state.instructores.splice(state.instructores.indexOf(foundInstructor),1);
                //console.log(foundHorario);
            }
        },
    }
});
// Action creators are generated for each case reducer function
export const { setPaises,setProvincias,setCantones,setParroquias,setAlumnos,setAlumno, setInstructores,setInstructor,addInstructor, setClub, eliminaInstructor } = instructorSlice.actions;