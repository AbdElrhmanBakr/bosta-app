import UpperTrack from "../UpperTrack/UpperTrack";
import DownTrack from "../DownTrack/DownTrack";
import "./TrackSection.css";

const TrackSection = () => {
  return (
    <section className="track-section">
      <div className="track-container">
        <UpperTrack />
        <hr className="divider" />
        <DownTrack />
      </div>
    </section>
  );
};

export default TrackSection;
