import React, { Fragment, useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import IssueDetails from "./IssueDetails";
import ITEM_TYPE from "../../data/types";

const IssueSummary = ({ item, index, moveItem }) => {
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

  const assignedTo = item.assignee ? `${item.assignee}` : "Unassigned";
  return (
    <Fragment>
      <div
        ref={ref}
        style={{ opacity: isDragging ? 0 : 1 }}
        className={"card"}
        onClick={onOpen}
      >
        <p className={"card-title"}>
          Issue#{item.id} - {item.title}
        </p>
        <p className={"card-asignee"}>
          <i>{assignedTo}</i>
        </p>
      </div>
      <IssueDetails issue={item} onClose={onClose} show={show} />
    </Fragment>
  );
};

export default IssueSummary;
