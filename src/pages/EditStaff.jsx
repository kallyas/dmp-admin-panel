import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useGetVendorsQuery } from "../features/vendor/vendorSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useGetStaffQuery, useUpdateStaffMutation } from "../features/staff/staffSlice";
import { toast } from "react-hot-toast";

const EditStaff = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const { data: vendors } = useGetVendorsQuery();
  const { data: staff, isLoading } = useGetStaffQuery(id);
  const [UpdateStaff, { isLoading: updateLoading }] = useUpdateStaffMutation();
  const [formData, setFormData] = useState({
    first_name: staff?.first_name,
    last_name: staff?.last_name,
    email: staff?.email,
    phone_number: staff?.phone_number,
    vendor_id: staff?.vendor_id,
    password: "",
    id: staff?.id,
  });

  // add data to form data object after it has been loaded
  useEffect(() => {
    if (staff) {
      setFormData((prev) => ({
        ...prev,
        first_name: staff?.first_name,
        last_name: staff?.last_name,
        email: staff?.email,
        phone_number: staff?.phone_number,
        vendor_id: staff?.vendor_id,
        password: "",
        id: staff?.id,
        user_type_id: 2,
      }));
    }
  }, [staff]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await UpdateStaff(formData);
      if (response.data.message.includes("updated")) {
        toast.success("Staff updated successfully");
        navigate("/dashboard/staff");
      }
    } catch (error) {
      if (parseInt(error.status) !== error.status) {
        toast.error("Network error, please try again later");
      } else {
        toast.error(error?.data?.msg || error?.data?.message || "Something went wrong");
      }
    }
  };
  return (
    <Layout>
      <div className="section dashboard">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Update Vendor Admin</h5>
                {isLoading ? (
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border text-primary mx-auto" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                ) : (
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
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputVendorId" className="form-label">
                        Vendor
                      </label>
                      <select name="vendor_id" onChange={handleChange} className="form-select">
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
                        value={formData.password}
                        onChange={handleChange}
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Enter new password to change it"
                      />
                    </div>
                    <div className="col-12 mt-4">
                      <button type="submit" className="btn btn-primary">
                        {updateLoading ? "Updating vendoir admin..." : "Update vendor Admin"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditStaff;
