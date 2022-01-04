import React from "react";
import Card from "./Card";
import Trips from "./charts/trips";

const Main = () => {
  let cardData = [
    {
      title: "Total Trips",
      value: "120",
    },
    {
      title: "Total Bus Operators",
      value: "10",
    },
    {
      title: "Total Staff",
      value: "2",
    },
    {
      title: "Total Vehicles",
      value: "23",
    }
  ]
  return (
    <div className="row row-deck row-cards">
      {cardData.map((data, i) => (
        <div key={i} className="col-sm-6 col-lg-3">
          <Card title={data.title} count={data.value} />
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
