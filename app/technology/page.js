'use client'

import { TrendingUp, Users, Target, Shield, Code, Layers, Zap, CheckCircle } from 'lucide-react'

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center mb-6">
            <Shield className="w-8 h-8 text-blue-600 mr-3" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Platform Technology</h1>
              <p className="text-sm text-gray-500 mt-1">Advanced infrastructure for rural logistics</p>
            </div>
          </div>

          <div className="prose prose-sm max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed">
              GrameenLink addresses critical inefficiencies in rural supply chains through an 
              integrated technology platform. By combining blockchain transparency, artificial 
              intelligence, IoT sensors, and autonomous systems, we create seamless product 
              flow from urban distributors to rural consumers while ensuring fair pricing and 
              sustainable operations.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="p-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
              <TrendingUp className="w-6 h-6 text-blue-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cost Reduction</h3>
              <p className="text-sm text-gray-700">
                Optimized routing and demand forecasting reduce operational overhead by up to 50% 
                in last-mile delivery networks.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
              <Users className="w-6 h-6 text-green-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Rural Access</h3>
              <p className="text-sm text-gray-700">
                Mobile-first design and offline capabilities ensure reliable performance even 
                in low-connectivity environments.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
              <Target className="w-6 h-6 text-purple-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Scalable Growth</h3>
              <p className="text-sm text-gray-700">
                Modular architecture enables rapid expansion across different regions with 
                minimal infrastructure investment.
              </p>
            </div>
          </div>

          {/* Technology Modules */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Layers className="w-6 h-6 mr-2 text-blue-600" />
              Six Integrated Modules
            </h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold text-sm">1.</span>
                <div>
                  <span className="text-gray-900 font-semibold text-sm">Blockchain Transparency</span>
                  <p className="text-gray-700 text-xs">Immutable ledger technology ensures complete supply chain visibility and prevents counterfeit products</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold text-sm">2.</span>
                <div>
                  <span className="text-gray-900 font-semibold text-sm">Autonomous Drone Delivery</span>
                  <p className="text-gray-700 text-xs">Solar-powered drones deliver time-sensitive supplies to remote villages within minutes</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold text-sm">3.</span>
                <div>
                  <span className="text-gray-900 font-semibold text-sm">Smart Inventory Management</span>
                  <p className="text-gray-700 text-xs">AI algorithms predict demand patterns and automate reordering to prevent stockouts</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold text-sm">4.</span>
                <div>
                  <span className="text-gray-900 font-semibold text-sm">Mobile Retail IoT</span>
                  <p className="text-gray-700 text-xs">GPS-tracked vans with real-time inventory sync bring commerce directly to villages</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold text-sm">5.</span>
                <div>
                  <span className="text-gray-900 font-semibold text-sm">Solar-Powered Kiosks</span>
                  <p className="text-gray-700 text-xs">Off-grid digital hubs serve as community access points for e-commerce and services</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold text-sm">6.</span>
                <div>
                  <span className="text-gray-900 font-semibold text-sm">Sustainability Tracking</span>
                  <p className="text-gray-700 text-xs">Real-time carbon footprint monitoring drives eco-friendly logistics decisions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Architecture */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 border border-gray-200 rounded-lg bg-gray-50">
              <div className="flex items-center mb-3">
                <Code className="w-5 h-5 text-gray-700 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">Core Infrastructure</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Distributed Architecture:</strong> Microservices for independent scaling</p>
                <p><strong>Edge Computing:</strong> Local processing at village nodes</p>
                <p><strong>Progressive Web Apps:</strong> Cross-platform mobile compatibility</p>
                <p><strong>Blockchain Layer:</strong> Hyperledger Fabric for transparency</p>
                <p><strong>Cloud Backend:</strong> High-availability infrastructure</p>
              </div>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg bg-gray-50">
              <div className="flex items-center mb-3">
                <Zap className="w-5 h-5 text-gray-700 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">Key Features</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Offline-First:</strong> Works seamlessly without connectivity</p>
                <p><strong>Real-Time Sync:</strong> Automatic data synchronization</p>
                <p><strong>Multi-Language:</strong> Support for 12+ regional languages</p>
                <p><strong>Low Bandwidth:</strong> Optimized for 2G/3G networks</p>
                <p><strong>Voice Interface:</strong> Accessibility for low-literacy users</p>
              </div>
            </div>
          </div>

          {/* Implementation Highlights */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
              Platform Capabilities
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>End-to-end product traceability with QR code verification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Predictive analytics for seasonal demand fluctuations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Automated payment settlement via smart contracts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Real-time weather integration for delivery planning</span>
                </li>
              </ul>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Digital wallet integration for cashless transactions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Carbon emissions tracking and offset programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Multi-stakeholder dashboard for full visibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Fraud prevention through cryptographic validation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}