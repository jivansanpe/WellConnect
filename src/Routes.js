import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import EventDetails from './pages/Events/EventDetails'
import Login from './pages/Login/Login'
import NotFound from './pages/Notfound/Notfound'

function AppRoutes () {
  return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path='/:id' element={<EventDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
  )
}
export default AppRoutes
