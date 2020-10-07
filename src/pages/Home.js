import React, { useState } from "react";
import IssueSummary from "../components/issue/IssueSummary";
import DropWrapper from "../components/issue/DropWrapper";
import IssueList from "../components/issue/IssueList";
import { data, issueStatus } from "../data";

const Home = ({ issues, users }) => {
  const [items, setItems] = useState(issues);

  const onDrop = (item, monitor, status) => {
    const mapping = issueStatus.find((si) => si.status === status);

    setItems((prevState) => {
      const newItems = prevState
        .filter((i) => i.id !== item.id)
        .concat({ ...item, status, icon: mapping.icon });
      return [...newItems];
    });
    // TODO: make call here to update the issues status/index in the database
  };

  const moveItem = (dragIndex, hoverIndex) => {
    const item = items[dragIndex];
    setItems((prevState) => {
      const newItems = prevState.filter((i, idx) => idx !== dragIndex);
      newItems.splice(hoverIndex, 0, item);
      return [...newItems];
    });
  };

  return (
    <div className={"row"}>
      {issueStatus.map((s) => {
        return (
          <div key={s.status} className={"list-wrapper"}>
            <h2 className={"list-header"}>{s.status.toUpperCase()}</h2>
            <DropWrapper onDrop={onDrop} status={s.status}>
              <IssueList>
                {items
                  .filter((i) => i.status === s.status)
                  .map((i, idx) => (
                    <IssueSummary
                      key={i.id}
                      item={i}
                      index={idx}
                      moveItem={moveItem}
                      status={s}
                      users={users}
                    />
                  ))}
              </IssueList>
            </DropWrapper>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
