import React, {useState} from 'react'

const Input = (props) => {
    return (
        <div>
            <input onChange= {e=> props.update(e.target.value)}type="text" name="color" id="" />
        </div>
    )
}

export default Input