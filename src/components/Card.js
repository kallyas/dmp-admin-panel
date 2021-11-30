import React from "react";

const Card = ({ number, Icon, text, info}) => {
  return (
    <div
      className="card  mb-xxl-0 iq-purchase"
      data-iq-gsap="onStart"
      data-iq-position-y="50"
      data-iq-rotate="0"
      data-iq-trigger="scroll"
      data-iq-ease="power.out"
      data-iq-opacity="0"
      style={{ transform: "translate(0px, 0px)", opacity: "1" }}
    >
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <h5 className="text-primary">{text}</h5>
          <a href="#">
            <Icon />
          </a>
        </div>
        <div className="d-flex align-items-center justify-content-between">
            <h3>{number}</h3>
            <p className="mb-0 ms-2">{info}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
