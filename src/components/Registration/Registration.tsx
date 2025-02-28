import React, { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../userSlice/userSlice';

const Register: React.FC = () => {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const dispatch = useDispatch();

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const createUserResponse = await fetch(
			'https://dummyjson.com/products/add',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email, password }),
			}
		);

		if (!createUserResponse.ok) {
			console.error('Ошибка при создании пользователя');
			return;
		}

		const Token = 'token-' + Date.now();
		localStorage.setItem('token', Token);
		dispatch(setUser({ name, id: Math.floor(Math.random() * 1000) }));
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Имя'
				value={name}
				onChange={e => setName(e.target.value)}
			/>
			<input
				type='email'
				placeholder='Email'
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<input
				type='password'
				placeholder='Пароль'
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
			<button type='submit'>Зарегистрироваться</button>
		</form>
	);
};

export default Register;
