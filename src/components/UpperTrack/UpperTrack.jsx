import { useContext } from "react";

import { langContext } from "../../context/LangContext";
import { shipContext } from "../../context/ShipmentContext";
import "./UpperTrack.css";

const UpperTrack = () => {
  const { langText } = useContext(langContext);
  const shipmentText = langText.shipment;
  const { shipmentData } = useContext(shipContext);

  return (
    <div className="upper-track">
      <div className="track-elem">
        <span className="track-header">{`${shipmentText.no} ${shipmentData.TrackingNumber}`}</span>
        <span className="track-details order-status">
          {shipmentText.noState}
        </span>
      </div>
      {shipmentData.CurrentStatus && (
        <div className="track-elem">
          <span className="track-header">{shipmentText.update}</span>
          <span className="track-details">
            {`${shipmentData.CurrentStatus.timestamp.split("T")[0]} || ${
              shipmentData.CurrentStatus.timestamp.split("T")[1].split(".")[0]
            }`}
          </span>
        </div>
      )}
      <div className="track-elem">
        <span className="track-header">{shipmentText.provider}</span>
        <span className="track-details">{shipmentData.provider}</span>
      </div>
      {shipmentData.TransitEvents && (
        <div className="track-elem">
          <span className="track-header">{shipmentText.deliver}</span>
          <span className="track-details">{shipmentText.deliverState}</span>
        </div>
      )}
    </div>
  );
};

export default UpperTrack;
