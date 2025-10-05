'use client'

import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { 
  Database, Zap, Globe, Sparkles, Award, BookOpen,
  UserPlus, LogIn, TrendingUp
} from 'lucide-react'

export default function HomePage() {
  const { isAuthenticated } = useAuth()

  const TECH_MODULES = [
    { 
      title: "Blockchain Transparency", 
      description: "Immutable supply chain tracking with cryptographic verification", 
      icon: <Database className="w-5 h-5" />, 
      path: "/blockchain", 
    },
    { 
      title: "Autonomous Drone Network", 
      description: "Last-mile delivery optimization for remote villages", 
      icon: <Zap className="w-5 h-5" />, 
      path: "/drone", 
    },
    { 
      title: "Smart Inventory System", 
      description: "AI-powered demand forecasting and stock management", 
      icon: <BookOpen className="w-5 h-5" />, 
      path: "/inventory", 
    },
    { 
      title: "Mobile Retail IoT", 
      description: "GPS-tracked vans with offline-capable inventory", 
      icon: <Globe className="w-5 h-5" />, 
      path: "/mobile-retail", 
    },
    { 
      title: "Solar-Powered Kiosks", 
      description: "Community digital hubs with renewable infrastructure", 
      icon: <Sparkles className="w-5 h-5" />, 
      path: "/kiosks", 
    },
    { 
      title: "Sustainability Dashboard", 
      description: "Environmental impact and carbon footprint tracking", 
      icon: <Award className="w-5 h-5" />, 
      path: "/sustainability", 
    }
  ]

  return (
    <>
      {/* HERO SECTION */}
      <section className="pt-24 pb-16 md:pt-28 md:pb-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-medium mb-4">
              <TrendingUp className="w-3 h-3 mr-1" />
              Transforming Rural Supply Chains
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-green-700">GrameenLink</span>
              <br />
              Connecting Rural India
            </h1>
            
            <p className="text-lg text-gray-700 mt-4 leading-relaxed">
              Revolutionary platform bridging inefficiencies in rural product distribution. 
              We combine blockchain transparency, AI-driven logistics, and autonomous systems 
              to ensure fair pricing, improved availability, and sustainable supply chains 
              for remote communities across India.
            </p>
            
            <div className="mt-6 flex flex-wrap gap-4">
              <Link 
                href="/technology" 
                className="px-6 py-3 bg-green-700 text-white rounded-md hover:bg-green-800 transition font-medium"
              >
                Explore Technology
              </Link>
              {!isAuthenticated && (
                <Link 
                  href="/login" 
                  className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition font-medium"
                >
                  Get Started
                </Link>
              )}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg overflow-hidden shadow-lg">
            <video
              className="w-full h-full object-cover rounded-lg"
              src="/animation.mp4"
              autoPlay
              loop
              muted
              playsInline
              poster="/logo-1.png"
            />
          </div>
        </div>
      </section>

      {/* INNOVATION SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <video
              className="w-full h-full object-cover"
              src="/impact-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              poster="/logo-1.png"
            />
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Reimagining Rural Logistics
            </h2>
            <p className="text-gray-700 text-base mb-6 leading-relaxed">
              GrameenLink leverages cutting-edge technology to solve critical challenges in 
              rural supply chain management. Our integrated platform connects retailers, 
              distributors, and consumers through hyperlocal nodes managed by trained 
              micro-entrepreneurs, ensuring efficient product flow to the last mile.
            </p>

            <div className="space-y-3">
              <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">End-to-End Visibility</h4>
                  <p className="text-gray-600 text-xs">Real-time tracking from supplier to customer with blockchain verification</p>
                </div>
              </div>
              
              <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Predictive Intelligence</h4>
                  <p className="text-gray-600 text-xs">Machine learning algorithms optimize inventory and reduce waste</p>
                </div>
              </div>
              
              <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Offline-First Architecture</h4>
                  <p className="text-gray-600 text-xs">Mobile-optimized for low-bandwidth rural environments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY MODULES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-800">
              Integrated Technology Stack
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Six interconnected modules working together to create a transparent, 
              efficient, and sustainable supply chain ecosystem for rural India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TECH_MODULES.map((module) => (
              <div key={module.path} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-2 rounded-md bg-gradient-to-br from-green-50 to-green-100 text-green-600 mr-3">
                      {module.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{module.title}</h3>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{module.description}</p>
                <Link 
                  href={module.path} 
                  className="inline-flex items-center text-green-600 font-medium hover:text-green-700 text-xs"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      {!isAuthenticated && (
        <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-3 text-gray-800">
              Ready to Transform Rural Logistics?
            </h2>
            <p className="text-base text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our platform to access real-time analytics, automated inventory management, 
              and transparent supply chain tracking. Start optimizing your rural distribution network today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/register" 
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-medium hover:from-green-700 hover:to-teal-700 transition flex items-center"
              >
                <UserPlus className="mr-2 h-5 w-5" />
                Create Account
              </Link>
              <Link 
                href="/login" 
                className="px-8 py-4 bg-white text-gray-800 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition flex items-center"
              >
                <LogIn className="mr-2 h-5 w-5" />
                Sign In
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  )
}