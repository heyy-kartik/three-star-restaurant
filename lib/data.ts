import { MenuItem, Offer } from "./types"

export const sampleMenuItems: MenuItem[] = [
  // Appetizers
  {
    name: "Chai",
    description: "Toasted bread topped with fresh tomatoes, basil, and mozzarella",
    category: "Snack",
    price: 15,
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=800&q=80",
    popular: true,
    rating: 4.5,
    reviews: [
      {
        id: "1",
        author: "Chaitanya Karmalkar",
        rating: 5,
        comment: "Absolutely delicious! Fresh ingredients and perfect Swad.",
        date: "2025-01-15"
      },
      {
        id: "2",
        author: "Rohit shelke",
        rating: 4,
        comment: "Great starter, would order again!",
        date: "2025-01-10"
      }
    ]
  },
  {
    name: "Coffee",
    description: "Rich and aromatic coffee brewed to perfection",
    category: "Snack",
    price: 25,
    image: "https://images.unsplash.com/photo-1511920170033-4b8c8c8c8c8c?w=800&q=80",
    rating: 4.5,
    reviews: [
      {
        id: "3",
        author: "Jayesh Badgujar",
        rating: 4,
        comment: "Classic Caesar done right.",
        date: "2024-01-12"
      }
    ]
  },
  
  {
    name: "Cold Coffee",
    description: "Chilled coffee blended with ice and milk",
    category: "Snack",
    price: 29,
    image: "https://images.unsplash.com/photo-1619366044214-29704f5e9d74?w=800&q=80",
    rating: 4.7,
  },
  {
    name: "Tandori Burger",
    description: "Chilled coffee blended with ice and milk",
    category: "Snack",
    price: 59,
    image: "https://images.unsplash.com/photo-1619366044214-29704f5e9d74?w=800&q=80",
    rating: 4.7,
  },
  {
    name: "Cheese Burger",
    description: "Chilled coffee blended with ice and milk",
    category: "Snack",
    price: 70,
    image: "https://images.unsplash.com/photo-1619366044214-29704f5e9d74?w=800&q=80",
    rating: 4.7,
  },
  {
    name: "Aloo Tikki Burger",
    description: "Chilled coffee blended with ice and milk",
    category: "Snack",
    price: 59,
    image: "https://images.unsplash.com/photo-1619366044214-29704f5e9d74?w=800&q=80",
    rating: 4.7,
  },
  //maggi 
   {
    name: "Plain Maggi",
    description: "Chilled coffee blended with ice and milk",
    category: "Maggi",
    price: 39,
    image: "https://images.unsplash.com/photo-1619366044214-29704f5e9d74?w=800&q=80",
    rating: 4.7,
  },
   {
    name: "Masala Maggi / Peri Peri maggi",
    description: "Chilled coffee blended with ice and milk",
    category: "Maggi",
    price: 49,
    image: "https://images.unsplash.com/photo-1619366044214-29704f5e9d74?w=800&q=80",
    rating: 4.7,
  },
   {
    name: "Veggy Maggi",
    description: "Chilled coffee blended with ice and milk",
    category: "Maggi",
    price: 59,
    image: "https://images.unsplash.com/photo-1619366044214-29704f5e9d74?w=800&q=80",
    rating: 4.7,
  },
   {
    name: "Cheese Maggi",
    description: "Chilled coffee blended with ice and milk",
    category: "Maggi",
    price: 59,
    image: "https://images.unsplash.com/photo-1619366044214-29704f5e9d74?w=800&q=80",
    rating: 4.7,
  },
   {
    name: "Tadka Maggi",
    description: "Chilled coffee blended with ice and milk",
    category: "Maggi",
    price: 69,
    image: "https://images.unsplash.com/photo-1619366044214-29704f5e9d74?w=800&q=80",
    rating: 4.7,
  },
   {
    name: "Anda tadka maggi",
    description: "Chilled coffee blended with ice and milk",
    category: "Maggi",
    price: 89,
    image: "https://images.unsplash.com/photo-1619366044214-29704f5e9d74?w=800&q=80",
    rating: 4.7,
  },
 
  // Main Course
  {
    name: "Pohe",
    description: "Atlantic salmon grilled to perfection with lemon butter sauce",
    category: "Snack",
    price: 25,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80",
    popular: true,
    rating: 4.8,
    reviews: [
      {
        id: "4",
        author: "Kartik jagdale",
        rating: 5,
        comment: "Perfectly cooked and seasoned.",
        date: "2024-01-18"
      },
      {
        id: "5",
        author: "Siddhant Patil",
        rating: 5,
        comment: "Exceptional quality and presentation.",
        date: "2024-01-14"
      }
    ]
  },
  {
    name: "Plain Omlette",
    description: "12oz premium ribeye with garlic mashed potatoes and vegetables",
    category: ["Main Course", "Non Veg"],
    price: 39,
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80",
    popular: true,
    rating: 4.9,
    reviews: [
      {
        id: "6",
        author: "Vaibhav Jadhav",
        rating: 5,
        comment: "Melt-in-your-mouth tender. Worth every penny!",
        date: "2024-01-20"
      }
    ]
  },{
    name: "Veg Shezwan Rice + Dry Manchurain +1 Coke",
    description: "12oz premium ribeye with garlic mashed potatoes and vegetables",
    category: ["Main Course", "Non Veg" , "Combos"],
    price: 169,
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80",
    popular: true,
    rating: 4.9,
    reviews: [
      {
        id: "6",
        author: "Vaibhav Jadhav",
        rating: 5,
        comment: "Melt-in-your-mouth tender. Worth every penny!",
        date: "2024-01-20"
      }
    ]
  },
  {
    name: "Burger + Fries + Coke",
    description: "12oz premium ribeye with garlic mashed potatoes and vegetables",
    category: ["Main Course", "Non Veg" , "Combos"],
    price: 135,
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80",
    popular: true,
    rating: 4.9,
    reviews: [
      {
        id: "6",
        author: "Vaibhav Jadhav",
        rating: 5,
        comment: "Melt-in-your-mouth tender. Worth every penny!",
        date: "2024-01-20"
      }
    ]
  },
  {
    name: "Chicken Shezwan Rice + Chicken Chilli + Coke",
    description: "12oz premium ribeye with garlic mashed potatoes and vegetables",
    category: ["Main Course", "Non Veg" , "Combos"],
    price: 235,
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80",
    popular: true,
    rating: 4.9,
    reviews: [
      {
        id: "6",
        author: "Vaibhav Jadhav",
        rating: 5,
        comment: "Melt-in-your-mouth tender. Worth every penny!",
        date: "2024-01-20"
      }
    ]
  },
  {
    name: "Anda Bhurgi Pav",
    description: "Spicy scrambled eggs served with buttered pav",
    category: ["Main Course", "Non Veg"],
    price:59,
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80",
    rating: 4.6,
    reviews: [
      {
        id: "7",
        author: "Vishal gaikwad",
        rating: 5,
        comment: "Authentic Italian taste. So creamy and delicious!",
        date: "2024-01-16"
      }
    ]
  },
   {
    name: "Anda Bread ",
    description: "Spicy scrambled eggs served with buttered pav",
    category: ["Non Veg"],
    price:49,
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80",
    rating: 4.2,
    reviews: [
      {
        id: "7",
        author: "Vishal gaikwad",
        rating: 5,
        comment: "Authentic Italian taste. So creamy and delicious!",
        date: "2024-01-16"
      }
    ]
  },
  // Snack 
  {
    name: "Fries Salted",
    description: "Crispy French fries seasoned with salt",
    category: "Snack",
    price: 79,
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80",
    rating: 4.6,
    reviews: [
      {
        id: "7",
        author: "Vishal gaikwad",
        rating: 5,
        comment: "Authentic Italian taste. So creamy and delicious!",
        date: "2024-01-16"
      }
    ]
  },
  {
    name: "Peri peri Fries",
    description: "Spicy scrambled eggs served with buttered pav",
    category: "Snack",
    price: 79,
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80",
    rating: 4.6,
    reviews: [
      {
        id: "7",
        author: "Vishal gaikwad",
        rating: 5,
        comment: "Authentic Italian taste. So creamy and delicious!",
        date: "2024-01-16"
      }
    ]
  },
  // Veg + Snack
  {
    name: "VEG Sandwich ",
    description: "Spicy scrambled eggs served with buttered pav",
    category: ["Snack","Veg"],
    price: 49,
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80",
    rating: 4.6,
    reviews: [
      {
        id: "7",
        author: "Vishal gaikwad",
        rating: 5,
        comment: "Authentic Italian taste. So creamy and delicious!",
        date: "2024-01-16"
      }
    ]
  },
   {
    name: "VEG Manchurian (Dry)  ",
    description: "Spicy Manchurian balls served with schezwan sauce",
    category: ["Snack","Veg"],
    price: 100 ,
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80",
    rating: 4.6,
    reviews: [
      {
        id: "7",
        author: "Vishal gaikwad",
        rating: 5,
        comment: "Authentic Italian taste. So creamy and delicious!",
        date: "2024-01-16"
      }
    ]
  },
   {
    name: "VEG Manchurain Gravy  ",
    description: "Spicy scrambled eggs served with buttered pav",
    category: ["Snack","Veg"],
    price: 110 ,
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80",
    rating: 4.6,
    reviews: [
      {
        id: "7",
        author: "Vishal gaikwad",
        rating: 5,
        comment: "Authentic Italian taste. So creamy and delicious!",
        date: "2024-01-16"
      }
    ]
  },
   {
    name: "VEG Paneer Chilli  ",
    description: "Spicy scrambled eggs served with buttered pav",
    category: ["Snack","Veg"],
    price: 150 ,
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80",
    rating: 4.6,
    reviews: [
      {
        id: "7",
        author: "Vishal gaikwad",
        rating: 5,
        comment: "Authentic Italian taste. So creamy and delicious!",
        date: "2024-01-16"
      }
    ]
  },
   {
    name: "VEG Paneer Crispy  ",
    description: "Spicy scrambled eggs served with buttered pav",
    category: ["Snack","Veg"],
    price: 150,
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80",
    rating: 4.6,
    reviews: [
      {
        id: "7",
        author: "Vishal",
        rating: 5,
        comment: "Authentic Italian taste. So creamy and delicious!",
        date: "2024-01-16"
      }
    ]
  },

  {
    name: "Veg Grilled Sandwich",
    description: "Grilled sandwich with mixed vegetables and cheese",
    category: ["Snack","Veg"],
    price: 69,
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80",
    rating: 4.6,
    reviews: [
      {
        id: "7",
        author: "Vishal gaikwad",
        rating: 5,
        comment: "Authentic Italian taste. So creamy and delicious!",
        date: "2024-01-16"
      }
    ]
  },
  {
    name: "VEG Triple Rice",
    description: "Breaded chicken breast with marinara sauce and melted cheese",
    category: ["Main Course","Veg"],
    price: 89,
    image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&q=80",
    rating: 4.4,
  },
   {
    name: "VEG Singapuri Rice",
    description: "Breaded chicken breast with marinara sauce and melted cheese",
    category: ["Main Course","Veg"],
    price: 89,
    image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&q=80",
    rating: 4.4,
  },
   
   {
    name: "VEG Manchurian Rice",
    description: "Breaded chicken breast with marinara sauce and melted cheese",
    category: ["Main Course","Veg"],
    price: 22.99,
    image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&q=80",
    rating: 4.4,
  },
  // veg + MAIN COURSE 
  {
    name: "Veg Shejwan Rice",
    description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone",
    category: ["Main Course", "Veg"],
    price: 9.99,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
    popular: true,
    rating: 4.7,
    reviews: [
      {
        id: "8",
        author: "Harshraj Mourya ",
        rating: 5,
        comment: "Heavenly! The perfect balance of coffee and sweetness.",
        date: "2024-01-19"
      }
    ]
  },
  {
    name: "Veg Fried Rice",
    description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
    category: ["Main Course", "Veg"],
    price: 11.99,
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80",
    rating: 4.8,
    reviews: [
      {
        id: "9",
        author: "Prasad Revgade",
        rating: 5,
        comment: "Decadent and rich. A chocolate lover's dream!",
        date: "2024-01-17"
      }
    ]
  },
  {
    name: "Veg Noodles",
    description: "Creamy vanilla custard with caramelized sugar topping",
    category: ["Main Course","Veg"],
    price: 10.99,
    image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=800&q=80",
    rating: 4.6,
  },
  // Beverages
  {
    name: "Coke / Pepsi",
    description: "House-made lemonade with fresh lemons and mint",
    category: "Snack",
    price: 20,
    image: "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9f?w=800&q=80",
    rating: 4.3,
  },
  {
    name: "Chicken Noodles",
    description: "Rich Italian espresso made from premium coffee beans",
    category: "Non Veg ",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&q=80",
    rating: 4.5,
  },
   {
    name: "Chicken Lollipop",
    description: "Rich Italian espresso made from premium coffee beans",
    category: "Non Veg ",
    price: "100 / 170 ",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&q=80",
    rating: 4.5,
  },
   {
    name: "Chicken 65",
    description: "Rich Italian espresso made from premium coffee beans",
    category: "Non Veg ",
    price: 149 ,
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&q=80",
    rating: 4.5,
  },
   {
    name: "Chicken Chilli Dry",
    description: "Rich Italian espresso made from premium coffee beans",
    category: "Non Veg ",
    price: 149 ,
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&q=80",
    rating: 4.5,
  },
   {
    name: "Chicken Crispy ",
    description: "Rich Italian espresso made from premium coffee beans",
    category: "Non Veg ",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&q=80",
    rating: 4.5,
  },
  
  {
    name: "Chicken Shezwan Rice",
    description: "Rich Italian espresso made from premium coffee beans",
    category: "Non Veg ",
    price: "110 / 160" ,
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&q=80",
    rating: 4.5,
  },
  {
    name: "Chicken Tripple Rice",
    description: "Rich Italian espresso made from premium coffee beans",
    category: "Non Veg ",
    price: "130 / 160",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&q=80",
    rating: 4.5,
  },
  {
    name: "Chicken Singapuri Rice",
    description: "Rich Italian espresso made from premium coffee beans",
    category: "Non Veg ",
    price: "110 / 160",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&q=80",
    rating: 4.5,
  },
  {
    name: "Chicken Fries Rice",
    description: "Rich Italian espresso made from premium coffee beans",
    category: "Non Veg ",
    price: "100 / 150",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&q=80",
    rating: 4.5,
  },
  
 
]

export const sampleOffers: Offer[] = [
  {
    id: "1",
    title: "Weekend Special",
    description: "Get 20% off on all main courses during weekends",
    discount: "20% OFF",
    validUntil: "2024-12-31",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
  },
  {
    id: "2",
    title: "Happy Hour",
    description: "Buy one beverage, get one free from 5 PM to 7 PM",
    discount: "BOGO",
    validUntil: "2024-12-31",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80"
  },
  {
    id: "3",
    title: "Lunch Combo",
    description: "Special lunch combo with appetizer, main course, and drink",
    discount: "$15.99",
    validUntil: "2024-12-31",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
  },
]
