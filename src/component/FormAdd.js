import React, { useState } from 'react'

function FormAdd(props) {
    const[input,setInput] = useState("")
    const submit = (e) => {
        e.preventDefault();
        let id = Math.floor(Math.random() * 100000);
        let list = {id:id,name:input,complete:false};
        props.onSubmit(list);
        setInput('')
    }
    const typeTodo = (e) => {
        setInput(e.target.value)
    }
    const checkAll = (e) => {
        props.checkAlls(e);
    }
  return (
    <>
        <h1>Todos</h1>
        <form className='d-flex align-items-center w-100' onSubmit={submit}>
            <input type="checkbox" className='form-check-input mt-0 me-3' onChange={(e)=>checkAll(e)} />
            <input type="text" className='form-control' placeholder='What need to be done?' onChange={typeTodo} value={input}/>
        </form>
    </>
  )
}

export default FormAdd