export interface MenuItem {
  _id?: string
  name: string
  description: string
  category: string
  price: number
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
  "Appetizers",
  "Main Course",
  "Desserts",
  "Beverages",
] as const

export type MenuCategory = typeof menuCategories[number]
