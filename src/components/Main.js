import React from "react";
import Card from "./Card";

const Main = () => {
  return (
   <div className="page-body">
      <div className="container-xl">
        <div className="row row-deck row-cards">
          {[1,2,3,4].map(i => (
            <div key={i} className="col-sm-6 col-lg-3">
              <Card title="Card title" count={100} />
            </div>
          ))}
        </div>
      </div>
   </div>
  );
};

export default Main;
