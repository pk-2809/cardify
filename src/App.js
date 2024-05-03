import React from 'react';
import Login from './assets/Login.png';
import Login1 from './assets/Login1.png';

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white">
      <img src={Login1} className="App-logo m-4" alt="logo" />
      <div className="flex flex-col px-6 pb-8 w-full max-w-[480px]">
        <div className="text-xl tracking-wide text-gray-900">
          <span className="font-semibold text-gray-900">Welcome Back </span>
        </div>
        
        <div className="mt-6 text-gray-900">Email</div>
        <div className="justify-center items-start px-3.5 py-4 mt-2 whitespace-nowrap rounded-lg border border-gray-300 border-solid bg-slate-100 text-slate-400">
          Example@email.com
        </div>
        <div className="mt-4 text-gray-900">Password</div>
        <div className="justify-center items-start px-3.5 py-4 mt-2 rounded-lg border border-gray-300 border-solid bg-slate-100 text-slate-400">
          At least 8 characters
        </div>
       
        <div className="justify-center items-center px-16 py-3.5 mt-8 text-base tracking-normal text-center text-white rounded-xl bg-slate-800">
          Sign in
        </div>
      </div>
    </div>
  );
}

export default App;
