import React, { useState } from 'react'

function ListTodo(props) {
  const[edit,setEdit] = useState({id:'',name:'',complete:''})
  const deleteTodo= (id)=>{
    props.deletee(id)
  };
  const completeTodo= (e,id)=>{
    props.completeTodo(e,id)
  };
  const editTodo= (val)=>{
    setEdit({id:val.id,name:val.name,complete:val.complete})
    console.log(edit);
  };
  const onEdit= (e,id)=>{
    props.onEdit(e,id)
  };
  const changeShow= (val)=>{
      switch (props.type) {
        case 'ALL':
            return`d-flex align-items-center border-bottom w-100 py-2`
        case 'ACTIVE':
              if(val.complete){
                return`d-none`
              }else{
                return`d-flex align-items-center border-bottom w-100 py-2`
              }
        case 'COMPLETED':
          if(!val.complete){
            return`d-none`
          }else{
            return`d-flex align-items-center border-bottom w-100 py-2`
          }
        default:
          return`d-flex align-items-center border-bottom w-100 py-2`;
    }
  };
  
  return (
    <div className='w-100'>
      {props.todos.map((val,ind)=>(
        <div className={changeShow(val)} key={ind}>
          <input checked={val.complete===false?false:true} type="checkbox" className='form-check-input mt-0 me-3' onChange={(e)=>completeTodo(e,val.id)} />
          {edit.id!==val.id?<div className={val.complete?'text-decoration-line-through text-black-50 col-10':'col-10'} onDoubleClick={()=>editTodo(val)}>{val.name}</div>
          :
          <input className='col-10' type="text" value={val.name} onChange={(e)=>{onEdit(e,val.id)}} onBlur={()=>setEdit({id:''})}/>}
          <div className='col-1' onClick={()=>deleteTodo(val.id)}>x</div>
        </div>
      ))}
    </div>
  )
}

export default ListTodo