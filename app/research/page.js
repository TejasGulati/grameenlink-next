'use client'

import { TrendingUp, Users, Target, Lightbulb, Code, Layers } from 'lucide-react'

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center mb-6">
            <Lightbulb className="w-8 h-8 text-blue-600 mr-3" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Research & Innovation</h1>
              <p className="text-sm text-gray-500 mt-1">Conceptual technology demonstration</p>
            </div>
          </div>

          <div className="prose prose-sm max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed">
              GrameenLink is a conceptual platform demonstrating how modern technologies can 
              address rural logistics challenges. This portfolio project explores the integration 
              of blockchain, AI, IoT, and autonomous systems to create transparent, efficient, 
              and sustainable supply chains for underserved communities.
            </p>
          </div>

          {/* Key Concepts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="p-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
              <TrendingUp className="w-6 h-6 text-blue-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cost Efficiency</h3>
              <p className="text-sm text-gray-700">
                Optimized routing and automated processes reduce operational overhead in rural delivery networks.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
              <Users className="w-6 h-6 text-green-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Rural Accessibility</h3>
              <p className="text-sm text-gray-700">
                Technology solutions designed for low-connectivity, infrastructure-limited environments.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
              <Target className="w-6 h-6 text-purple-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Scalability</h3>
              <p className="text-sm text-gray-700">
                Modular architecture enables gradual expansion across different rural regions.
              </p>
            </div>
          </div>

          {/* Innovation Areas */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Layers className="w-6 h-6 mr-2 text-blue-600" />
              Six Technology Modules
            </h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold text-sm">1.</span>
                <div>
                  <span className="text-gray-900 font-semibold text-sm">Blockchain Transparency</span>
                  <p className="text-gray-700 text-xs">Immutable transaction records for supply chain accountability</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold text-sm">2.</span>
                <div>
                  <span className="text-gray-900 font-semibold text-sm">Autonomous Drones</span>
                  <p className="text-gray-700 text-xs">Last-mile delivery optimization for remote areas</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold text-sm">3.</span>
                <div>
                  <span className="text-gray-900 font-semibold text-sm">Smart Inventory</span>
                  <p className="text-gray-700 text-xs">AI-powered demand forecasting and stock management</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold text-sm">4.</span>
                <div>
                  <span className="text-gray-900 font-semibold text-sm">Mobile Retail IoT</span>
                  <p className="text-gray-700 text-xs">GPS-tracked vans with offline-capable inventory systems</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold text-sm">5.</span>
                <div>
                  <span className="text-gray-900 font-semibold text-sm">Solar Kiosks</span>
                  <p className="text-gray-700 text-xs">Community digital hubs with renewable energy infrastructure</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold text-sm">6.</span>
                <div>
                  <span className="text-gray-900 font-semibold text-sm">Sustainability Tracking</span>
                  <p className="text-gray-700 text-xs">Environmental impact monitoring and carbon analytics</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 border border-gray-200 rounded-lg bg-gray-50">
              <div className="flex items-center mb-3">
                <Code className="w-5 h-5 text-gray-700 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">Technology Stack</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Frontend:</strong> Next.js 14, React 18, Tailwind CSS</p>
                <p><strong>Animation:</strong> Framer Motion</p>
                <p><strong>Icons:</strong> Lucide React</p>
                <p><strong>Authentication:</strong> JWT pattern (mock)</p>
                <p><strong>Deployment:</strong> Vercel-ready</p>
              </div>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg bg-gray-50">
              <div className="flex items-center mb-3">
                <Target className="w-5 h-5 text-gray-700 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">Design Principles</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Mobile-First:</strong> Responsive across all devices</p>
                <p><strong>Offline-Ready:</strong> Progressive enhancement patterns</p>
                <p><strong>Rural UX:</strong> Simple navigation, clear feedback</p>
                <p><strong>Clean Code:</strong> KISS & SOLID principles</p>
                <p><strong>Modular:</strong> Component-based architecture</p>
              </div>
            </div>
          </div>

          {/* Project Context */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Portfolio Context</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>This is a <strong>demonstration project</strong>, not a production application</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>All data and statistics are <strong>conceptual projections</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>Authentication is <strong>mock implementation</strong> for demonstration purposes</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>Technology modules showcase <strong>architectural thinking</strong>, not deployed systems</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}