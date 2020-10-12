import React, { Fragment, useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import IssueDetails from "./IssueDetails";
import ITEM_TYPE from "../../data/types";

const IssueSummary = ({
  item,
  index,
  moveItem,
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
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoveredRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
      const mousePosition = monitor.getClientOffset();
      const hoverClientY = mousePosition.y - hoveredRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: ITEM_TYPE, ...item, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [show, setShow] = useState(false);
  const onOpen = () => setShow(true);
  const onClose = () => setShow(false);
  drag(drop(ref));

  const { title, id, description, status_id, user_id, due_date } = item;
  const [displayTitle, setDisplayTitle] = useState(title);
  const [displayDescription, setDisplayDescription] = useState(description);
  const [displayStatus, setDisplayStatus] = useState(status_id);
  const [displayAssignee, setDisplayAssignee] = useState(1);
  const [displayDueDate, setDisplayDueDate] = useState(due_date);

  let assignedTo;
  if (item.user_id) {
    users.filter((user) => {
      if (user.id.toString() === displayAssignee.toString()) {
        assignedTo = `${user.first_name} ${user.last_name}`;
      }
    });
  } else {
    assignedTo = "Unassigned";
  }
  return (
    <Fragment>
      <div
        ref={ref}
        style={{ opacity: isDragging ? 0 : 1 }}
        className={"card"}
        onClick={onOpen}
      >
        <p className={"card-title"}>
          Issue#{item.id} - {displayTitle}
        </p>
        <p className={"card-asignee"}>
          <i>{assignedTo}</i>
        </p>
      </div>
      <IssueDetails
        issue={item}
        onClose={onClose}
        show={show}
        users={users}
        updateStatus={updateStatus}
        updateTitle={updateTitle}
        updateDescription={updateDescription}
        updateAssignee={updateAssignee}
        updateDueDate={updateDueDate}
        userId={userId}
        deleteIssue={deleteIssue}
        addComment={addComment}
        displayTitle={displayTitle}
        displayDescription={displayDescription}
        displayStatus={displayStatus}
        displayAssignee={displayAssignee}
        displayDueDate={displayDueDate}
        setDisplayTitle={setDisplayTitle}
        setDisplayDescription={setDisplayDescription}
        setDisplayStatus={setDisplayStatus}
        setDisplayAssignee={setDisplayAssignee}
        setDisplayDueDate={setDisplayDueDate}
      />
    </Fragment>
  );
};

export default IssueSummary;
