"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Offer } from "@/lib/types";
import Image from "next/image";
import { Tag, Clock } from "lucide-react";

export default function Offers() {
  const [offers, setOffers] = useState<Offer[]>([]);

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    try {
      const response = await fetch("/api/offers");
      const data = await response.json();
      setOffers(data);
    } catch (error) {
      console.error("Error fetching offers:", error);
    }
  };

  return (
    <section
      id="offers"
      className="py-20 bg-gradient-to-br from-orange-50 to-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Special Offers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don&apos;t miss out on our exclusive deals and seasonal promotions
          </p>
        </motion.div>

        {/* Sample Image with Heading "10" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <Card className="max-w-md overflow-hidden  hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <Image
                src="/carosual-1.jpg"
                alt="Special Offer"
                width={400}
                height={200}
                className="object-cover w-full h-64"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-orange-600 text-white font-bold text-lg px-3 py-1">
                  10% OFF
                </Badge>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Special Offer
              </CardTitle>
              <CardDescription className="text-gray-600">
                Amazing discount on our signature dishes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>Valid until November 30, 2025</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Tag className="w-4 h-4 text-orange-600" />
                <span className="font-semibold text-orange-600">10% OFF</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Existing Offers Grid */}
      </div>
    </section>
  );
}
