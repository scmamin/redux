import './App.css';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Todos from './components/Todos/Todos';
import Home from './components/Home/Home';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import store from './store';
import Nav from './components/Nav/Nav';

function App() {
	return (
		<Provider store={store}>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/register' element={<Registration />} />
				<Route path='/login' element={<Login />} />
				<Route path='/todos' element={<Todos />} />
			</Routes>
		</Provider>
	);
}

export default App;
