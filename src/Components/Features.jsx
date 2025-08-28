function Features() {
  const items = [
    { icon: "📞", title: "24/7 Customer Support", desc: "Round the clock assistance for all your travel needs" },
    { icon: "♻️", title: "Easy Refunds", desc: "Quick and hassle-free refund process" },
    { icon: "🛡️", title: "Verified Bus Operators", desc: "Trusted & verified partners only" },
    { icon: "📍", title: "Live Bus Tracking", desc: "Track your bus in real-time" },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">
          Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">BusGo?</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-10">
          We provide the best bus booking experience with premium features and excellent service.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 group">
          {items.map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow text-center transition-transform duration-500 hover:scale-110">
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-lg">{f.title}</h3>
              <p className="text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
