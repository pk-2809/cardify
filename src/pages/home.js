import { hover } from "@testing-library/user-event/dist/hover";
import "../pages/home.css";

export const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row w-screen h-screen my-gradient">
      <div className="md:w-5/12 w-full h-2/5 md:h-screen flex flex-col justify-center items-center">
        <div className="w-3/5 flex flex-col items-start">
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
          <button className="p-4 w-2/5 text-sm sm:text-base lg:text-lg text-center text-1786df bg-white rounded-xl">
            ADD CARD
          </button>
        </div>
      </div>

      <div className="md:w-7/12 w-full h-3/5 md:h-screen lg:h-full flex flex-col justify-center items-center">
        <div class="flex justify-center items-center w-full h-full">
          <div class="flex w-3/5 h-1/4 sm:h-1/2 md:h-2/5">
            <div class="bg-gray-200 w-3/4 rounded-l-lg">Yes</div>
            <div class=" bg-white w-1/4 rounded-r-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};