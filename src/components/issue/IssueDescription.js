import React from 'react'

const IssueDescription = ({ issue }) => {
    const {comments, content, status, icon, labels} = issue;
    const assignedTo = issue.assignee ? `${issue.assignee}` : 'Unassigned'
    return (
    <>
    <h2 className="section-header">Description:</h2>
    <div className='section'>
        <p>{icon} {status}</p>
        {labels && labels.length > 0 && (
            <p style={{margin:'20px 0'}}>
                {labels.map(label => (
                    <span className='label'>
                        {label}
                    </span>
                ))}    
            </p>

        )}
        <p>{content}</p>
        <p style={{textAlign:'right'}}>Assigned to: {assignedTo}</p>
    </div>
    <h2 className="section-header">Comments:</h2>
    <div className='section'>
        {comments && comments.length > 0 &&  comments.map(comment => {
            return(
                <>
                <p><i>{comment.date}</i>{' - '}{comment.user}
                </p>
                <p style={{paddingLeft:'30px'}}>{comment.content}</p>
                </>
            )})
        }
        {(!comments || comments.length === 0)  && (
            <p>Nothing yet.</p>
        )}
    </div>
    </>
  )
}
export default IssueDescription;