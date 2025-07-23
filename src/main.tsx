import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StackProvider } from '@stackframe/stack'
import './index.css'
import App from './App.tsx'
import { stackApp } from './lib/stack-auth'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StackProvider app={stackApp}>
      <App />
    </StackProvider>
  </StrictMode>,
)