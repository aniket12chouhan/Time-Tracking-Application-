import { createSlice } from "@reduxjs/toolkit";

const timeSlice = createSlice({
    name: "time",
    initialState: {
        Time: null,
        form: false,
        taskList: [],
        editList: {
            list: {},
            isedit: false,
        }

    },
    reducers: {
        saveTime: (state, action) => {
            return {
                ...state,
                Time: action.payload
            }
        },
        formValue: (state, action) => {
            return {
                ...state,
                form: action.payload
            }
        },
        settask: (state, action) => {
            return {
                ...state,
                taskList: [action.payload, ...state.taskList],
                Time: null
            }
        },
        setEdit: (state, action) => {
            return {
                ...state,
                editList: { list: action.payload, isedit: true }
            }
        },
        update: (state, action) => {

            return {
                ...state,
                taskList: state.taskList.map((li) => {

                    if (li.id === action.payload.id) {
                        return {
                            ...li, title: action.payload.title, description: action.payload.description
                        }
                    } else {
                        return li
                    }




                }

                ),

                editList: {
                    list: {},
                    isedit: false,
                }
            }


        }

    }

})

export const { saveTime, formValue, settask, setEdit, update } = timeSlice.actions

export default timeSlice.reducer