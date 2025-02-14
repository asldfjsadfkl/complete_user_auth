import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import googleImg from "../assets/googleImg.png";
import loginImg from "../assets/login1.jpeg";
import { SchemaSignIn } from "./Schema";
import { register } from "../Actions/Action";
import { login } from "../Actions/Action";
import { RefreshContext } from "../Context/RefreshContext";
import Schema from "./Schema";
import { useFormik } from "formik";
import "../css/signup.css";

const Signup = () => {
  const [show, setShow] = useState(true);
  const { setRefresh } = useContext(RefreshContext);
  const navigate = useNavigate();
  // sign up validation
  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: Schema,
    onSubmit: (values) => {
      register(values);
      navigate("/");
      setRefresh((refresh) => (refresh ? false : true));
    },
  });
  // sign in validation
  const formikSignin = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: SchemaSignIn,
    onSubmit: (values) => {
      login(values);
      navigate("/");
      setRefresh((refresh) => (refresh ? false : true));
    },
  });

  const googleAuth = () => {
    window.location.href = "http://localhost:5000/googlelogin";
  };

  return (
    <main className="main_user_auth">
      <div className="container_user_auth">
        <div className={show ? "register_user_toleft" : "register_user"}>
          <form className="form_register" onSubmit={formik.handleSubmit}>
            <div className="header_register">
              <span className="spanOne">
                Let's
                <br /> Start Learning
              </span>
              <span className="spanTwo">
                Please Login or Sign up to continue
              </span>
            </div>

            <div className="input-group-lg mb-3">
              <input
                type="text"
                name="name"
                value={formik.values.name}
                className="form-control"
                placeholder="Username"
                onChange={formik.handleChange}
              />
              <p className={formik.errors.name ? "errors" : "d-none"}>
                {formik.errors.name}
              </p>
            </div>

            <div className="input-group-lg mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <p className={formik.errors.email ? "errors" : "d-none"}>
                {formik.errors.email}
              </p>
            </div>

            <div className="input-group-lg mb-3">
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                className="form-control"
              />
              <p className={formik.errors.password ? "errors" : "d-none"}>
                {formik.errors.password}
              </p>
            </div>
            <div className="w-100 mb-3">
              <button
                type="submit"
                style={{ backgroundColor: "#FFA11D" }}
                className="w-100 btn-lg btn btn-primary"
              >
                Sign up
              </button>
            </div>
            <div className="google_login_btn_div">
              <button
                onClick={googleAuth}
                type="submit"
                className="w-100 btn-lg btn"
              >
                Google
              </button>
              <img src={googleImg} alt="googleIcon" />
            </div>
            <div className="w-100">
              <span className="cursor text-center w-100 d-block mt-2">
                Already Have An Account?
                <span onClick={() => setShow(!show)}>
                  <b>Sign in</b>
                </span>
              </span>
            </div>
          </form>
        </div>
        <img
          className={show ? "imgtoleft" : "imageBack"}
          src={loginImg}
          alt="loginimg"
        />

        <div className={!show ? "login_user" : "login_user_toleft"}>
          <form className="form_login" onSubmit={formikSignin.handleSubmit}>
            <div className="header_register">
              <span className="spanOne">Sign in</span>
              <span className="spanTwo">
                Please Login or Sign up to continue
              </span>
            </div>

            <div className="input-group-lg mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                value={formikSignin.values.email}
                onChange={formikSignin.handleChange}
              />
              <p className={formikSignin.errors.email ? "errors" : "d-none"}>
                {formikSignin.errors.email}
              </p>
            </div>

            <div className="input-group-lg mb-3">
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                value={formikSignin.values.password}
                onChange={formikSignin.handleChange}
                className="form-control"
              />
              <p className={formikSignin.errors.password ? "errors" : "d-none"}>
                {formikSignin.errors.password}
              </p>
            </div>
            <div className="w-100 mb-3">
              <button
                type="submit"
                style={{ backgroundColor: "#FFA11D" }}
                className="w-100 btn-lg btn btn-primary"
              >
                Sign in
              </button>
            </div>
            <div className="google_login_btn_div">
              <button
                onClick={googleAuth}
                type="submit"
                className="w-100 btn-lg btn"
              >
                Google
              </button>
              <img src={googleImg} alt="googleIcon" />
            </div>
            <div className="w-100">
              <span
                className="cursor text-center w-100 d-block mt-2"
                onClick={() => setShow(!show)}
              >
                You Are New? <b>Sign up</b>
              </span>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
export default Signup;
