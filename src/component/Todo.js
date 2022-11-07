import React, { useState } from 'react'
import Bottom from './Bottom'
import FormAdd from './FormAdd'
import ListTodo from './ListTodo'

function Todo() {
    const[todos,setTodos] = useState([])
    const[type,setType] = useState('')
    
    const onSubmit = (todo) =>{
        if(!todo.name){
            return
        }
        setTodos([todo,...todos])
        console.log(todos);
    }

    const deletee = (id) => {
        setTodos(pre => pre.filter((dos)=>dos.id!==id))
    }
    const completeTodo = (e,id) => {
        if (e.target.checked) {
            let abc = todos.map((Val)=>Val.id===id?{...Val,complete:true}:Val);
            setTodos(abc)
        }else{
            let abc = todos.map((Val)=>Val.id===id?{...Val,complete:false}:Val);
            setTodos(abc)
        }
    }
    
    const onEdit = (e,id) => {
        let abc = todos.map((Val)=>Val.id===id?{...Val,name:e.target.value}:Val);
        setTodos(abc)
    }
    const showOption = (type) => {
        switch (type) {
            case 'ALL':
                setType('ALL')
                break;
            case 'ACTIVE':
                setType('ACTIVE')
                break;
            case 'COMPLETED':
                setType('COMPLETED')
                break;
            case 'CLEARCOMPLETE':
                setTodos(pre => pre.filter((dos)=>dos.complete===false))
                break;
            default:
                break;
        }
    }
    const checkAlls = (e) => {
        if(e.target.checked){
            setTodos(pre=>pre.map((value)=>({...value,complete:true})))
        }else{
            setTodos(pre=>pre.map((value)=>({...value,complete:false})))
        }
    }
  return (<>
    <FormAdd onSubmit={onSubmit} checkAlls={checkAlls}/>
    <ListTodo todos ={todos}  deletee ={deletee} completeTodo ={completeTodo} onEdit={onEdit} type={type}/>
    <Bottom todos ={todos} showOption={showOption}/>
    </>
  )
}

export default Todo