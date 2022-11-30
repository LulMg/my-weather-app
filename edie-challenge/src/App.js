import "./Styles/App.css";
import hero from "./Images/heroImage.jpg";
//COMPONENTS
import * as components from "./Components";
//IMAGES
import juice from "./Images/juice-product.png";
import board from "./Images/onboard.png";
import booking from "./Images/booking.png";
import home from "./Images/smarthome.jpg";
import girl from "./Images/person3.png";
import guy1 from "./Images/person1.png";
import guy2 from "./Images/person2.png";
import guy4 from "./Images/person4.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <components.NavBar
          logo="Edie"
          li1="Home"
          ref1="#"
          li2="Services"
          ref2="#servicesTitle"
          li3="Our Works"
          ref3="#imageBoxes"
          li4="Clients"
          ref4="#finalCont"
          li5="Contact"
          ref5="#finals"
        />
      </header>

      <section className="title">
        <div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unhappy with your website?
          </a>
        </div>
        <div className="bigTitle">
          <h1>We create beautiful and fast web services</h1>
        </div>
      </section>

      <section className="mainImage">
        <img src={hero} alt="heroImage" />
      </section>

      <section className="generalContent">
        <section className="content">
          <div className="storyTitle">
            <h1>Story, emotion and purpose</h1>
          </div>
          <div className="storyText">
            <p>
              We help transform your ideas into real world applications that
              will outperform your toughest competition and help you achieve
              your strategic goals in short period of time.
            </p>
          </div>
          <div className="inputText">
            <p>Want us to contact you?</p>
            <components.Input />
          </div>
        </section>

        <div className="servicesTitle" id="servicesTitle">
          <h1>We offer high demand services </h1>
        </div>

        <section className="boxes">
          <div>
            <components.Box
              content={<span className="material-symbols-outlined">edit</span>}
              title="UI/UX Design"
              className="blue"
              id="blue"
            />
          </div>
          <div>
            <components.Box
              content={<span className="material-symbols-outlined">code</span>}
              title="Front End"
              className="blue"
              id="green"
            />
          </div>
          <div>
            <components.Box
              content={<span className="material-symbols-outlined">list</span>}
              title="Back End"
              className="blue"
              id="red"
            />
          </div>
        </section>

        <section className="imageBoxes" id="imageBoxes">
          <h1>Good design means good business</h1>

          <div className="boxBody">
            <div className="spaceBox">
              <components.ImageBox
                name="Smart home dashboard"
                img={home}
                label="Full stack application"
              />
            </div>
            <div className="movingImg">
              <components.ImageBox
                name="Onboard application"
                img={board}
                label="UX/UI design"
              />
            </div>
          </div>
          <div className="boxBody">
            <div className="spaceBox">
              <components.ImageBox
                name="Booking system"
                img={booking}
                label="Mobile application"
              />
            </div>
            <div className="movingImg">
              <components.ImageBox
                name="Juice product homepage"
                img={juice}
                label="Front End applicati on"
              />
            </div>
          </div>
          <div className="seeMore">
            <a className="aMore" href="#">
              <p>
                see more{" "}
                <span className="material-symbols-outlined" id="arrow">
                  arrow_right_alt
                </span>
              </p>
            </a>
          </div>
        </section>

        <section className="meatTeam">
          <div className="textTeam">
            <div>
              <p className="subtitle">Meet the team</p>
              <h1 className="titleTeam">We are chilled and a laidback team</h1>
              <p className="contemtTeam">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="imgTeam">
            <div>
              <img src={girl} alt="girl" id="girl" />
            </div>
            <div className="boys">
              <img src={guy1} alt="boy" id="boy1" />
              <img src={guy2} alt="boy2" id="boy2" />
            </div>
          </div>
        </section>

        <section className="finalCont" id="finalCont">
          <div className="finalText">
            <h1>
              “Fast and outstanding resutls. Edie understands their customer’s
              needs. They have a young and talented team.”{" "}
            </h1>
          </div>
          <div className="menFinal">
            <div>
              <img src={guy4} alt="guy4" />
            </div>
            <div>
              <h3>Carlos Tran</h3>
              <p>The Decorate Gatsby</p>
            </div>
          </div>
        </section>
      </section>
      <div className="finals" id="finals">
        <components.Footer />
      </div>
    </div>
  );
}

export default App;
