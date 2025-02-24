/* eslint-disable */
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../components/pagination";
import { useGetRoutesQuery } from "../features/routes/routesSlice";

const BusRoutes = () => {
  const { data } = useGetRoutesQuery()
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
                <h3 className="card-title">Bus Routes</h3>
              </div>

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
                        size="2"
                        aria-label="Bus Routes count"
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
                        aria-label="Search Bus Routes"
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
                      <th scope="col">Route Name</th>
                      <th scope="col">Start Point</th>
                      <th scope="col">Destination</th>
                      <th scope="col">Route Code</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      currentData?.map((route) => (
                        <tr key={route.id}>
                          <td>{route.id}</td>
                          <td>{route.route_code}</td>
                          <td>{route.start_point}</td>
                          <td>{route.destination}</td>
                          <td>{route.route_code}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <div className="card-footer d-flex align-items-center">
                <p className="m-0 text-muted">
                  Showing <span>{currentPage}</span> to <span>{dataPerPage}</span> of{" "}
                  <span>{data?.length}</span> entries
                </p>
                <Pagination
                  currentPage={currentPage}
                  dataPerPage={dataPerPage}
                  totalData={data?.length}
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

export default BusRoutes;
