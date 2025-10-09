import { MenuItem, Offer } from "./types"

export const sampleMenuItems: MenuItem[] = [
  // Appetizers
  {
    name: "Chai",
    description: "Traditional Indian spiced tea brewed to perfection",
    category: "Snack",
    price: 15,
    image: "/chai.jpeg" , 
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
    image: "/hot-coffeee.jpg",
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
    image: "/cold-coffeee.jpg",
    rating: 4.7,
  },
  {
    name: "Tandori Burger",
    description: "Spicy tandoori flavored burger with fresh vegetables",
    category: "Snack",
    price: 59,
    image: "/tanduri-burger..jpg",
    rating: 4.7,
  },
  {
    name: "Cheese Burger",
    description: "Juicy burger with melted cheese and fresh toppings",
    category: "Snack",
    price: 70,
    image: "/cheese-burger.avif",
    rating: 4.7,
  },
  {
    name: "Aloo Tikki Burger",
    description: "Crispy potato patty burger with spicy chutneys",
    category: "Snack",
    price: 59,
    image: "/aloo-tikki-burger.jpeg.jpg",
    rating: 4.7,
  },
  //maggi 
   {
    name: "Plain Maggi",
    description: "Simple and delicious instant noodles",
    category: "Maggi",
    price: 39,
    image: "/palain-maggie.jpg",
    rating: 4.7,
  },
   {
    name: "Masala Maggi / Peri Peri maggi",
    description: "Spicy masala or peri peri flavored instant noodles",
    category: "Maggi",
    price: 49,
    image: "/masala maggie.jpeg.jpg",
    rating: 4.7,
  },
   {
    name: "Veggy Maggi",
    description: "Maggi loaded with fresh vegetables",
    category: "Maggi",
    price: 59,
    image: "/veggy mahhie.jpeg.jpg",
    rating: 4.7,
  },
   {
    name: "Cheese Maggi",
    description: "Creamy cheese maggi with extra richness",
    category: "Maggi",
    price: 59,
    image: "/cheese-maggie.jpg",
    rating: 4.7,
  },
   {
    name: "Tadka Maggi",
    description: "Maggi with special Indian tadka and spices",
    category: "Maggi",
    price: 69,
    image: "/tadka-maggie.jpg",
    rating: 4.7,
  },
   {
    name: "Anda tadka maggi",
    description: "Maggi with egg tadka for extra protein",
    category: "Maggi",
    price: 89,
    image: "/anda tadka maggie.jpeg.jpg",
    rating: 4.7,
  },
 
  // Main Course
  {
    name: "Pohe",
    description: "Traditional flattened rice dish with spices and peanuts",
    category: "Snack",
    price: 25,
    image: "/pohe.jpg",
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
    description: "Simple and fluffy plain omelette",
    category: ["Main Course", "Non Veg"],
    price: 39,
    image: "/lain omlette.webp",
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
    description: "Complete combo meal with spicy rice, manchurian and cold drink",
    category: ["Main Course", "Veg" , "Combos"],
    price: 169,
    image: "/veg-shezwan-rice.jpg",
    popular: true,
    rating: 4.9,
    reviews: [
      {
        id: "6",
        author: "Vaibhav Jadhav",
        rating: 5,
        comment: "Great value combo meal!",
        date: "2024-01-20"
      }
    ]
  },
  {
    name: "Burger + Fries + Coke",
    description: "Classic combo with burger, crispy fries and cold drink",
    category: ["Main Course", "Combos"],
    price: 135,
    image: "/cheese-burger.avif",
    popular: true,
    rating: 4.9,
    reviews: [
      {
        id: "6",
        author: "Vaibhav Jadhav",
        rating: 5,
        comment: "Perfect combo meal!",
        date: "2024-01-20"
      }
    ]
  },
  {
    name: "Chicken Shezwan Rice + Chicken Chilli + Coke",
    description: "Non-veg combo with spicy chicken rice, chilli chicken and drink",
    category: ["Main Course", "Non Veg" , "Combos"],
    price: 235,
    image: "/chicken-shezwan-fried-rice.jpg",
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
    image: "/anda bhurji pav.webp",
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
    description: "Egg bread - simple and satisfying",
    category: ["Non Veg"],
    price:49,
    image: "/anda-bread.jpg",
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
    image: "/salted-fries.jpg",
    rating: 4.6,
    reviews: [
      {
        id: "7",
        author: "Vishal gaikwad",
        rating: 5,
        comment: "Perfectly crispy!",
        date: "2024-01-16"
      }
    ]
  },
  {
    name: "Peri peri Fries",
    description: "Spicy peri peri seasoned crispy fries",
    category: "Snack",
    price: 79,
    image: "/peri-fries.jpeg.jpg",
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
    description: "Fresh vegetable sandwich with Indian spices",
    category: ["Snack","Veg"],
    price: 49,
    image: "/grill.jpg",
    rating: 4.6,
    reviews: [
      {
        id: "7",
        author: "Vishal gaikwad",
        rating: 5,
        comment: "Fresh and tasty!",
        date: "2024-01-16"
      }
    ]
  },
   {
    name: "VEG Manchurian (Dry)  ",
    description: "Spicy Manchurian balls served dry style",
    category: ["Snack","Veg"],
    price: 100 ,
    image: "/dry.jpg",
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
    description: "Manchurian balls in rich gravy sauce",
    category: ["Snack","Veg"],
    price: 110 ,
    image: "/manchurian.jpg",
    rating: 4.6,
    reviews: [
      {
        id: "7",
        author: "Vishal gaikwad",
        rating: 5,
        comment: "Rich and flavorful gravy!",
        date: "2024-01-16"
      }
    ]
  },
   {
    name: "VEG Paneer Chilli  ",
    description: "Spicy paneer cubes with bell peppers and onions",
    category: ["Snack","Veg"],
    price: 150 ,
    image: "/paneerchilli.jpg",
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
    price: 149,
    image: "/paneercrispy.jpg",
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
    image: "/grill.jpg",
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
    image: "/chicken-triple-rice.jpg",
    rating: 4.4,
  },
   {
    name: "VEG Singapuri Rice",
    description: "Breaded chicken breast with marinara sauce and melted cheese",
    category: ["Main Course","Veg"],
    price: 89,
    image: "/singapore-fried-rice.webp",
    rating: 4.4,
  },
   
   {
    name: "VEG Manchurian Rice",
    description: "Breaded chicken breast with marinara sauce and melted cheese",
    category: ["Main Course","Veg"],
    price: "90/140",
    image: "",
    rating: 4.4,
  },
  // veg + MAIN COURSE 
  {
    name: "Veg Shejwan Rice",
    description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone",
    category: ["Main Course", "Veg"],
    price: "90 / 140",
    image: "/veg-shezwan-rice.jpg",
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
    price: "80/ 130",
    image: "/veg-fried-rice.webp",
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
    price: "80/130",
    image: "/veg-noodle.jpg",
    rating: 4.6,
  },
  // Beverages
  {
    name: "Coke / Pepsi",
    description: "House-made lemonade with fresh lemons and mint",
    category: "Snack",
    price: 25,
    image: "/coke.jpeg",
    rating: 4.3,
  },
  {
    name: "Chicken Noodles",
    description: "Rich Italian espresso made from premium coffee beans",
    category: "Non Veg ",
    price: "100 / 150",
    image: "/chicken-noodl.jpg",
    rating: 4.5,
  },
   {
    name: "Chicken Lollipop",
    description: "Rich Italian espresso made from premium coffee beans",
    category: "Non Veg ",
    price: "100 / 170 ",
    image: "/chicken-lollypop.jpg",
    rating: 4.5,
  },
   {
    name: "Chicken 65",
    description: "Rich Italian espresso made from premium coffee beans",
    category: "Non Veg ",
    price: 149 ,
    image: "/chicken-65.jpg",
    rating: 4.5,
  },
   {
    name: "Chicken Chilli Dry",
    description: "Rich Italian espresso made from premium coffee beans",
    category: "Non Veg ",
    price: 149 ,
    image: "/chiken-chilli.jpg",
    rating: 4.5,
  },
   {
    name: "Chicken Crispy ",
    description: "Rich Italian espresso made from premium coffee beans",
    category: "Non Veg ",
    price: 149,
    image: "/chicken-crispy.jpg",
    rating: 4.5,
  },
  
  {
    name: "Chicken Shezwan Rice",
    description: "Rich Italian espresso made from premium coffee beans",
    category: "Non Veg ",
    price: "110 / 160" ,
    image: "/chicken-shezwan-fried-rice.jpg",
    rating: 4.5,
  },
  {
    name: "Chicken Tripple Rice",
    description: "Rich Italian espresso made from premium coffee beans",
    category: "Non Veg ",
    price: "130 / 160",
    image: "/chicken-tripple-noodle.jpg",
    rating: 4.5,
  },
  {
    name: "Chicken Singapuri Rice",
    description: "Rich Italian espresso made from premium coffee beans",
    category: "Non Veg ",
    price: "110 / 160",
    image: "/singapore-fried-rice.webp",
    rating: 4.5,
  },
  {
    name: "Chicken Fries Rice",
    description: "Rich Italian espresso made from premium coffee beans",
    category: "Non Veg ",
    price: "100 / 150",
    image: "/checken-fried-rice.jpg",
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
