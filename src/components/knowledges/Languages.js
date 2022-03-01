import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 1.2 },
      { id: 2, value: "Css", xp: 1.4 },
      { id: 3, value: "C++", xp: 1.5 },
      { id: 4, value: "Sql", xp: 0.5 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 0.7 },
      { id: 2, value: "Sass", xp: 0.4 },
      { id: 3, value: "Next", xp: 0.6 },
      { id: 4, value: "Iostream", xp: 1 },
    ],
  };

  render() {
    let { languages, frameworks } = this.state; //raccourci pour pointer les elements dans ce component

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          title="frameworks & bibliothèques"
          className="frameworksDisplay"
        />
      </div>
    );
  }
}

export default Languages;
