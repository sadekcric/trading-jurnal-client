const BannerContent = ({ img, title, subTitle }) => {
  return (
    <section>
      <div className="flex gap-3">
        <div className="flex-1">
          <div className="flex flex-col gap-16  h-full items-start">
            <div className="space-y-10">
              <h1 className="text-6xl leading-snug uppercase max-w-2xl font-bold text-slate-700">{title}</h1>
              <p className="text-slate-700 max-w-2xl text-lg bg-gray-100 p-3 rounded-sm">{subTitle}</p>
            </div>
            <div>
              <button className="bg-blue-700 text-lg text-white py-3 px-5 font-semibold rounded-md">Start Managing Now</button>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img src={img} alt="banner" />
        </div>
      </div>
    </section>
  );
};

export default BannerContent;
