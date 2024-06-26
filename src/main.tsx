import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "@mui/material/styles";
import { FirebaseAppProvider } from 'reactfire';
import 'firebase/auth';

import { Home, Post, Auth } from './Components';
import './index.css'
import { theme } from './Theme/themes'; 
import { firebaseConfig } from './fireBaseConfig';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <ThemeProvider theme = { theme }>
    <Router>
      <Routes>
        <Route path='/' element={<Home title = {"ImmiTalk"}/>} />
        <Route path='/auth' element={<Auth title = {"Auth"}/>} /> 
        <Route path='/post' element={<Post />} />
        
      </Routes>
    </Router>
    </ThemeProvider>
    </FirebaseAppProvider>
  </React.StrictMode>,
)
