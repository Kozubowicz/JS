import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const MyContext = React.createContext();

export default function App() {
  const [cart, setCart] = useState([]);
  return (
    <MyContext.Provider value={{ cart }}>
      <div className="App">
        <NavBar />
        <Footer />
      </div>
    </MyContext.Provider>
  );
}
