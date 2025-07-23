import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUser, SignIn } from '@stackframe/stack'

const LoginPage = () => {
  const user = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      // Redirect based on user type
      if (user.clientMetadata?.isOperator) {
        navigate('/operator')
      } else {
        navigate('/dashboard')
      }
    }
  }, [user, navigate])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← Back to home
          </Link>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Sign in to your account</h2>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <SignIn />
        </div>

        <p className="text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
            Create one
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage