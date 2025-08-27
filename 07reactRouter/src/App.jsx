import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router'

//outlets takes this as the base of the entire website and the things above and below outlet remain the same.
function App() {

  return (
    <>
    <Header/>
    <Outlet/> 
    <Footer/>
    </>
  )
}

export default App
