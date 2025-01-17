'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Terminal, Server, Activity } from 'lucide-react'

export default function TechDemo() {
  const [activeTab, setActiveTab] = useState('cloud')

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Experience Our Technology
          </h2>

          <Tabs defaultValue="cloud" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="cloud">Cloud</TabsTrigger>
              <TabsTrigger value="ai">AI</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="cloud">
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Server className="h-8 w-8 text-[#45d1e8]" />
                  <div>
                    <h3 className="font-bold text-lg">Cloud Infrastructure</h3>
                    <p className="text-sm text-gray-500">Scalable cloud solutions</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>CPU Usage</span>
                    <span>28%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                    <div className="bg-[#45d1e8] h-2 rounded-full" style={{ width: '28%' }}></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Memory</span>
                    <span>45%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                    <div className="bg-[#45d1e8] h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="ai">
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Terminal className="h-8 w-8 text-[#45d1e8]" />
                  <div>
                    <h3 className="font-bold text-lg">AI Processing</h3>
                    <p className="text-sm text-gray-500">Real-time AI operations</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Model Performance</span>
                    <span>92%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                    <div className="bg-[#45d1e8] h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="analytics">
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Activity className="h-8 w-8 text-[#45d1e8]" />
                  <div>
                    <h3 className="font-bold text-lg">Data Analytics</h3>
                    <p className="text-sm text-gray-500">Real-time insights</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Processing Speed</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                    <div className="bg-[#45d1e8] h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

