import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { routes } from './routes.jsx'


//creation d un router 
 const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(

  <StrictMode>
{/* uTILISATION DU ROUTER en fournissant les infos du router de dessus  */}
<RouterProvider router={router}>
    
    </RouterProvider>
  </StrictMode>,
)
