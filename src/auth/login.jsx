import React from "react";
import { useNavigate } from "react-router-dom";

const login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="flex flex-col items-center bg-amber-800 p-5">
        <h1 className="text-2xl text-amber-100 font-bold">
          Login to your account
        </h1>
        <p className="text-sm font-semibold">
          Ener your email below to login to your account
        </p>

        <div className="flex flex-col">
          <form>
            <div>
              <label>Email</label>
              <input
                id="email"
                type="email"
                placeholder="your@account.com"
                required
              ></input>
            </div>
            <div>
              <label>Password</label>
              <input
                id="password"
                type="password"
                placeholder="********"
                required
              ></input>
            </div>
          </form>
          <div className="flex flex-col">
            <a href="#" onClick={() => navigate("/forget")}>
              Forget your password?
            </a>
            <button className="btn">Login</button>
            <a href="#" onClick={() => navigate("/register")}>
              don't have an Account?
            </a>
            <a href="#" onClick={() => navigate("/")}>
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
