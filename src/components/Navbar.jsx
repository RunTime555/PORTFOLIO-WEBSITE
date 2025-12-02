import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { useAuth } from '../context/AuthContext'
import { motion } from 'framer-motion'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const { user } = useAuth()
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400">
            Rehmet Muhammed
          </Link>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 items-center">
            <li>
              <Link 
                to="/" 
                className={`hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${
                  isActive('/') ? 'text-primary-600 dark:text-primary-400 font-semibold' : ''
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${
                  isActive('/about') ? 'text-primary-600 dark:text-primary-400 font-semibold' : ''
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className={`hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${
                  isActive('/projects') ? 'text-primary-600 dark:text-primary-400 font-semibold' : ''
                }`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className={`hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${
                  isActive('/services') ? 'text-primary-600 dark:text-primary-400 font-semibold' : ''
                }`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${
                  isActive('/contact') ? 'text-primary-600 dark:text-primary-400 font-semibold' : ''
                }`}
              >
                Contact
              </Link>
            </li>
            {user && (
              <li>
                <Link 
                  to="/admin/dashboard" 
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Dashboard
                </Link>
              </li>
            )}
            <li>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? '☀️' : '🌙'}
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700"
          >
            <ul className="flex flex-col space-y-4">
              <li>
                <Link 
                  to="/" 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${
                    isActive('/') ? 'text-primary-600 dark:text-primary-400 font-semibold' : ''
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${
                    isActive('/about') ? 'text-primary-600 dark:text-primary-400 font-semibold' : ''
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${
                    isActive('/projects') ? 'text-primary-600 dark:text-primary-400 font-semibold' : ''
                  }`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${
                    isActive('/services') ? 'text-primary-600 dark:text-primary-400 font-semibold' : ''
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${
                    isActive('/contact') ? 'text-primary-600 dark:text-primary-400 font-semibold' : ''
                  }`}
                >
                  Contact
                </Link>
              </li>
              {user && (
                <li>
                  <Link 
                    to="/admin/dashboard" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-center"
                  >
                    Dashboard
                  </Link>
                </li>
              )}
              <li>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors w-full text-left"
                >
                  {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
