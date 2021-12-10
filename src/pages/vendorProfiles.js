import React from "react";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const vendorProfiles = () => {
  return (
    <>
      <Sidebar />
      <main className="main-content">
        <Navbar />
        <MainContainer>
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Vendor Profiles</h4>
                </div>
              </div>
              <div className="card-body px-0">
                <div className="table-responsive">
                  <div
                    id="user-list-table_wrapper"
                    className="dataTables_wrapper dt-bootstrap5 no-footer"
                  >
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <div className="dataTables_length" id="user-list-table_length">
                          <label>
                            Show
                            <select
                              name="user-list-table_length"
                              aria-controls="user-list-table"
                              className="form-select form-select-sm"
                            >
                              <option value="10">10</option>
                              <option value="25">25</option>
                              <option value="50">50</option>
                              <option value="100">100</option>
                            </select>
                            entries
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div id="user-list-table_filter" className="dataTables_filter">
                          <label>
                            Search:
                            <input
                              type="search"
                              className="form-control form-control-sm"
                              placeholder=""
                              aria-controls="user-list-table"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive border-bottom my-3">
                      <table
                        id="user-list-table"
                        className="table table-striped dataTable no-footer"
                        role="grid"
                        data-toggle="data-table"
                        aria-describedby="user-list-table_info"
                      >
                        <thead>
                          <tr className="ligth">
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Physical Address</th>
                            <th>Postal Address</th>
                            <th>Trade Name</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[1, 2, 3].map((_, i) => (
                            <tr key={i}>
                              <td>Bob</td>
                              <td>0781234567</td>
                              <td>bob@gmail.com</td>
                              <td>Kampala</td>
                              <td>P.O.BOX 123 Kampala</td>
                              <td>Bob's Trading</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MainContainer>
      </main>
    </>
  );
};

export default vendorProfiles;
