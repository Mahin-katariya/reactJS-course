import React from 'react'

function Card({bgColor,colorName,setColor}) {
  return (
    <div className='w-full h-full rounded-xl flex justify-center items-center border-2 border-amber-50 ' 
    style={{backgroundColor:bgColor}}
    onClick={() => setColor(bgColor)}
    >
        <p>{colorName}</p>
    </div>
  )
}

export default Card