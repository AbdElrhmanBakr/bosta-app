import { useContext } from "react";

import { langContext } from "../../context/LangContext";

const TableRow = ({ shipment }) => {
  const { langText } = useContext(langContext);
  const tableText = langText.tableData;
  return (
    <tr>
      <td>{tableText.col1Det}</td>
      <td>{shipment.timestamp.split("T")[0]}</td>
      <td>{shipment.timestamp.split("T")[1].split(".")[0]}</td>
      <td>{shipment.state.replace(/_/g, " ")}</td>
    </tr>
  );
};

export default TableRow;
