// src/Component/Compte.js

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import insta from "./instagram.png";
import "./Compte.css";
import blanc from "./picture/Instagram_files/blanc.jpeg";
import trait from "./picture/Instagram_files/trait.png";
import Appstore from "./picture/Instagram_files/Appstore.png";
import Googleplay from "./Playstore.png";

const Compte = () => {
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [inscriptionSuccess, setInscriptionSuccess] = useState(false);
  const navigate = useNavigate();

  // Fonction pour valider les champs du formulaire
  const handleValidation = () => {
    const newErrors = {};

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailOrMobile) && !/^\d+$/.test(emailOrMobile)) {
      newErrors.emailOrMobile = "Veuillez entrer une adresse email valide ou un numéro de mobile.";
    }

    // Ajoute ici d'autres validations si nécessaire

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Fonction pour gérer la soumission du formulaire
  const handleInscription = async () => {
    const isValid = handleValidation();
    if (isValid) {
      try {
        const response = await axios.post("http://localhost:5000/creercompte", {
          emailOrMobile,
          fullName,
          username,
          password,
        });

        console.log(response.data);
        setInscriptionSuccess(true);
        navigate("/confirmation");
      } catch (error) {
        console.error("Erreur lors de la création du compte", error);
        setErrors({ form: "Erreur lors de la création du compte." });
      }
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleInscription();
  };

  return (
    <div>
      <div className="compte1">
        <div className="inscrire">
          <img className="insta1" src={insta} alt="Instagram logo" />
          <h1 className="amis">
            Inscrivez-vous pour voir les photos <br /> et vidéos de vos amis.
          </h1>

          <button className="face">
            <img className="blanc" src={blanc} alt="Facebook logo" />
            Se connecter avec Facebook
          </button>
          <div className="ligne">
            <img className="trait1" src={trait} alt="Décorative ligne" />
            <p className="where">Ou</p>
            <img className="trait1" src={trait} alt="Décorative ligne" />
          </div>
          <div className="case">
            <input
              type="text"
              placeholder="Numéro de mobile ou e-mail"
              value={emailOrMobile}
              onChange={(e) => setEmailOrMobile(e.target.value)}
            />
            {errors.emailOrMobile && <p style={{ color: "red" }}>{errors.emailOrMobile}</p>}
            <input
              type="text"
              placeholder="Nom complet"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            {errors.fullName && <p style={{ color: "red" }}>{errors.fullName}</p>}
            <input
              type="text"
              placeholder="Nom d'utilisateur"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
          </div>
          <p className="info">
            Les personnes qui utilisent notre service ont pu<br /> importer vos coordonnées sur Instagram. En<br />
            <Link to="#">savoir plus</Link>
          </p>
          <p className="condition">
            En vous inscrivant, vous acceptez nos <br /><Link to="#">Conditions générales</Link>. Découvrez comment <br /> nous collectons, utilisons et partageons vos <br />données en lisant notre
            <Link to="#">Politique de <br /> confidentialité</Link> et comment nous utilisons les <br /> cookies et autres technologies similaires en <br />consultant notre
            <Link to="#">Politique d’utilisation des cookies</Link>.
          </p>
          <Link to="/confirmation" onClick={handleClick}>
            <input
              className="suivant"
              type="submit"
              value="Se connecter"
            />
          </Link>
        </div>
        <h2>
          Vous avez un compte ? <Link to="/login">Connectez-vous</Link>
        </h2>
      </div>
      <h3 className="télécharge">Téléchargez l'application.</h3>
      <div className="app">
        <img className="apple télé" src={Appstore} alt="Appstore" />
        <img className="android télé" src={Googleplay} alt="Google Play" />
      </div>
    </div>
  );
};

export default Compte;
