import React, { createContext, useContext } from 'react'
import { useUser as useStackUser } from '@stackframe/stack'

interface User {
  id: string
  email: string
  name: string
  isOperator: boolean
}

interface AuthContextType {
  user: User | null
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const stackUser = useStackUser()
  
  // Convert Stack Auth user to our User format
  const user: User | null = stackUser ? {
    id: stackUser.id,
    email: stackUser.primaryEmail || '',
    name: stackUser.displayName || stackUser.primaryEmail || 'User',
    isOperator: stackUser.clientMetadata?.isOperator === true
  } : null

  const loading = stackUser === undefined

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  )
}