import { useState } from "react";
import "./style.css";
import LeftArrow from "../left-arrow";
import RightArrow from "../right-arrow";
import { BookIcon, ChatIcon, ScreenIcon } from "./icons";
import(
  "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Oswald:wght@200..700&display=swap"
);

export default function SectionA() {
  const [activeIndex, setActiveIndex] = useState(0);

  const moveNext = () => {
    if (activeIndex === 0) {
      return setActiveIndex(1);
    }
    if (activeIndex === 1) {
      return setActiveIndex(2);
    }
    if (activeIndex === 2) {
      return setActiveIndex(0);
    }
  };

  const movePrev = () => {
    if (activeIndex === 0) {
      return setActiveIndex(2);
    }
    if (activeIndex === 1) {
      return setActiveIndex(0);
    }
    if (activeIndex === 2) {
      return setActiveIndex(1);
    }
  };

  return (
    <div className="SectionA">
      <div className="left">
        <div className="title">
          We <span>stay connected</span>
        </div>
        <div className="accordion">
          <div className="accordion_item">
            <h5 className="accordion_title">
              <ScreenIcon /> Quarterly Business Updates
            </h5>
            <div
              className="accordion_content"
              style={{ height: activeIndex === 0 ? 123 : 0 }}
            >
              We strive to stay connected as a team through communication and
              collaboration. This materialises every quarter through our
              Quarterly Business Update events. These gatherings are immersive
              sessions where every team member, regardless of rank or tenure,
              comes together to contribute to our overarching business strategy,
              and stay connected. They are opportunities to learn from our
              seasoned leaders and to also share personal insights and
              achievements that can steer our collective future. In an
              ever-evolving engineering landscape, staying connected isn’t just
              a benefit—it’s essential.
            </div>
          </div>
          <div className="accordion_item">
            <h5 className="accordion_title">
              <ChatIcon /> Industry Events & Networking
            </h5>
            <div
              className="accordion_content"
              style={{ height: activeIndex === 1 ? 123 : 0 }}
            >
              We strive to stay connected as a team through communication and
              collaboration. This materialises every quarter through our
              Quarterly Business Update events. These gatherings are immersive
              sessions where every team member, regardless of rank or tenure,
              comes together to contribute to our overarching business strategy,
              and stay connected. They are opportunities to learn from our
              seasoned leaders and to also share personal insights and
              achievements that can steer our collective future. In an
              ever-evolving engineering landscape, staying connected isn’t just
              a benefit—it’s essential.
            </div>
          </div>
          <div className="accordion_item">
            <h5 className="accordion_title">
              <BookIcon /> Associations Memberships
            </h5>
            <div
              className="accordion_content"
              style={{ height: activeIndex === 2 ? 123 : 0 }}
            >
              We strive to stay connected as a team through communication and
              collaboration. This materialises every quarter through our
              Quarterly Business Update events. These gatherings are immersive
              sessions where every team member, regardless of rank or tenure,
              comes together to contribute to our overarching business strategy,
              and stay connected. They are opportunities to learn from our
              seasoned leaders and to also share personal insights and
              achievements that can steer our collective future. In an
              ever-evolving engineering landscape, staying connected isn’t just
              a benefit—it’s essential.
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="/img/section-a.png" alt="people" />
        <div className="arrow-container">
          <LeftArrow onClick={movePrev} />
          <RightArrow onClick={moveNext} />
        </div>
      </div>
    </div>
  );
}
