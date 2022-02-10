import { createSlice } from '@reduxjs/toolkit'

export  const counterSlice = createSlice({
    name: 'counter',
    initialState:{
        value:0
    },
    reducers:{
        arttır: (state) =>{
            state.value +=1;
        },
        azalt: (state) => {
            if(state.value >0){
                state.value -=1;
            }
        },
        incrementByAmount: (state,action) =>{
            if(state.value+Number(action.payload)>=0){
                state.value += Number(action.payload)

            }
        }
    }
})

export const {arttır,azalt,incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer
