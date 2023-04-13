import { useContext } from "react";

import TableRow from "../TableRow/TableRow";
import { langContext } from "../../context/LangContext";
import { shipContext } from "../../context/ShipmentContext";
import "./DetailsRight.scss";

const DetailsRight = () => {
  const { langText } = useContext(langContext);
  const tableText = langText.tableData;
  const { shipmentData } = useContext(shipContext);
  const shipmentDetails = shipmentData.TransitEvents;

  return (
    <div className="details-right">
      <h2>{tableText.head}</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>{tableText.col1}</th>
              <th>{tableText.col2}</th>
              <th>{tableText.col3}</th>
              <th>{tableText.col4}</th>
            </tr>
          </thead>
          <tbody>
            {shipmentDetails &&
              shipmentDetails.map((shipment, index) => (
                <TableRow key={index} shipment={shipment} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailsRight;
