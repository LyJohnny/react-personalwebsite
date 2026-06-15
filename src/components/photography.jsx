import React, { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Container } from "react-bootstrap";
import { images } from "../utils/images";
import "../styles/Portfolio.scss";

function Photography() {
  const [index, setIndex] = useState(-1);
  const slides = images.map((img) => ({ src: img.src }));

  return (
    <div className="photographyTab">
      <Container className="project-container">
        <Gallery
          rowHeight={320}
          images={images}
          onClick={(i) => setIndex(i)}
          enableImageSelection={false}
        />
        <Lightbox
          open={index >= 0}
          index={Math.max(index, 0)}
          close={() => setIndex(-1)}
          slides={slides}
        />
      </Container>
    </div>
  );
}

export default Photography;
