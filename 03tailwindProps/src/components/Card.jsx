import React from 'react'

function Card({cardTitle,cardContent}) {
  return (
    <div className='flex flex-col p-5 rounded border-2 w-96 mb-2'>
        <img src="" alt="" />
        <h2>{cardTitle}</h2>
        <p>{cardContent}</p>
    </div>
  )
}

export default Card