import React, { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../userSlice/userSlice';

const Login: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const authResponse = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: name, password }),
    });

    if (!authResponse.ok) {
      console.error('Ошибка авторизации');
      return;
    }

    const authData = await authResponse.json();
    localStorage.setItem('token', authData.token);
    dispatch(setUser({ name, id: authData.id }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Имя"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Войти</button>
    </form>
  );
};

export default Login;