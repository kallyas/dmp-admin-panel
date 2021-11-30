import React from "react";
import Card from "./Card";
import IconEye from "./icons/IconEye";
import IconVendor from "./icons/IconVendor";
import IconTick from "./icons/IconTick";
import IconArrowUp from "./icons/IconArrowUp";
import SalesCard from "./SalesCard";

const Main = () => {
  return (
    <div className="col-lg-8">
      <div className="card">
        <div className="card-body pb-xxl-0">
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-2 row-cols-xxl-4">
            <div className="col">
              <Card text="Views" Icon={IconEye} number="20" info="+3 last/d" />
            </div>
            <div className="col">
              <Card text="Vendors" Icon={IconVendor} number="20" info="+3 last/d" />
            </div>
            <div className="col">
              <Card text="Purchases" Icon={IconTick} number="20" info="+3 last/d" />
            </div>
            <div className="col">
              <Card text="Sales" Icon={IconArrowUp} number="20" info="+3 last/d" />
            </div>
          </div>
        </div>
        <div className="card-body pt-0 iq-services">
          <div className="card-group border rounded-1">
            <SalesCard />
            <div className="verticle-line" />
            <SalesCard />
            <div className="verticle-line" />
            <SalesCard />
            <div className="verticle-line" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
