'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, RotateCcw } from 'lucide-react'

export default function VoiceDemo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [text, setText] = useState("Try our voice generation technology with a sample text.")

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Experience Our Voice Technology
          </h2>

          <div className="space-y-6">
            <Textarea 
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="min-h-[120px]"
              placeholder="Enter text to convert to speech..."
            />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Speed
                </span>
                <span className="text-sm text-gray-500">1.0x</span>
              </div>
              <Slider 
                defaultValue={[1]} 
                max={2} 
                min={0.5} 
                step={0.1}
                className="w-full"
              />
            </div>

            <div className="flex justify-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <Button
                variant="outline"
                size="icon"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-[#45d1e8] rounded-full flex items-center justify-center text-white">
                    B
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">BRIAN</span>
                </div>
                <span className="text-sm text-gray-500">156/500</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                <div 
                  className="bg-[#45d1e8] h-2 rounded-full transition-all duration-300" 
                  style={{ width: '30%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

