import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Signup.css'
import Footer from '../../components/Footer/Footer'
import { supabase } from '../../backend/client'

export default function Signup () {
  const [userData, setUserData] = useState({
    email: '', password: '', confpassword: ''
  })
  function handleChange (event) {
    setUserData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }
  const onSubmit = async () => {
    event.preventDefault()
    console.log('aaa')
    if (userData.confpassword === userData.password) {
      const result = await supabase.auth.signUp({
        email: userData.email,
        password: userData.password
      })
      console.log(result)
      // window.sessionStorage.setItem('token', result.data.session.access_token)
      // console.log(result.data.session.access_token)
      // navigate("/home")
    } else {
      console.log('passwords dont match')
    }
  }
  return (
    <div>
      <Navbar />
      <div className="signup-container">
        <h2>Sign up</h2>
        <form onSubmit={onSubmit}>
          {/* <label htmlFor="username">Username:</label>
          <input type="text" id="username" /> */}
          <label htmlFor="email">Email:</label>
          <input onChange={handleChange} type="email" id="email" name="email" />

          <label htmlFor="password">Password:</label>
          <input onChange={handleChange} type="password" id="password" name="password" />

          <label htmlFor="confirm-password">Confirm Password:</label>
          <input onChange={handleChange} type="password" id="confirm-password" name="confpassword" />

          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}
