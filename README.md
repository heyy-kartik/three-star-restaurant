# Three Star Restaurant 🍽️

A modern, feature-rich restaurant website built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.

## ✨ Features

### Core Functionality
- **Landing Page** - Beautiful hero section with smooth animations and call-to-action buttons
- **Menu Display** - Dynamic menu with category filtering (Appetizers, Main Course, Desserts, Beverages)
- **Static Reviews** - Customer reviews for each dish with star ratings
- **Special Offers** - Dedicated section showcasing current promotions and deals
- **Live Location** - Interactive map integration with Google Maps
- **Customer Support** - Contact form with multiple contact methods
- **Floating Phone Button** - Quick-dial functionality with pulsing animation
- **Responsive Footer** - Complete footer with links, contact info, hours, and social media

### Technical Features
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** components for consistent UI
- **Framer Motion** for smooth animations
- **MongoDB** support (database configuration included)
- **REST API** endpoints for menu and offers
- **Fully Responsive** design for mobile, tablet, and desktop

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/heyy-kartik/three-star-restaurant.git
cd three-star-restaurant
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your configuration:
```env
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_RESTAURANT_NAME="Three Star Restaurant"
NEXT_PUBLIC_RESTAURANT_PHONE="+1-555-123-4567"
NEXT_PUBLIC_RESTAURANT_EMAIL="info@threestar.com"
NEXT_PUBLIC_RESTAURANT_ADDRESS="123 Gourmet Street, Culinary City, CC 12345"
NEXT_PUBLIC_RESTAURANT_LAT=40.7580
NEXT_PUBLIC_RESTAURANT_LNG=-73.9855
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

### Linting

Run ESLint:
```bash
npm run lint
```

## 📁 Project Structure

```
three-star-restaurant/
├── app/
│   ├── api/
│   │   ├── menu/          # Menu API endpoint
│   │   └── offers/        # Offers API endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── ui/                # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   └── badge.tsx
│   ├── Contact.tsx        # Contact section
│   ├── FloatingPhoneButton.tsx
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section
│   ├── Location.tsx       # Location section
│   ├── Menu.tsx           # Menu section
│   ├── MenuItemCard.tsx   # Menu item card
│   └── Offers.tsx         # Offers section
├── lib/
│   ├── data.ts            # Sample data
│   ├── mongodb.ts         # MongoDB connection
│   ├── types.ts           # TypeScript types
│   └── utils.ts           # Utility functions
└── public/
    └── images/            # Static images
```

## 🎨 Customization

### Menu Items
Edit `lib/data.ts` to modify menu items, categories, and prices.

### Colors & Theme
Modify `app/globals.css` and `tailwind.config.ts` for custom color schemes.

### Restaurant Information
Update environment variables in `.env.local` for your restaurant details.

## 🗄️ Database

The application supports MongoDB for storing menu items and offers. The connection is configured in `lib/mongodb.ts`.

To use the database:
1. Set up a MongoDB instance (local or MongoDB Atlas)
2. Update `MONGODB_URI` in `.env.local`
3. Create collections for `menuItems` and `offers`

## 📱 Features Implemented

- ✅ Landing page with animations
- ✅ Dynamic menu with filtering
- ✅ Static reviews for dishes
- ✅ Special offers section
- ✅ Live location with Google Maps
- ✅ Customer support form
- ✅ Floating phone dial button
- ✅ Responsive footer
- ✅ Tailwind CSS styling
- ✅ shadcn/ui components
- ✅ Framer Motion animations
- ✅ MongoDB configuration
- ✅ REST API endpoints
- ✅ Mobile responsive design

## 🛠️ Technologies

- **Framework:** Next.js 15 (App router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Database:** MongoDB
- **Deployment:** Vercel (recommended)

## 📄 License

MIT License - feel free to use this project for your restaurant!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, reach out to:

- Phone: +919168377416

---

Built with ❤️ for food lovers
