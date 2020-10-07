import React from "react";

const IssueDescription = ({ issue }) => {
  const { comments, content, status, icon, label } = issue;
  const assignedTo = issue.assignee ? `${issue.assignee}` : "Unassigned";
  return (
    <>
      <h2 className="section-header">Description:</h2>
      <div className="section">
        <p>{content}</p>
        {label && (
          <p style={{ margin: "20px 0" }}>
            <span className="label">{label}</span>
          </p>
        )}

        <p style={{ textAlign: "right" }}>Assigned to: {assignedTo}</p>
      </div>
      <h2 className="section-header">Comments:</h2>
      <div className="section">
        {comments &&
          comments.length > 0 &&
          comments.map((comment) => {
            return (
              <>
                <p>
                  <i>{comment.date}</i>
                  {" - "}
                  {comment.user}
                </p>
                <p style={{ paddingLeft: "30px" }}>{comment.content}</p>
              </>
            );
          })}
        {(!comments || comments.length === 0) && <p>Nothing yet.</p>}
      </div>
    </>
  );
};
export default IssueDescription;
