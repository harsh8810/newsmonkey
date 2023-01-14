import React from 'react'
import load from './loading.gif'

const Load = ()=>  
 {
    return (
      <div className='text-center'>
        <img src={load} alt="load" style={{height: "70px",width: "70px"}} />
      </div>
    )
  }


export default Load
