import logo from "./logo.svg";
import "./App.css";
import ironhack from "./images/ironhack-logo-xs.png";
import menu from "./images/menu-top-xs.png";
import declarative from "./images/icon1.png";
import component from "./images/icon2.png";
import single from "./images/icon3.png";
import jsx from "./images/icon4.png";
function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <div className="img-con">
          <img src={ironhack} alt="ironhack logo" />
        </div>
        <div className="img-con">
          <img src={menu} alt="ironhack logo" />
        </div>
      </nav>
      <section className="first-sec">
        <div className="first-text">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer
          </p>
          <button>Awesome!</button>
        </div>
      </section>

      <section className="second-sec">
        <div className="icons-container">
          <div className="elem-container">
            <img src={declarative} />
            <h3>Declarative</h3>
            <p className="par">
              React makes it painless to create interactive UIs.
            </p>
          </div>

          <div className="elem-container">
            <img src={component} />
            <h3>Component</h3>
            <p className="par">
              Build emcapsuled components that manage their state.
            </p>
          </div>

          <div className="elem-container">
            <img src={single} />
            <h3>Single-Way</h3>
            <p className="par">
              A set of inmutable values are passed to the component´s.
            </p>
          </div>

          <div className="elem-container">
            <img src={jsx} />
            <h3>JSX</h3>
            <p className="par">
              Statically-typed, designed to run on modern browsers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
