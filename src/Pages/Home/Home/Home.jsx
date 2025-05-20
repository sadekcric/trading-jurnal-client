import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import HowItWorks from "../HowItWorks/HowItWorks";
import LiveDashboard from "../LiveDashboard/LiveDashboard";
import Dashboard from "./../../Dashboard/Dashboard";

const Home = () => {
  let signedIn = true;
  return signedIn ? (
    <>
      <Dashboard />
    </>
  ) : (
    <>
      <Banner />
      <Featured />
      <LiveDashboard />
      <HowItWorks />
    </>
  );
};

export default Home;
