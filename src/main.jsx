import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Components/Main/Main'
import Home from './Components/Home/Home'
import OrderReview from './Components/OrderReview/OrderReview'
import Grandpa from './Components/Grandpa/Grandpa'


const router = createBrowserRouter([
 {
  path: '/',
  element : <Main></Main>,
  children: [
    {
      path: '/',
      element: <Home></Home>,
      loader: () => fetch('tshirt.json')
    },
    {
      path: '/review',
      element: <OrderReview></OrderReview>
    },
    {
      path: '/grandpa',
      element: <Grandpa></Grandpa>
    }
  ]
 }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
