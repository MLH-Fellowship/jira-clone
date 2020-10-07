import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
var dateFormat = require("dateformat");
var now = new Date();

const CreateIssuePage = ({ createIssue, users }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [label, setLabel] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const [useDueDate, setUseDueDate] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO gotta save the current user's name in state to use here
    const issue = {
      title,
      content: description,
      status: "Open",
      reporter: "current user",
      date: dateFormat(now, "dddd mm/dd/yy h:MM TT"),
    };
    if (label) {
      issue.label = label;
    }
    if (assignee) {
      issue.assignee = assignee;
    }
    if (useDueDate) {
      issue.dueDate = dateFormat(dueDate, "dddd mm/dd/yy h:MM TT");
    }
    console.log(issue);
    createIssue(issue);
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>New Issue</h1>
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
        <input
          className="input"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder="Label"
          type="textarea"
          name="label"
        />
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
                  {user.firstName} {user.lastName}
                </option>
              ))}
          </select>
        </div>

        <br />

        {/* TODO:  linked issues */}
        <button className="submit" type="submit" style={{ marginTop: "20px" }}>
          Submit
        </button>
      </form>
    </>
  );
};

export default CreateIssuePage;
