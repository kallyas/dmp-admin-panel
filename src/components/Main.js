import React from "react";
import Card from "./Card";
import Trips from "./charts/trips";

const Main = () => {
  return (
    <div className="row row-deck row-cards">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="col-sm-6 col-lg-3">
          <Card title="Card title" count={100} />
        </div>
      ))}
      <div className="col-lg-6">
        <div className="row row-cards">
          <div className="col-12">
            <div className="card">
              <div className="card-body" style={{ position: "relative" }}>
                <h3 className="card-title">Trips Summary</h3>
                <div className="chart-lg" style={{ minHeight: "240px" }}>
                  <Trips />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
