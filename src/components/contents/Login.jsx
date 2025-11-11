import React, { useRef } from "react";
import { verifyUser } from "../../data/users";
const Login = ({ setToken, setRole }) => {
  const userRef = useRef(null);
  const passRef = useRef(null);

  return (
    <>
      <div
        className="login-container m-auto mt-5 card p-4"
        style={{ width: "fit-content" }}
      >
        <h2>Login Page</h2>
        <form>
          <div className="form-group d-flex flex-column mb-3">
            <label
              htmlFor="username"
              className="form-label"
              style={{ borderRadius: "0px" }}
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="rounded fs-5"
              ref={userRef}
            />
          </div>
          <div className="form-group d-flex flex-column mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="rounded fs-5"
              ref={passRef}
            />
          </div>
          <div className="d-flex">
            <button className="btn btn-danger" type="reset">
              Clear
            </button>
            <button
              className="btn btn-success"
              type="submit"
              onClick={() => {
                const user = userRef.current.value;
                const pass = passRef.current.value;
                const userInfo = verifyUser(user, pass);
                if (!userInfo) {
                  alert("Please enter username and password");
                  userRef.current.value = "";
                  passRef.current.value = "";
                  userRef.current.focus();
                } else {
                  setToken(userInfo.token);
                  setRole(userInfo.role);
                  alert("Login successful");
                }
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
