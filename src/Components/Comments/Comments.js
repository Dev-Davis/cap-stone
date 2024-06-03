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
      <section className="comment-body">
        <div className="row">
          <div className="input-title">
            <section className="leave-comment-section">
            <label for="hat-comment" className="comment-title">Comment?</label>
            </section>
          </div>
        </div>
        <div className="row">
          <section className="comment-section">
            <input
              type="textarea"
              id="hat-comment"
              className="comment-input col"
              placeholder=" Talk about this hat..."
              // value={e.target.value}
            />
          </section>
        </div>
      </section>
      <hr span="separator" />
      <section className="comment-reader">{getComments()}</section>
    </div>
  );
}

export default Comments;
