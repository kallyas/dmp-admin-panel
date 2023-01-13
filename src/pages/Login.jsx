/* eslint-disable */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../utils/validations";
import { setToken } from "../features/auth/authSlice";
import { useLoginMutation } from "../features/login/loginSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const formOptions = { resolver: yupResolver(loginSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const [login, { isLoading, isError, error: loginError }] = useLoginMutation();

  const handleLogin = async (data) => {
    setError(null);
    try {
      const response = await login({ username: data.email, password: data.password }).unwrap();
      dispatch(
        setToken({
          accessToken: response.access_token,
          refreshToken: response.refresh_token,
          user: response.user,
          regionName: response.region_name,
        })
      );
      toast.success("Login successful");
      navigate("/dashboard");
    } catch (error) {
      if (parseInt(error.status) !== error.status) {
        setError("Network error, please try again");
      } else {
        setError(error.data.message);
      }
    }
  };

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
                    {error && (
                      <div className="alert alert-danger mt-3" role="alert">
                        {error}
                      </div>
                    )}
                  </div>
                  <form onSubmit={handleSubmit(handleLogin)} className="row g-3 needs-validation">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">
                          @
                        </span>
                        <input
                          placeholder="Enter your email"
                          type="email"
                          {...register("email")}
                          name="email"
                          className="form-control"
                        />
                        {errors.email && (
                          <div className="invalid-feedback">{errors.email.message}</div>
                        )}
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        placeholder="Enter your password"
                        type="password"
                        {...register("password")}
                        name="password"
                        className="form-control"
                      />
                      {errors.password && (
                        <div className="invalid-feedback">{errors.password.message}</div>
                      )}
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100" type="submit">
                        {isLoading ? "Loading..." : "Login"}
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
