import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import EventDetails from './pages/Events/EventDetails'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Navbar from './components/Navbar/Navbar'
import NotFound from './pages/Notfound/Notfound'
import { supabase } from './backend/client'

function AppRoutes() {
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session && !window.sessionStorage.getItem('token')) {
        window.sessionStorage.setItem('token', session.access_token)
      }
    })
  })
  return (
    <Routes>
      <Route path="/testing" element={<Navbar />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/event/:id' element={<EventDetails />} />
    </Routes>
  )
}
export default AppRoutes
