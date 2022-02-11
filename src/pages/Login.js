/* eslint-disable */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, loginSelector } from "../features/login/loginSlice";
import { toast } from "react-toastify";

const Login = () => {
  const { loading, error, isLoggedIn } = useSelector(loginSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formError, setFormError] = useState({
    email: "",
    password: "",
  });
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

    if (data.email === "") {
      return setFormError((prevState) => ({
        ...prevState,
        email: "Email is required",
      }));
    } else if (data.password === "") {
      return setFormError((prevState) => ({
        ...prevState,
        password: "Password is required",
      }));
    }

    dispatch(loginUser(data));

    if (isLoggedIn) {
      toast.success("Login Successful");
      return navigate("/");
    }

    if (error) {
      return toast.error(error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn]);

  return (
    <div className="border-top-wide border-primary d-flex flex-column">
      <div className="page page-center">
        <div className="container-tight py-4">
          <div className="text-center mb-4">
            <a href="." className="navbar-brand navbar-brand-autodark">
              <img
                src="https://dpm-vendor-ui-nzs4n.ondigitalocean.app/static/media/dpm_logo.0a9f7327.png"
                height="36"
                alt=""
              />
            </a>
          </div>
          <form className="card card-md" autoComplete="on" onSubmit={handleSubmit}>
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login to your account</h2>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                />
                {formError.email && <p className="text-danger">{formError.email}</p>}
              </div>
              <div className="mb-2">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  autoComplete="on"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                />
                {formError.password && <p className="text-danger">{formError.password}</p>}
              </div>
              <div className="mb-2">
                <label className="form-check">
                  <input type="checkbox" className="form-check-input" />
                  <span className="form-check-label">Remember me on this device</span>
                </label>
              </div>
              <div className="form-footer">
                <button type="submit" className="btn btn-primary w-100">
                  {loading ? "Loading..." : "Login"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
