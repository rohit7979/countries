import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import { AppProvider } from './contexts/AppContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AppProvider>
    <Router>
      <App />
    </Router>
  </AppProvider>
</React.StrictMode>
)
