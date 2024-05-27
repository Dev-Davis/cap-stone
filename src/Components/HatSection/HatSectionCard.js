import React from "react";
import * as bootstrap from "bootstrap";
import Comments from "../Comments/Comments";

function HatSectionCard(props) {
  const hats = props.hats;

  const hatsArray = require("../../data/hats.json");

  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

  const findHat = () => {
    let cap = hatsArray.find(({hatId}) => hatId === hats.hatId)
    console.log(cap)
    return cap;
  }


  return (
    <div className="col hat-card text-center">
      <div className="text-center">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title hat-name">{hats.name}</h3>
            <img className={hats.className} src={hats.img} alt={hats.alt} />
          </div>
        </div>
      </div>

      {/* Modal */}

      <div
        className="modal fade"
        id="exampleModalToggle"
        // id={hats.hatId}
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title fs-5" id="exampleModalToggleLabel">
                <h3 className="card-title hat-name">{hats.name}</h3>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="text-center">
                <div className="card" ref={hats.id}>
                  <div className="card-body">
                    <img
                      className="modal-hat-pic"
                      src={hats.img}
                      alt={hats.alt}
                    />
                    <p>Type:</p>
                    <h5 className="card-text hat-type">{hats.type}</h5>
                    <p>Color:</p>
                    <h5 className="card-text hat-color">{hats.mainColor}</h5>
                    <div className="col-10 offset-1">
                      {/* <p className="card-text hat-desc">{hats.description}</p> */}
                      <button type="button" className="btn btn-lg btn-light m-d" data-bs-toggle="popover" title={hats.name.toString()} data-bs-content={hats.description}>Click for description</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer text-center">
              <Comments />
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
      </div>
      <button
        onClick={findHat}
        className="btn btn-dark hat-details-btn"
        data-bs-target="#exampleModalToggle"
        // data-bs-target={hats.hatId}
        data-bs-toggle="modal"
      >
        <p className="hat-details">{hats.name} Details</p>
      </button>
    </div>
  );
}

export default HatSectionCard;
