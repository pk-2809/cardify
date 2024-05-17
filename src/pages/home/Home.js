import './Home.css';
import CcIcon from '../../assets/cc_icon.svg';

export const Home = () => {
    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className="card rounded-xl md:rounded-2xl flex justify-between w-4/5 md:w-9/12 max-w-80 sm:max-w-96 h-2/4 sm:h-3/4 md:h-1/3 max-h-40 sm:max-h-60 ">
                <div className="p-4 w-3/4 md:w-4/5 flex flex-col justify-between">
                    <div>
                        <p className="font-bold text-md sm:text-xl md:text-2xl text-white">ALICE SINGH</p>
                        <p className="text-white text-xs sm:text-sm">Debit/ Credit Card</p>
                    </div>
                    <div className="flex flex-start items-center">
                        <CcIcon className="max-w-6 sm:max-w-10 lg:max-w-16" />
                        <h1 className="ms-2 sm:mb-1 text-xs lg:text-lg font-semibold text-white">2022 2022 2022 2022</h1>
                    </div>
                </div>
                <div className="rounded-xl md:rounded-2xl flex items-center justify-center bg-white w-1/4 md:w-1/5 rounded-r-lg max-w-14 sm:max-w-20">
                    <p className="rotate-[270deg] font-bold text-blue-600 text-xl sm:text-2xl md:text-3xl xl:text-4xl">CARDIFY</p>
                </div>
            </div>
        </div>
    )
}
