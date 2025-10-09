// components/FloatingPhoneButton.jsx
"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
// NOTE: I am assuming you don't need the 'Phone' from 'lucide-react'
// and the custom 'Button' component if you are using a standard HTML structure.

export default function FloatingPhoneButton() {
  const phoneNumber = "+919168377416"; // Define the number once

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      // Show the button after the page loads (1 second delay)
      transition={{ delay: 1, duration: 0.3 }}
    >
      {/* The core logic: Wrap the entire clickable area in an <a> tag
        using the 'tel:' protocol. This is the most reliable way to initiate a call.
      */}
      <a
        href={`tel:${phoneNumber}`}
        aria-label={`Call us at ${phoneNumber}`}
        // Optional: Ensure the link doesn't get a default text underline
        style={{ textDecoration: "none" }}
      >
        <motion.button
          // Use motion.button instead of a custom component for Framer Motion
          // properties to apply directly to the HTML button element.
          className="h-16 w-16 rounded-full shadow-2xl bg-gradient-to-br from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-orange-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          // Ensure the button acts like a button visually but relies on the <a> for action
        >
          {/* Phone Icon in White */}
          <FaPhoneAlt size={24} color="white" />
        </motion.button>
      </a>

      {/* Pulsing ring animation */}
      <motion.div
        className="absolute inset-0 rounded-full bg-orange-500 -z-10"
        // Ensure the ring animation covers the button area
        style={{ top: "0", bottom: "0", left: "0", right: "0" }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
