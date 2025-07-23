import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUser, SignUp } from '@stackframe/stack'

const SignupPage = () => {
  const user = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/dashboard')
    }
  }, [user, navigate])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← Back to home
          </Link>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Create your account</h2>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <SignUp />
        </div>

        <p className="text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignupPage