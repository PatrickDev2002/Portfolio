import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent aller">
        <div className="content">
          <h1>Delvoye Patrick</h1>
          <h2>Alternant développeur web chez Trenois Decamps</h2>
          {/* <div className="pdf">
            <a href="./media/cv patrick_ynov.pdf" target=" blank">
              CV école Ynov
            </a>
            <a href="./media/cv patrick_iscod.pdf" target=" blank">
              CV école ISCOD
            </a>
            <a href="./media/cv f2i.pdf" target=" blank">
              CV école Digital School
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
