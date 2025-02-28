import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../types';

interface TodosState {
	todos: Todo[];
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
}

const initialState: TodosState = {
	todos: [],
	status: 'idle',
	error: null,
};

export const fetchTodos = createAsyncThunk<
	Todo[],
	void,
	{ rejectValue: string }
>('todos/fetchTodos', async (_, { rejectWithValue }) => {
	const token = localStorage.getItem('token');
	if (!token) return rejectWithValue('Токен не найден');

	const response = await fetch('https://dummyjson.com/todos', {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	if (!response.ok) return rejectWithValue('Ошибка при получении списка дел');

	const data = await response.json();
	return data.todos as Todo[];
});

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	 reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchTodos.pending, state => {
				state.status = 'loading';
			})
			.addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
				state.status = 'succeeded';
				state.todos = action.payload;
			})
			.addCase(fetchTodos.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload || 'Неизвестная ошибка';
			});
	},
});

export default todosSlice.reducer;
