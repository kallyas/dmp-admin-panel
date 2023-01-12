import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Layout from "../components/Layout";
import { createStaff, staffSelector } from "../features/staff/staffSlice";
import { fetchVendors, vendorSelector } from "../features/vendor/vendorSlice";

const AddStaff = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(staffSelector);
  const { vendors } = useSelector(vendorSelector);

  const [formData, setFormData] = React.useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    vendor_id: null,
    password: "",
    user_type_id: 2,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createStaff({
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        phone_number: formData.phone_number,
        vendor_id: parseInt(formData.vendor_id),
        password: formData.password,
        user_type_id: formData.user_type_id,
      })
    ).then(() => {
      if (error) {
        return toast.error(error.message);
      } else {
        toast.success("Vendor Admin Created Successfully");
      }
    });
  };

  useEffect(() => {
    dispatch(fetchVendors());
  }, [dispatch]);

  return (
    <Layout>
      <div className="section dashboard">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Add Vendor Admin</h5>
                <form onSubmit={handleSubmit} className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">
                      Email
                    </label>
                    <input
                      value={formData.email}
                      name="email"
                      onChange={handleChange}
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      value={formData.first_name}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      name="first_name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      value={formData.last_name}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      name="last_name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      value={formData.phone_number}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      name="phone_number"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputVendorId" className="form-label">
                      Vendor
                    </label>
                    <select
                      required
                      name="vendor_id"
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select Vendor</option>
                      {vendors?.map((opt, idx) => (
                        <option key={idx} value={opt.id}>
                          {opt.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      required
                      value={formData.password}
                      onChange={handleChange}
                      type="password"
                      className="form-control"
                      name="password"
                    />
                  </div>
                  <div className="col-12 mt-4">
                    <button type="submit" className="btn btn-primary">
                      {isLoading ? "Adding vendoir admin..." : "Add vendor Admin"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddStaff;
