import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MainContainer from "../components/MainContainer";
import Main from "../components/Main";

const Dashboard = () => {

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

export default Dashboard;
