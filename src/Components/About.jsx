import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Our Story
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          The inspiring journey behind BusGo and how it started changing bus travel in India.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1661963542752-9a8a1d72fb28?w=1000&auto=format&fit=crop&q=60"
            alt="Our Journey"
            className="rounded-lg shadow-lg"
          />
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">How BusGo Began</h3>
            <p className="text-gray-600">
              Back in 2023, a group of passionate travelers faced a frustrating situation—they missed an important bus due to lack of real-time information and poor booking systems. That moment sparked an idea to revolutionize bus travel in India.
            </p>
            <p className="text-gray-600">
              After months of brainstorming, coding, and connecting with travel operators, <strong>BusGo</strong> was born. It was built on a simple mission: to make bus travel more transparent, accessible, and comfortable.
            </p>
            <p className="text-gray-600">
              Today, BusGo connects thousands of passengers with verified buses across India. We’re proud to make travel smoother, safer, and smarter every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

