import "./App.css";
import React, { useContext } from "react";
import Header from "./components/Header/Header";
import MainPage from "./view/MainPage/MainPage";
import { AuthProvider } from "./service/AuthContext.";
import CharacterList from "./view/CharacterList/CharacterList";
import { AuthContext } from "./service/AuthContext.";
import Footer from "./components/Footer/Footer";

function App() {
  const isLoggedIn = useContext(AuthContext);
  // Use the 'useContext' hook to access the 'AuthContext' and get the 'isLoggedIn' value.
  return (
    <div className="App">
      <AuthProvider>
        {" "}
        {/* Wrap the components in the 'AuthProvider' to provide authentication context. */}
        <Header />
        {isLoggedIn ? <CharacterList /> : <MainPage />}
        {/* Conditional rendering: 
          - If 'isLoggedIn' is true, render the 'CharacterList' component.
          - If 'isLoggedIn' is false, render the 'MainPage' component.
        */}
      </AuthProvider>
      <Footer />
    </div>
  );
}

export default App;
