import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Layouts/MainLayout.jsx'
import Home from './Pages/Home.jsx'
import Apps from './Pages/Apps.jsx'
import Installation from './Pages/Installation.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'

const router = createBrowserRouter([{
  path:'/',
  Component:MainLayout,
  errorElement: <ErrorPage/>,
  children:[
    {
      path:'/',
      Component:Home
    },
    {
      path:'/apps',
      Component:Apps
    },
    {
      path:'/installation',
      Component:Installation
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
