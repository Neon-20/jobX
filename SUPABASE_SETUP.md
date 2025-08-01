# Supabase Authentication Setup Guide

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/sign in
2. Click "New Project"
3. Choose your organization
4. Fill in project details:
   - Name: `sparsh-job-platform` (or your preferred name)
   - Database Password: Generate a strong password
   - Region: Choose closest to your users
5. Click "Create new project"

## 2. Get Your Project Credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (under "Project URL")
   - **Anon public key** (under "Project API keys")

## 3. Configure Environment Variables

1. Open the `.env.local` file in your project root
2. Replace the placeholder values with your actual Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

## 4. Configure Authentication Settings (Optional)

1. In Supabase dashboard, go to **Authentication** → **Settings**
2. Configure the following settings as needed:
   - **Site URL**: `http://localhost:3000` (for development)
   - **Redirect URLs**: Add `http://localhost:3000` for development
   - **Email Templates**: Customize signup/reset password emails
   - **Providers**: Enable social login providers if desired (Google, GitHub, etc.)

## 5. Test the Authentication

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open `http://localhost:3000` in your browser

3. Test the authentication flow:
   - Click "Sign up" to create a new account
   - Check your email for the confirmation link
   - Click the confirmation link to verify your account
   - Try logging in with your credentials
   - Test the logout functionality

## 6. Database Tables (Optional)

If you want to store additional user profile data, you can create tables in Supabase:

1. Go to **Table Editor** in your Supabase dashboard
2. Create a `profiles` table with the following columns:
   - `id` (uuid, primary key, references auth.users.id)
   - `name` (text)
   - `avatar_url` (text)
   - `created_at` (timestamp with time zone)
   - `updated_at` (timestamp with time zone)

3. Set up Row Level Security (RLS) policies to protect user data

## 7. Production Deployment

When deploying to production:

1. Update your environment variables in your hosting platform (Vercel, Netlify, etc.)
2. Update the Site URL and Redirect URLs in Supabase to match your production domain
3. Consider enabling additional security features like email rate limiting

## Troubleshooting

- **"Missing Supabase environment variables"**: Make sure your `.env.local` file has the correct values
- **Email not sending**: Check your email provider settings in Supabase
- **CORS errors**: Ensure your domain is added to the allowed origins in Supabase settings
- **Authentication not persisting**: Check that cookies are enabled in your browser

## Features Implemented

✅ User registration with email verification
✅ User login/logout
✅ Session persistence
✅ Protected routes
✅ User profile dropdown
✅ Responsive authentication modals
✅ Error handling and loading states
✅ Password visibility toggle
✅ Form validation
