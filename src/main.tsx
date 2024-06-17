import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { GlobalContextProvider } from './contexts/globalContext/globalContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </GlobalContextProvider>
  </React.StrictMode>
)
