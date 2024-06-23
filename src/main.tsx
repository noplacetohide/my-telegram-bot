import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import TelegramInit from './hooks/TelegramInit.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TelegramInit>
      <App />
    </TelegramInit>
  </React.StrictMode>,
)
