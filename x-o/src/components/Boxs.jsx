/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */


/* eslint-disable react/prop-types */
const Boxs = ({start ,win,setStart , id , box,boxs,setBoxs}) => {
  const handleClick = (e) =>{
    
    if (win) {
      
      return;
    }
       const nocilcked =!boxs[id]
     if (nocilcked) {
        if(start ==="circle"){
          handleChangeMark("circle")
          setStart("cross")
        }

        if(start === "cross"){
          handleChangeMark("cross")
          setStart("circle")
        }
     }

       console.log(id)
  }
  //  handle change 
  const handleChangeMark =(boxschange)=>{
    let copyboxs= [...boxs] // coby array
    copyboxs[id]=boxschange //new valu (circle && cross)
    setBoxs(copyboxs) 
  }
  return (


    <>
    <div className="sqware" onClick={handleClick}>
      <div className={box } >{box ?(box ==="circle" ? 'o': "x"):""}</div>
    </div>
    </>
  )
}

export default Boxs