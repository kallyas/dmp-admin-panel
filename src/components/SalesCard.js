import React from "react";
import IconPlus from "./icons/IconPlus";

const SalesCard = ({ color, Icon }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex align-items-center mb-5 iq-contain">
          <p className="mb-0 me-4">Today</p>
          <button className={`btn btn-icon btn-soft-${color}`}>
            <span className={`btn btn-icon btn-soft-${color}`}>
             <Icon />
              7%
            </span>
          </button>
        </div>
        <div className="d-flex align-items-center mb-4">
          <IconPlus />
          <h5>$250.63</h5>
        </div>
        <div className={`progress bg-soft-${color} shadow-none w-100`} style={{ height: "6px" }}>
          <div
            className={`progress-bar bg-${color}`}
            data-toggle="progress-bar"
            role="progressbar"
            aria-valuenow="7"
            aria-valuemax="100"
            aria-valuemin="0"
            style={{ width: "7%", transition: "width 2s ease 0s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SalesCard;
