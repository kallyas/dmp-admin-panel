/* eslint-disable */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createVendor, vendorSelector } from "../features/vendor/vendorSlice";

const VendorForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const  { data, loading, error } = useSelector(vendorSelector);
  const [vendor, setVendor] = useState({
    name: "",
    email: "",
    phone_number: "",
    physical_address: "",
    trade_name: "",
    postal_address: "",
    vendor_type_id: "",
  });

  const handleChange = (e) => {
    setVendor((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createVendor(vendor));
    if (error) {
      toast.error(error.message);
      return;
    }

    if (data) {
      toast.success("Vendor created successfully");
      navigate("/dashboard/vendors")
    }
  };

  return (
    <>
      <div className="col-xl-3 col-lg-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">Add New Vendor</h4>
            </div>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label className="form-label">Vendor Type:</label>
                <select
                  name="vendor_type_id"
                  className="selectpicker form-control"
                  data-style="py-0"
                  value={vendor.vendor_type_id}
                  onChange={handleChange}
                  required
                >
                  <option>Select Vendor Type</option>
                  <option value="1">Bus</option>
                  <option value="2">Taxi</option>
                  <option value="3">Bus & Taxi</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-xl-8 col-lg-7">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">New Vendor Information</h4>
            </div>
          </div>
          <div className="card-body">
            <div className="new-user-info">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label className="form-label" htmlFor="name">
                      Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                      value={vendor.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label className="form-label" htmlFor="phone_number">
                      Phone Number:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone_number"
                      id="phone"
                      placeholder="0712345678"
                      value={vendor.phone_number}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label className="form-label" htmlFor="physical_address">
                      Physical Address:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="physical_address"
                      id="physicaladdress"
                      placeholder="physicaladdress"
                      value={vendor.physical_address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label className="form-label" htmlFor="postal_address">
                      Postal Address:
                    </label>
                    <input
                      name="postal_address"
                      type="text"
                      className="form-control"
                      id="postaladdress"
                      placeholder="P.O. Box XXXX Kampala"
                      value={vendor.postal_address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <label className="form-label" htmlFor="trade_name">
                      Trade Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cname"
                      name="trade_name"
                      placeholder="Link Bus Limited"
                      value={vendor.trade_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label className="form-label" htmlFor="email">
                      Email:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="johndoe@gmail.com"
                      value={vendor.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <hr />
                <button type="submit" className="btn btn-primary">
                  {loading ? "Loading..." : "Add New Vendor"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorForm;
