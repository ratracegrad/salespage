# Adding Google Authentication in Supabase

To add Google authentication in Supabase, follow these steps:

1. **Create a Google Cloud Project**
    - Go to the [Google Cloud Console](https://console.cloud.google.com/).
    - Create a new project or select an existing project.
    - Navigate to the **OAuth consent screen** and configure it.

2. **Create OAuth 2.0 Credentials**
    - Go to the **Credentials** page.
    - Click on **Create Credentials** and select **OAuth 2.0 Client IDs**.
    - Configure the OAuth consent screen if you haven't already.
    - Set the application type to **Web application**.
    - Add your authorized redirect URIs. For Supabase, it should be `https://<your-project-ref>.supabase.co/auth/v1/callback`.

3. **Get Client ID and Client Secret**
    - After creating the credentials, you will get a **Client ID** and **Client Secret**. Note these down.

4. **Configure Supabase**
    - Go to your [Supabase Project](https://app.supabase.io/).
    - Navigate to **Authentication** > **Providers**.
    - Enable **Google**.
    - Enter the **Client ID** and **Client Secret** obtained from Google Cloud.

5. **Update Your Application**
    - Ensure your application is configured to use Supabase authentication.
    - Use the Supabase client to handle the authentication flow.

For more details, refer to the [Supabase documentation](https://supabase.io/docs/guides/auth).
