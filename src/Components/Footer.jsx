import React from "react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-12 mt-6">
            <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-9 h-9 rounded-lg grid place-items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">🚌</div>
                        <strong>BusGo</strong>
                    </div>
                    <p className="text-gray-400">Your trusted partner for comfortable and affordable bus travel across India.</p>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Quick Links</h3>
                    <div className="space-y-1">
                        <a href="#home" className="hover:text-white block">Home</a>
                        <a href="#routes" className="hover:text-white block">Routes</a>
                        <a href="#about" className="hover:text-white block">About Us</a>
                        <a href="#contact" className="hover:text-white block">Contact</a>
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Support</h3>
                    <div className="space-y-1">
                        <a href="#" className="hover:text-white block">Help Center</a>
                        <a href="#" className="hover:text-white block">Refund Policy</a>
                        <a href="#" className="hover:text-white block">Terms of Service</a>
                        <a href="#" className="hover:text-white block">Privacy Policy</a>
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Contact Info</h3>
                    <div className="text-gray-400 space-y-1 text-sm">
                        <div>Email: support@busgo.com</div>
                        <div>Phone: +91 1800-123-4567</div>
                        <div>Address: Banglore, Karnataka</div>
                    </div>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
                © 2024 BusGo. All rights reserved.
            </div>
        </footer>
    )
};
