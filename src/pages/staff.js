import { useEffect } from "react";
import { IconChevronLeft, IconChevronRight, IconChevronUp } from "@tabler/icons";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getStaff, staffSelector } from "../features/staff/staffSlice";

const Staff = () => {
  const { data, isLoading, error } = useSelector(staffSelector);
  const dispatch = useDispatch();

  console.log(data);

  useEffect(() => {
    dispatch(getStaff());
  }, [dispatch]);

  return (
    <Layout>
      <div className="container-xl">
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
                        type="text"
                        className="form-control form-control-sm"
                        value="8"
                        size="3"
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
                <table className="table card-table table-vcenter text-nowrap datatable">
                  <thead>
                    <tr>
                      <th className="w-1">
                        <input
                          className="form-check-input m-0 align-middle"
                          type="checkbox"
                          aria-label="Select all staff"
                        />
                      </th>
                      <th className="w-1">
                        <IconChevronUp />
                        ID
                      </th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((staff) => (
                      <tr key={staff.id}>
                        <td>
                          <input className="form-check-input m-0 align-middle" type="checkbox" />
                        </td>
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
                  Showing <span>1</span> to <span>8</span> of <span>16</span> entries
                </p>
                <ul className="pagination m-0 ms-auto">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
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
      </div>
    </Layout>
  );
};

export default Staff;
