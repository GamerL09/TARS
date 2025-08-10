import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: false,
    },
  },
});

// Simple API request function for demo purposes
export async function apiRequest(method: string, url: string, data?: any) {
  // For static deployment, just return success
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Demo mode - form submitted successfully!' });
    }, 1000);
  });
}