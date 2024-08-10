import { createBrowserRouter, RouteObject } from 'react-router-dom'
import { DefaultLayout } from './pages/_layouts'
import { Errors } from './pages/_base'
import { Homepage } from './pages/app/homepage'

const defaultRoutes: RouteObject[] = [
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <Errors.NotFound />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
    ],
  },
]

export const router = createBrowserRouter([...defaultRoutes])
