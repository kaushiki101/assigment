import { Logo } from "./logo";
import "./style.css";

import(
  "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
);

export default function Header() {
  return (
    <div className="font">
      <div className="Header">
        <div className="menu-item">
          <span>PROJECTS</span>
          <span>EXPERTISE</span>
          <span>ABOUT US</span>
          <span>PEOPLE</span>
        </div>
        <div className="logo">
          <Logo />
        </div>
        <div className="menu-item last">
          <span>CAREER</span>
          <span>AU</span>
        </div>
      </div>
    </div>
  );
}
