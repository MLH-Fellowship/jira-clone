import React, { useState } from "react";
import IssueSummary from "../components/issue/IssueSummary";
import DropWrapper from "../components/issue/DropWrapper";
import IssueList from "../components/issue/IssueList";
import { data, issueStatus } from "../data";

const Home = ({
  issues,
  users,
  updateIssue,
  userId,
  deleteIssue,
  addComment,
}) => {
  const [items, setItems] = useState(issues);
  if (!items || items.length === 0) {
    fetch("/tickets/1")
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
        },
        (error) => {
          // how to handel this error?
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  const onDrop = (item, monitor, status) => {
    console.log(status);
    const mapping = issueStatus.find((si) => si.id === status);
    console.log("map", mapping);
    console.log(item, "item");
    setItems((prevState) => {
      const newItems = prevState
        .filter((i) => i.id !== item.id)
        .concat({ ...item, status_id: status });
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
            <DropWrapper onDrop={onDrop} status={s}>
              <IssueList>
                {items
                  .filter((i) => i.status_id === s.id)
                  .map((i, idx) => (
                    <IssueSummary
                      key={i.id}
                      item={i}
                      index={idx}
                      moveItem={moveItem}
                      // status={s.id}
                      users={users}
                      updateIssue={updateIssue}
                      userId={userId}
                      deleteIssue={deleteIssue}
                      addComment={addComment}
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
