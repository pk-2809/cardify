import bgImage1 from "../../assets/bgImage1.png";
import "./login.css";

export const Login = () => {
  return (
    <div className="h-screen-full overflow-hidden primary-bg flex flex-col-reverse md:flex-row">
      <div className="w-full md:w-1/2 h-1/2 md:h-screen-full grid place-items-center">
        <div className="w-4/5 max-w-md">
          <h1 className="mb-2 font-semibold text-2xl md:text-3xl lg:text-4xl text-white">
            Welcome Back
          </h1>
          <div className="my-1 md:my-2 text-sm md:text-base lg:text-lg text-white">
            Email
          </div>
          <input type="email" className="inpt mb-2 p-3 md:p-4 w-full rounded-xl" placeholder="Example@email.com" />
          <div className="my-1 md:my-2 text-sm md:text-base lg:text-lg text-white">
            OTP
          </div>
          <input type="tel" className="inpt p-3 md:p-4 w-full rounded-xl" placeholder="ENTER OTP" />
          <div className="w-full text-center">
            <button className="btn mt-8 p-4 w-3/5 text-xs sm:text-base lg:text-lg text-center rounded-xl secondary-bg text-white">
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front text"> GET OTP</span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-1/2 md:h-screen-full grid place-items-center">
        <img
          src={bgImage1}
          alt="logo"
          className="max-h-full w-11/12 lg:max-w-4/5  overflow-hidden"
        />
      </div>
    </div>
  );
};
