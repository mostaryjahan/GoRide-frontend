import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css"; 
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import { router } from './routes';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
