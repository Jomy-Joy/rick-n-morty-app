import React from "react";
import Header from "./components/Header/Header";
import MainPage from "./view/MainPage/MainPage";
import { AuthProvider } from "./service/AuthContext.";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  
  return (
    <div className="App">
      <AuthProvider>
        <Header />
         <MainPage />
      </AuthProvider>
      <Footer />
    </div>
  );
}

export default App;
