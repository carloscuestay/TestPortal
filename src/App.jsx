import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/'
import Login from './pages/Login/'



const App = () => {

  return (


    <RouterProvider router={createBrowserRouter([
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/Home/:id_user",
        element: <Home />,
      },
      {
        path: '*',
        element: <h1>No existe</h1>,
      }
    ])}>

    </RouterProvider>
  )
}

export default App