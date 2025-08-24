
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      {/* <h1 className='bg-green-500 rounded text-white p-2.5 font-bold'>Tailwind CSS</h1> */}
      <Card cardTitle = "Card-1" cardContent="Content-1"/>
      <Card cardTitle = "Card-2" cardContent="Content-2" />

    </>
  )
}

export default App
