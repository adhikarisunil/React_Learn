// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [diceNumber, setDiceNumber]= useState(2)
  const [diceNumber2, setDiceNumber2]= useState(2)

  const refreshDice =()=>{
    const randno = Math.floor(Math.random()*6) +1
    setDiceNumber(randno)
    const randno2 = Math.floor(Math.random()*6) +1
    setDiceNumber2(randno2)

  }
  return (
    <div>
      <center>
      <img width={300} height={300} src={require(`./assets/assets/${diceNumber}.png`)} alt=""/>
      <img width={300} height={300} src={require(`./assets/assets/${diceNumber2}.png`)} alt=""/>
      <br />
      <button onClick={()=> refreshDice()}className="button">Roll</button>
      </center>
    </div>
  );
}

export default App;
