import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import './index.css'
import NavBar from './components/NavBar'
import Projects from './pages/Projects'
import { Contact } from './pages/Contact'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar/>
    <Routes>
      <Route path="/" element={<About/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </BrowserRouter>

  </StrictMode>,
)
