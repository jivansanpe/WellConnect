import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Signup.css'
import Footer from '../../components/Footer/Footer'

export default function Signup () {
  return (
    <div>
        <Navbar />
        <div className="signup-container">
            <h2>Sign up</h2>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" />

                <label htmlFor="confirm-password">Confirm Password:</label>
                <input type="password" id="confirm-password" />

                <button type="submit">Submit</button>
            </form>
        </div>
        <Footer />
    </div>
  )
}
