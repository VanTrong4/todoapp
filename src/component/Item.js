import React from "react";

const Item = ({ obj }) => {
  const { title, content, ...attr } = obj;
  return (
    <div className="item">
      <h3>{title}</h3>
      <div className="item-Content">
        <img {...attr} />
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Item;
