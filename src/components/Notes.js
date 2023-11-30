import React, { useState } from 'react'
import SingleNote from './Singlenote';
function Notes() {
 const [notes,setnotes] = useState([]);
 const [currnote,setcurrnote] = useState("");

function updatecurrnote(event){
    setcurrnote(event.target.value)
}
function addNote(){
    // const newarr = [...notes,currnote];
    // setnotes(newarr);
    setnotes([...notes,currnote])
}
const listyle = {
    listStyle:"none",
    display:"grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap:"20px"
}


  return (
    <>
    <input type="text" onChange={updatecurrnote} />
    <button onClick={addNote}>submit</button>
    <ul style={listyle}>
        {
            notes.map((notes,index)=>{
                return(
                    <li key={index}>
                      <SingleNote note={notes}/>

                    </li>
                )
            })
        }
    </ul>
    </>
  )
}

export default Notes