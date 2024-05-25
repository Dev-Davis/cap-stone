import React from "react";

function CommentsCard(props) {
  // const hatInfo = require("../../data/hats.json");
  // hatInfo.map((hat) => {
  //   return hat;
  // });

  const comments = props.comment;
  // console.log(comments);
  return (
    <div className="comment-card container">
      <section className="comment-card-box">
        <div className="row">
          <div className="col-2">
            <img
              src="https://i.ytimg.com/vi/4dWg2U29CQM/maxresdefault.jpg"
              alt="roma-army"
              className="commenter-img"
            />
          </div>
          <div className="col-1">
            <section className="commenter-info">user</section>
          </div>
        </div>

        <hr className="comment-hr" />

        <div className="row">
          <div className="col">
            <section className="comment-section">{comments.comment}</section>
          </div>
        </div>

        <hr className="comment-hr" />

        <div className="row">
          <div className="col">
            <section className="comment-date">{comments.date}</section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CommentsCard;
