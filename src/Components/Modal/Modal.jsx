import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import "./modal.css";
import { useHistory } from "react-router-dom";
import { CgClose } from "react-icons/cg";
function ModalComponent({ requests, ...props }) {
  const handleClose = () => props.setShow(-1);
  const handleShow = () => props.setShow(true);
  console.log(props.show);
  let history = useHistory();

  return (
    <>
      <Modal
        show={props.show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Recipe</Modal.Title>
          <CgClose
            size={25}
            className="close-icon-dark"
            onClick={handleClose}
          />
        </Modal.Header>
        <Modal.Body className="payment-modal-body">
          <ol>{props.recipe}</ol>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent;
