import React from 'react'

const Score = ({high,average,visible}) => {
if(visible){
  return (
    <div id = {"score"}>
      <h3>Average:</h3>
      <h2>{average}</h2>
      <h3>Highest:</h3>
      <h2>{high}</h2>
    </div>
  )
}}

export default Score
