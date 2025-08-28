function Stats() {
  const data = [
    { big: "1L+", small: "Happy Customers" },
    { big: "500+", small: "Routes" },
    { big: "24/7", small: "Support" },
    { big: "99%", small: "Satisfaction" },
  ];
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-10 mt-6">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-6">
        {data.map((item, i) => (
          <div key={i}>
            <div className="font-bold text-2xl relative group">
              <span className="transition-all duration-300 group-hover:text-yellow-400 group-hover:shadow-glow">{item.big}</span>
            </div>
            <div className="opacity-90">{item.small}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Stats;
