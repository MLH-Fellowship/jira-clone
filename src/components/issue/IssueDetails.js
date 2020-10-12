import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import IssueTools from "../issue/IssueTools";
import IssueDescription from "../issue/IssueDescription";

Modal.setAppElement("#root");

const IssueDetails = ({
  show,
  onClose,
  issue,
  users,
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
  const { comments } = issue;
  const [displayComments, setDisplayComments] = useState(comments);

  useEffect(() => {
    fetch("/comments", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setDisplayComments(result);
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
                displayComments={displayComments}
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
                setDisplayComments={setDisplayComments}
                displayComments={displayComments}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default IssueDetails;
