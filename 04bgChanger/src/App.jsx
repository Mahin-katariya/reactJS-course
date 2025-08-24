import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [color, setColor] = useState("#101828")

  return (
    <div className='flex justify-center items-center w-full h-screen duration-300 ' style={{backgroundColor:color,color:"white"}}>
      <div className=" rounded-xl mx-auto grid grid-cols-2 w-1/3 h-1/2 gap-4  ">
        <Card bgColor={"#9F0712"} colorName={"Red"} setColor={setColor}/>
        <Card bgColor={"#006045"} colorName={"Emerald"} setColor={setColor}/>
        <Card bgColor={"#00598A"} colorName={"Sky"} setColor={setColor}/>
        <Card bgColor={"#A3004C"} colorName={"Pink"} setColor={setColor}/>
      </div>
    </div>
  )
}

export default App
