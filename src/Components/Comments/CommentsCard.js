import React from "react";

function CommentsCard(props) {
  const hatInfo = require("../../data/hats.json");
  hatInfo.map((hat) => {
    return hat;
  });

  const comments = props.comment;
  console.log(comments);
  return (
    <div className="comment-card">
      <section className="comment-card-box">
        <section className="commenter-info">user</section>
        <hr className="comment-hr" />
        <section className="comment-section">{comments.comment}</section>
        <hr className="comment-hr" />
        <section className="comment-date">{comments.date}</section>
      </section>
    </div>
  );
}

export default CommentsCard;
