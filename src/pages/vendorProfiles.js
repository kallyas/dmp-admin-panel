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
                    </tr>
                  </thead>
                  <tbody>
                    {currentData.map((vendor, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{vendor.name}</td>
                        <td>{vendor.trade_name}</td>
                        <td>{vendor.phone_number}</td>
                        <td>{vendor.email}</td>
                        <td>{vendor.physical_address}</td>
                        <td>{vendor.postal_address}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="row">
                  <div className="col-12">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-end">
                        <li className="page-item disabled">
                          <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
                            Previous
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
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
                            Next
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VendorProfiles;
