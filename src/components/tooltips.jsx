import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import resume from './assets/Johnny_Ly_Résumé_.pdf'
import Modal from 'react-bootstrap/Modal'
import React, { useState } from 'react';

function TooltipPositionedExample() {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {['top', 'right', 'bottom', 'left'].map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip id={`tooltip-${placement}`}>
              Tooltip on <strong>{placement}</strong>.
            </Tooltip>
          }
        >
          <Button variant="secondary">Tooltip on {placement}</Button>
        </OverlayTrigger>
      ))}

<>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe src={resume} style={{ width: "100%", height: "100vh" }}> </iframe>
        </Modal.Body>
          <Modal.Footer> 
            <Button variant = 'primary' onClick = {handleClose}>
              Download Resume
            </Button>
          </Modal.Footer>
      </Modal>
    </>
    </>
  );
}

export default TooltipPositionedExample;