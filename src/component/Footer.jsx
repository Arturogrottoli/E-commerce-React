import React from 'react';
import { Link } from "react-router-dom";
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link to="/" className="nav-link active"> Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link">Productos </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">Nosotros</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link"> Contacto</Link>
        </li>
      </ul>
      <div className="text-center">
        <a href="https://www.facebook.com" ><i><FontAwesomeIcon icon={faFacebookSquare} /></i></a>
        <a href="https://twitter.com"><i><FontAwesomeIcon icon={faTwitterSquare} /></i></a>
        <a href="https://www.instagram.com/"><i><FontAwesomeIcon icon={faInstagramSquare} /></i></a>
        <br />
        <p>Desarrollado por <a href={"https://github.com/Arturogrottoli/E-commerce-React"} target={"_BLANK"} rel={"noreferrer"}>Arturo Grottoli</a></p>
      </div>
    </footer>
  );
}

export default Footer;