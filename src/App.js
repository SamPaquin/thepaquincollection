import Footer from "./Components/Layout/Footer/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Photography from "./Pages/Photography";
import Videography from "./Pages/Videography";
import Investment from "./Pages/Investment";
import Contact from "./Pages/Contact";
import Logo from "./Images/Logo.png";
import "./Sass/App.css";
import Navbar from "./Components/Layout/Navbar/Navbar";

const App = () => {
  return (
    <div className="content" id="home">
      <img id="main-logo" src={Logo} alt="The Paquin Collection" />
      <div className="nav-links__container">
        <Navbar />
        <ul className="nav-links">
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#photography">photography</a>
          </li>
          <li>
            <a href="#videography">videography</a>
          </li>
          <li>
            <a href="#investment">investment</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </div>
      <Home />
      <About />
      <Photography />
      <Videography />
      <Investment />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
