import { createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/home'
import Following from '@/pages/following'
import ErrorPage from '@/pages/error'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/following',
      element: <Following />,
      errorElement: <ErrorPage />,
    },
  ],
  {
    basename: '/Simple_IG_Clone/',
  }
)

export default router
