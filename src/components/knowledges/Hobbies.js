import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-running"></i>
          <span>Course à pied</span>
        </li>
        <li className="hobby">
          <i className="fas fa-rocket"></i>
          <span>Espace</span>
        </li>
        <li className="hobby">
          <i className="fas fa-chess-board"></i>
          <span>Jeux de plateau</span>
        </li>
        <li className="hobby">
          <i className="fab fa-playstation"></i>
          <span>Jeux vidéos</span>
        </li>
        <li className="hobby">
          <i className="fab fa-spotify"></i>
          <span>Musique</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
