import {
  House,
  ChartCandlestick,
  Anvil,
  UserGroup,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-sage-50 min-h-screen flex flex-col">
      <div className="mt-20">
        <Navbar />
      </div>

      <div className="flex flex-col items-center justify-center mx-10 my-10">
        <div className="flex">
          <a className="mt-1 pr-2" href="#" onClick={() => navigate("/")}>
            <ArrowLeft color="#454d40" />
          </a>
          <h1 className="font-heading font-bold text-text-primary text-2xl mb-4 text-center">
            ABOUT MY GAME
          </h1>
        </div>

        <div className="max-w-2xl text-center">
          <p className="font-body text-text-secondary text-base md:text-lg">
            FarmIndie is an indie Web-based cozy simulation game built for
            peaceful exploration, relaxing routines, and creative expression.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-10 justify-items-center max-w-6xl mx-auto">
        <div className="card card-border bg-base-100 w-full max-w-80 rounded-2xl">
          <div className="card-body">
            <div className="flex items-center justify-center">
              <div className="bg-sage-100 p-2 rounded-md">
                <House />
              </div>
            </div>
            <h2 className="card-title justify-center text-center">
              Decor & Customize
            </h2>
            <p className="text-center">
              Arrange wooden fences, stone pathways, and garden gazebos.
            </p>
          </div>
        </div>

        <div className="card card-border bg-base-100 w-full max-w-80 rounded-2xl">
          <div className="card-body">
            <div className="flex items-center justify-center">
              <div className="bg-sage-100 p-2 rounded-md">
                <ChartCandlestick />
              </div>
            </div>
            <h2 className="card-title justify-center text-center">
              Trade & Sell
            </h2>
            <p className="text-center">
              Sell your harvested crops, exchange crafted goods, and earn coins
              through trading.
            </p>
          </div>
        </div>

        <div className="card card-border bg-base-100 w-full max-w-80 rounded-2xl">
          <div className="card-body">
            <div className="flex items-center justify-center">
              <div className="bg-sage-100 p-2 rounded-md">
                <Anvil />
              </div>
            </div>
            <h2 className="card-title justify-center text-center">Crafting</h2>
            <p className="text-center">
              Turn fresh berries into jams, wheat into bread, and wool into
              yarn.
            </p>
          </div>
        </div>

        <div className="card card-border bg-base-100 w-full max-w-80 rounded-2xl">
          <div className="card-body">
            <div className="flex items-center justify-center">
              <div className="bg-sage-100 p-2 rounded-md">
                <UserGroup />
              </div>
            </div>
            <h2 className="card-title justify-center text-center">
              Cozy Community
            </h2>
            <p className="text-center">
              Visit neighboring player farms, trade rare seeds, and share gifts.
            </p>
          </div>
        </div>
      </div>

      <footer className="footer sm:footer-horizontal bg-sage-500 text-neutral-content items-center p-4 mt-auto">
        <aside className="grid-flow-col items-center">
          <img className="w-11 h-11" src="/bukiran-favicon.png" />
          <p className="font-heading font-bold text-md">
            FarmIndie © {new Date().getFullYear()} - All right reserved
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default About;
