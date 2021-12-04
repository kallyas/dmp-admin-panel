import React from "react";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VendorForm from "../components/VendorForm";

const AddVendor = () => {
  return (
    <>
      <Sidebar />
      <main className="main-content">
        <Navbar />
        <MainContainer>
            <VendorForm />
        </MainContainer>
      </main>
    </>
  );
};

export default AddVendor;
