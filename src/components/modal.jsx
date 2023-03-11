import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import resume from './assets/Johnny_Ly_Résumé_.png'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import "./styles/Home.scss";
import { display } from '@mui/system';



function ResumeModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const download = () => {
    fetch('./assets/Johnny_Ly_Résumé_.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let link = document.createElement('a');
            link.href = fileURL;
            // alink.setAttribute('download', 'file.pdf');
            link.setAttribute('download','Johnny_Ly_Résumé_.pdf');
            link.click();
        })
    })
}

    return(
        <> 
        <Button 
        className="name noselect"
        id="resume-button" 
        onClick={handleShow}> 
        </Button>

        <Modal  show={show} onHide={handleClose} animation={true} centered={true} scrollable={false} size='lg'
>
        <Modal.Header bsPrefix='modal-header' closeButton>
          <Modal.Title bsPrefix='modal-title'> <h4 id='modal-titles'> Résumé (Updated March 2023)</h4></Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
              <div id='wrap'> 
              <img src = {resume} width='100%' height='100%'/> 
              </div>
            

        </Modal.Body>
          <Modal.Footer> 
            <Button variant = 'primary' onClick = {download}>
              Download Résumé
            </Button>
          </Modal.Footer>
      </Modal>

      </>
    )

}

export default ResumeModal;