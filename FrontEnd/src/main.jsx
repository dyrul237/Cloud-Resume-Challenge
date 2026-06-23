import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Layout from './Layout.jsx'
import ResumePage from 'pages/ResumePage'
import ProjectsPage from './pages/ProjectsPage'
import SkillsPage from './pages/SkillsPage'
import ContactPage from './pages/ContactPage'

createRoot(document.querySelector('main')).render(
  <BrowserRouter>
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<ResumePage />} />
      <Route path="/projects" element={<ProjectsPage/>} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Route>
  </Routes>
  </BrowserRouter>
)
