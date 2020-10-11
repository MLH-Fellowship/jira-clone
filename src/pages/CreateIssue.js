import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
var dateFormat = require("dateformat");
var now = new Date();

const CreateIssuePage = ({ createIssue, users, userId, project_id }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [label, setLabel] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const [useDueDate, setUseDueDate] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const issue = {
      project_id: 1,
      status_id: 1,
      title,
      user_id: 1,
      description: description,
    };
    if (assignee) {
      console.log(assignee, "create assigneee");
      issue.user_id = assignee;
    }
    if (useDueDate) {
      issue.due_date = dateFormat(dueDate, "yyyy/mm/dd");
    }
    createIssue(issue);
  };
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>New Issue</h1>
      <form onSubmit={(e) => onSubmit(e)} className="form">
        <p>Required:</p>
        <input
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          type="text"
          name="title"
          required
        />
        <input
          className="input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          type="textarea"
          name="description"
          required
        />
        <p style={{ marginTop: "20px" }}>Optional:</p>
        <div className="checkbox-wrapper">
          <p style={{ float: "left" }}>Set due date: </p>
          <input
            type="checkbox"
            name="useDueDate"
            checked={useDueDate}
            onChange={(e) => setUseDueDate(!useDueDate)}
            style={{ margin: "12px" }}
          />
          {useDueDate && (
            <DatePicker
              selected={dueDate}
              onChange={(dueDate) => setDueDate(dueDate)}
            />
          )}
        </div>
        <div className="checkbox-wrapper">
          <select
            className="browser-default"
            style={{ padding: "5px", color: "#757575" }}
            onChange={(e) => setAssignee(e.target.value)}
          >
            <option value="">Assign to user</option>
            {users &&
              users.map((user) => (
                <option value={user.id} key={user.id}>
                  {user.first_name} {user.last_name}
                </option>
              ))}
          </select>
        </div>
        <br />
        <button
          className="create-issue"
          type="submit"
          style={{ marginTop: "20px" }}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default CreateIssuePage;
