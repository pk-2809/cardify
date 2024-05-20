import './Home.css';
import { CreditCard2Front } from 'react-bootstrap-icons';
import { Button } from '@mantine/core';

export const Home = () => {
    return (
        <div className='flex justify-center w-full h-full'>
            <div className='flex flex-col justify-evenly items-center w-11/12 h-full'>
                <div className="card rounded-xl flex justify-between w-4/5 max-w-80 h-2/4 max-h-40">
                    <div className="p-3 w-3/4 flex flex-col justify-between">
                        <div>
                            <p className="font-bold text-lg text-white">ALICE SINGH</p>
                            <p className="text-white text-xs">Debit/ Credit Card</p>
                        </div>
                        <div className="flex flex-start items-center">
                            {/* <CcIcon className="max-w-6 sm:max-w-10 lg:max-w-16" /> */}
                            <CreditCard2Front color='#fff' size={26} />
                            <h1 className="ms-2 text-xs font-semibold text-white">2022 2022 2022 2022</h1>
                        </div>
                    </div>
                    <div className="rounded-xl flex items-center justify-center bg-white w-1/5 max-w-14">
                        <p className="rotate-[270deg] font-bold text-blue-600 text-md">CARDIFY</p>
                    </div>
                </div>
                <div>
                    <h1 className="font-semibold text-xl sm:text-2xl mb-1 text-white">
                        Your New
                    </h1>
                    <h1 className="font-semibold text-xl sm:text-2xl mb-3 text-white">
                        Card Awaits
                    </h1>
                    <p className="text-xs sm:text-sm mb-4 text-white">
                        For any payment – anywhere in the world. Get all your cards handy
                        with you with all the features stored in one place.
                    </p>
                    <div className='flex justify-center'>
                        <Button variant="filled" color="#E385EC" size="md" fullWidth className="mt-8">ADD CARD</Button>
                        {/* <button className="btn w-4/5 sm:w-fit mt-8 sm:mt-2 p-4 text-sm sm:text-base lg:text-lg text-center text-1786df bg-white rounded-xl">
                            <span className="shadow"></span>
                            <span className="edge"></span>
                            <span className="front text-xs sm:text-sm"> ADD CARD</span>
                        </button> */}

                    </div>
                </div>
            </div>
        </div>
    )
}
