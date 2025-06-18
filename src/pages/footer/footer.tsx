import { Clock, Mail, MapPin, Phone } from "lucide-react";

const FooterPage = () => {
  return (
    <footer className="bg-gray-950 px-16 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 pb-10 gap-8 mb-8">
          <div>
            <h5 className="text-xl font-bold mb-4 gap-3 flex items-center">
              <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                <img src="/images/k2.png" alt="" />
              </div>
              KATIYA HOUSE
            </h5>
            <p className="text-gray-400">
              Nepal's premier fine dining destination, where culinary innovation
              meets Himalayan elegance.
            </p>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-4 text-gray-200">
              Quick Links
            </h5>
            <ul className="flex flex-col gap-1">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Events
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-4 text-gray-200">Contact</h5>
            <ul className="space-y-2 text-gray-400">
              <li className="flex gap-2  items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                Prime Avenue, Kathmandu, Nepal
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="w-5 h-5 mr-2" />
                +977-1-4445566
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="w-5 h-5 mr-2" />
                katiyahouse@gmail.com
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-4 text-gray-200">
              Opening Hours
            </h5>
            <ul className="space-y-2 text-gray-400">
              <li className="flex gap-2 items-center">
                <Clock className="w-5 h-5 mr-2" />
                Daily: 10:00 AM - 10:00 PM
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2025 Katiya House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
