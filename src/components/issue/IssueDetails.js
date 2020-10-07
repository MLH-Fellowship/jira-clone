import React from "react";
import Modal from "react-modal";
import IssueTools from "../issue/IssueTools";
import IssueDescription from "../issue/IssueDescription";

Modal.setAppElement("#root");

const IssueDetails = ({ show, onClose, issue, users }) => {
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

          <h1 className="modal-title">
            <b> Issue#{id}</b> - {title}
          </h1>
          <span className={`card-status status`}>{issue.status}</span>
          <div className="issue-details">
            <div className="issue-description">
              <IssueDescription issue={issue} users={users} />
            </div>
            <div className="issue-tools">
              <IssueTools />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default IssueDetails;
