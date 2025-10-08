"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import MenuItemCard from "./MenuItemCard";
import Searchbar from "./Searchbar";
import { MenuItem, MenuCategory } from "@/lib/types";
import { Loader2 } from "lucide-react";
import { sampleMenuItems } from "@/lib/data";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
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
  }, [selectedCategory, searchQuery, allMenuItems]); // eslint-disable-line react-hooks/exhaustive-deps

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
    let filtered = allMenuItems;

    // Filter by category first
    if (selectedCategory !== "All") {
      filtered = filtered.filter((item) => {
        if (Array.isArray(item.category)) {
          return item.category.some((cat) => cat.trim() === selectedCategory);
        } else {
          return item.category.trim() === selectedCategory;
        }
      });
    }

    // Then filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter((item) => {
        // Search in name
        const nameMatch = Array.isArray(item.name)
          ? item.name.some((name) => name.toLowerCase().includes(query))
          : item.name.toLowerCase().includes(query);

        // Search in description
        const descriptionMatch = item.description.toLowerCase().includes(query);

        return nameMatch || descriptionMatch;
      });
    }

    setFilteredItems(filtered);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
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
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Discover our carefully crafted dishes, made with the finest
            ingredients
          </p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <Searchbar
              onSearchChange={handleSearchChange}
              searchValue={searchQuery}
              placeholder="Search for dishes, ingredients, or cuisines..."
            />
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
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

        {/* Results Counter */}
        {!loading && (searchQuery || selectedCategory !== "All") && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-6"
          >
            <p className="text-gray-600">
              {filteredItems.length} item{filteredItems.length !== 1 ? "s" : ""}{" "}
              found
              {searchQuery && ` for "${searchQuery}"`}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
            {(searchQuery || selectedCategory !== "All") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="text-orange-600 hover:text-orange-700 text-sm mt-1 underline"
              >
                Clear filters
              </button>
            )}
          </motion.div>
        )}

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
            <div className="max-w-md mx-auto">
              <p className="text-xl text-gray-500 mb-4">
                {searchQuery
                  ? `No items found matching "${searchQuery}"`
                  : selectedCategory !== "All"
                  ? `No items found in ${selectedCategory} category`
                  : "No items found"}
              </p>
              {searchQuery && (
                <p className="text-gray-400 mb-4">
                  Try searching for different keywords or browse our categories
                </p>
              )}
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="text-orange-600 hover:text-orange-700 underline"
              >
                View all items
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
