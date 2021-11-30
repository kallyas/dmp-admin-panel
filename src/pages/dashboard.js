import React from "react";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import MainContainer from "../components/MainContainer";
import Main from "../components/Main";

const dashboard = () => {
  return (
    <>
      <Sidebar />
      <main className="main-content">
        <Navbar />
        <MainContainer>
          <Main />
        </MainContainer>
      </main>
    </>
  );
};

export default dashboard;
