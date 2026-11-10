import React from "react";
import { useNavigate } from "react-router-dom";

const Forget = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h1>Reset Your Password</h1>
        <p>
          Enter your email address below and we'll send you a 6-digit
          verification code to reset your password.
        </p>
      </div>

      <div>
        <label>Email</label>
        <input id="email" type="email" placeholder="your@account.com" />
      </div>
      <button>Send Verification Code</button>
      <a href="#" onClick={() => navigate("/login")}>
        Back to Login
      </a>
    </div>
  );
};

export default Forget;
