"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width={60} height={60} viewBox={0 0 60 60} xmlns={http://www.w3.org/2000/svg}%3E%3Cg  bg-repeat"></div>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-orange-400">
              3 Star Restaurant
            </h3>
            <p className="text-gray-300 mb-4">
              Experience exceptional cuisine crafted with passion and served
              with excellence. We&apos;re committed to providing unforgettable
              dining experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-orange-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#menu"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#offers"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Special Offers
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Location
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-orange-400">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+919168377416</p>
                  <a
                    href="tel:+919168377416"
                    className="text-sm text-orange-400 hover:underline"
                  >
                    Call Now
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <a
                  href="mailto:info@threestar.com"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  info@threestar.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  Hotel 3 star, Sinhgad Institute Rd
                  <br />
                  Pune, Maharashtra 411041
                </p>
              </li>
            </ul>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-orange-400">
              Opening Hours
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    <span className="font-semibold">Monday - Sunday:</span>
                  </p>
                  <p className="text-gray-300">6:00pm to 5:00am</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    <span className="font-semibold">Saturday - Sunday:</span>
                  </p>
                  <p className="text-gray-300">6:00pm to 5:00am</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-700 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-400">
            © {currentYear} 3 Star Restaurant. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Designed with ❤️ Of Kartik Jagdale
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
