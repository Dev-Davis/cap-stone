import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import Comments from "../Comments/Comments";

import "bootstrap/dist/css/bootstrap.min.css";

function HatSectionCard(props) {
  const [show, setShow] = useState(false);
  let [cap, setCap] = useState({});

  const handleClose = () => setShow(false);

  const handleShow = () => {
    cap = hatsArray.find(({ hatId }) => hatId === hats.hatId);
    setCap(cap);

    console.log(cap);

    setShow(true);
  };

  const hats = props.hats;

  const hatsArray = require("../../data/hats.json");

  //   var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  // var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  //   return new bootstrap.Popover(popoverTriggerEl)
  // })

  // const findHat = () => {
  //   console.log(cap)
  //   return cap;
  // }

  return (
    <div className="col hat-card text-center">
      <div className="text-center">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title hat-name text">{hats.name}</h3>
            <img className={hats.className} src={hats.img} alt={hats.alt} />
          </div>
        </div>
      </div>
      {/* Modal */}
      <br />
      <Button variant="dark" className="show-detail-btn" onClick={handleShow}>
        Show Details
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{cap.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <section className="hat-detail-section text-center">
            <section className="img-section">
              <img className="modal-hat-pic" src={hats.img} alt={hats.alt} />
            </section>
            <hr className="modal-hr"></hr>
            <section className="img-section">
              <h6>Type:</h6>
              <p className="card-text hat-type hat-desc">{hats.type}</p>
            </section>
            <hr className="modal-hr"></hr>
            <section className="img-section">
            <h6>Color:</h6>
            <p className="card-text hat-color hat-desc">{hats.mainColor}</p>
            </section>
            <hr className="modal-hr"></hr>
            <section className="img-section">
            <h6>Description:</h6>
              <p className="card-text hat-desc">{hats.description}</p>
            </section>
              <div className="modal-footer text-center">
                <Comments />
              </div>
          </section>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Submit
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default HatSectionCard;
