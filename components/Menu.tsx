"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import MenuItemCard from "./MenuItemCard";
import { MenuItem, MenuCategory } from "@/lib/types";
import { Loader2 } from "lucide-react";
import { sampleMenuItems } from "@/lib/data";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>("All");
  const [allMenuItems, setAllMenuItems] = useState<MenuItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([]);
  const [availableCategories, setAvailableCategories] = useState<
    MenuCategory[]
  >(["All"]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMenuItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    filterItems();
  }, [selectedCategory, allMenuItems]); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchMenuItems = async () => {
    setLoading(true);
    try {
      // Try to fetch from API first, fallback to sample data
      try {
        const response = await fetch("/api/menu");
        const data = await response.json();
        setAllMenuItems(data);
        generateCategories(data);
      } catch (apiError) {
        // Fallback to sample data if API fails
        console.log("API not available, using sample data");
        setAllMenuItems(sampleMenuItems);
        generateCategories(sampleMenuItems);
      }
    } catch (error) {
      console.error("Error fetching menu items:", error);
      // Use sample data as ultimate fallback
      setAllMenuItems(sampleMenuItems);
      generateCategories(sampleMenuItems);
    } finally {
      setLoading(false);
    }
  };

  const generateCategories = (items: MenuItem[]) => {
    const categorySet = new Set<string>(["All"]);

    items.forEach((item) => {
      if (Array.isArray(item.category)) {
        item.category.forEach((cat) => categorySet.add(cat.trim()));
      } else {
        categorySet.add(item.category.trim());
      }
    });

    setAvailableCategories(Array.from(categorySet) as MenuCategory[]);
  };

  const filterItems = () => {
    if (selectedCategory === "All") {
      setFilteredItems(allMenuItems);
      return;
    }

    const filtered = allMenuItems.filter((item) => {
      if (Array.isArray(item.category)) {
        return item.category.some((cat) => cat.trim() === selectedCategory);
      } else {
        return item.category.trim() === selectedCategory;
      }
    });

    setFilteredItems(filtered);
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted dishes, made with the finest
            ingredients
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {availableCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="min-w-[120px]"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-orange-600" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <MenuItemCard key={index} item={item} />
            ))}
          </div>
        )}

        {!loading && filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">
              No items found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
