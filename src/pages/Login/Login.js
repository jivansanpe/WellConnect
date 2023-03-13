import React from 'react'
import './Login.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

export default function Login () {
  return (
    <div>
      <Navbar />
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />

          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}
