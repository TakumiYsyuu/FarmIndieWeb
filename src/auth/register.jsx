import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserIcon, MailIcon, Lock, Eye, EyeOff } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();

  const [ShowPassword, setShowPassword] = useState(false);
  const [ShowConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="bg-sage-50 flex justify-center items-center min-h-screen">
      <div className="bg-white rounded-3xl p-7 m-7">
        <div className="flex gap-1">
          <img className="w-12 h-12 mr-1" src="/bukiran-favicon.png" />
          <div className="flex flex-col gap-1">
            <h1 className="font-heading font-bold text-text-primary text-lg md:text-3xl">
              Welcome to the nayon, farmer!
            </h1>
            <p className="font-body text-text-secondary text-sm ">
              Your very own little bukid is waiting for you to begin.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <form>
            <div>
              <label className="font-body font-bold text-sm">Farmer Name</label>
              <div className="flex gap-3 bg-cream-200 rounded-md p-2 mt-2 mb-4">
                <UserIcon />
                <input
                  id="name"
                  type="name"
                  placeholder="Your Name"
                  required
                  className="w-full outline-none border-none"
                />
              </div>
            </div>

            <div>
              <label className="font-body font-bold text-sm">Email</label>
              <div className="flex gap-3 bg-cream-200 rounded-md p-2 mt-2 mb-4">
                <MailIcon />
                <input
                  id="email"
                  type="email"
                  placeholder="your@account.com"
                  required
                  className="w-full outline-none border-none"
                />
              </div>
            </div>

            <div>
              <label className="font-body font-bold text-sm">Password</label>
              <div className="flex gap-3 bg-cream-200 rounded-md p-2 mt-2 mb-4">
                <Lock />
                <input
                  id="password"
                  type={ShowPassword ? "text" : "password"}
                  placeholder="********"
                  required
                  className="w-full outline-none border-none"
                />
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

            <div>
              <label className="font-body font-bold text-sm">
                Confirm Password
              </label>

              <div className="flex gap-3 bg-cream-200 rounded-md p-2 mt-2">
                <Lock />
                <input
                  id="password"
                  type={ShowConfirmPassword ? "text" : "password"}
                  placeholder="********"
                  required
                  className="w-full outline-none border-none"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!ShowConfirmPassword)}
                  className="cursor-pointer"
                >
                  {ShowConfirmPassword ?
                    <EyeOff size={20} strokeWidth={2} />
                  : <Eye size={20} strokeWidth={2} />}
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center mt-4">
              <button className="btn btn-primary mt-4 bg-sage-500 w-full border-none shadow-none hover:bg-sage-700 rounded-md">
                Create an Account
              </button>
              <a
                className="font-body text-sm mt-3"
                href="#"
                onClick={() => navigate("/login")}
              >
                Already have an Account?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
