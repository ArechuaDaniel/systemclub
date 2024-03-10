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

        alumnos: [],


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
        addInstructor: (state, {payload}) => {
            state.instructores.push(payload)
        },
        setAlumnos: (state, action) => {
            
            state.alumnos = action.payload

        },
    }
});
// Action creators are generated for each case reducer function
export const { setPaises,setProvincias,setCantones,setParroquias,setAlumnos, setInstructores,addInstructor, setClub } = instructorSlice.actions;