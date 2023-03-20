import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import poster from "../assets/DevTrackerPoster.png";
import Button from "react-bootstrap/Button";
import { saveAs } from "file-saver";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../styles/Portfolio.scss";

function PosterModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const download = () => {
    saveAs(poster, "DevTrackerPoster.png");
  };

  return (
    <>
      <Button className="projectLink" id="poster-button" onClick={handleShow}>
        View Details
      </Button>

      <Modal show={show} onHide={handleClose} animation={true} size="lg">
        <Modal.Header bsPrefix="modal-header" closeButton>
          <div className="modal-title">
            <Modal.Title bsPrefix="modal-title">
              <h4 id="modal-titles"> DevTracker Poster</h4>
            </Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <LazyLoadImage
            src={poster}
            width="100%"
            height="100%"
            alt="DevTracker Poster"
            effect="blur"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" id="download" onClick={download}>
            Download Poster
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PosterModal;
