import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/about'
import './index.css'
import NavBar from './components/NavBar'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar/>
    <Routes>
      <Route path="/" element={<About/>} />
    </Routes>
    </BrowserRouter>

  </StrictMode>,
)
