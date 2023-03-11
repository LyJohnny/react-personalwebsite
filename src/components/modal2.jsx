import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import poster from './assets/DevTrackerPoster.png'
import Button from 'react-bootstrap/Button';
import "./styles/Portfolio.scss";



function PosterModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const download = () => {
    fetch('./assets/DevTrackerPoster.png').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let link = document.createElement('a');
            link.href = fileURL;
            // alink.setAttribute('download', 'file.pdf');
            link.setAttribute('download','DevTrackerPoster.png');
            link.click();
        })
    })
}

    return(
        <> 
        <Button 
        className="projectLink"
        id="poster-button" 
        onClick={handleShow}> 
        View Project
        </Button>

        <Modal show={show} onHide={handleClose} animation={true} size='lg'>
        <Modal.Header bsPrefix='modal-header' closeButton>
          <Modal.Title bsPrefix='modal-title'>Devtracker</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={poster} width='100%' height='100%' /> 
        </Modal.Body>
          <Modal.Footer> 
            <Button variant = 'primary' onClick = {download}>
              Download Poster
            </Button>
          </Modal.Footer>
      </Modal>
      </>
    )

}

export default PosterModal;