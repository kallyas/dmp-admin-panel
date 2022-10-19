/* eslint-disable */
import React from "react";

const Card = ({ title, count}) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div className="subheader">{title}</div>
        </div>
        <div className="h1 mb-3">{count}</div>
      </div>
    </div>
  );
};

export default Card;
