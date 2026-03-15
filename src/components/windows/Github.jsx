import React from "react";
import MacWindow from "./MacWindow";
import githubData from "/Users/chaitanyam2/study/cohort 2.0/react/D1/Mac_Os_Portfolio/Mac_Portfolio/src/assets/github.json";
import "./Github.scss";

const GitCard = ({ Data = { ...githubData } }) => {
  return (
    <div className="card">
      <img src={Data.image} alt="" />
      <h1>{Data.title}</h1>
      <p className="description">{Data.description}</p>
      <div className="tags">
        {Data.tags.map((tag) => (
          <p className="tag">{tag}</p>
        ))}
      </div>
      <div className="urls">
        <a href={Data.repoLink}>Repository Link</a>
       {Data.demoLink && <a href={Data.demoLink}>Demo Link</a>}
      </div>
    </div>
  );
};

const Github = ({windowName,setWindowsState}) => {
  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cards">
        {githubData.map((project,idx) => {
          return <GitCard key={idx} Data={project} />;
        })}
      </div>
    </MacWindow>
  );
};

export default Github;
