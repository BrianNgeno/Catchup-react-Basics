import logo from "./logo.svg";
import "./App.css";
import Todos from "./components/Todos";
import Button from "./components/Button";
import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = "todosItem"

function App() {
  const [todos,setTodos]=useState([{id:1,name:"Walking", complete:true}])
  const ActivityRef = useRef()

  useEffect(()=>{
    const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedData){
    setTodos(storedData)
    }
   },[]) 

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
  },[todos])

  function toggleList(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo=>todo.id==id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleComplete(){
    const newTodos =  todos.filter(todo=>!todo.complete)
    setTodos(newTodos)
  }
  
  function handleAdd(){
    const name  = ActivityRef.current.value
    if (name === " ") return
    // console.log(name)
    setTodos(prevTodos=>{
      return [...prevTodos,{id:uuidv4(),name:name,complete:false}]
    })
    ActivityRef.current.value=null
    console.log(todos)
  }
  // console.log(ActivityRef.current.value)
  return (
    <>
    <div className="items" id="list-items">
      <Todos todos={todos} toggleList={toggleList}/>
    </div>
      <input type="text" ref={ActivityRef} />
      <Button label="Add Item" onClick={handleAdd}/>
      <Button label="clear Items" onClick={handleComplete}/>

    </>
  );
}

export default App;
