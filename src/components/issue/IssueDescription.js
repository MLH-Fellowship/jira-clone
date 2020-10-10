import React from "react";

const IssueDescription = ({ issue, users }) => {
  const { comments, content, id, title, status, label } = issue;

  let assignedTo;
  let user = "";
  if (issue.assignee) {
    user = users.find(({ id }) => id === issue.assignee);
  }
  if (user !== "") {
    assignedTo = `Assigned to: ${user.first_name} ${user.last_name}`;
  } else {
    assignedTo = "Unassigned";
  }

  let dueDate = issue.due_date ? `Due: ${issue.due_date}` : "No due date";

  const getCommenter = (commenter) => {
    let commentUser = "";
    let user = "";
    user = users.find(({ id }) => id === commenter);
    if (user !== "") {
      commentUser = `${user.first_name} ${user.last_name}`;
    }
    return (commentUser = "" ? `unknown user` : commentUser);
  };
  return (
    <>
      <h1 className="section-header">
        <b>
          {" "}
          Issue#{id} - {title}{" "}
        </b>
      </h1>
      <div className="section">
        <p>{content}</p>
        <div style={{ margin: "25px 0 20px" }}>
          <span className="status pill">{issue.status}</span>
          <span className="assignedTo pill">{assignedTo}</span>
          <span className="due pill">{dueDate}</span>
        </div>
      </div>
      <h2 className="section-header">Comments</h2>
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
