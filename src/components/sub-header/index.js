import RightArrow from "../right-arrow";
import "./style.css";
import(
  "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
);

export default function SubHeader() {
  return (
    <div className="SubHeader">
      <div className="item">
        <div className="index">1</div>
        <div className="content">
          <p className="SubHeader__headline">We stay connected</p>
          <RightArrow onClick={() => {}} />
        </div>
      </div>
      <div className="item">
        <div className="index">2</div>
        <div className="content">
          <p className="SubHeader__headline">
            We believe in diversity & inclusion
          </p>
          <RightArrow onClick={() => {}} />
        </div>
      </div>
      <div className="item">
        <div className="index">3</div>
        <div className="content">
          <p className="SubHeader__headline">We celebrate success</p>
          <RightArrow onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
