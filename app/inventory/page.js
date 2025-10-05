'use client'

import PrivateRoute from '@/components/PrivateRoute'
import { BookOpen, TrendingUp, AlertCircle, RefreshCw } from 'lucide-react'

function InventoryContent() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <BookOpen className="w-8 h-8 text-green-600 mr-3" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Smart Inventory System</h1>
              <p className="text-sm text-gray-500 mt-1">AI-driven demand forecasting</p>
            </div>
          </div>

          <div className="prose prose-sm max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed">
              Traditional inventory management fails in rural contexts due to unpredictable demand 
              patterns and supply chain disruptions. This AI-powered system analyzes historical data, 
              seasonal trends, and local events to optimize stock levels, reducing waste and 
              preventing shortages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-5 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
              <TrendingUp className="w-6 h-6 text-green-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Demand Prediction</h3>
              <p className="text-sm text-gray-700">
                Machine learning models trained on local consumption patterns predict upcoming demand, 
                considering festivals, harvest seasons, and weather events.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
              <AlertCircle className="w-6 h-6 text-blue-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Low Stock Alerts</h3>
              <p className="text-sm text-gray-700">
                Automated notifications sent to suppliers when inventory falls below reorder points, 
                preventing stockouts of essential items.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
              <RefreshCw className="w-6 h-6 text-purple-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Auto Reordering</h3>
              <p className="text-sm text-gray-700">
                Smart contracts trigger purchase orders automatically when conditions are met, 
                reducing manual intervention and response time.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
              <BookOpen className="w-6 h-6 text-orange-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expiry Tracking</h3>
              <p className="text-sm text-gray-700">
                FIFO (First In, First Out) management ensures perishable goods are sold before 
                expiration, reducing waste in rural retail.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-3">System Architecture</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>TensorFlow.js Models:</strong> Client-side prediction for offline capability</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Real-time Sync:</strong> PostgreSQL backend with optimistic updates for slow connections</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Dashboard Analytics:</strong> Next.js server components for fast data visualization</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Mobile App:</strong> Barcode scanning and manual stock adjustments for field workers</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function InventoryPage() {
  return (
    <PrivateRoute>
      <InventoryContent />
    </PrivateRoute>
  )
}