import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import F1 from "../../Images/Photography/FamilyGallery/F1.jpg";
import F2 from "../../Images/Photography/FamilyGallery/F2.jpg";
import F3 from "../../Images/Photography/FamilyGallery/F3.jpg";
import F4 from "../../Images/Photography/FamilyGallery/F4.jpg";
import F5 from "../../Images/Photography/FamilyGallery/F5.jpg";
import F6 from "../../Images/Photography/FamilyGallery/F6.jpg";
import F7 from "../../Images/Photography/FamilyGallery/F7.jpg";
import F8 from "../../Images/Photography/FamilyGallery/F8.jpg";
import F9 from "../../Images/Photography/FamilyGallery/F9.jpg";
import F10 from "../../Images/Photography/FamilyGallery/F10.jpg";
import F11 from "../../Images/Photography/FamilyGallery/F11.jpg";
import F12 from "../../Images/Photography/FamilyGallery/F12.jpg";
import F13 from "../../Images/Photography/FamilyGallery/F13.jpg";
import F14 from "../../Images/Photography/FamilyGallery/F14.jpg";
import F15 from "../../Images/Photography/FamilyGallery/F15.jpg";
import F16 from "../../Images/Photography/FamilyGallery/F16.jpg";

import "./Styles/ImageGallery.css";

const images = [
  F1,
  F2,
  F3,
  F4,
  F5,
  F6,
  F7,
  F8,
  F9,
  F10,
  F11,
  F12,
  F13,
  F14,
  F15,
  F16
];

export default class FamilyGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div className="image-gallery">
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
        <div className="image-gallery__column">
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
              src={F1}
              alt="F1"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}
              src={F2}
              alt="F2"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 2 })}
              src={F3}
              alt="F3"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 3 })}
              src={F4}
              alt="F4"
            />
          </div>
        </div>
        <div className="image-gallery__column">
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 4 })}
              src={F5}
              alt="F5"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 5 })}
              src={F6}
              alt="F6"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 6 })}
              src={F7}
              alt="F7"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 7 })}
              src={F8}
              alt="F8"
            />
          </div>
        </div>
        <div className="image-gallery__column">
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 8 })}
              src={F9}
              alt="F9"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 8 })}
              src={F10}
              alt="F10"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 10 })}
              src={F11}
              alt="F11"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 11 })}
              src={F12}
              alt="F12"
            />
          </div>
        </div>
        <div className="image-gallery__column">
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 12 })}
              src={F13}
              alt="F13"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 13 })}
              src={F14}
              alt="F14"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 14 })}
              src={F15}
              alt="F15"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 15 })}
              src={F16}
              alt="F16"
            />
          </div>
        </div>
      </div>
    );
  }
}
