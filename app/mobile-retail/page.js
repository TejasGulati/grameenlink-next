'use client'

import PrivateRoute from '@/components/PrivateRoute'
import { Globe, Wifi, Navigation, Truck } from 'lucide-react'

function MobileRetailContent() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Globe className="w-8 h-8 text-blue-600 mr-3" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Mobile Retail IoT</h1>
              <p className="text-sm text-gray-500 mt-1">GPS-enabled retail vans</p>
            </div>
          </div>

          <div className="prose prose-sm max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed">
              Mobile retail vans equipped with IoT sensors bring commerce directly to remote villages. 
              This system tracks inventory, location, and sales in real-time, synchronizing data when 
              connectivity is available. Van operators become micro-entrepreneurs serving multiple 
              villages on scheduled routes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
              <Navigation className="w-6 h-6 text-blue-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Route Optimization</h3>
              <p className="text-sm text-gray-700">
                GPS tracking and algorithmic scheduling ensure vans visit villages at optimal times, 
                maximizing coverage and minimizing fuel costs.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
              <Wifi className="w-6 h-6 text-green-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Offline-First Design</h3>
              <p className="text-sm text-gray-700">
                Transactions processed locally on device, syncing to central database when network 
                becomes available—critical for areas with spotty connectivity.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
              <Truck className="w-6 h-6 text-purple-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Real-time Inventory</h3>
              <p className="text-sm text-gray-700">
                IoT sensors monitor stock levels automatically, alerting operators when to restock 
                and identifying fast-moving products.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
              <Globe className="w-6 h-6 text-orange-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Digital Payments</h3>
              <p className="text-sm text-gray-700">
                Integration with UPI and digital wallets enables cashless transactions, reducing 
                security risks for van operators.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Implementation Stack</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Edge Computing:</strong> Raspberry Pi units in vans for local processing</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Progressive Web App:</strong> Works offline with service workers for seamless UX</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>GPS Integration:</strong> Real-time tracking for supply chain visibility</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>RFID Scanning:</strong> Quick product identification and inventory updates</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function MobileRetailPage() {
  return (
    <PrivateRoute>
      <MobileRetailContent />
    </PrivateRoute>
  )
}