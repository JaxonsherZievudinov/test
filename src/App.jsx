import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './pages/Home/Home'
import Sales from './pages/Sales/Sales';
import Buy from './pages/Buy/Buy';
import Blog from './pages/Blog/Blog'
import Shop from './pages/Shop/Shop'
import Prices from './pages/Prices/Prices'
import Help from './pages/Help/Help'
import Bonuses from './pages/Bonuses/Bonuses'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path: '/sales',
        element: <Sales />
      },
      {
        path: '/howtobuy',
        element: <Buy />
      },
      {
        path:"/blog",
        element:<Blog/>
      },
      {
        path:"/shop",
        element:<Shop/>
      },
      {
        path:"/prices",
        element:<Prices/>
      },
      {
        path:'/help',
        element:<Help/>
      },
      {
        path:'/bonuses',
        element:<Bonuses/>
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
