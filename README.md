🛍️ Forever Ecommerce — Full Project Documentation
Forever is a modern ecommerce platform built using Next.js (Pages Router) with a scalable component-driven architecture and real-time shopping experience. It includes product browsing, cart management, secure authentication, and Stripe checkout.
![responsive HomePage](public/screenshots/4.png)
![Cart](public/screenshots/2.png)
![products](public/screenshots/5.png)
![products details](public/screenshots/7.png)



---

## 🚀 Features

- Product listing, filtering, and search
- Dynamic product detail pages
- Shopping cart with persistent state
- User authentication (JWT)
- Secure Stripe checkout
- Order history for logged-in users
- Newsletter subscription
- Clean and responsive UI
- Modular reusable components

---

## 🧠 Tech Stack

| Layer          | Technology                        |
|----------------|----------------------------------|
| Frontend       | Next.js (Pages Router)            |
| UI Library     | React + Hooks (`useState`, `useEffect`) |
| Styling        | Tailwind CSS                      |
| State          | React Context API                 |
| Payments       | Stripe Checkout                   |
| Authentication | JWT Tokens                        |
| Types          | TypeScript                        |

---

## 📁 Project Structure
├── assets # Images, icons, and branding media
├── components # Reusable UI components
├── context # Global state (ShopContext)
├── pages # Next.js routing pages
│ ├── index.tsx
│ ├── collection.tsx
│ ├── product/[id].tsx
│ ├── cart.tsx
│ ├── placeorder.tsx
│ ├── orders.tsx
│ ├── login.tsx
│ ├── about.tsx
│ ├── contact.tsx
├── styles # Tailwind + global styles
├── public # Static assets
├── types # Global TypeScript types
├── tsconfig.json
└── README.md




---

## 🎨 Components

- `navbar.tsx` – Navigation, cart count, login button  
- `hero.tsx` – Homepage banner  
- `BestSeller.tsx` – Featured products  
- `productItem.tsx` – Single product card  
- `relatedproducts.tsx` – Recommended products  
- `searchBar.tsx` – Search input & filter  
- `CartTotal.tsx` – Cart summary & checkout  
- `Footer.tsx` – Footer links & newsletter  
- `Title.tsx` – Reusable page titles  
- `OurPolicy.tsx` – Shipping & return info  
- `NewsLettterBox.tsx` – Email subscription  
- `latestCollection.tsx` – New arrivals

---

## 🔐 Authentication (JWT)

- User login generates JWT token
- Token stored locally or via cookies
- Protected routes for cart, checkout, and orders

---

## 🛒 Shopping Cart

- Global state via `ShopContext`
- Add, remove, or update quantity
- Calculate totals dynamically
- Persistent across sessions

---

## 🌐 Routing (Pages Router)

| Page             | Route                  |
|-----------------|-----------------------|
| Home             | `/`                    |
| Collection       | `/collection`          |
| Product Detail   | `/product/[id]`        |
| Cart             | `/cart`                |
| Checkout         | `/placeorder`          |
| Orders           | `/orders`              |
| Login/Register   | `/login`               |
| About            | `/about`               |
| Contact          | `/contact`             |

---

## 💳 Stripe Checkout

1. User clicks checkout
2. Stripe session created via API route
3. Redirects to Stripe payment page
4. Webhook confirms order
5. Order saved in database

---

## 📦 Product Type (TypeScript)

```ts
type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  sizes?: string[];
  reviews?: Review[];
};
📱 Responsive Design

Mobile-first using Tailwind

Flexbox & grid layouts

Smooth, clean UI
npm run dev      # Development server
npm run build    # Production build
npm start        # Run production


![Checkout](public/screenshots/10.png)
