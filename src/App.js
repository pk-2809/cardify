
import { React, useEffect } from 'react';
import Login from './assets/Login.png';
import Login1 from './assets/Login1.png';
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
		<div className="h-screen overflow-hidden bg-gray-300 flex flex-col-reverse md:flex-row">
			<div className="bg-white w-full md:w-1/2 h-3/5 md:h-screen grid place-items-center">
				<div className="w-4/5 sm:w-3/5 ">
					<h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl">Welcome Back</h1>
					<div className="my-1 md:my-2 text-sm md:text-base lg:text-lg">Email</div>
					<input type="email" className="p-3 md:p-4 w-full rounded-xl border border-gray-300 border-solid bg-slate-50 text-slate-400" placeholder="Example@email.com" />
					<div className="my-1 md:my-2 text-sm md:text-base lg:text-lg">OTP</div>
					<input type="tel" className="p-3 md:p-4 w-full rounded-xl border border-gray-300 border-solid bg-slate-50 text-slate-400" placeholder="Enter OTP" />
					<div className="w-full text-center">
						<button className="mt-5 p-4 w-3/5 text-xs sm:text-base lg:text-lg text-center text-white rounded-xl bg-slate-800">Get OTP</button>
					</div>
				</div>
			</div>
			<div className="bg-gray-200 w-full md:w-1/2 h-2/5 md:h-screen bg-no-repeat bg-center hidden md:block" style={{ backgroundImage: `url(${Login})` }}>
			</div>
			<div className="bg-gray-200 w-full md:w-1/2 h-2/5 md:h-screen bg-no-repeat bg-center md:hidden" style={{ backgroundImage: `url(${Login1})` }}>
			</div>
		</div>
	);
}


export default App;
