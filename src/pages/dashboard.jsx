/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DPMCharts from "../components/DPMCharts";
import Layout from "../components/Layout";
import moment from "moment/moment";
import { useGetVendorsQuery } from "../features/vendor/vendorSlice";
import { useGetRoutesQuery } from "../features/routes/routesSlice";
import { useLoggedInSessionsQuery } from "../features/login/loginSlice";
const Dashboard = () => {
  const dispatch = useDispatch();
  const { data: vendors } = useGetVendorsQuery();
  const { data: busRoutes } = useGetRoutesQuery();
  const { data: sessions } = useLoggedInSessionsQuery();

  const [dataPerPage, setDataPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const handleDataPerPage = (e) => {
    e.target.value < 10 ? setDataPerPage(10) : setDataPerPage(e.target.value);
  };

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = vendors?.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <Layout>
      <section className="section dashboard">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-xxl-4 col-md-6">
                <div className="card info-card sales-card">
                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown">
                      <i className="bi bi-three-dots"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Today
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Month
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Year
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      Vendors <span>| Today</span>
                    </h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-briefcase"></i>
                      </div>
                      <div className="ps-3">
                        <h6>{vendors?.length}</h6>{" "}
                        <span className="text-success small pt-1 fw-bold">12%</span>
                        <span className="text-muted small pt-2 ps-1">increase</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-md-6">
                <div className="card info-card sales-card">
                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown">
                      <i className="bi bi-three-dots"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Today
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Month
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Year
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      Bus Routes <span>| Today</span>
                    </h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-truck"></i>
                      </div>
                      <div className="ps-3">
                        <h6>{busRoutes?.length}</h6>{" "}
                        <span className="text-success small pt-1 fw-bold">12%</span>
                        <span className="text-muted small pt-2 ps-1">increase</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-md-12">
                <div className="card info-card sales-card">
                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown">
                      <i className="bi bi-three-dots"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Today
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Month
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Year
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      Sales <span>| Today</span>
                    </h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-cart"></i>
                      </div>
                      <div className="ps-3">
                        <h6>145</h6> <span className="text-success small pt-1 fw-bold">12%</span>
                        <span className="text-muted small pt-2 ps-1">increase</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="card">
                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown">
                      <i className="bi bi-three-dots"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Today
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Month
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Year
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      Reports <span>/Today</span>
                    </h5>
                    <DPMCharts />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="card top-selling overflow-auto">
                  <div className="filter">
                    {" "}
                    <a className="icon" href="#" data-bs-toggle="dropdown">
                      <i className="bi bi-three-dots"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Today
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Month
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Year
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body pb-0">
                    <h5 className="card-title">
                      Recent Vendors <span>/Today</span>
                    </h5>
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Trade Name</th>
                          <th scope="col">Phone Number</th>
                          <th scope="col">Email</th>
                          <th scope="col">Address</th>
                          <th scope="col">Postal Address</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentData?.map((e, i) => (
                          <tr key={i}>
                            <th scope="row">{i + 1}</th>
                            <td>{e.name}</td>
                            <td>{e.trade_name}</td>
                            <td>{e.phone_number}</td>
                            <td>{e.email}</td>
                            <td>{e.physical_address}</td>
                            <td>{e.postal_address}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="filter">
                <a className="icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Today
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Month
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Year
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Recent Activity <span>| Today</span>
                </h5>
                <div className="activity">
                  {/* map through the last 10 sessions */}
                  {sessions
                    ?.slice(-20)
                    .reverse()
                    .map((e, i) => (
                      <div className="activity-item d-flex mx-4" key={i}>
                        <div className="activity-content">
                          {/* format time like 2 hours ago etc */}
                          {e?.first_name + " " + e?.last_name} logged in{" "}
                          {moment(e?.logged_in_at).fromNow()} at{" "}
                          {moment(e?.logged_in_at).format("h:mm a")}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
