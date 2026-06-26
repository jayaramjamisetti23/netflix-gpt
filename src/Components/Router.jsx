import React from 'react'
import Login from './Login'
import Dashboard from './Dashboard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Router = () => {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/dashboard',
      element: <Dashboard />
    }
  ])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Router
