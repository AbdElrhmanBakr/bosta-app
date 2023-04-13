import DetailsRight from "../DetailsRight/DetailsRight";
import DetailsLeft from "../DetailsLeft/DetailsLeft";
import "./DetailsSection.css";

const DetailsSection = () => {
  return (
    <section className="details-section">
      <DetailsRight />
      <DetailsLeft />
    </section>
  );
};

export default DetailsSection;
