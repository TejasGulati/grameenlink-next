'use client'

import PrivateRoute from '@/components/PrivateRoute'
import { Database, Shield, Link as LinkIcon, Clock } from 'lucide-react'

function BlockchainContent() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Database className="w-8 h-8 text-green-600 mr-3" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Blockchain Transparency</h1>
              <p className="text-sm text-gray-500 mt-1">Immutable supply chain tracking</p>
            </div>
          </div>

          <div className="prose prose-sm max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed">
              This module demonstrates how blockchain technology creates transparent, tamper-proof 
              records of transactions across the rural supply chain. Each product movement from 
              supplier to customer is recorded as an immutable ledger entry, ensuring accountability 
              and reducing fraud.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-5 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
              <Shield className="w-6 h-6 text-green-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fraud Prevention</h3>
              <p className="text-sm text-gray-700">
                Cryptographic verification ensures product authenticity and prevents counterfeit 
                goods from entering rural supply chains.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
              <LinkIcon className="w-6 h-6 text-blue-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Full Traceability</h3>
              <p className="text-sm text-gray-700">
                Track products from origin to delivery. Each stakeholder's action is logged, 
                creating complete supply chain visibility.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
              <Clock className="w-6 h-6 text-purple-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Instant Verification</h3>
              <p className="text-sm text-gray-700">
                Stakeholders can verify transaction history in real-time using distributed ledger 
                technology, even with limited connectivity.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
              <Database className="w-6 h-6 text-orange-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Contracts</h3>
              <p className="text-sm text-gray-700">
                Automated payment releases based on delivery confirmation, reducing manual 
                intervention and payment delays.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Implementation Approach</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Hyperledger Fabric:</strong> Permissioned blockchain suitable for consortium-based supply chains</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Offline Support:</strong> Local caching with sync protocols for rural connectivity challenges</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Mobile Integration:</strong> React Native apps for field agents to record transactions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>QR Verification:</strong> Simple product scanning for customers to verify authenticity</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BlockchainPage() {
  return (
    <PrivateRoute>
      <BlockchainContent />
    </PrivateRoute>
  )
}