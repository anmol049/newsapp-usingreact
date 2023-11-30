import React from 'react'

function SingleNote(props) {
    const notestyle = {
        padding: "20px",
        borderRadius:"20px",  
        border: "2px solid green",
         backgroundColor:'#eff2e4'
    }
  return (
    <div style={notestyle}>
        <p>{props.note}</p>
    </div>
  )
}

export default SingleNote;