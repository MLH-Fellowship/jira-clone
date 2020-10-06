import React from 'react'
import Modal from "react-modal"
import IssueTools from '../issue/IssueTools'
import IssueDescription from '../issue/IssueDescription'

Modal.setAppElement("#root");

const IssueDetails = ({ show, onClose, issue }) => {
  const {title, id} = issue
  return (
    <div>
      <Modal
        isOpen={show}
        onRequestClose={onClose}
        contentLabel="Issue Modal"
        overlayClassName={"overlay"}
      >
        <div className="">
          <button className="close-btn" onClick={onClose}>X</button>
          <h1 className='modal-title'>
           <b> Issue#{id}</b>
            <br/> {title}
          </h1>
          <div class="issue-details">
            <div class="issue-description">
              <IssueDescription issue={issue}/>
            </div> 
            <div class="issue-tools">
              <IssueTools/>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default IssueDetails;