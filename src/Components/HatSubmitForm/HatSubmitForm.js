import React, { useState } from "react";

function HatSubmitForm() {
  const [selectedImage, setSelectedImage] = useState(null);

  const submitHat = (e) => {
    e.preventDefault();
  }

  return (
    <div className="hat-submit container text-center">
      <div className="row">
        <section className="submission-form col-6 offset-3">
          <h5>Add to your collection!!!</h5>
          <form>
          <hr />
            <input
              type="file"
              name="myImage"
              // Event handler to capture file selection and update the state
              onChange={(event) => {
                console.log(event.target.files[0]); // Log the selected file
                setSelectedImage(event.target.files[0]); // Update the state with the selected file
              }}
            />
            <hr />
            <p className="for-input">Enter hat name</p>
            <input className="hat-title" placeholder="  Enter name..." />
            <br />
            <p className="for-input">Enter hat description</p>
            <input className="hat-title" placeholder="  Enter main color..." />
            <br />
            <p className="for-input">Enter hat color</p>
            <input className="hat-title" placeholder="  Enter description..." />
            <br />
            {/* <p>Enter hat name</p> */}
            <div className="ui container text-center selection-type">
              <select
                name="hat-type-dropdown"
                id="hat-type"
                // onChange={(e) => handleFilterChange(e, "category")}
                className="ui multiple selection dropdown"
              >
                <option value="select">Select hat type</option>
                <option value="snapback">Snapback</option>
                <option value="fitted">Fitted</option>
                <option value="dad">Dad</option>
                <option value="beanie">Beanie</option>
                <option value="fedora">Fedora</option>
                <option value="other">Other...</option>
              </select>
            </div>
            <br />
            <button className="btn btn-primary" onClick={submitHat}>Submit</button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default HatSubmitForm;
