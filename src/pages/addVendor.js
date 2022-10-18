import React from "react";
import Layout from "../components/Layout";
import VendorForm from "../components/VendorForm";

const AddVendor = () => {
  return (
    <Layout>
      <section className="section dashboard">
        <div className="row">
          <VendorForm />
        </div>
      </section>
    </Layout>
  );
};

export default AddVendor;
