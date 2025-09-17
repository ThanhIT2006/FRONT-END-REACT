import React from 'react'
import { RouterProvider } from 'react-router-dom'
import  routers  from "./Router/router"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  )
}