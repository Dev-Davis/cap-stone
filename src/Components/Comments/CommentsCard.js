import React from "react";
import { Link } from 'react-router-dom'

const friends = require("../../data/friends.json");

function CommentsCard(props) {
  // ***** variables ***** //

  const comment = props.comments;

  // ***** methods ***** //
  const idInfo = friends.find(
    (friendInfo) => friendInfo.fId === comment.leftById
  );

  const postLike = () => {
    alert("Clicked Like")
  }

  const postComment = () => {
    alert("Clicked Comment")
    
  }

  return (
    <div className="comment-card container">
      <section className="comment-card-box">
        <section className="avi-name">
          <div className="row">
            <div className="col user-info-row">
              <Link to="/profile/:id">
                <img
                  src={idInfo.fImg}
                  alt="roma-army"
                  className="commenter-img"
                />
              </Link>
              <p className="commenter-info">{idInfo.fName}</p>
            </div>
          </div>
        </section>

        <hr className="comment-hr" />

        <div className="row">
          <div className="col">
            <section className="comment-section">{comment.comment}</section>
          </div>
        </div>

        <hr className="comment-hr" />

        <div className="row">
          <div className="col">
            <section className="comment-date">{comment.date}</section>
          </div>
        </div>
        <hr className="comment-hr" />
        <div className="reactions">
          <button className="reaction-button" onClick={postLike}>Like</button> <button className="reaction-button" onClick={postComment}>Comment</button>
        </div>
      </section>
    </div>
  );
}

export default CommentsCard;
