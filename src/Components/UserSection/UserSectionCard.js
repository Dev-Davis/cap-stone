import React from "react";


function UserSectionCard(props) {
  const user = props.user;

  return (
    // <div className="user-profile">
    <div className="row">
      <div className="col text-center">
        <div className="cover-avi">
          <h3 className="user-username col-2 offset-5">{user.userName}</h3>
          <img src={user.img} alt={user.imgAlt} className="user-img" />
          <div className="about-me col-6 offset-3">
            <h5>About Me:</h5>
            <p className="about-me-section">{user.aboutMe}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSectionCard;
