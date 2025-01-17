'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TypewriterEffect } from "../components/ui/typewriter-effect"
import { GithubGlobe } from "../components/ui/github-globe"
import { motion } from "framer-motion"

export default function Hero() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "the",
    },
    {
      text: "future",
    },
    {
      text: "with",
    },
    {
      text: "Wintara",
      className: "text-[#45d1e8]",
    },
    {
      text: "Labs.",
      className: "text-[#45d1e8]",
    },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <GithubGlobe />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Innovative tech solutions for the future
          </motion.h1>
          <div className="h-16 my-8">
            <TypewriterEffect words={words} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button className="bg-[#45d1e8] hover:bg-[#45d1e8]/90 text-white px-8 py-6 text-lg">
              GET STARTED FREE
            </Button>
          </motion.div>

          <motion.div 
            className="mt-16 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Badge variant="outline" className="text-sm py-2 px-4">
              🚀 CLOUD SOLUTIONS
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">
              🤖 AI INTEGRATION
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">
              💻 ENTERPRISE SOFTWARE
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">
              📊 DATA ANALYTICS
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">
              🔒 CYBERSECURITY
            </Badge>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

