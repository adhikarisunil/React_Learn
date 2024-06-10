import React, {useState} from 'react'
import './style.css';

export default function App() {
    const [number, setNumber] = useState(5)
  return (
    <div>
        <h1>{number}</h1>
        <button onClick={()=>setNumber(number+1)} className="button">Add</button>
        <button onClick={()=> setNumber(number-1)}className="button">Less</button>
        <button onClick={()=> setNumber(0)}className="button">Reset</button>
    </div>
  )
}
