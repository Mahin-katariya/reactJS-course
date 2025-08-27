import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {
    const [data,setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/mahin-katariya')
        .then((res) => res.json() )
        .then((data) => setData(data));
    },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white text-3xl'>Github followers: {data.followers}</div>
  )
}

export default Github