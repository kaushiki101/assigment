import "./style.css";
import(
  "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Oswald:wght@200..700&display=swap"
);
import(
  "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Oswald:wght@200..700&display=swap"
);

export default function SectionC() {
  return (
    <div className="Image-Grid">
      <div className="Image-1">
        <img src="/img/people.png" alt="People" className="People" />
        <img
          src="/img/bicycle.png"
          alt="bicycle"
          className="bicycle"
          style={{
            width: "410px",
            height: "337px",
            objectFit: "cover",
            objectPosition: "100% 70;",
          }}
        />
        <div></div>
        <img
          src="/img/prize.png"
          alt="prize"
          className="prize"
          style={{
            width: "230px",
            height: "737px",
            objectFit: "cover",
            objectPosition: "10% 70",
          }}
        />
      </div>
      <div>
        <img
          src="/img/cupcake.png"
          alt="cupcake"
          className="cupcake"
          style={{
            width: "430px",
            height: "737px",
            objectFit: "cover",
            objectPosition: "100% 70",
            float: "left",
          }}
        />

        <div className="text">
          <h4 className="left">
            <div className="paras">
              We celebrate
              <span> success</span>
            </div>
          </h4>
          <p className="para">
            At CaSE we understand that every achievement, big or small, is a
            result of the hard work and dedication of our team members. We take
            pride in celebrating these moments because they underscore the
            commitment and effort put into each project.
          </p>
          <p className="para">
            Some of our favourite events on the calendar include our coveted
            Melbourne Cup event and our always amazing Christmas Party.
            In-between, our team celebrate together during team cycling events,
            regular team dinners and social morning teas to celebrate milestones
            and special days. Taking the time to celebrate wins is our way of
            showing gratitude and ensuring everyone knows their efforts make a
            difference.
          </p>
        </div>
        <img
          src="/img/happy diwali.png"
          alt="diwali"
          className="diwali"
          style={{
            width: "980px",
            height: "337px",
            objectFit: "cover",
            objectPosition: "10% 70",
            float: "right",
          }}
        />
      </div>
      <div
        className="texting"
        style={{
          width: "580px",
          height: "337px",
          objectFit: "cover",
          objectPosition: "10% 70",
          float: "left",
        }}
      >
        <div className="left">
          <div className="paras">
            Employee
            <span> Appreciation Program</span>
          </div>
        </div>
        <p className="para">
          Our Employee Appreciation Program is tailored to honor the ongoing
          commitment and efforts of our long-serving team members. Our 5 Year
          Club and 10 Year Club are special milestones within this program,
          celebrating employees who have dedicated half a decade or a full
          decade to our company mission. Each year, members of these clubs are
          invited to annual events held at select, memorable locations,
          reflecting our gratitude and recognition of their unwavering
          dedication. It's our way of saying thank you and ensuring that every
          significant chapter in our collective journey is celebrated with the
          grandeur it deserves
        </p>
      </div>
      <img
        src="/img/hamper.png"
        alt="hamper"
        className="hamper"
        style={{
          width: "800px",
          height: "337px",
          objectFit: "cover",
          objectPosition: "10% 70",
          float: "right",
        }}
      />
      <div className="lastImage">
        <img
          src="/img/thankyou.png"
          alt="thankyou"
          className="thankyou"
          style={{
            width: "800px",
            height: "437px",
            objectFit: "cover",
            objectPosition: "10% 20",
            float: "left",
            marginLeft: "20px",
            marginBottom: "80px",
          }}
        />
        <img
          src="/img/5 yearclub.png"
          alt="5 year"
          className="years"
          style={{
            width: "600px",
            height: "437px",
            objectFit: "cover",
            objectPosition: "10px 40%",
            float: "right",
            position: "relative",
            marginRight: "20px",
          }}
        />
      </div>
    </div>
  );
}
