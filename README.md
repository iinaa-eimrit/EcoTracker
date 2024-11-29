# EcoTracker

## Overview

The **EcoTracker** is a web application designed to help users understand and reduce their environmental impact. It includes features like a carbon footprint calculator, real-time air quality monitoring, environmental challenges, and a user authentication system. The app encourages users to track their eco-friendly activities and achieve their sustainability goals in a fun and engaging way.

---

## Features

- **Carbon Footprint Calculator**: Calculates and displays users' carbon footprints with breakdowns for different lifestyle factors.
- **Real-Time Air Quality Data**: Displays air quality data for the user's location using an integrated Air Quality API.
- **Environmental Challenges**: Users can join challenges and track their progress towards reducing their carbon footprint.
- **User Authentication**: Firebase-based authentication system for user sign-up, sign-in, and profile management.
- **Responsive Design**: Built with a clean, modern UI using Tailwind CSS for a seamless user experience across devices.

---

## Tech Stack

- **Frontend**: React.js, TypeScript, Tailwind CSS, React Hook Form, Zod, Zustand (for state management)
- **Backend**: Firebase Authentication, Firebase Firestore
- **APIs**: Air Quality API, Firebase Firestore
- **State Management**: Zustand for global state management
- **Icons**: Lucide React for visual elements
- **AR Features**: Planned for future implementation using WebXR (for climate impact visualizations)

---

## Setup and Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/environmental-impact-tracker.git
cd environmental-impact-tracker
```

### 2. Install Dependencies

Run the following command to install the necessary dependencies:
```bash
npm install
```
### 3. Set Up Environment Variables

Create a `.env` file in the root of the project and add the following environment variables:

```plaintext
NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-firebase-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-firebase-app-id

NEXT_PUBLIC_AIR_QUALITY_API_KEY=your-air-quality-api-key
```

### 4. Set Up Firebase

1. Go to the [Firebase Console](https://console.firebase.google.com/), create a new project (e.g., "EcoTracker").
2. Enable **Email/Password** authentication under Authentication > Sign-In Method.
3. Set up **Firestore** to store user data.
4. Download your Firebase configuration and update the `.env` file with your Firebase credentials.

### 5. Set Up Air Quality API

1. Sign up for an API key from [AQICN](https://aqicn.org).
2. Replace the mock API key in the `.env` file with your Air Quality API key.

### 6. Run the Development Server

Start the development server with:
```bash
npm run dev
```

Your app should now be live at `http://localhost:3000`.

---

## Features Implemented

- **Authentication System**: Sign-in, sign-up, and user management via Firebase Authentication.
- **Carbon Footprint Calculator**: Users can input data for transportation, energy, diet, and waste to calculate their carbon footprint.
- **Air Quality Monitoring**: Displays real-time air quality data for the user's location.
- **Challenge System**: Users can join environmental challenges and track their progress.

---

## Future Work

The application is structured to allow easy integration of new features, such as:

- **AR Features**: Visualize the impact of climate change in augmented reality.
- **User Progress Tracking**: Detailed progress dashboard for carbon reduction challenges.
- **Additional API Integrations**: Expand to include more environmental data sources and APIs.

---


## Acknowledgements

- **React** and **Next.js** for the frontend.
- **Firebase** for authentication and Firestore.
- **Air Quality API** for real-time air quality data.
- **Tailwind CSS** for responsive and modern UI design.
- **Lucide React** for the icons used in the app.

---
