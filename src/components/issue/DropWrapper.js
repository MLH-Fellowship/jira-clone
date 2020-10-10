import React from "react";
import { useDrop } from "react-dnd";
import ITEM_TYPE from "../../data/types";
import { issueStatus } from "../../data";

const DropWrapper = ({ onDrop, children, status }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ITEM_TYPE,
    canDrop: (item, monitor) => {
      const itemIndex = issueStatus.findIndex(
        (si) => si.status_id === item.status_id
      );
      const statusIndex = issueStatus.findIndex(
        (si) => si.status_id === status.id
      );
      return [itemIndex + 1, itemIndex - 1, itemIndex].includes(statusIndex);
    },
    drop: (item, monitor) => {
      onDrop(item, monitor, status.id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className={"drop-wrapper"}>
      {React.cloneElement(children, { isOver })}
    </div>
  );
};

export default DropWrapper;
