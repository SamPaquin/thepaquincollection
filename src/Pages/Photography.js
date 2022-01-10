import { Routes, Route, Link } from "react-router-dom";

import WeddingGallery from "./Galleries/WeddingGallery";
import SeniorsGallery from "./Galleries/SeniorsGallery";
import FamilyGallery from "./Galleries/FamilyGallery";

import PI from "../Images/Photography/PhotographyImage.jpg";

import "./Styles/Photography.css";

const Photography = () => {
  return (
    <div className="photography-page" id="photography">
      <div className="photography-page__section">
        <div className="photography-image">
          <img src={PI} alt="The Paquin Collection - Photography" />
          <div className="photography-image__decor" />
        </div>
        <div className="photography-page__content">
          <div className="photography-page__content-text">
            <h2>Photography Galleries</h2>
            <p className="photography-page__content-text-cursive">
              so, you want to see my work... awesome!
            </p>
            <p>
              It was extremely hard to choose, but I pulled together some of my
              favorite pictures for these galleries! Check them out and let me
              know what you think!!
            </p>
          </div>
          <div className="photography-page__content-links">
            <Link to="/">
              <button>wedding gallery</button>
            </Link>
            <Link to="/photography/seniors-gallery">
              <button>seniors gallery</button>
            </Link>
            <Link to="/photography/family-gallery">
              <button>family gallery</button>
            </Link>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<WeddingGallery />} exact />
        <Route
          path="/photography/seniors-gallery"
          element={<SeniorsGallery />}
          exact
        />
        <Route
          path="/photography/family-gallery"
          element={<FamilyGallery />}
          exact
        />
      </Routes>
    </div>
  );
};

export default Photography;
