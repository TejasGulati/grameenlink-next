'use client'

import PrivateRoute from '@/components/PrivateRoute'
import { Zap, MapPin, Battery, Wind } from 'lucide-react'

function DroneContent() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Zap className="w-8 h-8 text-yellow-600 mr-3" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Autonomous Drone Network</h1>
              <p className="text-sm text-gray-500 mt-1">Last-mile delivery optimization</p>
            </div>
          </div>

          <div className="prose prose-sm max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed">
              Autonomous drones address the critical last-mile delivery challenge in rural areas 
              where road infrastructure is limited. This module explores drone-based logistics for 
              small, time-sensitive deliveries like medicines, documents, and essential supplies 
              to remote villages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-5 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg border border-yellow-200">
              <MapPin className="w-6 h-6 text-yellow-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Routing</h3>
              <p className="text-sm text-gray-700">
                AI-powered pathfinding considers weather, terrain, and no-fly zones to optimize 
                delivery routes and reduce flight time.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
              <Battery className="w-6 h-6 text-green-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Solar Charging</h3>
              <p className="text-sm text-gray-700">
                Solar-powered charging stations at village kiosks reduce operational costs and 
                enable sustainable drone operations.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
              <Wind className="w-6 h-6 text-blue-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Weather Monitoring</h3>
              <p className="text-sm text-gray-700">
                Real-time weather integration ensures safe operations, automatically grounding 
                flights during adverse conditions.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
              <Zap className="w-6 h-6 text-purple-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Rapid Response</h3>
              <p className="text-sm text-gray-700">
                Emergency medical supplies can reach remote areas in minutes rather than hours, 
                improving healthcare outcomes.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Technical Considerations</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span><strong>Payload Capacity:</strong> Designed for 2-5kg packages suitable for rural needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span><strong>Range:</strong> 15-20km radius covering multiple villages per charging hub</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span><strong>GPS Integration:</strong> Precise landing zones marked at community centers</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span><strong>Compliance:</strong> Designed within DGCA regulations for BVLOS operations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DronePage() {
  return (
    <PrivateRoute>
      <DroneContent />
    </PrivateRoute>
  )
}