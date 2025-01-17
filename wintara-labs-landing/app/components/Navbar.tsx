'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-[#45d1e8]">
              Wintara Labs
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#45d1e8]">
              AI AUDIO
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#45d1e8]">
              SOLUTIONS
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#45d1e8]">
              API
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#45d1e8]">
              PRICING
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#45d1e8]">
              COMPANY
            </Link>
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-[#45d1e8]"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Button variant="outline" className="mr-2">
              LOG IN
            </Button>
            <Button className="bg-[#45d1e8] hover:bg-[#45d1e8]/90">
              TRY FOR FREE
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-[#45d1e8] mr-2"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-[#45d1e8]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="#" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-[#45d1e8]">
                AI AUDIO
              </Link>
              <Link href="#" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-[#45d1e8]">
                SOLUTIONS
              </Link>
              <Link href="#" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-[#45d1e8]">
                API
              </Link>
              <Link href="#" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-[#45d1e8]">
                PRICING
              </Link>
              <Link href="#" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-[#45d1e8]">
                COMPANY
              </Link>
              <div className="flex flex-col space-y-2 px-3 py-2">
                <Button variant="outline">
                  LOG IN
                </Button>
                <Button className="bg-[#45d1e8] hover:bg-[#45d1e8]/90">
                  TRY FOR FREE
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

