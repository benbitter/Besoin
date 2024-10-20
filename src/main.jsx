import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Layout from './pages/Layout.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Registeration from './pages/Registeration.jsx'
import Choice from './pages/Choice.jsx'
import Login1 from './pages/Login1.jsx'
import Form from './pages/Form.jsx'
import Profession from './pages/Profession.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import FAQ from './pages/FAQ.jsx'

let router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[{
      path:"",
      element:<Home/>
    },{
      path:'/login',
      element: <Login/>
    },
    {
      path:'/registeration',
      element: <Registeration/>
    },
    {
      path:'/dashboard',
      element: <Dashboard/>
    },
    {
      path:'/choice',
      element: <Choice/>
    },
    {
      path:'/login1',
      element:<Login1/>
    },
    {
      path:'/form',
      element:<Form/>
    },
    {
      path:'/dashboard/:profession',
      element:<Profession/>
    },
    {
      path:'/About',
      element:<About/>
    },
    {
      path:'/Contact',
      element:<Contact/>
    },
    {
      path:'/FAQ',
      element:<FAQ/>
    }
  ]
  }
])


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>,
)
