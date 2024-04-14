import "./style.css";
import(
  "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Oswald:wght@200..700&display=swap"
);
export default function SectionD() {
  return (
    <>
      <div className="Container">
        <div className="texts">
          As a <span>global business,</span> we encourage you to contact us no
          matter where you are located in the world.
        </div>
        <div className="texts-2">
          Browse our job opportunities across the globe.
        </div>
        <div className="">
          <span className="centre">OPEN ROLES</span>
        </div>
        <img src="/img/world.png" alt="world" className="world" />
      </div>
      <div className="logos">
        <div>
          <img src="/img/logo.png" alt="logo" className="logo" />
        </div>
        <div className="column-container">
          <div className="column">
            <h5>Expertise</h5>
            <p> Design</p>
            <p> Specialist Expertise</p>
            <p>Commercial Advice</p>
            <p>Traffic & Transport</p>
          </div>
          <div className="column">
            <h5>Sector</h5>
            <p>Road</p>
            <p>Tunner</p>
            <p>Bridge</p>
            <p>Others +</p>
          </div>
          <div className="column">
            <h5>Our Business</h5>
            <h5>Work With Us</h5>
            <h5>Projects</h5>
            <h5>News</h5>
          </div>
          <div className="column">
            <h5>Our Capabilites</h5>
            <h5>Engineers</h5>
            <h5>Contact</h5>
          </div>
        </div>
      </div>
      <div className="block">
        <div className="footer__subtext">
          © 2024 Case International. All right reserved.
        </div>
        <div className="footer">
          Term and Condition
          <a className="subtext ">Privacy Policy</a>
        </div>
      </div>
    </>
  );
}
