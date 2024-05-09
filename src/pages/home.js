import "../pages/home.css";
import CcIcon from "../assets/cc_icon.svg";

export const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row w-screen h-screen my-gradient">
      <div className="md:w-2/5 w-full h-3/5 md:h-screen flex flex-col justify-center items-center">
        <div className="w-4/5 sm:w-3/5 flex flex-col items-center sm:items-start">
          <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-1 text-white">
            Your New
          </h1>
          <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-4 text-white">
            Card Awaits
          </h1>
          <p className="text-sm md:text-base lg:text-lg mb-4 text-white">
            For any payment – anywhere in the world. Get all your cards handy
            with you with all the features stored in one place.
          </p>
          <button className="w-full sm:w-fit mt-8 sm:mt-2 p-4 text-sm sm:text-base lg:text-lg text-center text-1786df bg-white rounded-xl">
            ADD CARD
          </button>
        </div>
      </div>

      <div className="md:w-3/5 w-full h-2/5 md:h-screen lg:h-full flex flex-col justify-center items-center">
        <div className="flex justify-center items-center w-full h-full">
          <div className="card rounded-xl md:rounded-2xl lg:rounded-3xl flex w-4/5 sm:w-3/5 md:w-9/12 lg:w-4/5 max-w-80 sm:max-w-md lg:max-w-lg h-2/4 sm:h-3/4 md:h-1/3 lg:h-2/5 max-h-40 sm:max-h-none">
            <div className="p-4 md:p-6 lg:p-8 w-3/4 md:w-4/5 lg:w-3/4 flex flex-col justify-between">
              <div>
                <p className="font-bold text-md sm:text-xl md:text-3xl lg:text-4xl text-white">ALICE SINGH</p>
                <p className="text-white text-xs sm:text-base">Debit/ Credit Card</p>
              </div>
              <div className="flex flex-start items-center">
                <img className="max-w-6 sm:max-w-10 lg:max-w-16" src={CcIcon}></img>
                <h1 className="ms-2 lg:ms-4 sm:mb-1 text-xs lg:text-lg xl:text-xl font-semibold text-white">2022 2022 2022 2022</h1>
              </div>
            </div>
            <div className="rounded-xl md:rounded-2xl flex items-center justify-center lg:rounded-3xl bg-white w-1/4 md:w-1/5	lg:w-1/4 rounded-r-lg">
              <p className="rotate-[270deg] font-bold text-blue-600 text-xl sm:text-2xl md:text-3xl xl:text-4xl">CARDIFY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};