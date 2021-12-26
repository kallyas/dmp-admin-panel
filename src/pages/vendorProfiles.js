/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { vendorSelector, fetchVendors } from "../features/vendor/vendorSlice";
import Layout from "../components/Layout";
import { IconChevronUp } from "@tabler/icons";
import Pagination from "../components/pagination";

const VendorProfiles = () => {
  const dispatch = useDispatch();
  const { vendors } = useSelector(vendorSelector);

  const [dataPerPage, setDataPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleDataPerPage = (e) => {
    e.target.value < 10 ? setDataPerPage(10) : setDataPerPage(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchVendors());
  }, [dispatch]);

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = vendors.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout>
      <div className="container-xl">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Vendor Profiles</h3>
            </div>
            <div className="card-body border-bottom py-3">
              <div className="d-flex">
                <div className="text-muted">
                  show
                  <div className="mx-2 d-inline-block">
                    <input
                      style={{ width: "50px" }}
                      type="text"
                      className="form-control form-control-sm"
                      value={dataPerPage}
                      size="2"
                      aria-label="Vendor profiles count"
                      onChange={handleDataPerPage}
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
                      aria-label="Search vendors"
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
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Trade Name</th>
                    <th>Postal Address</th>
                    <th>Physical Address</th>
                    <th>Email</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((vendor) => (
                    <tr key={vendor.id}>
                      <td>
                        <input
                          className="form-check-input m-0 align-middle"
                          type="checkbox"
                          aria-label="Select Vendor"
                        />
                      </td>
                      <td>{vendor.id}</td>
                      <td>{vendor.name}</td>
                      <td>{vendor.phone_number}</td>
                      <td>{vendor.trade_name}</td>
                      <td>{vendor.postal_address}</td>
                      <td>{vendor.physical_address}</td>
                      <td>{vendor.email}</td>
                      <td className="text-end">
                        <span className="dropdown">
                          <button
                            className="btn dropdown-toggle align-text-top"
                            data-bs-boundary="viewport"
                            data-bs-toggle="dropdown"
                          >
                            Actions
                          </button>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </div>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card-footer d-flex align-items-center">
              <p className="m-0 text-muted">
                Showing <span>1</span> to <span>8</span> of <span>16</span> entries
              </p>
              <Pagination
                dataPerPage={dataPerPage}
                totalData={vendors.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VendorProfiles;
