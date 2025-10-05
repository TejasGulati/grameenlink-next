'use client'

import PrivateRoute from '@/components/PrivateRoute'
import { Award, Leaf, Recycle, BarChart3 } from 'lucide-react'

function SustainabilityContent() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Award className="w-8 h-8 text-green-700 mr-3" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Sustainability Dashboard</h1>
              <p className="text-sm text-gray-500 mt-1">Environmental impact monitoring</p>
            </div>
          </div>

          <div className="prose prose-sm max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed">
              Rural supply chains can be optimized for environmental sustainability alongside 
              efficiency. This module tracks carbon emissions, energy usage, and waste generation 
              across the logistics network. Data visualization helps stakeholders make informed 
              decisions about route optimization and green initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-5 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
              <Leaf className="w-6 h-6 text-green-700 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Data Analytics</h3>
              <p className="text-sm text-gray-700">
                Real-time dashboards visualize environmental metrics, helping identify inefficient 
                routes and opportunities for improvement across the network.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg border border-yellow-200">
              <Recycle className="w-6 h-6 text-yellow-700 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Waste Reduction</h3>
              <p className="text-sm text-gray-700">
                Track packaging waste and promote reusable containers. Monitor product expiry to 
                minimize food waste in rural retail operations.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
              <Award className="w-6 h-6 text-purple-700 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Green Incentives</h3>
              <p className="text-sm text-gray-700">
                Gamification system rewards suppliers and operators who adopt sustainable practices, 
                creating a culture of environmental responsibility.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Measurement Framework</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-green-700 mr-2">•</span>
                <span><strong>Emissions Calculation:</strong> Distance × vehicle type × load factor using standard CO₂ coefficients</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-700 mr-2">•</span>
                <span><strong>Energy Monitoring:</strong> Solar generation vs grid consumption tracked at kiosks and hubs</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-700 mr-2">•</span>
                <span><strong>Visualization:</strong> Recharts library for interactive carbon footprint graphs</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-700 mr-2">•</span>
                <span><strong>Reporting:</strong> Monthly sustainability reports for stakeholders and investors</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SustainabilityPage() {
  return (
    <PrivateRoute>
      <SustainabilityContent />
    </PrivateRoute>
  )
}