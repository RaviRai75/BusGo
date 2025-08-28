import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Shubham Choudhary",
      city: "Bihar",
      rating: 5,
      text: "Amazing experience! The bus was clean, comfortable, and the journey was smooth. Highly recommend!",
      avatar: "https://static.vecteezy.com/system/resources/previews/028/794/707/large_2x/cartoon-cute-school-boy-photo.jpg",
    },
    {
      name: "Rahul Kumar chourasiya",
      city: "Kolkata",
      rating: 5,
      text: "Best bus booking platform I’ve used. Easy booking process and great customer support.",
      avatar: "https://tse3.mm.bing.net/th/id/OIP.sLfFlo9JqobJCmSeGm-ALgHaEJ?pid=ImgDet&w=474&h=265&rs=1&o=7&rm=3",
    },
    {
      name: "Anjali Patel",
      city: "Bangalore",
      rating: 4,
      text: "Very convenient and reliable service. The live tracking feature is really helpful.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          What Our <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Customers</span> Say
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Real experiences from our satisfied customers across India.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-yellow-500 mb-2">
                {"★".repeat(t.rating) + "☆".repeat(5 - t.rating)}
              </div>
              <p className="text-gray-600 mb-4">{t.text}</p>
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-2 border-4 border-blue-100 object-cover"
              />
              <div className="font-semibold">{t.name}</div>
              <div className="text-gray-500 text-sm">{t.city}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}