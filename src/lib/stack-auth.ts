import { StackClientApp } from '@stackframe/stack';

export const stackApp = new StackClientApp({
  publishableClientKey: import.meta.env.VITE_STACK_PUBLISHABLE_CLIENT_KEY || import.meta.env.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY,
  projectId: import.meta.env.VITE_STACK_PROJECT_ID || import.meta.env.NEXT_PUBLIC_STACK_PROJECT_ID,
  tokenStore: 'cookie', // Use cookie storage for Vite/React app
});