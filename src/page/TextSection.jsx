import React, { useEffect, useState } from 'react'
import Button from '../layout/Button'
import { useDispatch, useSelector } from 'react-redux'
import { formValue, settask, update } from '../fearture/timeSlice'
import { useNavigate } from 'react-router-dom'


const TextSection = () => {
    const dispatch = useDispatch()
    const nav = useNavigate()
    const { form, Time, editList } = useSelector(state => state.time)


    const [data, setData] = useState({
        id: 1,
        title: '',
        description: '',
    })
    const { title, description } = data

    const handleChange = (e) => {
        setData({
            ...data,
            id: crypto.randomUUID(),
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (editList.isedit) {
            const updatelist = {
                id: editList.list.id,
                time: editList.list.time,
                title,
                description,
            }

            dispatch(update(updatelist))
            dispatch(formValue(false))
            nav("/")
        } else {
            const list = {
                ...data,
                time: Time
            }
            dispatch(settask(list))
            dispatch(formValue(false))
            nav("/")
        }


    }

    useEffect(() => {
        if (!form) {
            nav('/details')
        }
    }, [form])

    useEffect(() => {
        if (editList.isedit) {

            setData({
                id: editList.list.id,
                title: editList.list.title,
                description: editList.list.description,
            })
        }

    }, [editList])




    return (

        <section className=' w-full min-h-[90vh] flex flex-col items-center gap-2 pt-10'>
            {
                form && <form onSubmit={handleSubmit} className=' border-2 border-black sm:px-10 px-5 py-10  h-60 flex flex-col items-center' >
                    <input type="text" className=' border-2 border-black placeholder:text-black px-3 py-2 mt-3 md:w-[350px] w-full' placeholder='Title' onChange={handleChange}
                        required
                        name="title"
                        value={title}
                    />
                    <input type="text" className='border-2 border-black placeholder:text-black px-3 py-2 mt-3 mb-3 md:w-[350px] w-full' placeholder='Description'
                        onChange={handleChange}
                        required
                        name="description"
                        value={description}

                    />
                    <Button text={"Save task"} color={"bg-sky-600 w-full"} />

                </form>
            }




        </section >
    )
}

export default TextSection