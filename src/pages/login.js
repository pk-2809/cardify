import LoginBg from '../assets/Login.png';
import Login1 from '../assets/Login1.png';
import bgImage from '../assets/bgImage.png';
import './login.css';

export const Login = () => {
    return (
        <div className="h-screen overflow-hidden primary-bg flex flex-col-reverse md:flex-row">
            <div className="w-full md:w-1/2 h-3/5 md:h-screen grid place-items-center">
                <div className="w-4/5 sm:w-3/5 ">
                    <h1 className="mb-2 font-semibold text-2xl md:text-3xl lg:text-4xl text-white">Welcome Back</h1>
                    <div className="my-1 md:my-2 text-sm md:text-base lg:text-lg text-white">Email</div>
                    <input type="email" className="mb-2 p-3 md:p-4 w-full rounded-xl border border-gray-300 border-solid bg-slate-50 text-slate-400" placeholder="Example@email.com" />
                    <div className="my-1 md:my-2 text-sm md:text-base lg:text-lg text-white">OTP</div>
                    <input type="tel" className="p-3 md:p-4 w-full rounded-xl border border-gray-300 border-solid bg-slate-50 text-slate-400" placeholder="Enter OTP" />
                    <div className="w-full text-center">
                        <button className="mt-8 p-4 w-3/5 text-xs sm:text-base lg:text-lg text-center text-white rounded-xl secondary-bg text-white">Get OTP</button>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 h-2/5 md:h-screen grid place-items-center">
            <img src={bgImage} alt="logo" className="max-h-full max-w-fulls lg:max-w-4/5  overflow-hidden" />
        </div>
        </div>
    )
}
