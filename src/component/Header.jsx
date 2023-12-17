import React from 'react'
import { BsFillStopwatchFill } from "react-icons/bs";

const Header = () => {
    return (
        <header className='w-full bg-[#DF826C] p-5 flex justify-center shadow-lg'>
            <nav className='w-full md:mx-32 sm:mx-16 mx-5'>
                <h1 className=' sm:text-xl sm:font-bold text-lg font-medium text-white flex gap-2 items-center'>
                    <div className="text-2xl"><BsFillStopwatchFill /></div>
                    Time Tracking Application
                </h1>
            </nav>
        </header>
    )
}

export default Header