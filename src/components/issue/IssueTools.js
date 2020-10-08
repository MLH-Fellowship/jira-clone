import React, { useState } from "react";
import DatePicker from "react-datepicker";
var dateFormat = require("dateformat");
var now = new Date();

const IssueTools = ({ show, onClose, issue, users, updateIssue, userId }) => {
  const [assignee, setAssignee] = useState("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState("");
  const statuses = ["Open", "In Progress", "In Review", "Closed"];
  const [dueDate, setDueDate] = useState(new Date());
  const [useDueDate, setUseDueDate] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const updatedIssue = {
      id: issue.id,
    };
    if (assignee !== "") {
      updatedIssue.assignee = assignee;
    }
    if (comment !== "") {
      let commentDate = dateFormat(now, "dddd mm/dd/yy h:MM TT");
      let comm = { content: comment, user: userId, date: commentDate };
      updatedIssue.comment = comm;
    }
    if (status !== "") {
      updatedIssue.status = status;
    }
    if (useDueDate === true && dueDate !== "") {
      updatedIssue.dueDate = dateFormat(dueDate, "dddd mm/dd/yy");
    }
    updateIssue(updatedIssue);
  };

  return (
    <div style={{ width: "100%" }}>
      <h2 className="section-header">Tools</h2>
      <div className="section">
        <div>
          <p style={{ float: "left" }}>Assign:</p>
          <select
            style={{
              padding: "5px",
              color: "#757575",
              margin: "6px 10px",
              clear: "both",
            }}
            onChange={(e) => setAssignee(e.target.value)}
          >
            <option value=""></option>
            {users &&
              users.map((user) => (
                <option value={user.id} key={user.id}>
                  {user.firstName} {user.lastName}
                </option>
              ))}
          </select>
        </div>
        <br />
        <div style={{ clear: "both" }}>
          <p style={{ float: "left" }}>Status:</p>
          <select
            style={{ padding: "5px", color: "#757575", margin: "6px 10px" }}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value=""></option>
            {statuses.map((s) => (
              <option value={s} key={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div style={{ margin: "10px 0" }}>
          <p style={{ float: "left", marginTop: "5px" }}>Due date: </p>
          <input
            type="checkbox"
            name="useDueDate"
            checked={useDueDate}
            onChange={(e) => setUseDueDate(!useDueDate)}
            style={{ margin: "10px 5px" }}
          />
          {useDueDate && (
            <DatePicker
              selected={dueDate}
              onChange={(dueDate) => setDueDate(dueDate)}
            />
          )}
        </div>
        <div style={{ claer: "both" }}>
          <p>Comment:</p>
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            type="textarea"
            name="comment"
            className="comment"
          />
        </div>
        {(assignee !== "" || status !== "" || comment !== "" || useDueDate) && (
          <button
            className="submit"
            style={{ marginTop: "20px" }}
            onClick={onSubmit}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};
export default IssueTools;
