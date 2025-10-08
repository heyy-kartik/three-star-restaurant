export interface MenuItem {
  _id?: string
  name: string
  description: string
  category: string | string[];
  price: number | string
  image: string
  popular?: boolean
  rating?: number
  reviews?: Review[]
}

export interface Review {
  id: string
  author: string
  rating: number
  comment: string
  date: string
}

export interface Offer {
  id: string
  title: string
  description: string
  discount: string
  validUntil: string
  image: string
}

export const menuCategories = [
  "All",
  "Maggi",
  "Main Course",
  "Combos",
  "Non Veg", 
  "Snack",
  

] as const

export type MenuCategory = typeof menuCategories[number]
