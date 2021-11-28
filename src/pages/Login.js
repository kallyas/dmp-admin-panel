import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AuthShape from "../components/AuthShape";
import { loginUser, loginSelector } from "../features/login/loginSlice";

const Login = () => {
  const { user, loading, error, isLoggedIn } = useSelector(loginSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(data));
    if (user.access_token && loading === false) {
      localStorage.setItem("access_token", user.access_token);
      localStorage.setItem("refresh_token", user.refresh_token);
      return navigate("/dashboard");
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn]);

  return (
    <div className="wrapper">
      <div className="res-hide row m-0 align-items-center vh-100">
        <div className="col-lg-5 pb-0">
          <div className="auth-shap position-relative">
            <AuthShape />
          </div>
          <div className="card-body auth-padding">
            <a href="#" className="navbar-brand d-flex align-items-center mb-3"></a>
            <h2 className="mb-2 text-center">DPM Admin </h2>
            <p className="text-center">Login to continue.</p>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label for="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control border-primary"
                      id="email"
                      name="email"
                      aria-describedby="email"
                      value={data.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label for="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control border-primary"
                      id="password"
                      name="password"
                      aria-describedby="password"
                      value={data.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">
                  {loading ? "Loading..." : "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-7 d-md-block d-none p-0">
          <img
            src="https://i.pinimg.com/originals/70/a6/6d/70a66ded2dd28914f5e25ad8ed822d86.png"
            class="img-fluid gradient-main vh-100"
            alt="images"
            style={{ objectFit: "scale-down" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
