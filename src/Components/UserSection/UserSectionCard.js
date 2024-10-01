import React from "react";

function UserSectionCard(props) {
  const user = props.user;

  return (
    <div className="row">
      <div className="col text-center">
        <section>
          <img src={user.imgUrl} alt={user.imgAlt} className="user-img" />
        </section>
        <section>
          <h3 className="user-username col-2 offset-5">{user.userName}</h3>
        </section>
        <section className="about-me col-6 offset-3">
          <h5>About Me:</h5>
          <p className="about-me-section">{user.aboutMe}</p>
        </section>
      </div>
    </div>
  );
}

export default UserSectionCard;
