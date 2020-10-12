import React, { useState, useEffect } from "react";

const IssueDescription = ({
  issue,
  users,
  displayTitle,
  displayDescription,
  displayStatus,
  displayAssignee,
  displayDueDate,
}) => {
  const { id } = issue;
  const statusMap = {
    1: "Open",
    2: "In Progress",
    3: "In Review",
    4: "Closed",
  };
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("/comments", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setComments(result);
          console.log(result);
        },
        (error) => {
          // how to handel this error?
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }, []);

  let assignedTo;
  let user = "";

  if (displayAssignee) {
    user = users.find(({ id }) => id.toString() === displayAssignee.toString());
  }
  // console.log('here:', user.first_name, user.last_name)
  if (user && user !== "") {
    assignedTo = `Assigned to: ${user.first_name} ${user.last_name}`;
  } else {
    assignedTo = "Unassigned";
  }

  let dueDate = displayDueDate ? `Due: ${displayDueDate}` : "No due date";

  const getCommenter = (commenter) => {
    let commentUser = "";
    let user = "";
    user = users.find(({ id }) => id === commenter);
    if (user && user !== "") {
      commentUser = `${user.first_name} ${user.last_name}`;
    }
    return (commentUser = "" ? `unknown user` : commentUser);
  };
  return (
    <>
      <h1 className="section-header">
        <b>
          {" "}
          Issue#{id} - {displayTitle}{" "}
        </b>
      </h1>
      <div className="section">
        <p>{displayDescription}</p>
        <div style={{ margin: "25px 0 20px" }}>
          <span className="status pill">{statusMap[displayStatus]}</span>
          <span className="assignedTo pill">{assignedTo}</span>
          <span className="due pill">{displayDueDate}</span>
        </div>
      </div>
      <h2 className="section-header">Comments</h2>
      <div className="section">
        {comments &&
          comments.length > 0 &&
          comments.map((comment, idx) => {
            return (
              <div key={idx + comment.created_at}>
                <p>
                  <i>{comment.created_at}</i>
                  {" - "}
                  {getCommenter(comment.user_id)}
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
