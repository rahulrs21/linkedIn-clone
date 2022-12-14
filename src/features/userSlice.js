// CounterSlice.js code pasted here

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

const initialState = {
  value: 0,
  status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {   
        state.value = action.payload;   // payload is a object that we passed along with it .
        //state.user --> Once u create the account, the user no longer will be empty
        // Note: At video 2:30:35 --> he changed to 'state.value' to 'state.user'. But if I do that, I'll not get home page after register.
        //  So I kept as it is 'state.value'
    },
    logout: (state) => {
        state.value = null; // when we logout, we set the user get set to null;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  
});

export const { login, logout } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state) => state.counter.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.


export default userSlice.reducer;


// I WRITTEN by watching sonny sangha tut - 2:02:10 =============================================================

// import {createSlice} from '@reduxjs/toolkit'

// export const userSlice = createSlice({
//     name: "user",
//     initialState: {
//         user: null,        
//     },
//     reducers: {
//         login: (state, action) => {   
//             state.value = action.payload;   // payload is a object that we passed along with it 
//         },
//         logout: (state) => {
//             state.user = null; // when we logout, we set the user get set to null;
//         },
//     },
// });

// export const {login, logout} = userSlice.actions;

// // Selectors   --- Allowed to pulll information
// export const selectUser = (state) => state.user.user;

// export default userSlice.reducer;


// After this, INstall redux dev tools for chrome,
// so after install on chrome, goto inspect- 
