import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createVendor, vendorSelector } from "../features/vendor/vendorSlice";

const VendorForm = () => {
  const dispatch = useDispatch();
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
    console.log(vendor);
    dispatch(createVendor(vendor));
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
      <div className="col-xl-9 col-lg-8">
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
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <label className="form-label" htmlFor="trade_name">
                      Company Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cname"
                      name="trade_name"
                      placeholder="Company Name"
                      value={vendor.trade_name}
                      onChange={handleChange}
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
                    />
                  </div>
                </div>
                <hr />
                <button type="submit" className="btn btn-primary">
                  Add New Vendor
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
