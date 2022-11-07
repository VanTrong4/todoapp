import React from 'react'

function Bottom(props) {
    const showOp= (type) =>{
        props.showOption(type)
    }
  return (
    <div className='row w-100 '>
        <div className='col-3 fs-6'>{`${props.todos.length} item left`}</div>
        <div className='col-9 d-flex justify-content-end'>
            <button className='btn btn-outline-none fs-6' onClick={()=>{showOp('ALL')}}>All</button>
            <button className='btn btn-outline-none fs-6' onClick={()=>{showOp('ACTIVE')}}>Active</button>
            <button className='btn btn-outline-none fs-6' onClick={()=>{showOp('COMPLETED')}}>completed</button>
            <button className='btn btn-outline-none fs-6' onClick={()=>{showOp('CLEARCOMPLETE')}}>Clear complete</button>
        </div>
    </div>
  )
}

export default Bottom