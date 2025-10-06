# Firebase Authentication Password Reset Setup Guide

## 🔥 Your Firebase Configuration Status

**Project ID:** `madpill-app`
**Auth Domain:** `madpill-app.firebaseapp.com`

## ✅ Required Firebase Console Setup

### 1. **Enable Email/Password Authentication**
```
Firebase Console → Authentication → Sign-in method → Email/Password → Enable
```

### 2. **Configure Email Templates**
```
Firebase Console → Authentication → Templates → Password reset
- Customize the email template
- Set the "From name" (e.g., "MadPill Support")
- Verify the email content looks good
```

### 3. **Add Authorized Domains**
```
Firebase Console → Authentication → Settings → Authorized domains
Add these domains:
- localhost (for development)
- 127.0.0.1 (for development)
- your-actual-domain.com (for production)
```

### 4. **Check Project Quotas**
```
Firebase Console → Usage tab
- Verify you haven't exceeded email sending limits
- Free tier: 100 emails/day
```

## 🔧 How Firebase Authentication Password Reset Works

1. **User clicks "Forgot Password"**
2. **Your app calls `sendPasswordResetEmail(auth, email)`**
3. **Firebase sends email with secure token link**
4. **User clicks link in email**
5. **Firebase handles password reset flow**
6. **User redirected back to your app**

## 📧 The Email Firebase Sends Contains:

- **Secure reset link with token**
- **Link expires in 1 hour**
- **One-time use only**
- **Redirects to your specified URL**

## 🎯 Test Your Setup

1. **Register a test account first**
2. **Use "Forgot Password" with that same email**
3. **Check email (including spam folder)**
4. **Click the Firebase reset link**
5. **Complete password reset**

## 🚨 Common Issues & Solutions

### Email Not Received?
- Check spam/junk folders
- Wait 5-10 minutes
- Verify email exists in Firebase Console → Authentication → Users
- Check Firebase Console → Authentication → Templates is configured

### "Invalid Continue URI" Error?
- Add your domain to Authorized domains
- Check the URL format in actionCodeSettings

### "User Not Found" Error?
- User must be registered first
- Check Firebase Console → Authentication → Users

## 🔗 Your Current Setup

**Reset Link Redirects To:** `http://localhost:5174/login`
**Email Provider:** Firebase (noreply@madpill-app.firebaseapp.com)
**Security:** Firebase handles all token validation automatically

Your implementation is now properly configured to send password reset links through Firebase Authentication!
