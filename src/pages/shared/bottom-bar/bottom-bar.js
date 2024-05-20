import './bottom-bar.css';
import { HouseDoor, HouseDoorFill, PersonCircle, BoxArrowRight } from 'react-bootstrap-icons';


export const BottomBar = () => {
    return (
        <nav className="bottom-bg">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-14">
                    <div className="flex-1 flex items-center justify-around">
                        <HouseDoor className='icon' size={24} />
                        {/* <HouseDoorFill className='icon' size={24} /> */}
                        <PersonCircle className='icon' size={24} />
                        <BoxArrowRight className='icon' size={24} />
                    </div>
                </div>
            </div>
        </nav>
    )
}
