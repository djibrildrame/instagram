import React from "react";
import LoginForm from "./Component/LoginForm";
import Compte from "./Component/Compte";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Compte" element={<Compte />} />
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
