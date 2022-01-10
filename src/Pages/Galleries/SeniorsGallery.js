import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import S1 from "../../Images/Photography/SeniorsGallery/S1.jpg";
import S2 from "../../Images/Photography/SeniorsGallery/S2.jpg";
import S3 from "../../Images/Photography/SeniorsGallery/S3.jpg";
import S4 from "../../Images/Photography/SeniorsGallery/S4.jpg";
import S5 from "../../Images/Photography/SeniorsGallery/S5.jpg";
import S6 from "../../Images/Photography/SeniorsGallery/S6.jpg";
import S7 from "../../Images/Photography/SeniorsGallery/S7.jpg";
import S8 from "../../Images/Photography/SeniorsGallery/S8.jpg";
import S9 from "../../Images/Photography/SeniorsGallery/S9.jpg";
import S10 from "../../Images/Photography/SeniorsGallery/S10.jpg";
import S11 from "../../Images/Photography/SeniorsGallery/S11.jpg";
import S12 from "../../Images/Photography/SeniorsGallery/S12.jpg";
import S13 from "../../Images/Photography/SeniorsGallery/S13.jpg";
import S14 from "../../Images/Photography/SeniorsGallery/S14.jpg";
import S15 from "../../Images/Photography/SeniorsGallery/S15.jpg";
import S16 from "../../Images/Photography/SeniorsGallery/S16.jpg";

import "./Styles/ImageGallery.css";

const images = [
  S1,
  S2,
  S3,
  S4,
  S5,
  S6,
  S7,
  S8,
  S9,
  S10,
  S11,
  S12,
  S13,
  S14,
  S15,
  S16
];

export default class SeniorsGallery extends Component {
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
              src={S1}
              alt="S1"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}
              src={S2}
              alt="S2"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 2 })}
              src={S3}
              alt="S3"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 3 })}
              src={S4}
              alt="S4"
            />
          </div>
        </div>
        <div className="image-gallery__column">
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 4 })}
              src={S5}
              alt="S5"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 5 })}
              src={S6}
              alt="S6"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 6 })}
              src={S7}
              alt="S7"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 7 })}
              src={S8}
              alt="S8"
            />
          </div>
        </div>
        <div className="image-gallery__column">
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 8 })}
              src={S9}
              alt="S9"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 8 })}
              src={S10}
              alt="S10"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 10 })}
              src={S11}
              alt="S11"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 11 })}
              src={S12}
              alt="S12"
            />
          </div>
        </div>
        <div className="image-gallery__column">
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 12 })}
              src={S13}
              alt="S13"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 13 })}
              src={S14}
              alt="S14"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 14 })}
              src={S15}
              alt="S15"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 15 })}
              src={S16}
              alt="S16"
            />
          </div>
        </div>
      </div>
    );
  }
}
