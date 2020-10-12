import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

var dateFormat = require("dateformat");
var now = new Date();

const IssueTools = ({
  show,
  onClose,
  issue,
  users,
  updateIssue,
  userId,
  deleteIssue,
  addComment,
  updateStatus,
  updateTitle,
  updateDescription,
  updateAssignee,
  updateDueDate,
  setDisplayTitle,
  setDisplayDescription,
  setDisplayStatus,
  setDisplayAssignee,
  setDisplayDueDate,
}) => {
  const [assignee, setAssignee] = useState("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState("");
  const statuses = ["Open", "In Progress", "In Review", "Closed"];
  const [dueDate, setDueDate] = useState(new Date());
  const [useDueDate, setUseDueDate] = useState(false);
  const [title, setTitle] = useState(issue.title);
  const [description, setDescription] = useState(issue.description);
  const [showComment, setShowComment] = useState(true);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteIssueIsChecked, setDeleteIssueIsChecked] = useState(false);
  const [enableSubmitBtn, setEnableSubmitBtb] = useState(false);

  const statusMap = { Open: 1, "In Progress": 2, "In Review": 3, Closed: 4 };

  const onSubmit = (e) => {
    e.preventDefault();

    if (assignee !== "") {
      console.log("????", assignee);
      setDisplayAssignee(assignee);
      updateAssignee(issue.id, assignee);
    }
    if (status !== "" && status !== issue.status) {
      issue.status_id = statusMap[status];
      setDisplayStatus(issue.status_id);
      updateStatus(issue.id, statusMap[status]);
    }
    if (useDueDate === true && dueDate !== "") {
      const due_date = dateFormat(dueDate, "yyyy/mm/dd");
      // console.log(issue.id, due_date);
      setDisplayDueDate(due_date);
      updateDueDate(issue.id, due_date);
    }
    if (title !== issue.title) {
      setDisplayTitle(title);
      updateTitle(issue.id, title);
    }
    if (description !== issue.description) {
      setDisplayDescription(description);
      updateDescription(issue.id, description);
    }
    // toast.dark(`Ticket Updated`);
  };

  const onCommentSubmit = (e) => {
    e.preventDefault();
    if (comment !== "") {
      let commentDate = dateFormat(now, "dddd mm/dd/yy h:MM TT");
      let comm = {
        content: comment,
        user_id: "001",
        date: commentDate,
        issue: issue.id,
      };
      addComment(comm);
      toast.dark(`Comment created`);
    }
  };

  const onDeleteIssueSubmit = (e) => {
    e.preventDefault();
    deleteIssue(issue.id);
    toast.dark(`Ticket Deleted`);
  };
  const setTab = (value) => {
    switch (value) {
      case "showComment":
        setShowComment(true);
        setShowUpdate(false);
        setShowDelete(false);
        break;
      case "showUpdate":
        setShowComment(false);
        setShowUpdate(true);
        setShowDelete(false);
        break;
      case "showDelete":
        setShowComment(false);
        setShowUpdate(false);
        setShowDelete(true);
        break;
      default:
        setShowComment(true);
        setShowUpdate(false);
        setShowDelete(false);
    }
  };

  const disableBtn =
    assignee === "" &&
    comment === "" &&
    !useDueDate &&
    title === issue.title &&
    description === issue.description &&
    status === ""
      ? true
      : false;

  return (
    <div style={{ width: "100%" }}>
      <h2 className="section-header">Tools</h2>
      <div style={{ marginTop: "0", columnCount: "3", columnGap: "0" }}>
        <p
          className={showComment ? "tool show" : "tool"}
          onClick={() => setTab("showComment")}
        >
          Comment
        </p>
        <p
          className={showUpdate ? "tool show" : "tool"}
          onClick={() => setTab("showUpdate")}
        >
          Update
        </p>
        <p
          className={showDelete ? "tool show" : "tool"}
          onClick={() => setTab("showDelete")}
        >
          Delete
        </p>
      </div>
      <div className="section" style={{ marginTop: "15px" }}>
        {showComment && (
          <div style={{ clear: "both" }}>
            <p>Comment:</p>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              name="comment"
              className="comment"
              rows={4}
            />
            <button
              disabled={disableBtn}
              className={disableBtn ? "disabledBtn" : "submit"}
              style={{ margin: "10px 0" }}
              onClick={onCommentSubmit}
            >
              Submit
            </button>
          </div>
        )}

        {showUpdate && (
          <>
            <div>
              <p style={{ float: "left", marginTop: "10px" }}>Title:</p>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={issue.title}
                type="text"
                name="title"
                style={{ padding: "5px", color: "#757575", margin: "7px 10px" }}
              />
            </div>
            <div style={{ clear: "both" }}>
              <p style={{ float: "left", marginTop: "10px" }}>Description:</p>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                name="description"
                rows={5}
                className="comment"
              />
            </div>
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
            <div style={{ clear: "both" }}>
              <p style={{ float: "left", marginTop: "10px" }}>Assign:</p>
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
                      {user.first_name} {user.last_name}
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
              <br />
              <button
                disabled={disableBtn}
                className={disableBtn ? "disabledBtn" : "submit"}
                style={{ margin: "10px 0", clear: "both" }}
                onClick={onSubmit}
              >
                Submit
              </button>
            </div>
          </>
        )}
        {showDelete && (
          <>
            <p style={{ float: "left", marginTop: "5px" }}>Delete issue: </p>
            <input
              type="checkbox"
              name="deleteIssueIsChecked"
              checked={deleteIssueIsChecked}
              onChange={(e) => setDeleteIssueIsChecked(!deleteIssueIsChecked)}
              style={{ margin: "10px 5px" }}
            />
            <br />
            <div style={{ margin: "10px 0", clear: "both" }}>
              <button
                disabled={!deleteIssueIsChecked}
                className={deleteIssueIsChecked ? "submit" : "disabledBtn"}
                onClick={(e) => onDeleteIssueSubmit(e)}
              >
                DELETE
              </button>
            </div>
          </>
        )}
      </div>
      <ToastContainer autoClose={3000} position="top-center" />
    </div>
  );
};
export default IssueTools;
