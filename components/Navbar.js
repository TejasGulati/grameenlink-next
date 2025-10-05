'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, X, Layers, Shield, 
  BookOpen, Database, Zap, Globe, Sparkles, Award,
  LogOut, ChevronDown
} from 'lucide-react'
import { useAuth } from '@/context/AuthContext'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()
  
  const pathname = usePathname()
  const menuRef = useRef(null)
  const userMenuRef = useRef(null)

  const getNavItems = () => {
    const modules = [
      { id: 'blockchain', name: "Blockchain", path: "/blockchain", icon: <Database size={16} className="mr-2" />, description: "Supply chain transparency" },
      { id: 'drones', name: "Drone Network", path: "/drone", icon: <Zap size={16} className="mr-2" />, description: "Autonomous delivery" },
      { id: 'inventory', name: "Smart Inventory", path: "/inventory", icon: <BookOpen size={16} className="mr-2" />, description: "AI-powered tracking" },
      { id: 'mobile', name: "Mobile Retail", path: "/mobile-retail", icon: <Globe size={16} className="mr-2" />, description: "IoT retail vans" },
      { id: 'kiosks', name: "Solar Kiosks", path: "/kiosks", icon: <Sparkles size={16} className="mr-2" />, description: "Offline hubs" },
      { id: 'sustainability', name: "Sustainability", path: "/sustainability", icon: <Award size={16} className="mr-2" />, description: "Carbon tracking" }
    ]

    if (!isAuthenticated) {
      return [
        { 
          id: 'solutions',
          name: "Solutions", 
          icon: <Layers size={18} />,
          subItems: modules
        },
        { id: 'technology', name: "Technology", path: "/technology", icon: <Shield size={18} /> }
      ]
    }

    return [
      { id: 'modules', name: "Modules", icon: <Layers size={18} />, subItems: modules },
      { id: 'technology', name: "Technology", path: "/technology", icon: <Shield size={18} /> }
    ]
  }

  const navItems = getNavItems()

  const getUserInitials = () => {
    if (!user?.name) return 'U'
    const names = user.name.split(' ')
    return names.length > 1 ? `${names[0][0]}${names[names.length - 1][0]}` : names[0][0]
  }

  useEffect(() => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false)
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target) && isUserMenuOpen) {
        setIsUserMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen, isUserMenuOpen])

  const handleLogout = () => {
    logout()
    setIsUserMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xs' : 'bg-white/90 backdrop-blur-sm'} transition-all duration-200 border-b border-gray-200/50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src="/logo-1.png" 
              alt="GrameenLink Logo" 
              className="w-8 h-8 object-contain rounded-md"
            />
            <span className="text-lg font-bold text-gray-800">
              Grameen<span className="text-green-600">Link</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-2">
            <NavLinks navItems={navItems} activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} />
            
            {isAuthenticated ? (
              <div ref={userMenuRef} className="relative">
                <button onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-50/50">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-600 to-teal-600 flex items-center justify-center text-white font-medium">
                    {getUserInitials()}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{user?.name || 'User'}</span>
                  <ChevronDown size={16} className={`transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} className="absolute right-0 z-50 mt-1 w-48 bg-white rounded-md shadow-md border border-gray-200/80">
                      <div className="py-1">
                        <div className="px-4 py-2 text-xs text-gray-500 border-b border-gray-100">
                          {user?.email}
                        </div>
                        <button onClick={handleLogout} className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          <LogOut className="mr-2 h-4 w-4" />Logout
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href="/login" className="px-3 py-2 text-sm text-gray-700 hover:text-green-600 rounded-md">Login</Link>
                <Link href="/register" className="px-3 py-2 text-sm text-gray-700 hover:text-green-600 rounded-md">Register</Link>
              </div>
            )}
          </div>

          <div className="flex lg:hidden items-center space-x-2">
            {!isAuthenticated && (
              <div className="flex items-center mr-2">
                <Link href="/login" className="px-3 py-1.5 text-xs text-gray-700">Login</Link>
                <Link href="/register" className="px-3 py-1.5 text-xs text-gray-700">Register</Link>
              </div>
            )}
            {isAuthenticated && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-600 to-teal-600 flex items-center justify-center text-white font-medium text-sm mr-2">
                {getUserInitials()}
              </div>
            )}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-gray-700 hover:bg-gray-100/50">
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-white/95 backdrop-blur-sm shadow-md rounded-b-md border-t border-gray-200/50">
              <NavLinks navItems={navItems} isMobile activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} />
              {isAuthenticated && (
                <div className="px-4 py-3 border-t border-gray-200/50">
                  <button onClick={handleLogout} className="w-full flex items-center justify-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md">
                    <LogOut className="mr-2 h-4 w-4" />Logout
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

function NavLinks({ navItems, isMobile, activeDropdown, setActiveDropdown }) {
  return (
    <div className={isMobile ? 'space-y-2 px-4 py-4' : 'flex items-center space-x-3'}>
      {navItems.map((item) => (
        <div key={item.id} className={isMobile ? 'border-b border-gray-100/50 last:border-none pb-1' : 'relative group'}>
          {item.subItems ? (
            <>
              {!isMobile && (
                <div className="relative">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.id ? null : item.id)}
                    className="flex items-center px-3 py-2 text-gray-700 text-sm font-medium rounded-md hover:text-green-600 transition-colors duration-150"
                  >
                    {item.icon && <span className="mr-2">{item.icon}</span>}
                    <span>{item.name}</span>
                  </button>

                  <AnimatePresence>
                    {activeDropdown === item.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 z-50 mt-1 bg-white rounded-md shadow-lg border border-gray-200/80 w-64"
                      >
                        <div className="p-2">
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.id}
                              href={sub.path}
                              className="flex items-start px-4 py-3 hover:bg-green-50 rounded-md transition-colors duration-150"
                            >
                              <span className="text-green-600 mr-2">{sub.icon}</span>
                              <div>
                                <div className="font-medium text-gray-900 text-sm">{sub.name}</div>
                                <div className="text-gray-500 text-xs">{sub.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {isMobile && (
                <div>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.id ? null : item.id)}
                    className="flex items-center justify-between w-full py-3 px-3 text-gray-700 text-sm font-medium rounded-md hover:text-green-600 transition-colors duration-150"
                  >
                    <div className="flex items-center">
                      {item.icon}
                      <span className="ml-2">{item.name}</span>
                    </div>
                  </button>

                  <AnimatePresence>
                    {activeDropdown === item.id && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4 overflow-hidden space-y-1"
                      >
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.id}
                            href={sub.path}
                            className="flex items-center py-2 px-3 text-sm text-gray-700 hover:bg-green-50 rounded-md transition-colors duration-150"
                          >
                            {sub.icon}
                            <span className="ml-2">{sub.name}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </>
          ) : (
            <Link
              href={item.path}
              className={`flex items-center px-3 py-2 text-gray-700 hover:text-green-600 text-sm font-medium rounded-md transition-colors duration-150 ${isMobile ? 'w-full' : ''}`}
            >
              {item.icon && <span className="mr-2">{item.icon}</span>}
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </div>
  )
}