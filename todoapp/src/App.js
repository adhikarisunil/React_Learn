import React, { useState } from 'react'

function App() {
  const[userInput, setUserInput] = useState("")
  const[todos, setTodos] = useState([])

  const addData = ()=>{
    setTodos([...todos, userInput])
  }
  return (
    <div>
      <h1>Todo List</h1>
      <input onChange={(event)=> setUserInput( event.target.value)} type="text" />
      <button onClick={()=> addData()}>Add</button>
      <ul>
        {
          todos.map((todo, index)=><li key={index}>{todo}</li>)
        }
      </ul>
    </div>
  )
}

export default App
