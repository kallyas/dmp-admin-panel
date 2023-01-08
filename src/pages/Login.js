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
  const [formError, setFormError] = useState(null);
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

  const verifyForm = () => {
    let invalid = {};
    if (!data.email) {
      invalid.email = "Email is required";
    }
    if (!data.password) {
      invalid.password = "Password is required";
    }
    setFormError(invalid);
    return Object.keys(invalid).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (verifyForm()) {
      dispatch(loginUser(data)).then(() => {
        if (error) {
          // console.log(error.message);
          return toast.error(error.message);
        } else {
          toast.success("Login Successful");
          navigate("/");
        }
      });
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn]);

  return (
    <div className="container">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex justify-content-center py-4">
                <a href="/" className="logo d-flex align-items-center w-auto">
                  <img src="./roadslinks_logo.png" alt="" />
                  <span className="d-none d-lg-block">DPM Ltd</span>
                </a>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                    <p className="text-center small">Enter your username &amp; password to login</p>
                  </div>
                  <form onSubmit={handleSubmit} className="row g-3 needs-validation">
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">
                          @
                        </span>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          value={data.email}
                          onChange={handleChange}
                        />
                        {formError != null &&  (
                          <div className="invalid-feedback">{formError.email}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        value={data.password}
                        onChange={handleChange}
                      />
                      {formError != null && (
                        <div className="invalid-feedback">{formError.password}</div>
                      )}
                    </div>
                    <div className="col-12">
                      <div className="form-check"></div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100" type="submit">
                        {loading ? "Loading..." : "Login"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
