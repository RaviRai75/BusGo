export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white mt-6">
      <div className="container mx-auto px-4 text-center space-y-4">
        <div className="text-4xl">⚡</div>
        <h2 className="text-3xl font-bold">Download Our Mobile App</h2>
        <p className="opacity-90">
          Get the best bus booking experience on your mobile device with our feature‑rich app.
        </p>
        <div className="flex justify-center gap-4 flex-wrap mt-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-105"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-14"
            />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-105"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="h-14"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
