import Link from 'next/link'
import { Twitter, Facebook, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-[#45d1e8]">
              Wintara Labs
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xs">
              Pioneering research in Text to Speech, AI Voice Generator, and more
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#45d1e8]">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#45d1e8]">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#45d1e8]">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#45d1e8]">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Product
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#45d1e8]">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#45d1e8]">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#45d1e8]">
                  API
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#45d1e8]">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#45d1e8]">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#45d1e8]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#45d1e8]">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#45d1e8]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} Wintara Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

