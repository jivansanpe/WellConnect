/* eslint-disable */
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../backend/client'

import './Login.css'

export default function Login() {
  const navigate = useNavigate()
  const [showAlert] = useState(false)
  const [userData, setUserData] = useState({
    email: '', password: '', confpassword: ''
  })
  function handleChange(event) {
    setUserData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }
  const onSubmit = async () => {
    event.preventDefault()
    const result = await supabase.auth.signInWithPassword({
      email: userData.email,
      password: userData.password
    })
    window.sessionStorage.setItem('token', result.data.session.access_token)
    console.log(result)
    // window.sessionStorage.setItem('token', result.data.session.access_token)
    // console.log(result.data.session.access_token)
    navigate('/')
  }

  return (
    <div>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={onSubmit}>
          {/* <label htmlFor="username">Username:</label>
          <input type="text" id="username" /> */}
          <label htmlFor="email">Email:</label>
          <input onChange={handleChange} type="email" id="email" name="email" />

          <label htmlFor="password">Password:</label>
          <input onChange={handleChange} type="password" id="password" name="password" />

          <button type="submit">Submit</button>
        </form>
        {showAlert && (
          <div className="alert success">
            Login successful!
          </div>
        )}
      </div>
    </div>
  )
}
