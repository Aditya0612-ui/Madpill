# Firebase Authentication & Realtime Database Setup Guide

## 🔥 Firebase Console Setup

### Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter your project name (e.g., "my-react-app")
4. Choose whether to enable Google Analytics (optional)
5. Click "Create project"

### Step 2: Add Web App to Firebase Project
1. In your Firebase project dashboard, click the web icon (`</>`
2. Register your app with a nickname (e.g., "My React App")
3. **Don't check** "Also set up Firebase Hosting" for now
4. Click "Register app"
5. **Copy the configuration object** - you'll need this next!

### Step 3: Configure Firebase Config
1. Open `src/firebase/config.js`
2. Replace the placeholder config with your actual Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key-here",
  authDomain: "your-project-id.firebaseapp.com",
  databaseURL: "https://your-project-id-default-rtdb.firebaseio.com/",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

### Step 4: Enable Authentication
1. In Firebase Console, go to "Authentication" in the left sidebar
2. Click "Get started"
3. Go to "Sign-in method" tab

#### Enable Email/Password Authentication:
4. Click on "Email/Password"
5. Enable "Email/Password" (first option)
6. Click "Save"

#### Enable Google Authentication:
7. Click on "Google" in the sign-in providers list
8. Click the "Enable" toggle
9. **Select a project support email** (usually your email)
10. Click "Save"

**Important**: You'll need to add your domain to the authorized domains list for production. For development, `localhost` is automatically included.

### Step 5: Enable Realtime Database
1. In Firebase Console, go to "Realtime Database" in the left sidebar
2. Click "Create Database"
3. Choose your location (closest to your users)
4. **Start in test mode** for development (you can change rules later)
5. Click "Done"

### Step 6: Set Database Rules (Optional but Recommended)
For development, you can use these rules in the "Rules" tab of Realtime Database:

```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    },
    "messages": {
      ".read": "auth != null",
      ".write": "auth != null"
    }
  }
}
```

## 🚀 Running Your Application

### Start Development Server
```bash
npm run dev
```

### Test the Application
1. Open your browser to `http://localhost:5173`
2. Click the "Login / Register" button in the top-right corner
3. Create a new account with the register form
4. Try logging in and out
5. Send messages in the dashboard to test the realtime database

## 📱 How to Use the Authentication System

### User Registration Flow
1. User clicks "Login / Register" button
2. Switches to registration form
3. Fills out: Full Name, Email, Password, Confirm Password
4. System creates Firebase Auth user
5. User data is stored in Realtime Database
6. User is automatically logged in and redirected to dashboard

### User Login Flow
1. User enters email and password
2. Firebase Authentication validates credentials
3. User is redirected to dashboard
4. Real-time message system is activated

### Authentication Features
- **Email/Password Registration**: Traditional signup with validation
- **Email/Password Login**: Secure login with Firebase Auth
- **Google Sign-In**: One-click authentication with Google accounts
- **User Profile Display**: Shows logged-in user's name, email, and profile picture (for Google users)
- **Automatic User Data Storage**: User info is automatically saved to Realtime Database

### Dashboard Features
- **User Profile Display**: Shows logged-in user's name and email
- **Real-time Messaging**: Send and receive messages instantly
- **Message History**: All messages are stored and displayed in real-time
- **Logout Functionality**: Secure logout with session cleanup

## 🔒 Security Best Practices

### Environment Variables (Recommended)
Create a `.env` file in your project root:

```env
VITE_FIREBASE_API_KEY=your-api-key-here
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://your-project-id-default-rtdb.firebaseio.com/
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

Then update `src/firebase/config.js`:

```javascript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};
```

### Add .env to .gitignore
```
.env
.env.local
.env.production
```

## 🛠️ Troubleshooting

### Common Issues

**1. "Firebase: Error (auth/configuration-not-found)"**
- Make sure you've copied the correct Firebase config
- Verify all config values are properly set

**2. "Firebase: Error (auth/network-request-failed)"**
- Check your internet connection
- Verify Firebase project is active

**3. Database permission denied**
- Make sure Authentication is enabled
- Check your Realtime Database rules
- Ensure user is logged in before database operations

**4. "Module not found" errors**
- Run `npm install` to ensure all dependencies are installed
- Clear node_modules and reinstall if needed

**5. Google Sign-In popup blocked**
- Make sure popup blockers are disabled for your development site
- Try using a different browser if the popup doesn't appear
- Check browser console for any errors

**6. "Firebase: Error (auth/popup-closed-by-user)"**
- User closed the Google sign-in popup before completing authentication
- This is normal user behavior, just show a friendly message

**7. Google Sign-In not working in production**
- Make sure your production domain is added to Firebase authorized domains
- Go to Authentication > Settings > Authorized domains and add your domain

### Debug Mode
Add this to your `src/firebase/config.js` for debugging:

```javascript
import { connectAuthEmulator } from 'firebase/auth';
import { connectDatabaseEmulator } from 'firebase/database';

// For development/testing only
if (import.meta.env.DEV) {
  // Uncomment these lines to use Firebase emulators
  // connectAuthEmulator(auth, 'http://localhost:9099');
  // connectDatabaseEmulator(database, 'localhost', 9000);
}
```

## 📊 Project Structure

```
src/
├── components/
│   ├── LoginForm.jsx          # Login form component
│   ├── RegisterForm.jsx       # Registration form component
│   └── Dashboard.jsx          # User dashboard with messaging
├── contexts/
│   └── AuthContext.jsx        # Authentication context provider
├── firebase/
│   └── config.js              # Firebase configuration
└── App.jsx                    # Main app component
```

## 🎉 Next Steps

1. **Production Deployment**: Set up proper environment variables
2. **Enhanced Security**: Implement proper database security rules
3. **User Profiles**: Add profile pictures and additional user data
4. **Email Verification**: Enable email verification for new users
5. **Password Reset**: Implement forgot password functionality
6. **Social Login**: Add Google/Facebook authentication

## 📚 Additional Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [React Firebase Hooks](https://github.com/CSFrequency/react-firebase-hooks)
- [Firebase Security Rules](https://firebase.google.com/docs/database/security)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)

---

## 🚨 Important Notes

- **Never commit your Firebase config to version control** without using environment variables
- **Always use HTTPS in production**
- **Set up proper security rules before going live**
- **Enable email verification for production apps**
- **Regularly review and update your Firebase security rules**
