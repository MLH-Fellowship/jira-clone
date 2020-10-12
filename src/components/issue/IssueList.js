import React from "react";

const IssueList = ({ isOver, children }) => {
  const className = isOver ? "highlight-region" : "";
  return <div className={`list ${className}`}>{children}</div>;
};

export default IssueList;
