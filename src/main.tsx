import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "@mui/material/styles";

import { Home, Post } from './Components';
import './index.css'
import { theme } from './Theme/themes'; 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme = { theme }>
    <Router>
      <Routes>
        <Route path='/' element={<Home title = {"ImmiTalk"}/>} />
        <Route path='/post' element={<Post />} />
        
      </Routes>
    </Router>
    </ThemeProvider>
  </React.StrictMode>,
)
