import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import resume from "../assets/Johnny_Ly_Résumé_.png";
import pdfFile from "../assets/Johnny_Ly_Résumé_.pdf";
import Button from "react-bootstrap/Button";
import { saveAs } from "file-saver";
import "../styles/Home.scss";

function ResumeModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const download = () => {
    saveAs(pdfFile, "JohnnyLy_Résumé.pdf");
  };

  return (
    <>
      <Button
        className="name noselect"
        id="resume-button"
        onClick={handleShow}
      >
        View Résumé 
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        animation={true}
        centered={true}
        scrollable={false}
        size="lg"
      >
        <Modal.Header bsPrefix="modal-header" closeButton>
          <div className="modal-title">
            <Modal.Title bsPrefix="modal-title">
              {" "}
              <h4 id="modal-titles"> Résumé (Updated March 2023)</h4>
            </Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div id="wrap">
            <img
              src={resume}
              alt="Johnny Ly Résumé"
              width="100%"
              height="100%"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" id="download" onClick={download}>
            Download Résumé
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ResumeModal;
