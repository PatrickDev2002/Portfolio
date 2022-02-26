import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Delvoye Patrick</h1>
          <h2>Développeur Front-end</h2>
          <div className="pdf">
            <a href="./media/CV.pdf" target=" blank">
              Télecharger CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
