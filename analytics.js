import { inject } from '@vercel/analytics';

// Initialize Vercel Web Analytics
// Documentation: https://vercel.com/docs/analytics/quickstart
inject({
  mode: 'auto', // Automatically detect environment (development/production)
});
