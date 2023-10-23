import { useEffect, useState } from "react"
import Boxs from "./components/Boxs"


function App() {



  const [boxs ,setBoxs]=useState(["","","","","","","","",""])
  // start opration
  const [start,setStart]=useState("circle")

  // console.log(boxs)
  const [win, setWin]=useState("")
  const Oddsofwinning =
  [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6],
  ]
 useEffect(()=>{
 
   Oddsofwinning.forEach((win)=>{

   const circleWin = win.every((box)=>boxs[box]=== "circle")
   const crosswin = win.every((box)=>boxs[box]=== "cross")
    if(circleWin){
    setWin("circle Win")
    }else if(crosswin){
     setWin("cross Win")
 
    }
   })
 },[boxs,win])

useEffect(()=>{
 if (boxs.every((box)=>box !== "")&&!win) {
  setWin("Draw")
 }

},[boxs,win])
  return (
    <>
   <div className="section" >
   
   <div className="container">
          <div className="content">

            {boxs.map((box,index)=>(

              <Boxs id={index}win={win} key={index} start={start} box={box} setStart={setStart} boxs={boxs} setBoxs={setBoxs}/>

            )) 
            }
          </div>
     </div>
     <h3>{win}</h3>
     {!win &&<div>{` its now ${start} turn`}</div>}
     <button style={{marginTop:'30px',background:'#111'}}>Reaset</button>
   </div>
    </>
  )
}

export default App
