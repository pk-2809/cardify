import { React, useEffect } from 'react';
import { Login } from './pages/login/login';
import { Home } from './pages/home/Home';
import { AddCard } from './pages/add-card/addcard';
import { Navbar } from './pages/shared/navbar/Navbar';
import { BottomBar } from './pages/shared/bottom-bar/bottom-bar';
import { Routes, Route, useLocation } from "react-router-dom";
import { MantineProvider } from '@mantine/core';
import './App.css';
import '@mantine/core/styles.css';


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
			<MantineProvider
				theme={{
					components: {
						// Input: {
						// 	styles: (theme) => ({
						// 		input: {
						// 			borderWidth: '2px',
						// 			borderColor: '#E385EC',
						// 		},
						// 	}),
						// },
						// TextInput: {
						// 	styles: (theme) => ({
						// 		// input: {
						// 		//   borderWidth: '2px',
						// 		//   borderColor: '#004aad',
						// 		// },
						// 		label: {
						// 			color: '#fff',
						// 			fontWeight: 'bold',
						// 			fontSize: '14px'
						// 		}
						// 	}),
						// },
						Button: {
							styles: (theme) => ({
								root: {
									minWidth: '6.5rem',
									borderRadius: '0.7rem',
								},
							}),
						}
					},
				}}>
				<div className={shouldShowNavbar ? 'w-512' : 'w-full'}>
					{shouldShowNavbar && <Navbar />}
					<div className='h-screen'>
						<Routes>
							<Route exact path="/" element={<Login />} />
							<Route exact path="/home" element={<Home />} />
							<Route exact path="/add-card" element={<AddCard />} />
						</Routes>
					</div>
					{shouldShowNavbar && <BottomBar />}
				</div>
			</MantineProvider>
		</div>
	);
}

export default App;
