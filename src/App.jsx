import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './Routes'
import Navbar from './components/Navbar/Navbar'
import { Main } from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App () {
  return (
        <BrowserRouter>
            <Navbar />
            <Main>
            <AppRoutes />
            </Main>
            <Footer />
        </BrowserRouter>
  )
}

export default App
