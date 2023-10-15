import React, { useState, useContext } from 'react';
import { AuthContext } from '../../service/AuthContext.';
import './LoginPage.css';

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  //using useState hook email & password is initialized
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const {isLoggedIn} = useContext(AuthContext);
console.log(isLoggedIn)
  const handleLogin = () => {
    if (email && password) {
      if (email.includes('@') && password.length >= 7) {
        login();
      }
    } else {
      // Handle empty fields
    }
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="input-email">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update the email state on input change
          
        />
      </div>
      <div className="input-password">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;