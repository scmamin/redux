import React from 'react';
import '../../App.css';
import Nav from '../Nav/Nav';
const Home: React.FC = () => {
	return (
		<div>
			<Nav />
			<h1>Добро пожаловать!</h1>
			<p>Это главная страница</p>
		</div>
	);
};

export default Home;
