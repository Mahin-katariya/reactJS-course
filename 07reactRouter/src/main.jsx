import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  createBrowserRouter, createRoutesFromElements, Route } from 'react-router'
import { RouterProvider } from "react-router/dom";
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import ContactUs from './components/Contact-Us/ContactUs.jsx'
import User from './components/user/User.jsx'
import Github from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//     children: [
//       {
//         path:'',
//         element:<Home/>
//       },
//       {
//         path: "about",
//         element: <About/>        
//       },
//       {
//         path:"contact-us",
//         element: <ContactUs/>
//       }
//     ]
//   }
// ])

// we can also use loader provided by rect-router. which is the optimized version of fetching apis.
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact-us' element={<ContactUs/>}/>
      <Route path='user/:id' element={<User/>}/>
      <Route path='github' element={<Github/>} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
