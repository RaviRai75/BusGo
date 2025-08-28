function RoutesSection() {
  const routes = [
    {
      img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
      title: "Delhi → Manali",
      price: "₹1,200",
      tag: "12 hrs",
      offer: "15% OFF"
    },
    {
      img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
      title: "Mumbai → Goa",
      price: "₹800",
      tag: "8 hrs",
      offer: "20% OFF"
    },
    {
      img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Banglore → Chennai",
      price: "₹600",
      tag: "6 hrs",
      offer: "10% OFF"
    },
    {
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Kolkata → Darjeeling",
      price: "₹900",
      tag: "10 hrs",
      offer: "25% OFF"
    }
  ];

  return (
    <section id="routes" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Popular{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Routes
          </span>
        </h2>
        <p className="text-gray-500 text-center mb-10">
          Discover the most popular bus routes with competitive prices.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {routes.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative h-40">
                <img
                  src={r.img}
                  alt={r.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {r.offer}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold">{r.title}</h3>
                <div className="flex justify-between items-center my-2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
                    {r.price}
                  </span>
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">
                    {r.tag}
                  </span>
                </div>
                <button className="w-full border rounded-lg py-2 font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoutesSection;
