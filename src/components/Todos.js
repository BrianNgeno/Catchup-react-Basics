import React, {useState} from 'react'
import Todo from './Todo'

export default function Todos({todos,toggleList}) {

  return (
  
        todos.map(todo=>{
            return <Todo key={todo.id} todo={todo} toggleList={toggleList} />
        })

  )
}
