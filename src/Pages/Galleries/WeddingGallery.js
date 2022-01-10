import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import W1 from "../../Images/Photography/WeddingGallery/W1.jpg";
import W2 from "../../Images/Photography/WeddingGallery/W2.jpg";
import W3 from "../../Images/Photography/WeddingGallery/W3.jpg";
import W4 from "../../Images/Photography/WeddingGallery/W4.jpg";
import W5 from "../../Images/Photography/WeddingGallery/W5.jpg";
import W6 from "../../Images/Photography/WeddingGallery/W6.jpg";
import W7 from "../../Images/Photography/WeddingGallery/W7.jpg";
import W8 from "../../Images/Photography/WeddingGallery/W8.jpg";
import W9 from "../../Images/Photography/WeddingGallery/W9.jpg";
import W10 from "../../Images/Photography/WeddingGallery/W10.jpg";
import W11 from "../../Images/Photography/WeddingGallery/W11.jpg";
import W12 from "../../Images/Photography/WeddingGallery/W12.jpg";
import W13 from "../../Images/Photography/WeddingGallery/W13.jpg";
import W14 from "../../Images/Photography/WeddingGallery/W14.jpg";
import W15 from "../../Images/Photography/WeddingGallery/W15.jpg";
import W16 from "../../Images/Photography/WeddingGallery/W16.jpg";

import "./Styles/ImageGallery.css";

const images = [
  W1,
  W2,
  W3,
  W4,
  W5,
  W6,
  W7,
  W8,
  W9,
  W10,
  W11,
  W12,
  W13,
  W14,
  W15,
  W16
];

export default class WeddingGallery extends Component {
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
              src={W1}
              alt="W1"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}
              src={W2}
              alt="W2"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 2 })}
              src={W3}
              alt="W3"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 3 })}
              src={W4}
              alt="W4"
            />
          </div>
        </div>
        <div className="image-gallery__column">
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 4 })}
              src={W5}
              alt="W5"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 5 })}
              src={W6}
              alt="W6"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 6 })}
              src={W7}
              alt="W7"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 7 })}
              src={W8}
              alt="W8"
            />
          </div>
        </div>
        <div className="image-gallery__column">
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 8 })}
              src={W9}
              alt="W9"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 8 })}
              src={W10}
              alt="W10"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 10 })}
              src={W11}
              alt="W11"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 11 })}
              src={W12}
              alt="W12"
            />
          </div>
        </div>
        <div className="image-gallery__column">
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 12 })}
              src={W13}
              alt="W13"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 13 })}
              src={W14}
              alt="W14"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 14 })}
              src={W15}
              alt="W15"
            />
          </div>
          <div className="image-gallery__image">
            <img
              onClick={() => this.setState({ isOpen: true, photoIndex: 15 })}
              src={W16}
              alt="W16"
            />
          </div>
        </div>
      </div>
    );
  }
}
