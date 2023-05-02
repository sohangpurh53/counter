import React, { useState } from 'react'
import './Count.css'


const Count = () => {
    const [count, setCount] = useState(0);
  return (
    <div className='box'>
       <h1>{count}</h1> 
        <button className='counter' onClick={()=>setCount(count+1)}>
            Counter
        </button>
        <button className='reset' onClick={()=>setCount(0)}>
            Reset
        </button>
    </div>
  )
}

export default Count