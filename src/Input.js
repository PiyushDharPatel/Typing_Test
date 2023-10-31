import React from 'react'
import { useRef } from 'react';
const Input = ({newWord,setNewWord,onBS,changeCol,visible}) => {
    const inputRef = useRef();
if(visible)
  {return (
        <>
            <input
                autoFocus
                ref={inputRef}
                id='addItem'
                type='text'
                placeholder='Type here'
                required
                autoComplete='off'
                value={newWord}
                onKeyPress={(e) =>{if(e.key!=='Enter'){setNewWord(newWord+e.key)
                    changeCol(e.key)}
                }}
                onKeyDown={(e)=>{if(e.key=='Backspace'){onBS()
                }}}
            />
        </>
    )}
else{return (
    <>
    </>
)}
  
}

export default Input
