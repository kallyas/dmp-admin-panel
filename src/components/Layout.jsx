/* eslint-disable */
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/dashboard">Home</a>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>
        {children}
      </main>
      <footer id="footer" className="footer">
        <div className="copyright">
          © Copyright {new Date().getFullYear()}
          <strong>
            <span> Roads Links</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://github.com/kallyas/">Iden</a>
        </div>
      </footer>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center active">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};

export default Layout;
