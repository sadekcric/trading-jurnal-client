import { CgProfile } from "react-icons/cg";
import { MdAccountBalanceWallet } from "react-icons/md";
import { LuNotebookText } from "react-icons/lu";

const HowItWorks = () => {
  return (
    <section>
      {/* Title */}
      <div>
        <h2 className="text-4xl font-bold text-slate-700 uppercase bg-slate-100 rounded-md text-center py-5">How It Works</h2>
      </div>

      {/* Section Details */}
      <div className="space-y-5">
        <div className="flex gap-5 items-center mt-10">
          <div className="bg-slate-200 p-2 rounded-sm">
            <CgProfile className="text-2xl font-bold text-[#259E01]" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-700">Sign Up</h3>
            <p className="text-lg text-gray-700">Enter Trading Balance</p>
          </div>
        </div>

        {/* Enter Trading Balance */}
        <div className="flex gap-5 items-center mt-10">
          <div className="bg-slate-200 p-2 rounded-sm">
            <MdAccountBalanceWallet className="text-2xl font-bold text-[#259E01]" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-800">Enter Trading Balance</h3>
            <p className="text-lg text-gray-700">Update Each Trade</p>
          </div>
        </div>

        {/* Update Each Trade */}
        <div className="flex gap-5 items-center mt-10">
          <div className="bg-slate-200 p-2 rounded-sm">
            <LuNotebookText className="text-2xl font-bold text-[#259E01]" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-800">Update Each Trade</h3>
            <p className="text-lg text-gray-700">Track Results on Dashboard</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
