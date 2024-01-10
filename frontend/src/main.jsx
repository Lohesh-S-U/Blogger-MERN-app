import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {PostsContextProvider} from './context/PostContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostsContextProvider>
      <App />
    </PostsContextProvider>
  </React.StrictMode>,
)
