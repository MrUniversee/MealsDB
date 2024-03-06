import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
  Meal,
  HomeLayout,
  SinglePageError,
  About,
  Error,
  Newsletter,
} from './pages'
import Landing, { loader as landingLoader } from './pages/Landing'
import { loader as mealLoader } from './pages/Meal'
import { action as newsletterAction } from './pages/NewsLetter'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader(queryClient),
        errorElement: <SinglePageError />,
      },
      {
        path: 'meal/:id',
        element: <Meal />,
        loader: mealLoader(queryClient),
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'error',
        element: <Error />,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
        action: newsletterAction,
      },
    ],
  },
])
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
