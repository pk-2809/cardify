import React from 'react';
import Login from './assets/Login.png';
import Login1 from './assets/Login1.png';
import './App.css';

function App() {
	return (
		<div className="flex flex-col justify-center bg-white">
			<div className="justify-center p-8 w-full max-md:px-5 max-md:max-w-full">
				<div className="flex gap-8 max-md:flex-col max-md:gap-0">
					<div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
						<div className="flex flex-col self-stretch my-auto text-base tracking-normal leading-4 max-md:mt-10">
							<div className="text-4xl tracking-wide text-center text-gray-900">
								<span className="font-semibold text-gray-900">
									Welcome Back{" "}
								</span>

							</div>
							<div className="mt-12 text-gray-900 max-md:mt-10">Email</div>
							<div className="justify-center items-start px-4 py-4 mt-2 whitespace-nowrap rounded-xl border border-gray-300 border-solid bg-slate-50 text-slate-400 max-md:pr-5">
								Example@email.com
							</div>
							<div className="mt-6 text-gray-900">Password</div>
							<div className="justify-center items-start px-4 py-5 mt-2 rounded-xl border border-gray-300 border-solid bg-slate-50 text-slate-400 max-md:pr-5">
								At least 8 characters
							</div>
							<div className="justify-center items-center px-16 py-4 mt-6 text-xl tracking-wide text-center text-white rounded-xl bg-slate-800 max-md:px-5">
								Sign in
							</div>
							{/* <div className="flex gap-4 justify-center items-center py-2.5 mt-12 text-center whitespace-nowrap text-slate-700 max-md:mt-10">
								<div className="flex-1 shrink-0 self-stretch my-auto h-px border border-solid bg-slate-300 border-slate-300" />
								<div className="self-stretch">Or</div>
								<div className="flex-1 shrink-0 self-stretch my-auto h-px border border-solid bg-slate-300 border-slate-300" />
							</div>
							<div className="flex gap-4 justify-center px-2.5 py-3 mt-6 rounded-xl bg-slate-100 text-slate-700 max-md:px-5">
								<img
									loading="lazy"
									src="https://cdn.builder.io/api/v1/image/assets/TEMP/936c546949f3bfc1781a55c46ce3a363fe3768e4794cb3973c9adfecb2f2575d?"
									className="shrink-0 w-7 aspect-square"
								/>
								<div className="my-auto">Sign in with Google</div>
							</div> */}
						</div>
					</div>
					<div className="logo-img">
						<img src={Login} className="App-logo object-scale-down" alt="logo" />
					</div>
				</div>
			</div>
		</div>
	);
}


export default App;
