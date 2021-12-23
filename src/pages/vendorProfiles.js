import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { vendorSelector, fetchVendors } from "../features/vendor/vendorSlice";
import Layout from "../components/Layout";
import { IconChevronLeft, IconChevronRight, IconChevronUp } from "@tabler/icons";

const VendorProfiles = () => {
  const dispatch = useDispatch();
  const { vendors } = useSelector(vendorSelector);

  console.log(vendors);

  useEffect(() => {
    dispatch(fetchVendors());
  }, [dispatch]);

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
                      type="text"
                      className="form-control form-control-sm"
                      value="8"
                      size="3"
                      aria-label="Vendor profiles count"
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
                  {vendors.map((vendor) => (
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
              <ul className="pagination m-0 ms-auto">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabindex="-1" aria-disabled="true">
                    <IconChevronLeft />
                    prev
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    next
                    <IconChevronRight />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VendorProfiles;
