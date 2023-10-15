import React, { useContext } from "react";
import { AuthContext } from "../../service/AuthContext.";
import "./Header.css";
const Header = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <header>
      <div className="header-portion">
        <h1>Customer Profile</h1>
        {isLoggedIn && (
          <button onClick={logout} className="logout-button">
            Logout
          </button>
        )}
      </div>
    </header>
  );
};
export default Header;
