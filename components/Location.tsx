"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Location() {
  const restaurantLocation = {
    lat: 18.464933970400068,
    lng: 73.83564001450652,
    address: "Hotel 3 star, Sinhgad Institute Rd, Pune, Maharashtra 411041",
  };

  const openInMaps = () => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${restaurantLocation.lat},${restaurantLocation.lng}`;
    window.open(mapsUrl, "_blank");
  };

  const getDirections = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${position.coords.latitude},${position.coords.longitude}&destination=${restaurantLocation.lat},${restaurantLocation.lng}`;
          window.open(directionsUrl, "_blank");
        },
        () => {
          // Fallback if geolocation fails
          openInMaps();
        }
      );
    } else {
      openInMaps();
    }
  };

  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Find Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visit us and experience exceptional dining in a beautiful location
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-lg shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Our Address</h3>
                  <p className="text-lg text-gray-700">
                    {restaurantLocation.address}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <Button onClick={getDirections} className="w-full">
                  <Navigation className="w-5 h-5 mr-2" />
                  Get Directions
                </Button>

                <Button onClick={openInMaps} className="w-full">
                  <MapPin className="w-5 h-5 mr-2" />
                  View on Map
                </Button>
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg border border-orange-200">
                <h4 className="font-semibold mb-2 text-orange-800">
                  Quick Info:
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Free parking available</li>
                  <li>• Wheelchair accessible</li>
                  <li>• Public transportation nearby</li>
                  <li>• Outdoor seating available</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-[500px] rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215486851467!2d${restaurantLocation.lng}!3d${restaurantLocation.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzI4LjgiTiA3M8KwNTknMDcuOCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
