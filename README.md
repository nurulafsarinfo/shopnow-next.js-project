# 🛍️ ShopNow - Full-Stack E-Commerce App

## 📖 Project Description
ShopNow is a full-stack e-commerce application built with the Next.js App Router, offering robust product management, secure authentication, and a seamless checkout flow. It demonstrates modern full-stack development practices, utilizing server components, protected routes, and MongoDB database integration. The project is portfolio-ready and designed to showcase end-to-end skills in building scalable, real-world applications.

---

## 🛠️ Tech Stack
- **Frontend:** `Next.js` (App Router), `React`, `Tailwind CSS`, `Shadcn UI`
- **Backend:** `Next.js` API Routes
- **Authentication:** `NextAuth.js` (Google OAuth + Email/Password with JWT)
- **Database:** `MongoDB` with `Mongoose`
- **Utilities:** `TanStack Query` (React Query) for client-side fetching, `bcrypt` for password hashing
- **Deployment:** `Vercel`

---

## ✨ Features

### 🔐 Authentication
- Email/password login with hashed passwords.
- Google OAuth for social login.
- JWT-based sessions with protected routes.

### 🏠 Landing Page
- SEO-optimized sections: Hero, Features, Testimonials, FAQ, CTA, and more.
- Fully responsive design for all devices.

### 📊 Dashboard (Protected)
- Full CRUD (Create, Read, Update, Delete) functionality for products.
- Manage product details, stock levels, and pricing.

### 💳 Checkout Flow
- Secure booking/checkout form with input validation.
- Store booking and order data directly in MongoDB.
- Display booking history in the user dashboard.

### ⚡ Advanced Features
- Next.js Middleware for robust route protection.
- Pagination and filtering capabilities for products.
- Dedicated error and loading states using `error.tsx` and `loading.tsx`.

---

## ⚙️ Setup Instructions
Follow these steps to get the project running locally:

### 1. Clone Repository
```bash
git clone [https://github.com/your-username/shopnow.git](https://github.com/your-username/shopnow.git)
cd shopnow


1. Clone Repository
git clone [https://github.com/your-username/shopnow.git](https://github.com/your-username/shopnow.git)
cd shopnow

2. Install Dependencies
npm install

3. Configure Environment Variables
Create a .env.local file in the project root and add the following variables:

MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

4. Run Development Server
npm run dev

Visit http://localhost:3000 in your browser to see the app running. 🚀

5. Deployment
Deploy your application easily to Vercel with a single command:

 vercel(recommended) I was hosted in netlify

📌 Deliverables
✅ Live Site hosted on Vercel.

✅ GitHub Repository with clean, organized, and well-commented code.

✅ Full documentation in this README file.

👨‍💻 Author
Built with ❤️ using Next.js & MongoDB.
