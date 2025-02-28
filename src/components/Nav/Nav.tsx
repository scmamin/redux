import React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to='/register'>Регистрация</Link>
				</li>
				<li>
					<Link to='/login'>Логин</Link>
				</li>
				<li>
					<Link to='/todos'>Todos</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
