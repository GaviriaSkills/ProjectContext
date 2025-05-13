import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ShopProvider } from './context/ShopContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopProvider>
      <App />
    </ShopProvider>
  </StrictMode>,
)
