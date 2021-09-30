import React,{useState,useEffect,useRef} from 'react'
function Input() {
    const [state , setState]=useState([])
    const inputRef=useRef(null)
    useEffect( ()=>{
        inputRef.current.focus()
    },[])
    const changeHandler=e=>{
        setState(e.target.value)

    }
    const submitHandler=e=>{
        e.preventDefault()
        console.log(state)
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input  ref={inputRef}value={state} onChange={changeHandler}/>
               
                <button type="submit">Click Me</button>
            </form>
        </div>
    )
}
 
export default Input
