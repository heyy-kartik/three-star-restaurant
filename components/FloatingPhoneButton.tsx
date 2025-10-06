"use client"

import { motion } from "framer-motion"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingPhoneButton() {
  const handleCall = () => {
    window.location.href = "tel:+15551234567"
  }

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={handleCall}
          size="lg"
          className="h-16 w-16 rounded-full shadow-2xl bg-gradient-to-br from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800"
          aria-label="Call restaurant"
        >
          <Phone className="h-7 w-7" />
        </Button>
      </motion.div>
      
      {/* Pulsing ring animation */}
      <motion.div
        className="absolute inset-0 rounded-full bg-orange-500 -z-10"
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
  )
}
