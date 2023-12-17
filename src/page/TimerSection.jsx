import React, { useEffect, useState } from 'react'
import Button from '../layout/Button'
import { useDispatch, useSelector } from 'react-redux';
import { formValue, saveTime, setEdit } from '../fearture/timeSlice';
import { useNavigate } from 'react-router-dom';

const TimerSection = () => {
    const dispatch = useDispatch()
    const { taskList } = useSelector(state => state.time)
    const nav = useNavigate()
    const [sec, setsec] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);


    useEffect(() => {
        let count
        if (isRunning && !isPaused) {
            count = setInterval(() => {
                setsec((prevTime) => prevTime + 1);
            }, 1000);
        }

        return () => clearInterval(count);
    }, [isRunning, isPaused]);

    const handleStart = () => {
        setIsRunning(true);
        setIsPaused(false);
    };

    const handlePause = () => {
        setIsPaused(true);
        setIsRunning(false);
    };

    const handleSave = () => {
        dispatch(saveTime(formatTime(sec)))
        dispatch(formValue(true))
        setIsRunning(false);
        setIsPaused(false);
        setsec(0)
        nav("/details")

    };

    const handleEdit = (task) => {
        dispatch(setEdit(task))
        dispatch(formValue(true))
        nav("/details")
    }


    function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;

        let format = (val) => (val < 10 ? `0${val}` : val);

        return `${format(hours)} Hr : ${format(minutes)} Min : ${format(remainingSeconds)} Sec`;

    }
    return (
        <>
            <section className=' w-full min-h-[90vh] flex flex-col items-center gap-4 pt-10'>
                <div className=' border-2 border-black px-10 py-10  h-40 flex flex-col items-center' >
                    <div className="time flex gap-2 text-xl font-medium">
                        <span className="digit">{formatTime(sec)}</span>


                    </div>
                    <hr className=' w-full mt-3 border-1 border-black' />
                    <div className="time flex gap-2 text-sm font-medium mt-3">
                        <Button text={"START"} color={"bg-sky-700"} call={handleStart} boolean={isRunning} />
                        <Button text={"PAUSE"} color={"bg-yellow-300"} call={handlePause} boolean={!isRunning || isPaused} />
                        <Button text={"SAVE"} color={"bg-green-600"} call={handleSave} boolean={!isRunning && !isPaused} />

                    </div>

                </div>

                {
                    (taskList.length > 0) && <div className="list w-[28rem]  font-semibold">
                        <span className='flex '>
                            <h1 className=' text-lg font-semibold mb-2 ms-2'>
                                Task Details
                            </h1>

                        </span>
                        <ul className=' flex flex-col gap-4  border-[#3c3c3c] border-2 p-2'>

                            {
                                taskList.map((task, index) => {
                                    return (
                                        <span key={index} className=' flex flex-col justify-between border-b-2 border-black'>
                                            <li className=''> Title :- {task.title}</li>
                                            <li className=' '> Description :- {task.description}</li>
                                            <li className=' '>Time :- {task.time}</li>
                                            <li className='  '> <Button text={"EDIT"} color={"bg-yellow-400 mb-2 mx-5 float-right"} size={"px-3 py-1 "} call={(e) => handleEdit(task)} /></li>
                                        </span>
                                    )
                                })
                            }
                        </ul>

                    </div>
                }


            </section>
        </>
    )

}

export default TimerSection