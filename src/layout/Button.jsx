import React from 'react'

const Button = ({ text, color, call, boolean, size }) => {
    // console.log(boolean);
    return (
        <button className={`${size ? size : "px-4 py-2"} text-white ${color}`} onClick={call} disabled={boolean}>{text} </button>

    )
}

export default Button