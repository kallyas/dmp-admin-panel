import React from "react";
import Layout from "../components/Layout";
import VendorForm from "../components/VendorForm";

const AddVendor = () => {
  return (
    <Layout>
      <div className="container-xl">
        <div className="row">
          <VendorForm />
        </div>
      </div>
    </Layout>
  );
};

export default AddVendor;
