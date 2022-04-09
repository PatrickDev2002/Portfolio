import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Roubaix</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0629306203">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Téléphone copié !");
                  }}
                >
                  06 29 30 62 03
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text="patrick.delvoye2002@gmail.com">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Email copié !");
                  }}
                >
                  patrick.delvoye2002@gmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a
              href="https://www.linkedin.com/in/patrick-delvoye-b66679215/"
              target="_blank"
              rel="nooener noreferrer"
            >
              <h4>LinkedIn</h4>
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/PatrickDev2002"
              target="_blank"
              rel="nooener noreferrer"
            >
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/sora_dlv/"
              target="_blank"
              rel="nooener noreferrer"
            >
              <h4>Instagram</h4>
              <i className="fab fa-instagram"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
