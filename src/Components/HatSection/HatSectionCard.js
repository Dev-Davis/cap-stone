import React from "react";
import Comments from "../Comments/Comments";

function HatSectionCard(props) {
  const hats = props.hats;

  return (
    <div className="col hat-card text-center">
      <div className="text-center">
        <div className="card" ref={hats.id}>
          {/* <div className="hat-card"> */}
          <div className="card-body">
            {/* <Link to={singleLink}><img src={hats.imageUrl} className="card-img-top" alt="Pic of a hat" /></Link> */}
            <h3 className="card-title hat-name">{hats.name}</h3>
            <img className={hats.className} src={hats.img} alt={hats.alt} />
            {/* <h5 className="card-text hat-type">{hats.type}</h5>
            <h5 className="card-text hat-color">{hats.mainColor}</h5>
            <div className="col-10 offset-1">
              <p className="card-text hat-desc">{hats.description}</p>
            </div> */}
          </div>
          {/* <Comments /> */}
        </div>
      </div>

      {/* Modal */}

      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        {/* First Modal */}
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
                  {/* <div className="hat-card"> */}
                  <div className="card-body">
                    {/* <Link to={singleLink}><img src={hats.imageUrl} className="card-img-top" alt="Pic of a hat" /></Link> */}
                    <img
                      className="modal-hat-pic"
                      src={hats.img}
                      alt={hats.alt}
                    />
                    <h5 className="card-text hat-type">{hats.type}</h5>
                    <h5 className="card-text hat-color">{hats.mainColor}</h5>
                    <div className="col-10 offset-1">
                      <p className="card-text hat-desc">{hats.description}</p>
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
        tabindex="-1"
      >
        {/* Second Modal */}
        {/* <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">
                Modal 2
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Hide this modal and show the first with the button below.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Back to first
              </button>
            </div>
          </div>
        </div> */}
      </div>
      <button
        className="btn btn-primary hat-details-btn"
        data-bs-target="#exampleModalToggle"
        data-bs-toggle="modal"
        // type="button"
        // aria-label="Close"
      >
        Hat Details
      </button>
    </div>
  );
}

export default HatSectionCard;
