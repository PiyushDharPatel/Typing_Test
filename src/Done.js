import React from 'react'
const Done = ({count,high,average,visible}) => {
 if(!visible&&count) 
 {return (
    <div id={"done"}>
      <h3>YOUR SCORE:{count}</h3>
      <h3>HIGHEST SCORE:{high}</h3>
      <h3>AVERAGE SCORE:{average}</h3>
    </div>
  )
}}

export default Done
