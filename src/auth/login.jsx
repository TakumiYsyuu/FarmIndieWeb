import { useNavigate } from "react-router-dom";
import { MailIcon, Lock, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const login = () => {
  const navigate = useNavigate();

  const [ShowPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-sage-50 flex justify-center items-center min-h-screen">
      <div className="bg-surface-white rounded-3xl p-7 m-5">
        <div className="flex">
          <img className="w-12 h-12 mr-1" src="/bukiran-favicon.png" />
          <div className="flex flex-col gap-1">
            <h1 className="font-heading font-bold text-text-primary text-lg md:text-3xl">
              Welcome back, farmer!
            </h1>
            <p className="font-body text-text-secondary text-sm ">
              Your little farm has been waiting for you.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <form>
            <div>
              <label className="font-body font-bold text-sm">
                EMAIL ADDRESS
              </label>
              <div className="flex gap-3 bg-cream-200 rounded-md p-2 mt-2">
                <MailIcon />
                <input
                  id="email"
                  type="email"
                  placeholder="your@account.com"
                  required
                  className="w-full outline-none border-none"
                ></input>
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <label className="font-body font-bold text-sm mt-7">
                  PASSWORD
                </label>
                <a
                  className="text-sm font-body mt-7"
                  href="#"
                  onClick={() => navigate("/forget")}
                >
                  Forget your password?
                </a>
              </div>

              <div className="flex gap-3 bg-cream-200 rounded-md p-2 mt-2">
                <Lock />
                <input
                  id="password"
                  type={ShowPassword ? "text" : "password"}
                  placeholder="********"
                  required
                  className="w-full outline-none border-none"
                ></input>
                <button
                  type="button"
                  onClick={() => setShowPassword(!ShowPassword)}
                  className="cursor-pointer"
                >
                  {ShowPassword ?
                    <EyeOff size={20} strokeWidth={2} />
                  : <Eye size={20} strokeWidth={2} />}
                </button>
              </div>
            </div>
          </form>
          <button className="btn btn-primary bg-sage-500 border-none shadow-none hover:bg-sage-700 w-full rounded-md mt-8">
            Login
          </button>
          <div className="flex flex-col justify-center items-center gap-2 mt-4">
            <a
              className="font-body text-sm"
              href="#"
              onClick={() => navigate("/register")}
            >
              Don't have an Account?
            </a>
            <div className="flex gap-1">
              <ArrowLeft className="mt-0.5" size={20} />
              <a
                className="font-heading"
                href="#"
                onClick={() => navigate("/")}
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
