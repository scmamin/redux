import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types';
const initialState: User = {
	name: '',
	id: 0,
	isAuthenticated: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<{ name: string; id: number }>) => {
			state.name = action.payload.name;
			state.id = action.payload.id;
			state.isAuthenticated = true;
		},
		logout: state => {
			state.name = '';
			state.id = 0;
			state.isAuthenticated = false;
			localStorage.removeItem('token');
		},
	},
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
