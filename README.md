# 🚖 vroom45 – Frontend

> A modern and responsive ride-booking platform UI built with React, designed to simulate core Uber-like user and captain (driver) functionality.

![Vroom45 UI](https://t3.ftcdn.net/jpg/07/28/30/26/360_F_728302620_Xddnf5Cl0K1ACZurd6yByUzHiHMMIoe6.jpg)

---

## 🌐 Live Demo

👉 [vroom45.vercel.app](https://vroom45.vercel.app)

---

## 🛠️ Tech Stack

- ⚛️ **React.js**
- 💅 **Tailwind CSS**
- 🔄 **Socket.IO Client**
- 🔐 **JWT-based Auth Handling**
- 🌍 **Geolocation API**
- 📦 **Axios** for API integration
- 🧠 **React Context API**

---

## ✨ Features

- 🌍 Real-time captain location updates via Socket.IO
- 🔒 User & Captain login system
- 🚖 Ride request and confirmation popups
- 🎯 Live location tracking using browser GPS
- 📱 Mobile-first responsive UI
- ⚙️ Environment variable support using `import.meta.env`

---

## 📁 Folder Structure

```bash
   src/
   │
   ├── assets/ # Icons, images
   ├── components/ # Reusable UI components
   ├── context/ # Context providers (Socket, Captain, etc.)
   ├── pages/ # Main screen views
   ├── utils/ # Utility functions/helpers
   ├── App.jsx # Root component
   └── main.jsx # Entry point
```

---

## 🧑‍💻 Getting Started (Local Development)

1. **Clone the repo**

   ```bash
   git clone https://github.com/vitthalganeshshivane/vroom45-frontend.git
   cd vroom45-frontend
   ```

2. **Install dependencies**

   ```bash

   npm install

   ```

3. **Configure environment**

   - Create a .env file:

   ```bash

   VITE_BASE_URL=https://your-backend-url.onrender.com

   ```

4. **Run development server**

   ```bash

   npm run dev

   ```

## 🚀 Deployment

The app is already deployed on Vercel. To redeploy or set up from scratch:

- 1. Push your frontend code to GitHub

- 2. Go to vercel.com, connect your GitHub repo

- 3. Set VITE_BASE_URL in Vercel’s environment variables

- 4. Vercel auto-deploys on every commit to main

## 🛡️ License

This project is licensed under the MIT License © 2025 Vitthal Ganesh Shivane

## 🤝 Acknowledgements

Inspired by Uber UI and Google Maps Platform

---

Let me know if you want me to generate a **logo**, favicon, or customize the README further (e.g. add changelog or FAQ section).

Next step: want the backend README now?
