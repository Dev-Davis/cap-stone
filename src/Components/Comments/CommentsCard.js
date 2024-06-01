import React from "react";

function CommentsCard(props) {

  const comment = props.comments;

  return (
    <div className="comment-card container">
      <section className="comment-card-box">
        <section className="avi-name">
          <div className="row">
            <div className="col user-info-row">
              <img
                src="https://i.ytimg.com/vi/4dWg2U29CQM/maxresdefault.jpg"
                alt="roma-army"
                className="commenter-img"
              />
            </div>
              <p className="commenter-info">user</p>
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
      </section>
    </div>
  );
}

export default CommentsCard;
