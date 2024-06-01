import React from "react";
import CommentsCard from "./CommentsCard";

function Comments(props) {
  // ***** variables ***** //
  const comments = require("../../data/comments.json");
  const hId = props.hatId;

  // ***** methods ***** //
  const hatFilter = comments.filter((filt) => filt.hatId === hId);

  const hatMap = hatFilter.map((map) => (
    <CommentsCard key={map.id} comments={map} />
  ))

  // ***** functions ***** //
  const noComments = () => {
    return <h3>No comments yet</h3>;
  };

  return (
    <div className="comments container">
      <section className="comment-header">
        <div className="row">
          <div className="col-4 input-title">
            <p>Leave a comment:</p>
          </div>
          <div className="col input-comment">
            <input
              type="text"
              className="comment-input"
              placeholder="Talk about this hat..."
            />
          </div>
        </div>
      </section>
      <hr span="separator" />
      <section className="comment-reader">
        {hId ? hatMap : noComments() }
      </section>
    </div>
  );
}

export default Comments;
