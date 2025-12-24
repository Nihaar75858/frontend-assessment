# PopX Auth

PopX Auth is a modern frontend authentication flow built with **React**, **Vite**, and **Tailwind CSS**.  
It demonstrates a clean signup, login, and profile experience with client-side state management.

---

## Screens Included

- Landing Screen to route for SignUp and Login Pages
- SignUp Screen to Register details. Re-routing back to Lading Screen
- Login Screen to validate previous user Details and Route to Profile
- Profile Screen with:
  - Profile picture upload & details displayed
  - Editable avatar using camera icon

---

## Features

- Modern UI using **Tailwind CSS**
- Client-side routing with **React Router**
- Signup and Login form with validation

---

## Tech Stack

- **React**
- **Vite**
- **Tailwind CSS**
- **React Router DOM**
- **React Icons**

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/popx-auth.git
cd Popx-Auth-main
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

App will be available at: http://localhost:5173

---

## For Deployment (Render)

### Build Command

```bash
npm install && npm run build
```

### Publish Directory:

```bash
dist
```

## Project Structure

```bash
PopX-Auth
├── src/
| ├── assets/
| │ └── default_profile.png
| ├── pages/
| │ ├── LandingScreen.jsx
| │ ├── LoginScreen.jsx
| │ ├── SignUpScreen.jsx
| │ └── Profile.jsx
| ├── App.jsx
| ├── App.css
| └── main.jsx
├── index.html
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.js
```

---
