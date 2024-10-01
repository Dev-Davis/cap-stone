import React from "react";
import HatSection from "../HatSection/HatSection";
import Friends from "../Friends/Friends";
import UserSection from "../UserSection/UserSection";
import HatSubmitForm from "../HatSubmitForm/HatSubmitForm";

const oUser = require("../../data/user.json");

function Profile(props) {
  // console.log(props)

  return (
    <div className="profile container">
      <div className="row">
        <div className="col col-sm-12 text-center">
          <UserSection />
        </div>
      </div>
      <div className="hat-submit-border">
        <div className="row">
          <div className="col">
            <HatSubmitForm />
          </div>
        </div>
      </div>
      <br />
      <br />

      <div className="row">
        <div className="col-6 offset-3">
          <Friends />
        </div>
      </div>
      <br />
      <br />

      <div className="row">
        <div className="col">
          <HatSection />
        </div>
      </div>
    </div>
  );
}

export default Profile;
