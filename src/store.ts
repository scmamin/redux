
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './components/userSlice/userSlice';
import todosReducer from './components/todoSlice/todoSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;