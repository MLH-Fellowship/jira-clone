import React from "react";

const IssueDescription = ({ issue, users }) => {
  const { comments, content, status, icon, label } = issue;

  let assignedTo;
  if (issue.assignee) {
    console.log(issue.assignee);
    console.log(users);
    users.filter((user) => {
      if (user.id.toString() === issue.assignee.toString()) {
        assignedTo = `Assigned to: ${user.firstName} ${user.lastName}`;
      }
    });
  } else {
    assignedTo = "Unassigned";
  }
  const getCommenter = (commenter) => {
    let commentUser = "";
    console.log(commenter);
    users.filter((user) => {
      if (user.id.toString() === commenter.toString()) {
        commentUser = `${user.firstName} ${user.lastName}`;
      }
    });
    return (commentUser = "" ? `unknown user` : commentUser);
  };
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

        <p style={{ textAlign: "right" }}>{assignedTo}</p>
      </div>
      <h2 className="section-header">Comments:</h2>
      <div className="section">
        {comments &&
          comments.length > 0 &&
          comments.map((comment, idx) => {
            return (
              <div key={idx + comment.date}>
                <p>
                  <i>{comment.date}</i>
                  {" - "}
                  {getCommenter(comment.user)}
                </p>
                <p style={{ paddingLeft: "30px" }}>{comment.content}</p>
              </div>
            );
          })}
        {(!comments || comments.length === 0) && <p>Nothing yet.</p>}
      </div>
    </>
  );
};
export default IssueDescription;
