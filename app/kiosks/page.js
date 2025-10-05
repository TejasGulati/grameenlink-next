'use client'

import PrivateRoute from '@/components/PrivateRoute'
import { Sparkles, Sun, Users, Wifi } from 'lucide-react'

function KiosksContent() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Sparkles className="w-8 h-8 text-indigo-600 mr-3" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Solar-Powered Kiosks</h1>
              <p className="text-sm text-gray-500 mt-1">Offline-first digital hubs</p>
            </div>
          </div>

          <div className="prose prose-sm max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed">
              Village kiosks serve as digital access points for communities with limited internet 
              infrastructure. Solar-powered and designed for offline operation, these kiosks enable 
              e-commerce, government services, and information access. They act as physical 
              touchpoints for the digital supply chain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-5 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg border border-indigo-200">
              <Sun className="w-6 h-6 text-indigo-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Solar Infrastructure</h3>
              <p className="text-sm text-gray-700">
                Off-grid operation using solar panels and battery backup ensures 24/7 availability 
                even in areas without reliable electricity.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
              <Wifi className="w-6 h-6 text-green-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Offline Mode</h3>
              <p className="text-sm text-gray-700">
                Progressive web apps cache essential data locally, allowing transactions to continue 
                during network outages with later synchronization.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg border border-yellow-200">
              <Users className="w-6 h-6 text-yellow-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Community Hub</h3>
              <p className="text-sm text-gray-700">
                Beyond retail, kiosks provide digital literacy training, e-governance access, and 
                serve as information centers for agricultural data.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
              <Sparkles className="w-6 h-6 text-purple-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Multi-Service Platform</h3>
              <p className="text-sm text-gray-700">
                Single interface for ordering products, booking services, accessing government 
                schemes, and conducting digital transactions.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Technical Design</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span><strong>Hardware:</strong> Low-cost tablets with rugged enclosures for harsh environments</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span><strong>Sync Strategy:</strong> Background data sync during available connectivity windows</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span><strong>Local Storage:</strong> IndexedDB for persistent offline data with conflict resolution</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span><strong>Voice Interface:</strong> Multilingual voice commands for low-literacy users</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function KiosksPage() {
  return (
    <PrivateRoute>
      <KiosksContent />
    </PrivateRoute>
  )
}