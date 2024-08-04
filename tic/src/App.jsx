import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function clicked(){
    count==0 ? setCount(1):setCount(0);
  }

  return (
    <>
      <Player count={count}>Player: </Player>
      <div style={{display:"flex"}}><Tile onClick={clicked} count={count} ></Tile>
      <Tile onClick={clicked} count={count} ></Tile>
      <Tile onClick={clicked} count={count} ></Tile></div>
      
      <br />
      <div style={{display:"flex"}}><Tile onClick={clicked} count={count} ></Tile>
      <Tile onClick={clicked} count={count} ></Tile>
      <Tile onClick={clicked} count={count} ></Tile></div>
      <br />
      <div style={{display:"flex"}}><Tile onClick={clicked} count={count} ></Tile>
      <Tile onClick={clicked} count={count} ></Tile>
      <Tile onClick={clicked} count={count} ></Tile></div>
    </>
  )
}

function Player({count, children}){
  return (
    <>
      <h5>{children+count}</h5>
    </>
  )
 
}

function Tile({onClick, count}){
  const [color, setColor] = useState("gray");
  const [clicked, setClicked] = useState(false);

  function changeColors(){
    if (!clicked) {
      setColor(count === 0 ? "yellow" : "red");
      setClicked(true);
      onClick();
    }
  }
  return (
    <>
      <div onClick={changeColors} style={{height:"100px", width:"100px", backgroundColor:color, margin:"5px"}}></div>
    </>
  )
}

export default App
