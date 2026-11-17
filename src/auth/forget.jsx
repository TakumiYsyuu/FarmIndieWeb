import { useNavigate } from "react-router-dom";
import { Mail, X } from "lucide-react";
import { useState } from "react";

const Forget = () => {
  const navigate = useNavigate();
  const [showOtp, setshowOtp] = useState(false);

  return (
    <div className="static bg-sage-50 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-3xl p-7 m-5">
        <div className="flex gap-1">
          <img className="w-12 h-12 mr-1" src="/bukiran-favicon.png" />
          <div className="flex flex-col">
            <h1 className="font-heading font-bold text-text-primary text-lg md:text-3xl">
              Forgot your password?
            </h1>
            <p className="font-body text-text-secondary text-md md:text-lg">
              No worries! We'll help you get back to your farm in no time.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <div>
            <label className="font-body font-bold text-sm">
              Your Registered Email
            </label>
            <div className="flex gap-3 bg-cream-200 rounded-md p-2 mt-2">
              <Mail />
              <input
                id="email"
                type="email"
                placeholder="your@account.com"
                required
                className="w-full outline-none border-none"
              />
            </div>

            <button
              className="btn btn-primary mt-4 w-full bg-sage-500 border-none shadow-none hover:bg-sage-700 rounded-md"
              onClick={() => setshowOtp(!showOtp)}
            >
              {showOtp ? "" : ""}
              Forgot your password
            </button>

            <a
              className="font-body flex items-center justify-center mt-4"
              href="#"
              onClick={() => navigate("/login")}
            >
              Already have an Account?
            </a>
          </div>
        </div>

        {showOtp && (
          <div className="fixed inset-0 z-10 bg-black/50 flex items-center justify-center p-10">
            <div className="bg-white rounded-3xl p-7">
              <div className="flex justify-end">
                <button
                  className="btn btn-ghost  bg-white"
                  onClick={() => setshowOtp(!showOtp)}
                >
                  <X />
                </button>
              </div>
              <h1 className="font-heading font-bold text-text-primary text-lg md:text-2xl">
                Check your inbox, farmer!
              </h1>
              <p className="font-body text-text-secondary text-md">
                Enter the 6-digit code we sent to your email.
              </p>
              <div className="flex flex-col justify-center items-center mt-5 gap-5">
                <label className="otp">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <input
                    type="text"
                    autoComplete="one-time-code"
                    inputMode="numeric"
                    maxLength={6}
                    pattern="[0-9]{6}"
                    required
                  />
                </label>
                <button className="btn btn-primary w-full bg-sage-500 hover:bg-sage-700 outline-none shadow-none border-none">
                  Reset your Password
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Forget;
