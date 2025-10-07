"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-orange-400">
              Three Star Restaurant
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
                  <p className="text-gray-300">+919766646790</p>
                  <a
                    href="tel:+919766646790"
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

          {/* Opening Hours & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-orange-400">
              Opening Hours
            </h3>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-300">
                <span className="font-semibold">Monday - Friday:</span> 11:00 AM
                - 10:00 PM
              </li>
              <li className="text-gray-300">
                <span className="font-semibold">Saturday - Sunday:</span> 10:00
                AM - 11:00 PM
              </li>
            </ul>

            <h4 className="text-lg font-semibold mb-3 text-orange-400">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-2 rounded-full hover:bg-orange-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-2 rounded-full hover:bg-orange-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-2 rounded-full hover:bg-orange-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
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
            © {currentYear} Three Star Restaurant. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Designed with ❤️ for food lovers
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
