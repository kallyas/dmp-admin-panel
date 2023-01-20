/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { IconChevronUp } from "@tabler/icons";
import Pagination from "../components/pagination";
import { useGetVendorsQuery } from "../features/vendor/vendorSlice";

const VendorProfiles = () => {
  const dispatch = useDispatch();
  const { data: vendors } = useGetVendorsQuery();
  const [dataPerPage, setDataPerPage] = useState(10);
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
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Vendors</h5>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Trade Name</th>
                      <th scope="col">Phone Number</th>
                      <th scope="col">Email</th>
                      <th scope="col">Address</th>
                      <th scope="col">Postal Address</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentData?.map((vendor, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{vendor.name}</td>
                        <td>{vendor.trade_name}</td>
                        <td>{vendor.phone_number}</td>
                        <td>{vendor.email}</td>
                        <td>{vendor.physical_address}</td>
                        <td>{vendor.postal_address}</td>
                        <td>
                          <Link to="/dashboard/add-staff" className="btn btn-primary btn-sm">
                            Add Admin
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="card-footer d-flex align-items-center">
                <p className="m-0 text-muted">
                  Showing <span>{currentPage}</span> to <span>{dataPerPage}</span> of{" "}
                  <span>{vendors?.length}</span> entries
                </p>
                <Pagination
                  currentPage={currentPage}
                  dataPerPage={dataPerPage}
                  totalData={vendors?.length}
                  paginate={paginate}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VendorProfiles;
