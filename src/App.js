import { React, useEffect } from 'react';
import { Login } from './pages/login';
import { Routes, Route } from "react-router-dom";
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

	return (
		<Routes>
			<Route exact path="/" element={<Login />} />
		</Routes>
	);
}

export default App;
