/* eslint-disable */
import { useEffect, useState } from "react";
import { IconChevronUp } from "@tabler/icons";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getRoutes, routesSelector } from "../features/routes/routesSlice";
import Pagination from "../components/pagination";

const BusRoutes = () => {
  const { data, isLoading, error } = useSelector(routesSelector);
  const dispatch = useDispatch();

  const [dataPerPage, setDataPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleDataPerPage = (e) => {
    e.target.value < 10 ? setDataPerPage(10) : setDataPerPage(e.target.value);
  };

  useEffect(() => {
    dispatch(getRoutes());
  }, [dispatch]);

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                    <th>Route Name</th>
                    <th>Start Point</th>
                    <th>Destination</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    currentData.map((route) => (
                      <tr key={route.id}>
                        <td>
                          <input
                            className="form-check-input m-0 align-middle"
                            type="checkbox"
                            aria-label="Select Route"
                          />
                        </td>
                        <td>{route.id}</td>
                        <td>{route.route_code}</td>
                        <td>{route.start_point}</td>
                        <td>{route.destination}</td>
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
                currentPage={currentPage}
                dataPerPage={dataPerPage}
                totalData={data.length}
                paginate={paginate}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BusRoutes;
