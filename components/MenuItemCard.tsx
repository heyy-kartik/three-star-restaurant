"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, StarHalf } from "lucide-react";
import { MenuItem } from "@/lib/types";
import Image from "next/image";

interface MenuItemCardProps {
  item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  const [showReviews, setShowReviews] = useState(false);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }
    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half"
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />
      );
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }
    return stars;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden  w-[400px] flex flex-col flex-wrap justify-between align-middle transition-shadow">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
          />
          {item.popular && (
            <div className="absolute top-2 right-2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Popular
            </div>
          )}
        </div>

        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>{item.name}</span>
            <span className="text-orange-600 text-xl">${item.price}</span>
          </CardTitle>
          <CardDescription>{item.description}</CardDescription>
        </CardHeader>

        <CardContent className="flex-grow">
          {item.rating && (
            <div className="flex items-center gap-2 ">
              <div className="flex">{renderStars(item.rating)}</div>
              <span className="text-sm text-gray-600">({item.rating})</span>
            </div>
          )}

          {item.reviews && item.reviews.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowReviews(!showReviews)}
              className="p-0 h-auto font-normal text-orange-600 hover:text-orange-700"
            >
              {showReviews ? "Hide" : "Show"} Reviews ({item.reviews.length})
            </Button>
          )}

          {showReviews && item.reviews && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className=" "
            >
              {item.reviews.map((review) => (
                <div
                  key={review.id}
                  className="border-l-2 border-orange-200 pl-3 py-2"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm">
                      {review.author}
                    </span>
                    <div className="flex">{renderStars(review.rating)}</div>
                  </div>
                  <p className="text-sm text-gray-600">{review.comment}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </motion.div>
          )}
        </CardContent>

        <CardFooter></CardFooter>
      </Card>
    </motion.div>
  );
}
