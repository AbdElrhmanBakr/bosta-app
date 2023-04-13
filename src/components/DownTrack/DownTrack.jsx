import { useContext } from "react";

import { langContext } from "../../context/LangContext";
import "./DownTrack.css";

const DownTrack = () => {
  const { langText } = useContext(langContext);
  const shipmentText = langText.track;
  return (
    <div className="down-track">
      <div className="horizontal timeline">
        <div className="steps">
          <div className="step">
            <span>{shipmentText.no1}</span>
          </div>
          <div className="step">
            <span>{shipmentText.no2}</span>
          </div>
          <div className="step ">
            <span>{shipmentText.no3}</span>
          </div>
          <div className="step current">
            <span>{shipmentText.no4}</span>
          </div>
        </div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default DownTrack;
