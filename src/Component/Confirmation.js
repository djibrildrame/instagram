import React from "react";
import { Link } from "react-router-dom";
import logo from "./instagram.png"
import "./Confirmation.css" // Assurez-vous de fournir le chemin correct vers votre logo

const Confirmation = () => {
  return (
    <div className="confirmation-container">
      <div className="confirmation-header">
        <img src={logo} alt="Logo" className="confirmation-logo" />
      </div>
      <div className="confirmation-content">
        <h1>Compte créé avec succès !</h1>
        <p>Votre compte a été créé avec succès. Vous pouvez maintenant vous connecter.</p>
        <Link to="/login" className="confirmation-link">Se connecter</Link>
      </div>
    </div>
  );
};

export default Confirmation;
