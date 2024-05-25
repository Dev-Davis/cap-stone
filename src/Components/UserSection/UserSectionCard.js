import React from "react";

function UserSectionCard(props) {
  const user = props.user;
<<<<<<< Updated upstream
=======
  
>>>>>>> Stashed changes
  return (
    // <div className="user-profile">
      <div className="row">
        <div className="col text-center">
          <h3 className="user-username">{user.userName}</h3>
          <img src={user.img} alt={user.imgAlt} className="user-img" />
          <div className="about-me col-6 offset-3">
            <h5>About Me:</h5>
            <p className="about-me-section">{user.aboutMe}</p>
          </div>
        </div>
      </div>
    // </div>
  );
}

export default UserSectionCard;
