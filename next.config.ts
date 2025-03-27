import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    // Matches the behavior of `sanity dev` which sets styled-components to use the fastest way of inserting CSS rules in both dev and production. It's default behavior is to disable it in dev mode.
    SC_DISABLE_SPEEDY: 'false',
  },
  i18n: {
    locales: ['hr', 'en', 'fr', 'de'], // Add your supported languages here
    defaultLocale: 'hr', // Default language for root route "/"
    localeDetection: false, // Optional: detect user's browser language
  },
};

export default nextConfig;
