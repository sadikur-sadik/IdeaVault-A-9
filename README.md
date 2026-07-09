# 💡 IdeaVault

<p align="center">
  <img src="https://i.ibb.co.com/Kxvd5dMm/image.png" alt="Idea Vault Preview" width="100%" />
</p>

IdeaVault is a dynamic and interactive web platform designed for startup enthusiasts, innovators, and entrepreneurs to share, explore, and collaborate on startup ideas. Users can post their own projects, browse and filter concepts shared by others, and discuss potential partnerships through comments.

---

## 🔗 Project Links

- **Live Application:** [https://idea-vault-a-9.vercel.app](https://idea-vault-a-9.vercel.app/)
- **Frontend Repository:** [https://github.com/sadikur-sadik/IdeaVault-A-9](https://github.com/sadikur-sadik/IdeaVault-A-9)
- **Backend Repository:** [https://github.com/sadikur-sadik/IdeaVault-A-9--Backend](https://github.com/sadikur-sadik/IdeaVault-A-9--Backend)

---

## 🚀 Core Features

- **Dynamic Interactive Banners:** Home page slider banners highlighting the platform's vision and statistics.
- **Featured Ideas:** Highlighting top-voted or curated startup ideas filtered and fetched from the backend database.
- **Search & Advanced Filtering:** Easily find startup ideas by typing queries or filtering by category and tags.
- **Interactive Comment System:** Communicate with creators via real-time comments, edit existing comments, or delete them (secured via JWT authorization).
- **Secure Authentication & Authorization:** Integrated with **Better Auth** supporting Google OAuth (Google Client credentials) and JWT-based session management for route guards.
- **Dashboard & User History:** Track personal interactions, add new startup ideas, or modify and delete previously created ideas.
- **Responsive Premium UI:** Beautiful responsive styling with **Tailwind CSS 4** and **Daisy UI 5** supporting both Light and Dark mode options.

---

## 🛠️ Tech Stack & Dependencies

### Frontend
- **Framework:** Next.js 16 (React 19)
- **Styling:** Tailwind CSS 4 & Daisy UI 5
- **Animations:** Motion (Framer Motion)
- **Authentication:** Better Auth (with MongoDB adapter)
- **Other Dependencies:**
  - `date-fns`: Date parsing and formatting.
  - `embla-carousel-react` & `embla-carousel-autoplay`: High-performance touch-enabled sliders.
  - `react-icons`: Comprehensive icon pack.
  - `react-toastify`: Elegant and responsive notifications.
  - `react-spinners`: Visual loading indicators.
  - `resend` & `@react-email/render`: Email delivery and rendering.

### Backend & Database
- **Server Environment:** Node.js & Express.js
- **Database:** MongoDB (via official native MongoDB driver)
- **Hosting Configuration:** Vercel deployment support (`vercel.json`)

---

## 💻 Local Development Setup Guide

To run the application locally, you will need to set up both the backend API server and the Next.js frontend client.

### Prerequisites
- Node.js (v18.x or later recommended)
- npm (Node Package Manager)
- A running MongoDB instance (Local or MongoDB Atlas Cluster)

---

### Step 1: Run the Backend

1. Clone the backend repository:
   ```bash
   git clone https://github.com/sadikur-sadik/IdeaVault-A-9--Backend.git
   cd IdeaVault-A-9--Backend
   ```
2. Install the backend dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables. Create a `.env` file in the root of the backend folder:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the backend server:
   ```bash
   node index.js
   # or, if nodemon is installed:
   npm run dev
   ```
   *The server should run on `http://localhost:5000`.*

---

### Step 2: Run the Frontend

1. Clone this repository (the frontend):
   ```bash
   git clone https://github.com/sadikur-sadik/IdeaVault-A-9.git
   cd IdeaVault-A-9
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Configure the environment variables. Create a `.env` file in the root of the frontend folder:
   ```env
   # Authentication Secrets
   BETTER_AUTH_SECRET=your_generated_random_secret_key
   BETTER_AUTH_URL=http://localhost:3000

   # Database connection matching the backend database
   MONGO_URI=your_mongodb_connection_string

   # Backend API Endpoint
   BACKEND_URL=http://localhost:5000

   # Optional Integrations
   RESEND_API_KEY=your_resend_api_key
   GOOGLE_CLIENT_ID=your_google_oauth_client_id
   GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
   ```
4. Run the Next.js development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:3000` to interact with the local application.
