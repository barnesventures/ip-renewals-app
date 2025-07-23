import { Link } from 'react-router-dom'
import { ArrowRightIcon, ShieldCheckIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">IP Renewals Group</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-700 hover:text-gray-900">
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Automated IP Renewal Services
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Never miss an intellectual property renewal deadline again. Our fully automated system handles 
              everything for you, ensuring your patents, trademarks, and copyrights stay protected.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition text-lg font-medium"
            >
              Start Free Trial
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ShieldCheckIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">100% Automated</h3>
              <p className="text-gray-600">
                Our system runs completely automatically, monitoring deadlines and processing renewals without 
                any manual intervention required.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ClockIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Never Miss a Deadline</h3>
              <p className="text-gray-600">
                Automated tracking and reminders ensure you're always ahead of renewal deadlines, protecting 
                your valuable intellectual property.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <CurrencyDollarIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cost Effective</h3>
              <p className="text-gray-600">
                Save time and money with our efficient automated system. No need for expensive manual tracking 
                or legal consultations.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 IP Renewals Group - ip-renew.com. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage