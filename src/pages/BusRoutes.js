import { IconChevronUp } from "@tabler/icons";
import React from "react";
import Layout from "../components/Layout";

const BusRoutes = () => {
  return (
    <Layout>
      <div className="container-xl">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Bus Routes</h3>
            </div>

            <div className="card-body border-bottom py-3">
              <div className="d-flex">
                <div className="text-muted">
                  show
                  <div className="mx-2 d-inline-block">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      value="8"
                      size="3"
                      aria-label="Bus Routes count"
                    />
                  </div>
                  entries
                </div>
                <div className="ms-auto text-muted">
                  Search:
                  <div className="ms-2 d-inline-block">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      aria-label="Search Bus Routes"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table card-table table-vcenter text-nowrap datatable">
                <thead>
                  <tr>
                    <th className="w-1">
                      <input
                        className="form-check-input m-0 align-middle"
                        type="checkbox"
                        aria-label="Select all vendors"
                      />
                    </th>
                    <th className="w-1">
                      <IconChevronUp />
                      ID
                    </th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BusRoutes;
