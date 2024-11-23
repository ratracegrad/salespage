# GitHub Authentication with Supabase

To set up GitHub authentication in Supabase, follow these steps:

## Step 1: Create a GitHub OAuth App

1. Go to [GitHub Developer Settings](https://github.com/settings/developers).
2. Click on "New OAuth App".
3. Fill in the required fields:
    - **Application name**: Your app's name.
    - **Homepage URL**: Your app's URL.
    - **Authorization callback URL**: `https://<your-supabase-project>.supabase.co/auth/v1/callback`.

4. Click "Register application".
5. Copy the **Client ID** and **Client Secret**.

## Step 2: Configure Supabase

1. Go to your [Supabase Dashboard](https://app.supabase.io/).
2. Select your project.
3. Navigate to **Authentication** > **Settings**.
4. Under the **External OAuth Providers** section, enable **GitHub**.
5. Enter the **Client ID** and **Client Secret** you copied from GitHub.
6. Save the settings.

That's it! You have successfully set up GitHub authentication with Supabase in your Nuxt.js app.
