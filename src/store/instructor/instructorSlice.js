import { createSlice } from '@reduxjs/toolkit';

export const instructorSlice = createSlice({
    name: 'instructor',
    initialState: {
        club: '',
        instructores: [],

        alumnos: [],


    },
    reducers: {
        setClub: (state, action) => {
            
            state.club = action.payload

        },
        setInstructores: (state, action) => {
            
            state.instructores = action.payload

        },
        setAlumnos: (state, action) => {
            
            state.alumnos = action.payload

        },
    }
});
// Action creators are generated for each case reducer function
export const { setAlumnos, setInstructores, setClub } = instructorSlice.actions;