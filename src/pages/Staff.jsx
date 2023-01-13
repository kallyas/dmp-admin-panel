/* eslint-disable */
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../components/pagination";
import { useGetStaffQuery } from "../features/staff/staffSlice";

const Staff = () => {
  const { data } = useGetStaffQuery 
  const dispatch = useDispatch();
  const [dataPerPage, setDataPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleDataPerPage = (e) => {
    e.target.value < 10 ? setDataPerPage(10) : setDataPerPage(e.target.value);
  };

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data?.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout>
      <section className="section dashboard">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Admin Staff</h3>
              </div>
              <div className="card-body border-bottom py-3">
                <div className="card-body border-bottom py-3">
                  <div className="d-flex">
                    <div className="text-muted">
                      show
                      <div className="mx-2 d-inline-block">
                        <input
                          style={{ width: "50px" }}
                          type="number"
                          className="form-control form-control-sm"
                          value={dataPerPage}
                          onChange={handleDataPerPage}
                          size="2"
                          aria-label="Admin staff count"
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
                          aria-label="Search staff"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col"># ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentData?.map((staff) => (
                        <tr key={staff.id}>
                          <td>{staff.id}</td>
                          <td>{staff.first_name}</td>
                          <td>{staff.last_name}</td>
                          <td>{staff.email}</td>
                          <td>{staff.phone_number}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="card-footer d-flex align-items-center">
                  <p className="m-0 text-muted">
                    Showing <span>1</span> to <span>8</span> of <span>{data?.length}</span> entries
                  </p>
                  <Pagination
                    dataPerPage={dataPerPage}
                    totalData={data?.length}
                    paginate={paginate}
                    currentPage={currentPage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Staff;
