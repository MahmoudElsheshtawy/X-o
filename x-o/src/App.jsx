import { useState } from "react"
import Boxs from "./components/Boxs"


function App() {
  const [boxs ,setBox]=useState(["","","","","","","","",""])
  return (
    <>
   <div className="section" >
    <h1>my game tic tac to</h1>
   <div className="container">
          <div className="content">

            {boxs.map((box,index)=>(

              <Boxs key={index} />

            )) 
            }
          </div>
     </div>
     <button style={{marginTop:'30px',background:'#111'}}>Reaset</button>
   </div>
    </>
  )
}

export default App
