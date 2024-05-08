
import React from 'react';
import Login from './assets/Login.png';
import Login1 from './assets/Login1.png';
import './App.css';

function App() {
	return (
	<div className="h-screen bg-gray-300 flex flex-col-reverse md:flex-row">

	
	<div className="bg-white w-full md:w-1/2 h-3/5 md:h-screen grid place-items-center">

		<div className="w-3/5">

		<h1 className="font-semibold text-4xl">
		Welcome Back
		</h1>

		{/* <div className="w-full">Email</div>
		<input type="email" class="p-4 rounded-xl border border-gray-300 border-solid bg-slate-50 text-slate-400" placeholder="Example@email.com"/>
 */}

<div style="width: 100%">
    <input type="email" class="p-4 rounded-xl border border-gray-300 border-solid bg-slate-50 text-slate-400" placeholder="Example@email.com" style="width: 100%"/>
</div>


			<div className="w-full">OTP</div>
			<input type="number" class="p-4 rounded-xl border border-gray-300 border-solid bg-slate-50 text-slate-400" placeholder="Enter OTP"/>

		<button className="p-4 text-xl text-center text-white rounded-xl bg-slate-800 block">Get OTP</button>
			
   	 </div>
		</div>

	<div className="bg-gray-200 w-full md:w-1/2 h-2/5 md:h-screen bg-no-repeat bg-center hidden md:block" style={{ backgroundImage:`url(${Login})`}}>
            </div>

			<div className="bg-gray-200 w-full md:w-1/2 h-2/5 md:h-screen bg-no-repeat bg-center md:hidden" style={{ backgroundImage:`url(${Login1})`}}>
            </div>
	</div>
	);
}


export default App;
