import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../todoSlice/todoSlice';
import { RootState, AppDispatch } from '../../store';

const Todos: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const todos = useSelector((state: RootState) => state.todos.todos);
	const status = useSelector((state: RootState) => state.todos.status);
	const error = useSelector((state: RootState) => state.todos.error);
	console.log(todos);
	useEffect(() => {
		dispatch(fetchTodos());
	}, [dispatch]);

	if (status === 'loading') return <div>Загрузка...</div>;
	if (status === 'failed') return <div>Ошибка: {error}</div>;

	return (
		<div>
			{todos.map(todo => (
				<span key={todo.id}>{todo.todo}</span>
			))}
		</div>
	);
};

export default Todos;
