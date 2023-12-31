import React, { useContext } from "react";
import { AuthContext } from "../../service/AuthContext.";
import "./Header.css";
import {Button,Grid} from "@mui/material"
const Header = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <header>
      <div className="header-portion">
        <h1>Customer Profile</h1>
        {isLoggedIn && (
          // <button onClick={logout} className="logout-button">
          //   Logout
          // </button>
          <Grid item xs={12}>
          <Button variant="contained" onClick={logout}>
            Logout
          </Button>
        </Grid>
        )}
      </div>
    </header>
  );
};
export default Header;
