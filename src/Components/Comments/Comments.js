import React from "react";
import CommentsCard from "./CommentsCard";

function Comments(props) {
  const comments = require("../../data/comments.json");
  const hId = props.hatId;

  const matchHat = comments.find((comment) => comment.hatId === hId);

  const noComment = () => {
    return (
      <h1>No comments yet!</h1>
    )
  }

  const commentCard = () => {
      return (
        <div className="comment-card container">
          <section className="comment-card-box">
            <section className="avi-name">
              <div className="row">
                <div className="col-2">
                  <img
                    src="https://i.ytimg.com/vi/4dWg2U29CQM/maxresdefault.jpg"
                    alt="roma-army"
                    className="commenter-img"
                  />
                </div>
                <div className="col-3">
                  <p className="commenter-info">user</p>
                </div>
              </div>
            </section>
    
            <hr className="comment-hr" />
    
            <div className="row">
              <div className="col">
                <section className="comment-section">{matchHat.comment}</section>
              </div>
            </div>
    
            <hr className="comment-hr" />
    
            <div className="row">
              <div className="col">
                <section className="comment-date">{matchHat.date}</section>
              </div>
            </div>
          </section>
        </div>
      );
  }

  return (
    <div className="comments container-fluid">
      <section className="comment-body">
        <div className="row">
          <div className="input-title">
            <section className="leave-comment-section">
              <p className="comment-title col">Comment?</p>
            </section>
          </div>
        </div>
        <div className="row">
          <section className="comment-section">
            <input
              type="text"
              className="comment-input col"
              placeholder="Talk about this hat..."
            />
          </section>
        </div>
      </section>
      <hr span="separator" />
      {/* <button className="col-2 btn btn-light">Submit</button> */}
      <section className="comment-reader">
        { matchHat 
          ? commentCard()
          : noComment() }
      </section>
    </div>
  );
}

export default Comments;
