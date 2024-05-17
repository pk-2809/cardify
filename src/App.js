import { React, useEffect } from 'react';
import { Login } from './pages/login/login';
import { Home } from './pages/home/Home';
import { AddCard } from './pages/add-card/addcard';
import { Navbar } from './pages/shared/navbar/Navbar';
import { Routes, Route, useLocation } from "react-router-dom";
import './App.css';

function App() {
	useEffect(() => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
		window.addEventListener('resize', () => {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		});
	}, []);

	const location = useLocation();
	const shouldShowNavbar = location.pathname !== '/';

	return (
		<div className='bg-gradient flex justify-center'>
			<div className='w-512'>
				{shouldShowNavbar && <Navbar />}
				<div className='h-screen'>
					<Routes>
						<Route exact path="/" element={<Login />} />
						<Route exact path="/home" element={<Home />} />
						<Route exact path="/add-card" element={<AddCard />} />
					</Routes>
				</div>
				{shouldShowNavbar && <Navbar />}
			</div>
		</div>
	);
}

export default App;
