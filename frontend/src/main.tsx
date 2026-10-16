import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import Home from './pages/Home/Home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <Home />
    </HelmetProvider>
  </StrictMode>,
)
