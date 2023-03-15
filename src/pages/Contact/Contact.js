/* eslint-disable */
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useState } from 'react';

import './Contact.css';

export default function Login() {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle login logic here
    setShowAlert(true);
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />

          <button type="submit">Submit</button>
        </form>
        {showAlert && (
          <div className="alert success">
            Login successful!
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
