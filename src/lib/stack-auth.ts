import { StackClientApp } from '@stackframe/stack';

export const stackApp = new StackClientApp({
  publishableClientKey: import.meta.env.VITE_STACK_PUBLISHABLE_CLIENT_KEY,
  tokenStore: 'cookie', // Use cookie storage for Vite/React app
});