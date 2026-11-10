import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h1>Create Your Account</h1>
        <p>
          Create your free account to claim your bukid, save your progress, and
          play anytime in your browser.
        </p>

        <div>
          <label>Farmer Name</label>
          <input id="name" type="name" placeholder="Your Name" required />
        </div>

        <div>
          <label>Email</label>
          <input
            id="email"
            type="email"
            placeholder="your@account.com"
            required
          />
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

        <div>
          <button>Create an Account</button>
          <a href="#" onClick={() => navigate("/login")}>
            Already have an Account?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
