const LiveDashboard = () => {
  return (
    <section className="space-y-10 mb-24">
      <div>
        <h2 className="text-4xl font-bold text-slate-700 uppercase bg-slate-100 rounded-md text-center py-5">Live Dashboard Preview</h2>
      </div>

      <div className="flex gap-10">
        <div className="flex items-center justify-center bg-slate-100 w-96 py-6 rounded-md shadow-md">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-700">Balance</h3>
            <h4 className="text-2xl font-semibold text-slate-700">Profit/Loss</h4>
            <h4 className="text-2xl font-semibold text-slate-700">Journal</h4>
          </div>
        </div>

        <div className="flex-1 border-2 rounded-md shadow-md px-6 py-4">
          <div className="flex gap-24 border-b-2 py-4">
            <h3 className="flex-1">
              <span className="text-2xl font-bold text-slate-700">Balance:</span>{" "}
              <span className="text-2xl font-semibold ml-10 text-[#259E01]">$950</span>
            </h3>
            <h3 className="text-2xl flex-1 text-center font-bold text-slate-700">Journal</h3>
          </div>

          <div className="flex gap-24  py-4">
            <h3 className="flex-1">
              <span className="text-2xl font-bold text-slate-700">Profit/Loss:</span>{" "}
              <span className="text-2xl font-semibold ml-4 text-[#ff0000]">-50</span>
            </h3>
            <h3 className="text-xl flex-1 text-center  text-slate-700">FOMO</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDashboard;
