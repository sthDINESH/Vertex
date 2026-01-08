import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContextProvider } from './ToastContext'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ToastContextProvider>
    <App />
  </ToastContextProvider>
)
