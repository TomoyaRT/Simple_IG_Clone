import { createBrowserRouter } from 'react-router-dom'
import App from '@/App'
import Home from '@/pages/home'
import Following from '@/pages/following'
import ErrorPage from '@/pages/error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/home',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/following',
    element: <Following />,
    errorElement: <ErrorPage />,
  },
])

export default router
