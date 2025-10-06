# 📧 Firebase Password Reset Email Troubleshooting Guide

## 🎯 **Current Issue**
Email `adityapatil0612@gmail.com` is not receiving Firebase password reset emails despite successful API calls.

## 🔍 **Step-by-Step Debugging**

### **1. Verify Firebase Console Settings**

**Go to Firebase Console → Authentication → Templates:**
- ✅ Check "Password reset" template is enabled
- ✅ Verify "From name" is set (e.g., "MadPill Support")
- ✅ Check email template content looks correct
- ✅ Ensure sender email is configured

**Go to Firebase Console → Authentication → Settings → Authorized domains:**
- ✅ Add `localhost` for development
- ✅ Add `127.0.0.1` for development
- ✅ Verify your production domain is listed

### **2. Check Gmail-Specific Locations**

For `adityapatil0612@gmail.com`, check these Gmail tabs/folders:
- **Primary** - Main inbox
- **Promotions** - Marketing emails tab
- **Social** - Social media notifications
- **Updates** - App notifications and updates
- **Spam/Junk** - Filtered emails
- **All Mail** - Complete email archive
- **Trash** - Deleted emails

### **3. Firebase Email Sender Information**

**Your emails are sent from:**
```
From: noreply@madpill-app.firebaseapp.com
Subject: Reset your password for MadPill
```

**Search Gmail for:**
- `from:noreply@madpill-app.firebaseapp.com`
- `subject:reset password`
- `madpill`

### **4. Common Gmail Issues**

**Gmail Filtering:**
- Gmail may automatically filter Firebase emails
- Check **Settings → Filters and Blocked Addresses**
- Look for any filters blocking `firebaseapp.com` emails

**Gmail Security:**
- Gmail sometimes blocks emails from new domains
- Firebase projects may have poor sender reputation initially

### **5. Test with Different Email Providers**

Try the forgot password feature with:
- **Yahoo Mail** - `test@yahoo.com`
- **Outlook** - `test@outlook.com`
- **Temporary Email** - Use 10minutemail.com for testing

### **6. Firebase Project Limits**

**Check Firebase Console → Usage:**
- Free tier: 100 emails/day limit
- Verify you haven't exceeded daily limits
- Check if project is in good standing

### **7. Browser Console Debugging**

**Look for these logs:**
```
🔥 Firebase Auth instance: [object]
🔥 Project ID: madpill-app
🔥 Auth Domain: madpill-app.firebaseapp.com
✅ Firebase: Password reset email sent successfully!
```

**If you see errors:**
- `auth/user-not-found` - Email not registered
- `auth/invalid-email` - Email format issue
- `auth/too-many-requests` - Rate limiting

### **8. Manual Verification Steps**

**Verify user exists:**
1. Go to Firebase Console → Authentication → Users
2. Search for `adityapatil0612@gmail.com`
3. Confirm the user account exists

**Test email delivery:**
1. Try registering a new account with the same email
2. Check if registration confirmation emails work
3. Compare delivery patterns

### **9. Alternative Solutions**

**If emails still don't arrive:**

**Option A: Use different email for testing**
```javascript
// Test with a fresh Gmail account
const testEmail = "newtest123@gmail.com";
```

**Option B: Check Firebase email template**
- Go to Firebase Console → Authentication → Templates
- Click "Edit template" for Password reset
- Verify template is properly configured

**Option C: Contact Firebase Support**
- If using paid plan, contact Firebase support
- Provide project ID: `madpill-app`
- Include specific email: `adityapatil0612@gmail.com`

### **10. Immediate Action Items**

1. **Check Gmail spam folder thoroughly**
2. **Search Gmail for "firebase" or "madpill"**
3. **Try with a different Gmail account**
4. **Verify user exists in Firebase Console**
5. **Check Firebase email template settings**

## 🚨 **Most Likely Causes**

1. **Gmail Spam Filter** (90% of cases)
2. **Firebase sender reputation** (new projects)
3. **User doesn't exist** in Firebase Auth
4. **Gmail promotional tab** filtering
5. **Firebase email template** not configured

## ✅ **Quick Test**

Try this exact sequence:
1. Register new account with `adityapatil0612@gmail.com`
2. Immediately use "Forgot Password"
3. Check all Gmail folders within 10 minutes
4. Look for emails from `noreply@madpill-app.firebaseapp.com`
