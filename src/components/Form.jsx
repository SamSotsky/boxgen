import React, {useState} from 'react'
import Input from './Input';

const Form = (props) => {
    const[color, setColor] = useState("")

    const submitHandle = (e) =>{
        e.preventDefault()
        props.onNewBox(color)
    }
    return (
        <div>
            <form onSubmit={submitHandle}>
                <Input update={setColor}/>
                <button type='submit'>Add Box!</button>
            </form>
        </div>
    )
}
// input updates setColor 
export default Form


