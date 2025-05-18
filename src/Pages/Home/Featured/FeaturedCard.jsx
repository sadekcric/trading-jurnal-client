const FeaturedCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="shadow-lg rounded-md border border-gray-200 pt-5">
      <div className="space-y-5">
        <div>
          <Icon className="mx-auto text-blue-700 text-bold text-4xl" />
        </div>
        <h3 className="text-center text-2xl font-bold text-slate-700">{title}</h3>
        <p className="text-lg text-gray-700 max-w-xs text-center bg-slate-100 px-4 py-6">{description}</p>
      </div>
    </div>
  );
};

export default FeaturedCard;
