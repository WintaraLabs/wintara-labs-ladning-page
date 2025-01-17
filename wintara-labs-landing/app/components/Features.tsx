'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Cloud, Database, Shield, Cpu, Globe, Zap } from 'lucide-react'

const features = [
  {
    icon: <Cloud className="h-6 w-6 text-[#45d1e8]" />,
    title: "Cloud Infrastructure",
    description: "Scalable and secure cloud solutions for your enterprise needs"
  },
  {
    icon: <Database className="h-6 w-6 text-[#45d1e8]" />,
    title: "Data Management",
    description: "Advanced data solutions with real-time analytics and insights"
  },
  {
    icon: <Cpu className="h-6 w-6 text-[#45d1e8]" />,
    title: "AI Integration",
    description: "Cutting-edge AI solutions to automate and optimize operations"
  },
  {
    icon: <Zap className="h-6 w-6 text-[#45d1e8]" />,
    title: "High Performance",
    description: "Lightning-fast processing with optimized infrastructure"
  },
  {
    icon: <Shield className="h-6 w-6 text-[#45d1e8]" />,
    title: "Enterprise Security",
    description: "Military-grade security with advanced threat protection"
  },
  {
    icon: <Globe className="h-6 w-6 text-[#45d1e8]" />,
    title: "Global Scale",
    description: "Worldwide infrastructure with local presence"
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Advanced Features for Your Tech Needs
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Empowering your business with cutting-edge technology solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="border-2 border-gray-100 dark:border-gray-700 hover:border-[#45d1e8] dark:hover:border-[#45d1e8] transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    {feature.icon}
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

