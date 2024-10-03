import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AuthProvider from './Auth/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import UserProvider from './Provider/UserProvider.jsx'
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </AuthProvider>
    </QueryClientProvider>

  </StrictMode>,
)
