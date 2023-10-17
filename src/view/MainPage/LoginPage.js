import React, { useState, useContext } from "react";
import { AuthContext } from "../../service/AuthContext.";
import "./LoginPage.css";
import {Button,TextField,Grid} from '@mui/material';

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  //using useState hook email & password is initialized
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);
  const handleLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Please fill in both email and password fields.");
    }

    if (!email.includes("@")) {
      alert(
        "Please enter a valid email address.For example name123@domain.com."
      );
      return;
    }

    if (password.length < 7) {
      alert("Password should be at least 7 characters long.");
      return;
    }

    alert("Login Success!");
    login();
  };

  return (
  <Grid container spacing={2} className="login-container">
    <Grid item xs={12}>
      <h2>Rick and Morty</h2>
    </Grid>
    <Grid item xs={12} 
    alignItems="center" 
    justifyContent= "center" 
  
    >
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="E-mail"
        label="Enter your email"
        variant="outlined"
        
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        id="Password"
        label="Enter your password"
        variant="outlined"
       
      />
    </Grid>
    <Grid item xs={12}>
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </Grid>
  </Grid>
);
};


export default LoginPage;
