import React from "react";
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
}) => {
  const { title, id } = issue;
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
              <IssueDescription issue={issue} users={users} />
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
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default IssueDetails;
