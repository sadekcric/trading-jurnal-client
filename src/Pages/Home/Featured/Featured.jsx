import FeaturedCard from "./FeaturedCard";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { FiAlertTriangle } from "react-icons/fi";
import { TbReportSearch } from "react-icons/tb";
import { BsJournalText } from "react-icons/bs";

const Featured = () => {
  return (
    <section className="my-24 space-y-10">
      {/* Title */}
      <div>
        <h2 className="text-4xl font-bold text-slate-700 uppercase bg-slate-100 rounded-md text-center py-5">Features</h2>
      </div>

      <div className="flex gap-6 justify-between items-center">
        <div>
          <FeaturedCard
            icon={PiCurrencyDollarBold}
            title={"Trading Budget"}
            description={"Set Your Trading Budget to manage your Capital Effectly"}
          />
        </div>
        <div>
          <FeaturedCard icon={FiAlertTriangle} title={"Risk Calculation"} description={"Calculate risk per trade based on your strategy"} />
        </div>
        <div>
          <FeaturedCard icon={TbReportSearch} title={"Reports"} description={"View Daily, Weekly and Monthly Trading Report"} />
        </div>
        <div>
          <FeaturedCard icon={BsJournalText} title={"Journal Feature"} description={"Keep a Trading journal to document your Trade"} />
        </div>
      </div>
    </section>
  );
};

export default Featured;
