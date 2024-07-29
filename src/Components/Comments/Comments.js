import React from "react";
import CommentsCard from "./CommentsCard";

function Comments(props) {
  // ***** variables ***** //
  const comments = require("../../data/comments.json");

  const hId = props.hatId;

  // ***** methods ***** //
  const hatFilter = comments.filter((filt) => filt.hatId === hId);

  const hatMap = hatFilter.map((map) => (
    <CommentsCard key={map.id} comments={map} commentId={map.leftById} />
  ));

  // ***** functions ***** //
  let getComments = () => {
    if (hatFilter.length !== 0) {
      return hatMap;
    } else {
      return <h6>If you like it, say something 😊</h6>;
    }
  };

  return (
    <div className="comments container-fluid">
      <div className="row">
        <section className="comment-section col">
          <label for="hat-comment" className="comment-title col">
            Comment?
          </label>
          <input
            type="textarea"
            id="hat-comment"
            className="comment-input col-7"
            placeholder=" Talk about this hat..."
            // value={e.target.value}
          />
          <button className="comment-btn col">Comment</button>
        </section>
      </div>
      
      <hr span="separator" />
      <div className="show-comments">
        <section className="comment-reader">{getComments()}</section>
      </div>
    </div>
  );
}

export default Comments;
