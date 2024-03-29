import React from "react";
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { images } from "../utils/images";
import "../styles/Portfolio.scss";
import { Tab } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Photography() {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index, item) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div className="photographyTab">
      <Container className="project-container">
        <Gallery
          key={Tab}
          rowHeight={320}
          images={images}
          onClick={handleClick}
          enableImageSelection={false}
          thumbnailImageComponent={LazyLoadImage.images}
        />
        {!!currentImage && (
          <Lightbox
            enableZoom={false}
            mainSrc={currentImage.src}
            imageTitle={currentImage.caption}
            mainSrcThumbnail={currentImage.src}
            nextSrc={nextImage.src}
            nextSrcThumbnail={nextImage.src}
            prevSrc={prevImage.src}
            prevSrcThumbnail={prevImage.src}
            onCloseRequest={handleClose}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
            animationDisabled={true}
          />
        )}
      </Container>
    </div>
  );
}

export default Photography;
