import { useContext } from "react";

import { langContext } from "../../context/LangContext";
import ProblemLogo from "../../assets/problem.svg";
import "./DetailsLeft.css";

const DetailsLeft = () => {
  const { langText } = useContext(langContext);
  const addressText = langText.address;

  return (
    <div className="details-left">
      <h2>{addressText.head}</h2>
      <div className="adress">{addressText.details}</div>
      <div className="problem">
        <img src={ProblemLogo} alt="ProblemImage" />
        <div className="problem-det">
          <h2>{addressText.prob}</h2>
          <button>{addressText.probButton}</button>
        </div>
      </div>
    </div>
  );
};

export default DetailsLeft;
