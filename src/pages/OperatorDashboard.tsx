import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { UsersIcon, DocumentTextIcon, CurrencyDollarIcon, ChartBarIcon, CogIcon, BellAlertIcon } from '@heroicons/react/24/outline'

const OperatorDashboard = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-gray-900 text-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">IP Renewals Group - Operator Portal</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">Operator: {user?.name}</span>
              <button
                onClick={handleLogout}
                className="text-gray-300 hover:text-white"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Operator Dashboard</h2>
          <p className="text-gray-600 mt-1">System overview and management</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <UsersIcon className="h-12 w-12 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Clients</p>
                <p className="text-2xl font-semibold text-gray-900">0</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <DocumentTextIcon className="h-12 w-12 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active IPs</p>
                <p className="text-2xl font-semibold text-gray-900">0</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <CurrencyDollarIcon className="h-12 w-12 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Revenue (MTD)</p>
                <p className="text-2xl font-semibold text-gray-900">$0</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <BellAlertIcon className="h-12 w-12 text-red-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending Actions</p>
                <p className="text-2xl font-semibold text-gray-900">0</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">System Activity</h3>
            <div className="space-y-3">
              <p className="text-gray-500 text-center py-8">No recent system activity</p>
            </div>
          </div>
          
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Management Tools</h3>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition flex items-center">
                <UsersIcon className="h-5 w-5 text-gray-600 mr-3" />
                <div>
                  <span className="font-medium text-gray-700">Client Management</span>
                  <p className="text-sm text-gray-600">View and manage all clients</p>
                </div>
              </button>
              <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition flex items-center">
                <ChartBarIcon className="h-5 w-5 text-gray-600 mr-3" />
                <div>
                  <span className="font-medium text-gray-700">Analytics</span>
                  <p className="text-sm text-gray-600">View detailed reports</p>
                </div>
              </button>
              <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition flex items-center">
                <CogIcon className="h-5 w-5 text-gray-600 mr-3" />
                <div>
                  <span className="font-medium text-gray-700">System Settings</span>
                  <p className="text-sm text-gray-600">Configure system parameters</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Stats</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded">
              <p className="text-sm text-gray-600">Renewal Success Rate</p>
              <p className="text-2xl font-bold text-gray-900">--%</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded">
              <p className="text-sm text-gray-600">Avg. Processing Time</p>
              <p className="text-2xl font-bold text-gray-900">-- days</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded">
              <p className="text-sm text-gray-600">System Uptime</p>
              <p className="text-2xl font-bold text-gray-900">100%</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default OperatorDashboard