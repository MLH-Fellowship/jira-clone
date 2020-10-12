import React, { useState } from "react";
import Modal from "react-modal";
import IssueTools from "../issue/IssueTools";
import IssueDescription from "../issue/IssueDescription";

Modal.setAppElement("#root");

const IssueDetails = ({
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
  displayTitle,
  displayDescription,
  displayStatus,
  displayAssignee,
  displayDueDate,
  setDisplayTitle,
  setDisplayDescription,
  setDisplayStatus,
  setDisplayAssignee,
  setDisplayDueDate,
}) => {
  const { title, id, description, status_id, user_id, due_date } = issue;
  // const [displayTitle, setDisplayTitle] = useState(title);
  // const [displayDescription, setDisplayDescription] = useState(description);
  // const [displayStatus, setDisplayStatus] = useState(status_id);
  // const [displayAssignee, setDisplayAssignee] = useState(1);
  // const [displayDueDate, setDisplayDueDate] = useState(due_date);
  return (
    <div>
      <Modal
        isOpen={show}
        onRequestClose={onClose}
        contentLabel="Issue Modal"
        overlayClassName={"overlay"}
      >
        <div className="">
          <button className="close-btn" onClick={onClose}>
            X
          </button>
          <br />
          <br />
          <div className="issue-details">
            <div className="issue-description">
              <IssueDescription
                issue={issue}
                users={users}
                displayTitle={displayTitle}
                displayDescription={displayDescription}
                displayStatus={displayStatus}
                displayAssignee={displayAssignee}
                displayDueDate={displayDueDate}
              />
            </div>
            <div className="issue-tools">
              <IssueTools
                users={users}
                updateStatus={updateStatus}
                updateTitle={updateTitle}
                updateDescription={updateDescription}
                updateAssignee={updateAssignee}
                updateDueDate={updateDueDate}
                issue={issue}
                userId={userId}
                deleteIssue={deleteIssue}
                addComment={addComment}
                setDisplayTitle={setDisplayTitle}
                setDisplayDescription={setDisplayDescription}
                setDisplayStatus={setDisplayStatus}
                setDisplayAssignee={setDisplayAssignee}
                setDisplayDueDate={setDisplayDueDate}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default IssueDetails;
