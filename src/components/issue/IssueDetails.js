import React from 'react'
import Modal from "react-modal"

Modal.setAppElement("#root");

const IssueDetails = ({ show, onClose, item }) => {
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
           <b> Issue#{item.id}</b>
            <br/> {item.title}
          </h1>
        </div>
        <div>
          <h2 style={{fontSize:"20px"}}>Description:</h2>
          <p>{item.content}</p>
          <p>{item.icon} {item.status}</p>
        </div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  )
}

export default IssueDetails;