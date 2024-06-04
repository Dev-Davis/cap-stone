import React from "react";
import HatSection from "../HatSection/HatSection";
import Friends from "../Friends/Friends";
import UserSection from "../UserSection/UserSection";
import HatSubmitForm from "../HatSubmitForm/HatSubmitForm";

const oUser = require("../../data/user.json");

function Profile() {
  return (
    <div className="profile container">
      <div className="row">
        <div className="col">
          <UserSection />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <HatSubmitForm />
        </div>
      </div>
      <div className="row">
        <div className="col-6 offset-3">
          <Friends user={oUser} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <HatSection />
        </div>
      </div>
    </div>
  );
}

export default Profile;
