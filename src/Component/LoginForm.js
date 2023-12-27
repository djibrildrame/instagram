import React, { useState, useEffect } from "react";
import "./LoginF.css";
import logo from "./picture/Instagram_files/insta.png";
import screen1 from "./picture/Instagram_files/phone_files/screenshot1-2x.png";
import trait from "./picture/Instagram_files/trait.png";
import facebook from "./picture/Instagram_files/facebook.png";
import { Link } from "react-router-dom";
import playstore from "./picture/Instagram_files/Googleplay.png";
import apple from "./picture/Instagram_files/Appstore.png";
import screen2 from "./picture/Instagram_files/screen2.png";
import screen3 from "./picture/Instagram_files/screen3.png";
import screen4 from "./picture/Instagram_files/screen4.png";
import Compte from "./Compte";

const LoginForm = () => {
  const images = [screen1, screen2, screen3, screen4];
  const [currentImage, setCurrentImage] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Effet pour changer l'image toutes les 5 secondes
  useEffect(() => {
    // Crée un identifiant d'intervalle et démarre le changement d'image
    const intervalId = setInterval(() => {
      // Sélectionne une image aléatoire du tableau
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 5000);

    // Nettoie l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, [images]);

  const handleLogin = () => {
    // Vérifier les informations d'identification par rapport à la base de données utilisateur
    const user = Compte.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // Authentification réussie, vous pouvez rediriger ou effectuer d'autres actions nécessaires
      console.log("Authentification réussie");
    } else {
      // Authentification échouée
      console.log("Authentification échouée");
    }
  };

  return (
    <div>
      <div className="login">
        <img className="principal" src={currentImage} />
        <div className="compte">
          <img className="insta" src={logo} />
          <div className="input">
            <input
              type="text"
              placeholder="Num.téléphone,nom d'utilisateur ou e-mail"
            />
            <input type="text" placeholder="Mot de passe" />
            <input
              onClick={handleLogin}
              className="submit"
              type="submit"
              value="Se connecter"
            />
          </div>
          <img className="trait gauche" src={trait} />
          <img className="trait droite" src={trait} />
          <p className="ou">Ou</p>
          <img className="facebook" src={facebook} />
          <p className="conface">Se connecter avec facebook </p>
          <p className="oublié">Mot de passe oublié ? </p>

          <h1 className="crée">
            Vous n’avez pas de compte ?<Link>Inscrivez-vous</Link>
          </h1>
          <h1 className="telecharger">Téléchargez l'application.</h1>
          <div className="store">
            <img src={apple} />
            <img src={playstore} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
