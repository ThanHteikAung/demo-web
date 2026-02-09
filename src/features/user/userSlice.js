import { createSlice } from '@reduxjs/toolkit';

// Initial state - no user logged in initially
const initialState = {
  currentUser: null
};

// Create the user slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      return { ...state, currentUser: action.payload };
    }
  }
});

// Export the reducer and actions
export const userReducer = userSlice.reducer;
export const { setCurrentUser } = userSlice.actions;

// Export a selector to get the current user from state
export const selectCurrentUser = (state) => state.user.currentUser;
