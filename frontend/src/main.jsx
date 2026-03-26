import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css'
import { ToastContextProvider } from './ToastContext'
import App from './App.jsx'
import store from './store'

createRoot(document.getElementById('root')).render(
  <Router>
    <Provider store={store} >
      <ToastContextProvider>
        <App />
      </ToastContextProvider>
    </Provider>
  </Router>

)
