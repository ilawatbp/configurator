import "./ImageGallery.css";
import { GreaterThanIcon } from "../../assets/icon/icon.jsx";
import { LessThanIcon } from "../../assets/icon/icon.jsx";
import { useState } from "react";
export default function ImageGallery({typeSelected = 0}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const directory = (`./types/`+ typeSelected.id);
  const images = [
    directory+"/image-01.png",
    directory+"/image-02.png",
    directory+"/image-03.png",
    directory+"/image-04.png",
    directory+"/image-05.png",
    directory+"/image-06.png",
    directory+"/image-07.png",
    directory+"/image-08.png",
  
  ];

  function handleSelectImage(index) {
    setActiveIndex(index);
  }
  function handleArrowClick(event) {
    let index = 0;
    const { name } = event.currentTarget;
    name == "right" ? (
      activeIndex === images.length-1 ? index = 0 : index = activeIndex + 1
    ) : (
      activeIndex === 0 ? index = images.length-1 : index = activeIndex - 1
    );
    setActiveIndex(index);
  }

  return (
    <div>
      <div className="image-container">
        <button className="arrow left" name="left" onClick={handleArrowClick}>
          {<LessThanIcon width={90} height={90} />}
        </button>
        <button className="arrow right" name="right" onClick={handleArrowClick}>
          {<GreaterThanIcon width={90} height={90} />}
        </button>
        <div className="thumbnail-container">
          {images.map((image, index) => (
            <div
              className={
                index == activeIndex
                  ? "thumbnail-wrapper thumbnail-active"
                  : "thumbnail-wrapper"
              }
              onClick={() => handleSelectImage(index)}
              key={index}
            >
              <img className="thumbnails-img" src={image} alt="" loading="lazy" />
            </div>
          ))}
        </div>
        <img className="main-image" src={images[activeIndex]} alt="" loading="lazy" />
      </div>
    </div>
  );
}
